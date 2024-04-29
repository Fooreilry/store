'use client';

import { TableSkeleton } from '@/src/app/ui/TableSkeleton';
import { useMount } from '@/src/shared/hooks/useMount/useMount';
import { columns, Users, UsersTable } from '@/src/widgets/UsersTable/UsersTable';

export default function AdminUsers({ users = [] }: { users: Users[] }) {
  const mounted = useMount();

  if (!mounted) {
    return <TableSkeleton />;
  }
  return (
    <div className=" px-10 w-full mt-8">
      <UsersTable columns={columns} data={users} />
    </div>
  );
}
