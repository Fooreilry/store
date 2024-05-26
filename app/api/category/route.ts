import prisma from '../../../src/shared/Configs/PrismaClient/PrismaClient';

export async function GET(request: Request) {
  const { searchParams } = await new URL(request.url);
  const id = searchParams.get('id');
  console.log(id);

  try {
    let category;
    if (id) {
      category = await prisma.category.findUnique({
        where: {
          id: +id,
        },
      });
      console.log(category);
    } else {
      category = await prisma.category.findMany();
    }
    if (!category) {
      return Response.json('Категория не найдена', { status: 404 });
    }
    return Response.json(category, { status: 200 });
  } catch (error) {
    return Response.json(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
