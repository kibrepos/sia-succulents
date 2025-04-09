"use client";

import Image from "next/image";
import Head from "next/head";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const featuredPlants = [
  {
    id: 1,
    name: "Monstera",
    image: "/monstera.jpg",
    description:
      "Monstera is a tropical plant from the Araceae family. It is known for its distinctive leaves that have holes in them.",
  },

  {
    id: 2,
    name: "Fiddle Leaf Fig 1",
    image: "/fiddle-leaf-fig.jpg",
    description:
      "Fiddle Leaf Fig is a popular houseplant known for its large, violin-shaped leaves.",
  },

  {
    id: 3,
    name: "Fiddle Leaf Fig 2",
    image: "/fiddle-leaf-fig.jpg",
    description:
      "Fiddle Leaf Fig is a popular houseplant known for its large, violin-shaped leaves.",
  },

  {
    id: 4,
    name: "Fiddle Leaf Fig 3",
    image: "/fiddle-leaf-fig.jpg",
    description:
      "Fiddle Leaf Fig is a popular houseplant known for its large, violin-shaped leaves.",
  },

  {
    id: 5,
    name: "Fiddle Leaf Fig 4",
    image: "/fiddle-leaf-fig.jpg",
    description:
      "Fiddle Leaf Fig is a popular houseplant known for its large, violin-shaped leaves.",
  },
];

export default function FeaturedPlants() {
  return (
    <>
      <section>
        <noscript>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPlants.map((plant) => (
              <div key={plant.id} className="flex flex-col gap-4">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  width={400}
                  height={400}
                />
                <h2 className="text-2xl font-semibold">{plant.name}</h2>
                <p>{plant.description}</p>
              </div>
            ))}
          </div>
        </noscript>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true} // Enable looping
          spaceBetween={16}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {featuredPlants.map((plant) => (
            <SwiperSlide key={plant.id}>
              <div className="flex flex-col gap-4">
                <Image
                  src={plant.image}
                  alt={plant.name}
                  width={400}
                  height={400}
                />
                <h2 className="text-2xl font-semibold">{plant.name}</h2>
                <p>{plant.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}
