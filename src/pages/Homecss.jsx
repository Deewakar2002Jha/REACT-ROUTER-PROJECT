import React from "react";

const Home = () => {
    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-gray-100 px-6">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
                    Welcome to My Website
                </h1>

                <p className="text-gray-600 text-lg">
                    This is the Home page of my React Router project.
                </p>
            </div>
        </div>
    );
};

export default Home;