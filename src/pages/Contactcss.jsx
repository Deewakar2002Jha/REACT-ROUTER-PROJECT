import React from "react";

const Contact = () => {
    return (
        <div className="min-h-[70vh] bg-gray-100 px-6 py-16">
            <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
                    Contact Us
                </h1>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <textarea
                        placeholder="Your Message"
                        rows="4"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;