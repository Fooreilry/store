import { revalidatePath } from 'next/cache';
import prisma from '../../../../src/shared/Configs/PrismaClient/PrismaClient';

export async function POST(request: Request) {
  const { userId, productId, rating, text } = await request.json();
  console.log(userId, productId, rating, text);

  if (!userId || !productId) {
    return Response.json('Заполните все поля', { status: 400 });
  }

  try {
    const newReview = await prisma.review.create({
      data: {
        userId,
        productId,
        rating,
        text,
      },
    });

    if (!newReview) {
      return Response.json('Произошла ошибка', { status: 401 });
    }

    revalidatePath('/');
    return Response.json('Вы оставили отзыв', { status: 201 });
  } catch (error) {
    return Response.json(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
