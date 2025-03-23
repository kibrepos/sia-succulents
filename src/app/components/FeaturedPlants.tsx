import Image from "next/image";

const featuredPlants = [
    {
        id: 1,
        name: "Monstera",
        image: "/monstera.jpg",
        description: "Monstera is a tropical plant from the Araceae family. It is known for its distinctive leaves that have holes in them.",
    },

    {
        id: 2,
        name: "Fiddle Leaf Fig",
        image: "/fiddle-leaf-fig.jpg",
        description: "Fiddle Leaf Fig is a popular houseplant known for its large, violin-shaped leaves.",
    },
];

export default function FeaturedPlants() {
    return (
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
        </section>
    );
}