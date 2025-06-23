// Wishlist.tsx
import React, { useState } from 'react';

const Wishlist: React.FC = () => {
  // Sample wishlist data (replace with actual data from your backend)
  const wishlist = [
    {
      title: "Game 1",
      platform: "Steam",
      genre: "Action",
      description: "An action-packed adventure game.",
      releaseDate: "2023-05-15",
      imageUrl: "https://placehold.co/300",
    },
    {
      title: "Game 2",
      platform: "PlayStation",
      genre: "RPG",
      description: "A thrilling RPG with immersive gameplay.",
      releaseDate: "2022-11-01",
      imageUrl: "https://placehold.co/300",
    },
    {
      title: "Game 3",
      platform: "Xbox",
      genre: "Shooter",
      description: "An exciting shooter game.",
      releaseDate: "2021-07-22",
      imageUrl: "https://placehold.co/300",
    },
  ];

  // State for filtering options
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');

  // Filtered wishlist based on platform and genre
  const filteredWishlist = wishlist.filter((game) => {
    const matchesPlatform = selectedPlatform ? game.platform === selectedPlatform : true;
    const matchesGenre = selectedGenre ? game.genre === selectedGenre : true;
    return matchesPlatform && matchesGenre;
  });

  // Modal state
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedGame, setSelectedGame] = useState<any>(null); // To store selected game for modal

  // Toggle modal visibility
  const openModal = (game: any) => {
    setSelectedGame(game);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedGame(null);
  };

  // Handle Add Game button click (can link to a form or modal)
  const handleAddGame = () => {
    // Redirect to add game page or open modal
    alert("Add new game functionality will go here!");
  };

  return (
    <div className="bg-gray-50">
      {/* Main Section */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters Section */}
          <div className="flex justify-between items-center mb-8">
            {/* Filter Options */}
            <div className="flex space-x-4">
              <select
                className="px-4 py-2 border rounded-md"
                onChange={(e) => setSelectedPlatform(e.target.value)}
                value={selectedPlatform}
              >
                <option value="">All Platforms</option>
                <option value="Steam">Steam</option>
                <option value="PlayStation">PlayStation</option>
                <option value="Xbox">Xbox</option>
              </select>

              <select
                className="px-4 py-2 border rounded-md"
                onChange={(e) => setSelectedGenre(e.target.value)}
                value={selectedGenre}
              >
                <option value="">All Genres</option>
                <option value="Action">Action</option>
                <option value="RPG">RPG</option>
                <option value="Shooter">Shooter</option>
              </select>
            </div>

            {/* Add Game Button */}
            <button
              onClick={handleAddGame}
              className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
            >
              Add Game
            </button>
          </div>

          {/* Wishlist List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWishlist.map((game) => (
              <div key={game.title} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{game.title}</h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">{game.platform}</span>
                    <span className="text-sm text-gray-500">{game.genre}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{game.description}</p>

                  {/* Buttons to view details or add to owned */}
                  <div className="mt-4 flex justify-between items-center">
                    <button
                      onClick={() => openModal(game)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                      View Details
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                    >
                      Move to My Games
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Deals Alerts Section (Future Feature) */}
          <div className="mt-8 bg-yellow-100 p-4 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-900">Deals Alerts (Coming Soon)</h3>
            <p className="text-gray-700">Get notified when any of your wishlist games go on sale!</p>
          </div>
        </div>
      </main>

      {/* Game Details Modal */}
      {showModal && selectedGame && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-2xl font-semibold text-gray-900">{selectedGame.title}</h2>
            <p className="mt-2 text-gray-600">Platform: {selectedGame.platform}</p>
            <p className="mt-2 text-gray-600">Genre: {selectedGame.genre}</p>
            <p className="mt-2 text-gray-600">Release Date: {selectedGame.releaseDate}</p>
            <p className="mt-4">{selectedGame.description}</p>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
