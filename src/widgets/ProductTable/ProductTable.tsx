'use client';

import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { Checkbox } from '@/src/shared/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/src/shared/ui/table';
import Image from 'next/image';

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
    accessorKey: 'id',
    header: 'id',
  },
  {
    accessorKey: 'name',
    header: 'Название',
  },
  {
    accessorKey: 'img',
    header: 'Картинка',
    cell: ({ row }) => {
      return <Image src={row.getValue<string>('img')} alt="Жаба" width={100} height={100} className="inline-block" />;
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
    header: 'Активен',
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
    header: 'Дата создания',
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
    header: 'Рейтинг',
    cell: ({ row }) => {
      return row.getValue<number>('rating');
    },
  },
];

export function ProductTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className=" text-center" key={header.id}>
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
                  <TableCell className=" text-center" key={cell.id}>
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
  );
}
