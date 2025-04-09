export default function Contacts() {
  return (
    <section className="bg-green-50 py-12 px-6 md:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">
          Have questions or need assistance? Reach out to us using the details below.
        </p>
        <div className="space-y-4">
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
      </div>
    </section>
  );
}
