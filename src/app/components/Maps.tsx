export default function Maps() {
  return (
    <section className="py-12 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Our Delivery Area</h2>
        <p className="text-lg text-gray-700 mb-6">
          We deliver succulents to the following area. Check the map below for details.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.41941548468165!3d37.77492977975971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064dfd1b1b1%3A0x4c9b8f1c5b5c5b5c!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
