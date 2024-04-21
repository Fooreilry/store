'use client';

import { Button } from '@/src/shared/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from '@/src/shared/ui/form';
import { Input } from '@/src/shared/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  username: z.string().trim().min(5, {
    message: 'Логин слишком маленький',
  }),
  password: z.string().trim().min(5, { message: 'Пароль слишком маленький' }),
});

export const FormLogin = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="text" placeholder="Логин" {...field} className="mt-4" />
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
