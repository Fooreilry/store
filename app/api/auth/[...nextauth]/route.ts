/* eslint-disable no-param-reassign */
import CredentialsConfig from '@/src/shared/Configs/AuthProviders/CredentialsConfig';

import NextAuth from 'next-auth/next';

const handler = NextAuth({
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
});

export { handler as GET, handler as POST };
