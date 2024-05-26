/* eslint-disable no-param-reassign */
import CredentialsConfig from '@/src/shared/Configs/AuthProviders/CredentialsConfig';
import type { NextAuthOptions } from 'next-auth';

import NextAuth from 'next-auth/next';

export const authOption: NextAuthOptions = {
  providers: [CredentialsConfig],

  pages: {
    signIn: '/signin',
  },
  debug: process.env.NODE_ENV !== 'production',
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: 'jwt',
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
