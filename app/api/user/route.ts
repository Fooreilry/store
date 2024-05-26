import prisma from '../../../src/shared/Configs/PrismaClient/PrismaClient';

export async function GET(request: Request) {
  const { searchParams } = await new URL(request.url);
  const id = searchParams.get('id');
  console.log(id);

  try {
    let user;
    if (id) {
      user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      console.log(user);
    } else {
      user = await prisma.user.findMany();
    }
    if (!user) {
      return Response.json('Пользователь не найден', { status: 404 });
    }
    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
