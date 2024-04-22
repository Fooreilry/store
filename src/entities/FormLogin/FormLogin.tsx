'use client';

import { Button } from '@/src/shared/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/src/shared/ui/form';
import { Input } from '@/src/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email().trim().min(5, {
    message: 'Логин слишком маленький',
  }),
  password: z.string().trim().min(5, { message: 'Пароль слишком маленький' }),
});

export const FormLogin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { email, password } = values;
    const login = await signIn('credentials', { email, password, redirect: false });

    if (!login?.ok) {
      console.log(login?.error);
      return;
    }

    router.push('/');
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="Email" {...field} className="mt-4" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="Пароль" {...field} />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="text-center">
          <Button type="submit">Войти</Button>
        </div>
        <div className="text-center">
          <Button type="button" variant="outline" className="bg-white text-primary hover:bg-gray-200 font-bold">
            G
          </Button>
          <Button type="button" variant="outline" className="ml-5 bg-white text-primary hover:bg-gray-200 font-bold">
            VK
          </Button>
        </div>
      </form>
    </Form>
  );
};
