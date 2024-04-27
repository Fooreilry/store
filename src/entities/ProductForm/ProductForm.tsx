'use client';

import { z } from 'zod';

import { ImageUpload } from '@/src/shared/ui/ImageUpload/ImageUpload';
import { Button } from '@/src/shared/ui/button';
import { Checkbox } from '@/src/shared/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/src/shared/ui/form';
import { Input } from '@/src/shared/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/src/shared/ui/select';
import { Textarea } from '@/src/shared/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

// id, name, img, price, isActive, description, category, createdAt, updatedAt, rating

const formSchema = z.object({
  name: z.string().min(2).max(50),
  img: z.union([z.string().trim(), z.null()]).default(null),
  price: z.string().min(2).max(50),
  description: z.string().min(2).max(200),
  category: z.string(),
  isActive: z.boolean().default(true),
});

export const ProductForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      img: null,
      price: '',
      description: '',
      category: undefined,
      isActive: true,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className=" grid grid-cols-12 gap-8 p-10 ">
        <div className="col-span-5 px-4">
          <FormField
            control={form.control}
            name="img"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <ImageUpload classNmae="w-full h-96" field={field as any} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="col-span-7 space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-lg">Название</FormLabel>
                <FormControl>
                  <Input className="text-base h-11" placeholder="Название" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-lg">Цена</FormLabel>
                <FormControl>
                  <Input className=" text-base h-11" placeholder="Цена" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel className=" text-lg">Категория</FormLabel>
                <FormControl className="">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="text-base h-11">
                        <SelectValue placeholder="Выберите категорию" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem className="text-base" value="1">
                        Ноутбуки
                      </SelectItem>
                      <SelectItem className="text-base" value="2">
                        Смартфоны
                      </SelectItem>
                      <SelectItem className="text-base" value="3">
                        Аксессуары
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
              <FormItem className="flex space-x-4">
                <FormLabel className=" text-lg">Товар активен</FormLabel>
                <FormControl>
                  <Checkbox className="h-5 w-5" checked={field.value} onCheckedChange={field.onChange} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg">Товар активен</FormLabel>
                <FormControl>
                  <Textarea placeholder="Описание" className="resize-none text-base h-28" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex space-x-4">
            <Button type="submit" className="w-full h-12 ml-auto flex text-lg">
              Создать
            </Button>
            <Button type="reset" variant="outline" className="w-full h-12 ml-auto flex text-lg">
              Отмена
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
};
