import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { db } from "@/lib/firebase/client";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, email, softwareType, details, sourcePage = "Main Website" } = body;

    // Validate required fields
    if (!name || !email || !details) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, or details)" },
        { status: 400 }
      );
    }

    const recipientEmail = "info@deltawavex.com";

    // 1. Asynchronously save to Firebase Firestore `contacts` collection
    addDoc(collection(db, "contacts"), {
      name,
      phone: phone || "Not provided",
      email,
      softwareType: softwareType || "General Inquiry",
      details,
      sourcePage,
      status: "new",
      createdAt: serverTimestamp(),
    }).catch((dbErr) => {
      console.warn("Firestore background save notice:", dbErr?.message || dbErr);
    });

    // 2. SMTP & Email Dispatch Setup
    const smtpHost = process.env.SMTP_HOST || "smtp.hostinger.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER || "info@deltawavex.com";
    const smtpPass = process.env.SMTP_PASS;

    const emailSubject = `🚀 New Project Inquiry from ${name} (${softwareType || "General"})`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #0f172a; padding: 30px; color: #ffffff;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 12px; padding: 24px; border: 1px solid #334155;">
          <h2 style="color: #38bdf8; margin-top: 0;">🚀 New Project Inquiry on DeltaWaveX</h2>
          <p style="color: #94a3b8; font-size: 14px;">A new form submission was received from <strong>${sourcePage}</strong>.</p>
          
          <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;" />
          
          <table style="width: 100%; font-size: 14px; color: #e2e8f0; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; width: 140px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0; font-weight: bold; color: #ffffff;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Email Address:</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Phone Number:</strong></td>
              <td style="padding: 8px 0; color: #ffffff;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Software Type:</strong></td>
              <td style="padding: 8px 0; color: #34d399; font-weight: bold;">${softwareType || "General Inquiry"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; background-color: #0f172a; padding: 16px; border-radius: 8px; border: 1px solid #334155;">
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Project Requirements / Message:</p>
            <p style="color: #f8fafc; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${details}</p>
          </div>

          <div style="margin-top: 24px; font-size: 12px; color: #64748b; text-align: center;">
            Sent to <a href="mailto:${recipientEmail}" style="color: #38bdf8;">${recipientEmail}</a> from DeltaWaveX contact engine.
          </div>
        </div>
      </div>
    `;

    if (smtpPass && smtpPass.trim() !== "") {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          tls: {
            rejectUnauthorized: false,
          },
          connectionTimeout: 10000,
          socketTimeout: 10000,
        });

        await transporter.sendMail({
          from: `"DeltaWaveX Website" <${smtpUser}>`,
          replyTo: email,
          to: recipientEmail,
          subject: emailSubject,
          html: htmlContent,
        });

        console.log(`✅ EMAIL SENT via Hostinger SMTP to ${recipientEmail}`);
      } catch (mailErr: unknown) {
        const message = mailErr instanceof Error ? mailErr.message : String(mailErr);
        console.error("❌ Hostinger SMTP send error:", message);
      }
    } else {
      console.log(`⚠️ SMTP_PASS is empty in .env.local. Logged lead for ${recipientEmail}:`, {
        name,
        email,
        phone,
        softwareType,
        details,
      });
    }

    return NextResponse.json({
      success: true,
      message: `Inquiry received. Notification target: ${recipientEmail}`,
    });
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
