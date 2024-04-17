import { Skeleton } from '@/src/shared/ui/skeleton';

// TODO: переделать на гриды
export default function RootSkeleton() {
  return (
    <section className="mt-6">
      <div className=" w-full px-10 py-3 h-[700px] bg-secondary/20 flex gap-3">
        <Skeleton className=" w-full h-full grow" />
        <div className="w-full flex flex-col gap-3">
          <Skeleton className=" h-3/6" />
          <Skeleton className=" h-3/6" />
        </div>
      </div>

      <div className=" mt-10 px-10 w-3/6">
        <Skeleton className="w-full h-6" />
      </div>
      <ul className=" flex gap-3 px-10 mt-5 ">
        <li className="w-1/6 ">
          <div className=" p-2 border border-secondary rounded-lg">
            <Skeleton className="w-full h-64" />
            <Skeleton className="mt-4 h-8 w-2/4" />
            <Skeleton className="mt-6 h-4 w-full" />
            <div className="flex justify-between mt-6">
              <Skeleton className=" h-8 w-1/4" />
              <Skeleton className=" h-8 w-1/4" />
            </div>
          </div>
        </li>
        <li className="w-1/6">
          <div className=" p-2 border border-secondary rounded-lg">
            <Skeleton className="w-full h-64" />
            <Skeleton className="mt-4 h-8 w-2/4" />
            <Skeleton className="mt-6 h-4 w-full" />
            <div className="flex justify-between mt-6">
              <Skeleton className=" h-8 w-1/4" />
              <Skeleton className=" h-8 w-1/4" />
            </div>
          </div>
        </li>
        <li className="w-1/6">
          <div className=" p-2 border border-secondary rounded-lg">
            <Skeleton className="w-full h-64" />
            <Skeleton className="mt-4 h-8 w-2/4" />
            <Skeleton className="mt-6 h-4 w-full" />
            <div className="flex justify-between mt-6">
              <Skeleton className=" h-8 w-1/4" />
              <Skeleton className=" h-8 w-1/4" />
            </div>
          </div>
        </li>
        <li className="w-1/6">
          <div className=" p-2 border border-secondary rounded-lg">
            <Skeleton className="w-full h-64" />
            <Skeleton className="mt-4 h-8 w-2/4" />
            <Skeleton className="mt-6 h-4 w-full" />
            <div className="flex justify-between mt-6">
              <Skeleton className=" h-8 w-1/4" />
              <Skeleton className=" h-8 w-1/4" />
            </div>
          </div>
        </li>
        <li className="w-1/6">
          <div className=" p-2 border border-secondary rounded-lg">
            <Skeleton className="w-full h-64" />
            <Skeleton className="mt-4 h-8 w-2/4" />
            <Skeleton className="mt-6 h-4 w-full" />
            <div className="flex justify-between mt-6">
              <Skeleton className=" h-8 w-1/4" />
              <Skeleton className=" h-8 w-1/4" />
            </div>
          </div>
        </li>
        <li className="w-1/6">
          <div className=" p-2 border border-secondary rounded-lg">
            <Skeleton className="w-full h-64" />
            <Skeleton className="mt-4 h-8 w-2/4" />
            <Skeleton className="mt-6 h-4 w-full" />
            <div className="flex justify-between mt-6">
              <Skeleton className=" h-8 w-1/4" />
              <Skeleton className=" h-8 w-1/4" />
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
