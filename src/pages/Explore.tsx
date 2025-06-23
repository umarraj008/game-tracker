// Explore.tsx
import React, { useState } from 'react';

const Explore: React.FC = () => {
  // Mock Data for Platforms, Genres, and Games (you would typically fetch this data)
  const platforms = ["Steam", "Xbox", "PlayStation", "Nintendo"];
  const genres = ["Action", "Adventure", "RPG", "Shooter", "Puzzle"];
  const releaseYears = ["2023", "2022", "2021", "2020", "2019"];

  // State for search input, filters, and game data
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedGenre, setSelectedGenre] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');
  const [wishlist, setWishlist] = useState<string[]>([]);  // For managing the wishlist

  // Mock game data
  const games = [
    {
      title: "Game 1",
      platform: "Steam",
      releaseDate: "2023-05-15",
      description: "An action-packed adventure game.",
      genres: ["Action", "Adventure"],
      imageUrl: "https://placehold.co/300",
    },
    {
      title: "Game 2",
      platform: "Xbox",
      releaseDate: "2022-11-01",
      description: "A thrilling RPG with immersive gameplay.",
      genres: ["RPG"],
      imageUrl: "https://placehold.co/300",
    },
    {
      title: "Game 3",
      platform: "PlayStation",
      releaseDate: "2021-07-22",
      description: "An exciting shooter game.",
      genres: ["Shooter"],
      imageUrl: "https://placehold.co/300",
    },
    // Add more games as needed
  ];

  // Filter games based on search term and filters
  const filteredGames = games.filter((game) => {
    const matchesSearchTerm = game.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = selectedPlatform ? game.platform === selectedPlatform : true;
    const matchesGenre = selectedGenre ? game.genres.includes(selectedGenre) : true;
    const matchesYear = selectedYear ? game.releaseDate.includes(selectedYear) : true;

    return matchesSearchTerm && matchesPlatform && matchesGenre && matchesYear;
  });

  // Handle adding a game to wishlist
  const handleAddToWishlist = (gameTitle: string) => {
    setWishlist((prevWishlist) => [...prevWishlist, gameTitle]);
  };

  return (
    <div className="bg-gray-50">
      {/* Main Section */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Discover New Games</h1>
          <p className="mt-4 text-lg text-gray-600">
            Explore games across platforms and genres. Add them to your collection or wishlist with just a click.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex justify-center">
            <input
              type="text"
              placeholder="Search for games..."
              className="w-2/3 px-4 py-2 rounded-md border border-gray-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="mt-8 flex justify-center space-x-4">
            <select
              className="px-4 py-2 border rounded-md"
              onChange={(e) => setSelectedPlatform(e.target.value)}
              value={selectedPlatform}
            >
              <option value="">All Platforms</option>
              {platforms.map((platform) => (
                <option key={platform} value={platform}>
                  {platform}
                </option>
              ))}
            </select>

            <select
              className="px-4 py-2 border rounded-md"
              onChange={(e) => setSelectedGenre(e.target.value)}
              value={selectedGenre}
            >
              <option value="">All Genres</option>
              {genres.map((genre) => (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>

            <select
              className="px-4 py-2 border rounded-md"
              onChange={(e) => setSelectedYear(e.target.value)}
              value={selectedYear}
            >
              <option value="">All Years</option>
              {releaseYears.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>

          {/* Game Grid/List */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <div key={game.title} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={game.imageUrl}
                  alt={game.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{game.title}</h3>
                  <div className="flex flex-wrap space-x-2 mt-2">
                    {game.genres.map((genre) => (
                      <span
                        key={genre}
                        className="bg-blue-500 text-white text-sm px-2 py-1 rounded-full"
                      >
                        {genre}
                      </span>
                    ))}
                    <span className="bg-gray-600 text-white text-sm px-2 py-1 rounded-full">
                      {game.platform}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-2">{game.description}</p>
                  <p className="text-gray-500 text-sm mt-1">Released: {game.releaseDate}</p>

                  {/* Add to Wishlist Button */}
                  <button
                    onClick={() => handleAddToWishlist(game.title)}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                  >
                    Add to Wishlist
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Explore;
