import prisma from '@/src/shared/Configs/PrismaClient/PrismaClient';
import { revalidatePath } from 'next/cache';

export async function PATCH(request: Request) {
  const { id, isAdmin, name, email, password, phone, image, address } = await request.json();

  if (!id) {
    return Response.json('Заполните все поля', { status: 400 });
  }

  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        isAdmin,
        name,
        email,
        password,
        phone,
        image,
        address,
      },
    });
    if (!user) {
      return Response.json('Пользователь не найден', { status: 404 });
    }

    revalidatePath('/');
    return Response.json(user, { status: 200 });
  } catch (error) {
    return Response.json(error.message, { status: 500 });
  }
}
