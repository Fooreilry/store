import { revalidatePath } from 'next/cache';
import prisma from '../../../../src/shared/Configs/PrismaClient/PrismaClient';

export async function POST(request: Request) {
  const { name } = await request.json();
  console.log(name);

  if (!name) {
    return Response.json('Заполните все поля', { status: 400 });
  }

  try {
    const duplicateCategory = await prisma.category.findUnique({
      where: {
        name,
      },
    });

    if (duplicateCategory) {
      return Response.json('Такая категория уже существует', { status: 409 });
    }

    const newCategory = await prisma.category.create({
      data: {
        name,
      },
    });

    if (!newCategory) {
      return Response.json('Не удалось создать категорию', { status: 401 });
    }
    revalidatePath('/');

    return Response.json('Категория создана', { status: 201 });
  } catch (error) {
    return Response.json('Не удалось зарегистрироваться', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
