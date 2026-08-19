import React from "react";
import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white mt-10">
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <h3 className="text-xl font-bold">
                        My Website
                    </h3>

                    <div className="flex gap-6">
                        <Link
                            to="/"
                            className="text-gray-300 hover:text-white transition"
                        >
                            Home
                        </Link>

                        <Link
                            to="/about"
                            className="text-gray-300 hover:text-white transition"
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            className="text-gray-300 hover:text-white transition"
                        >
                            Contact
                        </Link>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-6 pt-4 text-center">
                    <p className="text-gray-400 text-sm">
                        © 2026 My Website. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;