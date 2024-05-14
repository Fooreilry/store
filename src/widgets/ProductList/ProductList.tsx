import { ProductCard } from '@/src/features/ProductCard/ProductCard';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/src/shared/ui/carousel';

export const ProductList = () => {
  return (
    <Carousel className=" mx-10 px-4 xl:mx-10 xl:px-3 2xl:mx-8 2xl:px-2 md:mx-16 md:px-6 sm:mx-36 sm:px-10 xs:mx-12 xs:px-10 2sm:mx-20 2sm:px-10">
      <CarouselContent>
        <CarouselItem className="basis-full  2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <ProductCard
            image="/prod1.jpg"
            title='17.3" Ноутбук MSI Katana B12VFK-463XRU'
            reting={4}
            comments={10}
            price={110000}
          />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <ProductCard
            image="/prod2.jpg"
            title="Ноутбук ASUS TUF Gaming F15 FX507ZC4-HN009"
            reting={3}
            comments={2}
            price={89000}
          />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <ProductCard
            image="/prod3.jpg"
            title="Ноутбук HUAWEI MateBook D 16 2024"
            reting={4}
            comments={2}
            price={70000}
          />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <ProductCard image="/prod4.jpg" title="Ноутбук Apple MacBook Air" reting={5} comments={15} price={120000} />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <ProductCard image="/prod5.jpg" title="Ноутбук Apple MacBook Pro" reting={5} comments={2} price={203000} />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <ProductCard
            image="/prod6.jpg"
            title="Ноутбук Acer Nitro 16 AN16-41-R5MW"
            reting={3}
            comments={10}
            price={115000}
          />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <ProductCard />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <ProductCard />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <ProductCard />
        </CarouselItem>
        <CarouselItem className="basis-full 2xl:basis-1/6 xl:basis-1/4 lg:basis-2/6 md:basis-2/4">
          <ProductCard />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className=" w-12 h-12" />
      <CarouselNext className=" w-12 h-12" />
    </Carousel>
  );
};
