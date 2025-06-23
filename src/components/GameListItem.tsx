// GameListItem.tsx
import React, { useState } from 'react';
import { HiDotsVertical } from 'react-icons/hi';
import FullGamePopup from './FullGamePopup'; // Import the FullGamePopup component

interface Game {
  title: string;
  platform: string[];
  genre: string[];
  description: string;
  releaseDate: string;
  imageUrl: string;
  screenshots: string[];
  trailerUrl: string;
  reviews: string[];
}

interface GameListItemProps {
  game: Game;
  onViewDetails: () => void;
  onEdit: () => void;
  onRemove: () => void;
}

const GameListItem: React.FC<GameListItemProps> = ({ game, onViewDetails, onEdit, onRemove }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // For controlling the full game info popup

  // Toggle the visibility of the action menu
  const toggleMenu = () => setShowMenu(!showMenu);

  const handlePopupClose = () => setShowPopup(false);

  return (
    <>
      {/* Game List Item */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden flex items-center p-4 cursor-pointer" onClick={() => setShowPopup(true)}>
        <img src={game.imageUrl} alt={game.title} className="w-32 h-32 object-cover rounded-md" />
        <div className="ml-6 flex-1">
          <h3 className="text-xl font-semibold text-gray-900">{game.title}</h3>
          <div className="flex items-center space-x-2 mt-2">
            {game.platform.map((platform, idx) => (
              <span key={idx} className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                {platform}
              </span>
            ))}
          </div>
          <div className="flex items-center space-x-2 mt-2">
            {game.genre.map((genre, idx) => (
              <span key={idx} className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                {genre}
              </span>
            ))}
          </div>
          <p className="text-gray-600 mt-2">{game.description}</p>
          <p className="text-sm text-gray-500 mt-1">Released on: {game.releaseDate}</p>
        </div>

        {/* 3-Dot Menu Button */}
        <div className="relative">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900">
            <HiDotsVertical size={20} />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg border">
              <button onClick={onViewDetails} className="block w-full px-4 py-2 text-gray-900 hover:bg-gray-200">
                View Details
              </button>
              <button onClick={onEdit} className="block w-full px-4 py-2 text-gray-900 hover:bg-gray-200">
                Edit
              </button>
              <button onClick={onRemove} className="block w-full px-4 py-2 text-gray-900 hover:bg-gray-200">
                Remove
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Full Game Info Popup */}
      {showPopup && <FullGamePopup game={game} onClose={handlePopupClose} />}
    </>
  );
};

export default GameListItem;
