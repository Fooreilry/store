import prisma from '../../../src/shared/Configs/PrismaClient/PrismaClient';

export async function GET(request: Request) {
  const { searchParams } = await new URL(request.url);
  const id = searchParams.get('id');
  console.log(id);

  try {
    let news;
    if (id) {
      news = await prisma.news.findUnique({
        where: {
          id: +id,
        },
      });
      console.log(news);
    } else {
      news = await prisma.news.findMany();
    }
    if (!news) {
      return Response.json('Новость не найдена', { status: 404 });
    }
    return Response.json(news, { status: 200 });
  } catch (error) {
    return Response.json(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
