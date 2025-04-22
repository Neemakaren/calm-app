import React from "react";
import { shape4, vec5, wavy } from "../assets/images";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Side from "./Side";

const Empower = ({ quotes }) => {
  return (
    <main className="overflow-hidden">
      <img src={wavy} alt="" className="bg-[#C2D738]" />
      <div className="h-72 bg-[#C2D738] rounded-bl-3xl rounded-br-3xl flex">
        <div className="">
          <img src={vec5} alt="" className="w-11" />
        </div>
        <div>
          <div className="flex items-center justify-center text-[1.1em] md:text-3xl font-bold">
            <h1>Quotes for some encouragment:</h1>
          </div>

          {/* <div className="mx-20">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="mx-20 md:basis-1/1 lg:basis-1/3 maxx ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  sed sit autem corporis architecto similique quo dolorum
                  necessitatibus maiores omnis. Ratione officia eius et quasi.
                  Voluptatem labore repellat ipsam error?
                </CarouselItem>
                <CarouselItem className="md:basis-1/1 lg:basis-1/3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  sed sit autem corporis architecto similique quo dolorum
                  necessitatibus maiores omnis. Ratione officia eius et quasi.
                  Voluptatem labore repellat ipsam error?
                </CarouselItem>
                <CarouselItem className="md:basis-1/1 lg:basis-1/3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  sed sit autem corporis architecto similique quo dolorum
                  necessitatibus maiores omnis. Ratione officia eius et quasi.
                  Voluptatem labore repellat ipsam error?
                </CarouselItem>
                <CarouselItem className="md:basis-1/1 lg:basis-1/3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  sed sit autem corporis architecto similique quo dolorum
                  necessitatibus maiores omnis. Ratione officia eius et quasi.
                  Voluptatem labore repellat ipsam error?
                </CarouselItem>
                <CarouselItem className="md:basis-1/1 lg:basis-1/3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  sed sit autem corporis architecto similique quo dolorum
                  necessitatibus maiores omnis. Ratione officia eius et quasi.
                  Voluptatem labore repellat ipsam error?
                </CarouselItem>
                <CarouselItem className="md:basis-1/1 lg:basis-1/3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  sed sit autem corporis architecto similique quo dolorum
                  necessitatibus maiores omnis. Ratione officia eius et quasi.
                  Voluptatem labore repellat ipsam error?
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div> */}

          <div className="mx-20 text-center py-4 md:mt-10 font-sans md:text-[1.2em] tracking-wide leading-7 font-bold">
            <Carousel>
              <CarouselContent>
                {/* {quotes.map((q) => (
                    <CarouselItem>
                      <p>{q.quote}</p>
                    </CarouselItem>
                  ))} */}

                <CarouselItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  sed sit autem corporis architecto similique quo dolorum
                  necessitatibus maiores omnis. Ratione officia eius et quasi.
                  Voluptatem labore repellat ipsam error?
                  <p className="my-1.5">
                    Author: Voluptatem labore repellat ipsam error?
                  </p>
                </CarouselItem>
                <CarouselItem>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  sed sit autem corporis architecto similique quo dolorum
                  necessitatibus maiores omnis. Ratione officia eius et quasi.
                  Voluptatem labore repellat ipsam error?
                  <p className="my-1.5">
                    Author: Voluptatem labore repellat ipsam error?
                  </p>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <p className="text-center container mx-auto  md:pt-10 lg:text-[1.1em]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime nostrum eius illo, eligendi pariatur officia odit totam
                  culpa ab voluptas, perferendis magni reprehenderit. Aut
                  consequuntur corporis ipsam reiciendis impedit officiis,
                  blanditiis modi voluptates sunt veniam dolorum repudiandae eos
                  aspernatur, tenetur unde nihil earum quidem, nobis ipsum
                  veritatis ratione cumque harum.
                </p>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <p className="text-center container mx-auto  md:pt-10 lg:text-[1.1em]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime nostrum eius illo, eligendi pariatur officia odit totam
                  culpa ab voluptas, perferendis magni reprehenderit. Aut
                  consequuntur corporis ipsam reiciendis impedit officiis,
                  blanditiis modi voluptates sunt veniam dolorum repudiandae eos
                  aspernatur, tenetur unde nihil earum quidem, nobis ipsum
                  veritatis ratione cumque harum.
                </p>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <p className="text-center container mx-auto  md:pt-10 lg:text-[1.1em]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime nostrum eius illo, eligendi pariatur officia odit totam
                  culpa ab voluptas, perferendis magni reprehenderit. Aut
                  consequuntur corporis ipsam reiciendis impedit officiis,
                  blanditiis modi voluptates sunt veniam dolorum repudiandae eos
                  aspernatur, tenetur unde nihil earum quidem, nobis ipsum
                  veritatis ratione cumque harum.
                </p>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <p className="text-center container mx-auto  md:pt-10 lg:text-[1.1em]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime nostrum eius illo, eligendi pariatur officia odit totam
                  culpa ab voluptas, perferendis magni reprehenderit. Aut
                  consequuntur corporis ipsam reiciendis impedit officiis,
                  blanditiis modi voluptates sunt veniam dolorum repudiandae eos
                  aspernatur, tenetur unde nihil earum quidem, nobis ipsum
                  veritatis ratione cumque harum.
                </p>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <p className="text-center container mx-auto  md:pt-10 lg:text-[1.1em]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime nostrum eius illo, eligendi pariatur officia odit totam
                  culpa ab voluptas, perferendis magni reprehenderit. Aut
                  consequuntur corporis ipsam reiciendis impedit officiis,
                  blanditiis modi voluptates sunt veniam dolorum repudiandae eos
                  aspernatur, tenetur unde nihil earum quidem, nobis ipsum
                  veritatis ratione cumque harum.
                </p>
              </CarouselItem>
            </CarouselContent>
          </Carousel> */}
        </div>
      </div>
    </main>
  );
};

export default Empower;
