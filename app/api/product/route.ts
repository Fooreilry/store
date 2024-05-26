import { revalidatePath } from 'next/cache';
import prisma from '../../../src/shared/Configs/PrismaClient/PrismaClient';

export async function GET(request: Request) {
  const { searchParams } = await new URL(request.url);
  const id = searchParams.get('id');
  console.log(id);

  try {
    let product;
    if (id) {
      product = await prisma.product.findUnique({
        where: {
          id: +id,
        },
      });
      console.log(product);
    } else {
      product = await prisma.product.findMany();
    }
    if (!product) {
      return Response.json('Продукт не найден', { status: 404 });
    }
    revalidatePath('/');
    return Response.json(product, { status: 200 });
  } catch (error) {
    return Response.json(error.message, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
