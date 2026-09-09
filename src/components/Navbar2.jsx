function Navbar2() {
    return (
        <nav className="bg-blue-600 px-6 py-4">
            <ul className="flex items-center gap-8">
                <li>
                    <a
                        href="/"
                        className="text-white font-semibold hover:text-gray-200"
                    >
                        Home
                    </a>
                </li>

                <li>
                    <a
                        href="/about"
                        className="text-white font-semibold hover:text-gray-200"
                    >
                        About
                    </a>
                </li>

                <li>
                    <a
                        href="/contact"
                        className="text-white font-semibold hover:text-gray-200"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar2;