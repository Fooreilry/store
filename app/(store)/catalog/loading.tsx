import { Skeleton } from '@/src/shared/ui/skeleton';

export default function Loading() {
  return (
    <main>
      <div className=" gap-5 grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] my-9">
        <div className=" border border-secondary rounded-md p-5 space-y-5">
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-10" />
        </div>
        <div className=" border border-secondary rounded-md p-5 space-y-5">
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-10" />
        </div>
        <div className=" border border-secondary rounded-md p-5 space-y-5">
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-10" />
        </div>
        <div className=" border border-secondary rounded-md p-5 space-y-5">
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-10" />
        </div>
        <div className=" border border-secondary rounded-md p-5 space-y-5">
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-10" />
        </div>
        <div className=" border border-secondary rounded-md p-5 space-y-5">
          <Skeleton className="w-full h-60" />
          <Skeleton className="w-full h-10" />
        </div>
      </div>
    </main>
  );
}
