export default function Store() {
  const plants = [
    { id: 1, name: "Aloe Vera", price: "$10", image: "/images/aloe-vera.jpg" },
    { id: 2, name: "Echeveria", price: "$12", image: "/images/echeveria.jpg" },
    { id: 3, name: "Jade Plant", price: "$15", image: "/images/jade-plant.jpg" },
    { id: 4, name: "Snake Plant", price: "$18", image: "/images/snake-plant.jpg" },
  ];
//test
  return (
    <section className="bg-white py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Our Store</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {plants.map((plant) => (
            <div
              key={plant.id}
              className="bg-green-50 border border-gray-200 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-green-700">{plant.name}</h3>
                <p className="text-gray-600">{plant.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="bg-green-600 text-white font-medium py-2 px-6 rounded-lg hover:bg-green-700 transition duration-200"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
}
