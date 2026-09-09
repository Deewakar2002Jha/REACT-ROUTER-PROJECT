import { Link } from "react-router";

function Navbar1() {
    return (
        <nav className="bg-blue-600 px-6 py-4">
            <ul className="flex items-center gap-8">
                <li>
                    <Link
                        to="/"
                        className="text-white font-semibold hover:text-gray-200"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link
                        to="/about"
                        className="text-white font-semibold hover:text-gray-200"
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        to="/contact"
                        className="text-white font-semibold hover:text-gray-200"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar1;