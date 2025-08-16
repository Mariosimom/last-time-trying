// lib/auth.ts
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/db";
import bcrypt from "bcryptjs";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: "jwt" },
  pages: { signIn: "/admin/login" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (creds) => {
        if (!creds?.email || !creds?.password) return null;

        const email = creds.email as string;
        const password = creds.password as string;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.passwordHash) return null;

        const ok = await bcrypt.compare(password, user.passwordHash);
        if (!ok) return null;

        return { id: String(user.id), name: user.name ?? "Admin", email: user.email, role: user.role ?? "admin" } as any;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role ?? "admin";
      return token;
    },
    async session({ session, token }) {
      (session as any).user.role = (token as any).role ?? "admin";
      return session;
    }
  }
} satisfies NextAuthConfig;
