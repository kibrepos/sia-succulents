"use client";

import Image from "next/image";
import Head from "next/head";

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
        <div className="relative">
          <div className="flex overflow-x-scroll snap-x snap-mandatory scrollbar-hide">
            {featuredPlants.map((plant) => (
              <div
                key={plant.id}
                className="flex-shrink-0 w-full snap-center px-4 sm:w-1/2 lg:w-1/3"
              >
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
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button className="p-2 bg-gray-800 text-white rounded-full">
              &#8249;
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button className="p-2 bg-gray-800 text-white rounded-full">
              &#8250;
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
