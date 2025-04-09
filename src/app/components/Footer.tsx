export default function Footer() {
  return (
    <footer className="bg-green-800 text-white py-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sia Succulents. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Follow us on{" "}
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 underline"
          >
            Instagram
          </a>{" "}
          and{" "}
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-300 underline"
          >
            Facebook
          </a>.
        </p>
      </div>
    </footer>
  );
}
