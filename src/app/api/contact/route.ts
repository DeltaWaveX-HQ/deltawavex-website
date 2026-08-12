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

    // Target recipient email
    const recipientEmail = "info@deltawavex.com";

    // 1. Save to Firebase Firestore `contacts` collection
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        phone: phone || "Not provided",
        email,
        softwareType: softwareType || "General Inquiry",
        details,
        sourcePage,
        status: "new",
        createdAt: serverTimestamp(),
      });
    } catch (dbErr) {
      console.warn("Firestore contact save notice:", dbErr);
    }

    // 2. Transporter configuration (supports SMTP env vars or Gmail/Resend/SendGrid SMTP)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 465,
      secure: Number(process.env.SMTP_PORT) === 465 || !process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER || process.env.EMAIL_USER,
        pass: process.env.SMTP_PASS || process.env.EMAIL_PASS,
      },
    });

    const emailSubject = `[New Project Inquiry] ${name} - ${softwareType || "General"}`;
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #0f172a; padding: 30px; color: #ffffff;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #1e293b; border-radius: 12px; padding: 24px; border: 1px solid #334155;">
          <h2 style="color: #38bdf8; margin-top: 0;">🚀 New Project Inquiry on DeltaWaveX</h2>
          <p style="color: #94a3b8; font-size: 14px;">A new form submission was submitted from <strong>${sourcePage}</strong>.</p>
          
          <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;" />
          
          <table style="width: 100%; font-size: 14px; color: #e2e8f0; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; width: 140px;"><strong>Client Name:</strong></td>
              <td style="padding: 8px 0; font-weight: bold;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Email Address:</strong></td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Phone Number:</strong></td>
              <td style="padding: 8px 0;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8;"><strong>Software Type:</strong></td>
              <td style="padding: 8px 0; color: #34d399; font-weight: bold;">${softwareType || "General Inquiry"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; background-color: #0f172a; padding: 16px; border-radius: 8px; border: 1px solid #334155;">
            <p style="color: #94a3b8; margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; tracking: 1px;">Project Requirements / Message:</p>
            <p style="color: #f8fafc; font-size: 14px; line-height: 1.6; white-space: pre-wrap; margin: 0;">${details}</p>
          </div>

          <div style="margin-top: 24px; font-size: 12px; color: #64748b; text-align: center;">
            Sent automatically to <a href="mailto:${recipientEmail}" style="color: #38bdf8;">${recipientEmail}</a> from DeltaWaveX website.
          </div>
        </div>
      </div>
    `;

    // Send email to info@deltawavex.com
    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: `"${name} via DeltaWaveX" <${process.env.SMTP_USER}>`,
        replyTo: email,
        to: recipientEmail,
        subject: emailSubject,
        html: htmlContent,
      });
    } else {
      console.log(`[Form Submission for ${recipientEmail}]`, {
        name,
        email,
        phone,
        softwareType,
        details,
        sourcePage,
      });
    }

    return NextResponse.json({
      success: true,
      message: `Form submitted successfully. Notification sent to ${recipientEmail}`,
    });
  } catch (error) {
    console.error("API /api/contact error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
