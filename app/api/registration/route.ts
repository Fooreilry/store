import prisma from '@/src/shared/Configs/PrismaClient/PrismaClient';
import bcrypt from 'bcrypt';

interface User {
  email: string;
  password: string;
  username: string;
}

export async function POST(request: Request) {
  console.log(await request.bodyUsed);

  const { email, password, username }: User = await request.json();
  console.log(email, password, username);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      } as User,
    });
    console.log(user);

    if (!user) {
      return Response.json('Ошибка в базе данных', { status: 401 });
    }
    return Response.json('Вы успешно зарегистрировались', { status: 201 });
  } catch (error) {
    console.log(error.message);
    return Response.json('Не удалось зарегистрироваться', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
