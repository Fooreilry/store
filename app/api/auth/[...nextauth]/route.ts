import CredentialsConfig from '@/src/shared/Configs/AuthProviders/CredentialsConfig';
import NextAuth from 'next-auth/next';

const handler = NextAuth({
  providers: [CredentialsConfig],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/signin',
  },
  debug: process.env.NODE_ENV !== 'production',
});

export { handler as GET, handler as POST };
