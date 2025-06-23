// Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Main Section */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Track Your Game Collection and Wishlist Effortlessly
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            GameTracker lets you easily manage your game library, wishlist, and get notified of the best deals.
            It's your one-stop solution to keep track of your gaming adventures.
          </p>

          {/* Call to Action Buttons */}
          <div className="mt-8 space-x-4">
            <Link
              to="/signup"
              className="bg-green-500 text-white px-6 py-3 rounded-md text-xl hover:bg-green-600"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 text-white px-6 py-3 rounded-md text-xl hover:bg-blue-600"
            >
              Log In
            </Link>
          </div>
        </div>
      </main>

      {/* Featured Games */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-gray-900">Featured Games</h2>
          <p className="mt-4 text-lg text-gray-600">
            Check out some of the most popular games in the GameTracker community.
          </p>

          {/* Game Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game 1 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/300"
                alt="Game 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">Game 1</h3>
                <p className="text-gray-600">A brief description of Game 1.</p>
              </div>
            </div>

            {/* Game 2 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/300"
                alt="Game 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">Game 2</h3>
                <p className="text-gray-600">A brief description of Game 2.</p>
              </div>
            </div>

            {/* Game 3 */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://placehold.co/300"
                alt="Game 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900">Game 3</h3>
                <p className="text-gray-600">A brief description of Game 3.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
