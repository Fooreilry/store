import bcrypt from 'bcrypt';
import Credentials from 'next-auth/providers/credentials';
import prisma from '../PrismaClient/PrismaClient';

const CredentialsConfig = Credentials({
  name: 'Credentials',
  credentials: {
    email: { label: 'Email', type: 'email' },
    password: { label: 'Password', type: 'password' },
  },

  async authorize(credentials) {
    if (!credentials?.password || !credentials?.email) {
      throw new Error('Введите логин или пароль');
    }

    const user = await prisma.user.findUnique({
      where: {
        email: credentials.email,
      },
    });

    if (!user || !user?.id || !user?.password) {
      throw new Error('Данные не валидны');
    }

    const correctPassword = await bcrypt.compare(credentials.password, user.password);

    if (!correctPassword) {
      throw new Error('Неверный пароль');
    }

    return user;
  },
});

export default CredentialsConfig;
