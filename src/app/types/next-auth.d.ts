import { type DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      address: string;
      img: string;
      phone: string;
      id: string;
      email: string;
      name: string;
      isAdmin: boolean;
    } & DefaultSession['user'];
  }
}
