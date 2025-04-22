import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  return (
    <div className="maxx container mx-auto text-center py-4">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed sit
            autem corporis architecto similique quo dolorum necessitatibus
            maiores omnis. Ratione officia eius et quasi. Voluptatem labore
            repellat ipsam error?
          </CarouselItem>
          <CarouselItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed sit
            autem corporis architecto similique quo dolorum necessitatibus
            maiores omnis. Ratione officia eius et quasi. Voluptatem labore
            repellat ipsam error?
          </CarouselItem>
          <CarouselItem>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed sit
            autem corporis architecto similique quo dolorum necessitatibus
            maiores omnis. Ratione officia eius et quasi. Voluptatem labore
            repellat ipsam error?
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
