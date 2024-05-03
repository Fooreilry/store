import { Skeleton } from '@/src/shared/ui/skeleton';

export default function Loading() {
  return (
    <main>
      <div className=" gap-5 grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] my-9">
        <div className=" border border-secondary rounded-md p-5 space-y-4">
          <Skeleton className="w-full h-48" />
          <Skeleton className="w-full h-8" />
          <div className="space-y-2">
            <Skeleton className=" w-11/12 h-4 mr-7" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="w-3/12 h-6" />
            <Skeleton className="w-3/12 h-6" />
          </div>
        </div>
        <div className=" border border-secondary rounded-md p-5 space-y-4">
          <Skeleton className="w-full h-48" />
          <Skeleton className="w-full h-8" />
          <div className="space-y-2">
            <Skeleton className=" w-11/12 h-4 mr-7" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="w-3/12 h-6" />
            <Skeleton className="w-3/12 h-6" />
          </div>
        </div>
        <div className=" border border-secondary rounded-md p-5 space-y-4">
          <Skeleton className="w-full h-48" />
          <Skeleton className="w-full h-8" />
          <div className="space-y-2">
            <Skeleton className=" w-11/12 h-4 mr-7" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="w-3/12 h-6" />
            <Skeleton className="w-3/12 h-6" />
          </div>
        </div>
        <div className=" border border-secondary rounded-md p-5 space-y-4">
          <Skeleton className="w-full h-48" />
          <Skeleton className="w-full h-8" />
          <div className="space-y-2">
            <Skeleton className=" w-11/12 h-4 mr-7" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="w-3/12 h-6" />
            <Skeleton className="w-3/12 h-6" />
          </div>
        </div>
        <div className=" border border-secondary rounded-md p-5 space-y-4">
          <Skeleton className="w-full h-48" />
          <Skeleton className="w-full h-8" />
          <div className="space-y-2">
            <Skeleton className=" w-11/12 h-4 mr-7" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="w-3/12 h-6" />
            <Skeleton className="w-3/12 h-6" />
          </div>
        </div>
        <div className=" border border-secondary rounded-md p-5 space-y-4">
          <Skeleton className="w-full h-48" />
          <Skeleton className="w-full h-8" />
          <div className="space-y-2">
            <Skeleton className=" w-11/12 h-4 mr-7" />
            <Skeleton className="w-full h-4" />
          </div>
          <div className="flex justify-between">
            <Skeleton className="w-3/12 h-6" />
            <Skeleton className="w-3/12 h-6" />
          </div>
        </div>
      </div>
    </main>
  );
}
