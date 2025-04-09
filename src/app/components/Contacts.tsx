export default function Contacts() {
  return (
    <section className="bg-green-50 py-12 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have questions or need assistance? Reach out to us using the details
          below or send us a message directly.
        </p>
        <div className="space-y-4 mb-8">
          <p className="text-lg">
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:info@siasucculents.com"
              className="text-green-600 underline"
            >
              info@siasucculents.com
            </a>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+1234567890" className="text-green-600 underline">
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-lg">
            <span className="font-semibold">Address:</span> 123 Succulent Lane,
            Green City, CA
          </p>
        </div>
        <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-left text-gray-700 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-left text-gray-700 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-left text-gray-700 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
