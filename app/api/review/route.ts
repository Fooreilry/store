import prisma from '../../../src/shared/Configs/PrismaClient/PrismaClient';

export async function GET(request: Request) {
  const { searchParams } = await new URL(request.url);
  const id = searchParams.get('id');

  try {
    let review;
    if (id) {
      review = await prisma.review.findUnique({
        where: {
          id: +id,
        },
      });
    } else {
      review = await prisma.review.findMany();
    }
    if (!review) {
      return Response.json('Отзыв не найден', { status: 404 });
    }
    return Response.json(review, { status: 200 });
  } catch (error) {
    return Response.json(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
