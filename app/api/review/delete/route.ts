import { revalidatePath } from 'next/cache';
import prisma from '../../../../src/shared/Configs/PrismaClient/PrismaClient';

export async function DELETE(request: Request) {
  const { id } = await request.json();

  if (!id) {
    return Response.json('Ошибка в теле запроса', { status: 400 });
  }

  try {
    await prisma.review.delete({
      where: {
        id,
      },
    });
    revalidatePath('/');
    return Response.json('Отзыв удален', { status: 200 });
  } catch (error) {
    return Response.json(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
