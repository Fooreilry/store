import prisma from '../../../../src/shared/Configs/PrismaClient/PrismaClient';

export async function POST(request: Request) {
  const { name, categoryId, description, img, characteristics, rating, price, isActive } = await request.json();
  console.log(name, categoryId, description, img, characteristics, rating, price, isActive);

  if (!name || !categoryId || !description || !img || !characteristics || !price) {
    return Response.json('Заполните все поля', { status: 400 });
  }

  try {
    const existingCategory = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!existingCategory) {
      return Response.json('Такой категории нету', { status: 404 });
    }

    const newProduct = await prisma.product.create({
      data: {
        name,
        categoryId,
        description,
        img,
        characteristics,
        rating: rating ?? 0.0,
        price,
        isActive: isActive ?? true,
        createDate: new Date(),
      },
    });

    if (!newProduct) {
      return Response.json('Не удалось создать продукт', { status: 401 });
    }

    return Response.json('Продукт создан', { status: 201 });
  } catch (error) {
    return Response.json('Не удалось создать продукт', { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
