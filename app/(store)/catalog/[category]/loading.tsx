import { Skeleton } from '@/src/shared/ui/skeleton';

export default function Loading() {
  return (
    <main>
      <div className="grid grid-cols-12 my-9 space-x-8">
        <div className="col-span-3 space-y-6 border p-5 rounded">
          <Skeleton className="w-full h-6" />
          <div className="flex justify-between items-center space-x-3">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-8" />
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <Skeleton className="w-3/6 h-4" />
            <Skeleton className="w-full h-8" />
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <Skeleton className="w-3/6 h-4" />
            <Skeleton className="w-full h-8" />
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <Skeleton className="w-3/6 h-4" />
            <Skeleton className="w-full h-8" />
          </div>
          <div className="flex justify-between items-center space-x-3">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-8" />
          </div>
          <div className="flex justify-between items-center space-x-3">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-full h-8" />
            <Skeleton className="w-full h-8" />
          </div>
          <div className="flex flex-col justify-center space-y-3">
            <Skeleton className="w-3/6 h-4" />
            <Skeleton className="w-full h-8" />
          </div>
          <div className=" flex flex-col space-y-3">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
          </div>
        </div>
        <div className=" col-span-9 gap-5 grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] ">
          <div className=" border border-secondary rounded-md p-5 space-y-5">
            <Skeleton className="w-full h-48" />
            <div className="flex space-x-4">
              <Skeleton className="w-12 h-8" />
              <Skeleton className="w-12 h-8" />
            </div>
            <Skeleton className="w-4/6 h-6" />
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-2">
                <Skeleton className="w-14 h-2" />
                <Skeleton className="w-20 h-2" />
              </div>
              <Skeleton className="w-2/6 h-8" />
            </div>
          </div>
          <div className=" border border-secondary rounded-md p-5 space-y-5">
            <Skeleton className="w-full h-48" />
            <div className="flex space-x-4">
              <Skeleton className="w-12 h-8" />
              <Skeleton className="w-12 h-8" />
            </div>
            <Skeleton className="w-4/6 h-6" />
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-2">
                <Skeleton className="w-14 h-2" />
                <Skeleton className="w-20 h-2" />
              </div>
              <Skeleton className="w-2/6 h-8" />
            </div>
          </div>
          <div className=" border border-secondary rounded-md p-5 space-y-5">
            <Skeleton className="w-full h-48" />
            <div className="flex space-x-4">
              <Skeleton className="w-12 h-8" />
              <Skeleton className="w-12 h-8" />
            </div>
            <Skeleton className="w-4/6 h-6" />
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-2">
                <Skeleton className="w-14 h-2" />
                <Skeleton className="w-20 h-2" />
              </div>
              <Skeleton className="w-2/6 h-8" />
            </div>
          </div>
          <div className=" border border-secondary rounded-md p-5 space-y-5">
            <Skeleton className="w-full h-48" />
            <div className="flex space-x-4">
              <Skeleton className="w-12 h-8" />
              <Skeleton className="w-12 h-8" />
            </div>
            <Skeleton className="w-4/6 h-6" />
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-2">
                <Skeleton className="w-14 h-2" />
                <Skeleton className="w-20 h-2" />
              </div>
              <Skeleton className="w-2/6 h-8" />
            </div>
          </div>
          <div className=" border border-secondary rounded-md p-5 space-y-5">
            <Skeleton className="w-full h-48" />
            <div className="flex space-x-4">
              <Skeleton className="w-12 h-8" />
              <Skeleton className="w-12 h-8" />
            </div>
            <Skeleton className="w-4/6 h-6" />
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-2">
                <Skeleton className="w-14 h-2" />
                <Skeleton className="w-20 h-2" />
              </div>
              <Skeleton className="w-2/6 h-8" />
            </div>
          </div>
          <div className=" border border-secondary rounded-md p-5 space-y-5">
            <Skeleton className="w-full h-48" />
            <div className="flex space-x-4">
              <Skeleton className="w-12 h-8" />
              <Skeleton className="w-12 h-8" />
            </div>
            <Skeleton className="w-4/6 h-6" />
            <div className="flex justify-between items-center">
              <div className="flex flex-col space-y-2">
                <Skeleton className="w-14 h-2" />
                <Skeleton className="w-20 h-2" />
              </div>
              <Skeleton className="w-2/6 h-8" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
