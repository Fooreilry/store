'use client';

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { Button } from '@/src/shared/ui/button';
import { Checkbox } from '@/src/shared/ui/checkbox';
import { Input } from '@/src/shared/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/src/shared/ui/popover';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/src/shared/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/src/shared/ui/table';
import { ArrowUpDown, EllipsisVertical } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export type Payment = {
  id: string;
  name: string;
  img: string;
  price: string;
  isActive: boolean;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number;
};
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row }) => {
      return (
        <Popover>
          <PopoverTrigger>
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
              <EllipsisVertical />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col items-center w-auto">
            <Button variant="ghost" className="h-8 ">
              Посмотреть
            </Button>
            <Button variant="ghost" className="h-8 text-red-600 hover:text-red-500">
              Удалить
            </Button>
          </PopoverContent>
        </Popover>
      );
    },
  },
  {
    accessorKey: 'id',
    header: 'id',
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=" text-base font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Название
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return <p className=" font-bold">{row.getValue<string>('name')}</p>;
    },
  },
  {
    accessorKey: 'img',
    header: 'Картинка',
    cell: ({ row }) => {
      return (
        <div className="bg-white rounded-lg flex justify-center items-center w-[110px] h-[110px]">
          <Image src={row.getValue<string>('img')} alt="Жаба" width={100} height={100} className="inline-block" />
        </div>
      );
    },
  },
  {
    accessorKey: 'price',
    header: 'Цена',
    cell: ({ row }) => {
      return `${row.getValue<string>('price')} ₽`;
    },
  },
  {
    accessorKey: 'isActive',
    header: 'Статус',
    cell: ({ row }) => {
      return <Checkbox checked={row.getValue<boolean>('isActive')} disabled className="data-[disabled]:opacity-100 " />;
    },
  },
  {
    accessorKey: 'category',
    header: 'Категория',
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=" text-base font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Дата создания
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.getValue<Date>('createdAt').toLocaleDateString();
    },
  },
  {
    accessorKey: 'updatedAt',
    header: 'Дата обновления',
    cell: ({ row }) => {
      return row.getValue<Date>('updatedAt').toLocaleDateString();
    },
  },
  {
    accessorKey: 'rating',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          className=" text-base font-bold"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Рейтинг
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return row.getValue<number>('rating');
    },
  },
];

export function ProductTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    state: {
      sorting,
      columnFilters,
    },
  });

  console.log(table.getColumn('isActive'));
  return (
    <>
      <div className="flex items-center py-4 space-x-4">
        <Input
          placeholder="Введите название товара"
          value={(table.getColumn('name')?.getFilterValue() as string) ?? ''}
          onChange={(event) => table.getColumn('name')?.setFilterValue(event.target.value)}
          className="max-w-sm"
        />
        <Select
          value={(table.getColumn('category')?.getFilterValue() as string) ?? undefined}
          onValueChange={(value) => table.getColumn('category')?.setFilterValue(value)}
        >
          <SelectTrigger className="w-full xs:w-[240px]">
            <SelectValue placeholder="Выберите категорию" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Категории</SelectLabel>
              <SelectItem value="1">Смартфоны и фототехника</SelectItem>
              <SelectItem value="2">Телевизоры и аксессуары</SelectItem>
              <SelectItem value="3">Консоли и видеоигры</SelectItem>
              <SelectItem value="4">Ноутбуки</SelectItem>
              <SelectItem value="5">Компьютеры и ПО</SelectItem>
              <SelectItem value="5">Периферия и аксессуары</SelectItem>
              <SelectItem value="5">Комплектующие для ПК</SelectItem>
              <SelectItem value="5">Сетевое оборудование</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select
          value={(table.getColumn('isActive')?.getFilterValue() as string) ?? undefined}
          //! fix this
          onValueChange={(value) => table.getColumn('isActive')?.setFilterValue(!!+value)}
        >
          <SelectTrigger className="w-full xs:w-[240px]">
            <SelectValue placeholder="Выберите статус" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="0">Не активен</SelectItem>
              <SelectItem value="1">Активен</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead className=" text-center text-base font-bold" key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className=" text-center text-base" key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  Результаты не найдены
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button variant="outline" size="sm" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </>
  );
}
