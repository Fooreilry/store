import prisma from '@/src/shared/Configs/PrismaClient/PrismaClient';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  const { title, text, user, image } = await request.json();

  if (!title || !text || !user) {
    return Response.json('Заполните все поля', { status: 400 });
  }

  try {
    const newNews = await prisma.news.create({
      data: {
        title,
        text,
        userId: user,
        image,
      },
    });

    if (!newNews) {
      return Response.json('Не удалось создать новость', { status: 401 });
    }

    revalidatePath('/');
    return Response.json('Новость создана', { status: 201 });
  } catch (error) {
    return Response.json(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
