import { Skeleton } from '@/src/shared/ui/skeleton';

export const TableSkeleton = () => {
  return (
    <div className=" px-10 w-full mt-8">
      <div className="flex gap-3">
        <Skeleton className="w-full max-w-[320px] h-10" />
        <Skeleton className="w-full max-w-[240px] h-10" />
      </div>
      <div className="flex gap-2 flex-col mt-5">
        <Skeleton className="w-full h-10 my-2" />
        <Skeleton className="w-full h-32 my-2" />
        <Skeleton className="w-full h-32 my-2" />
        <Skeleton className="w-full h-32 my-2" />
        <Skeleton className="w-full h-32 my-2" />
      </div>
      <div className="flex gap-2 mt-5 justify-center">
        <Skeleton className=" h-10 w-16" />
        <Skeleton className=" h-10 w-10" />
        <Skeleton className=" h-10 w-10" />
        <Skeleton className=" h-10 w-10" />
        <Skeleton className=" h-10 w-10" />
        <Skeleton className=" h-10 w-10" />
        <Skeleton className=" h-10 w-16" />
      </div>
    </div>
  );
};
