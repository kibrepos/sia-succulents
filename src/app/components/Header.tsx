import Link from 'next/link'

export default function Header() {
    return (
        <header className="bg-green-700 text-white shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">
                <h1 className="text-2xl font-bold">SIA SUCCULENTS</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link href="/" className="hover:text-green-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-green-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-green-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}