import React from "react";
import { Link } from "react-router";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white px-6 py-4 shadow-md">
            <div className="max-w-6xl mx-auto flex items-center justify-between">
                <h1 className="text-2xl font-bold">
                    My Website
                </h1>

                <div className="flex gap-6">
                    <Link
                        to="/"
                        className="hover:text-blue-200 transition"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="hover:text-blue-200 transition"
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className="hover:text-blue-200 transition"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;