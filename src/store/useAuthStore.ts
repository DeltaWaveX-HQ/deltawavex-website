import { create } from 'zustand';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '@/lib/firebase/client';
import { doc, getDoc } from 'firebase/firestore';

interface AuthState {
  user: User | null;
  role: 'Super Admin' | 'Admin' | 'Editor' | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setRole: (role: 'Super Admin' | 'Admin' | 'Editor' | null) => void;
  logout: () => Promise<void>;
  initializeAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  role: null,
  loading: true,
  setUser: (user) => set({ user }),
  setRole: (role) => set({ role }),
  logout: async () => {
    await signOut(auth);
    set({ user: null, role: null });
  },
  initializeAuth: () => {
    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        set({ user: currentUser });
        // Fetch role from Firestore
        try {
          const userDoc = await getDoc(doc(db, 'users', currentUser.uid));
          if (userDoc.exists()) {
            set({ role: userDoc.data().role });
          } else {
            set({ role: null });
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          set({ role: null });
        }
      } else {
        set({ user: null, role: null });
      }
      set({ loading: false });
    });
  },
}));
