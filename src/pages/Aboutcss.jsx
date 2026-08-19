import React from "react";

const About = () => {
    return (
        <div className="min-h-[70vh] bg-gray-100 px-6 py-16">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold text-blue-600 mb-6">
                    About Us
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed">
                    We are learning React and React Router. This page
                    demonstrates how different pages can be displayed
                    using React Router without refreshing the browser.
                </p>
            </div>
        </div>
    );
};

export default About;