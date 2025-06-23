import React from 'react';

const FullGamePopup: React.FC<{ game: any; onClose: () => void }> = ({ game, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 h-full"
      onClick={onClose}
      style={{ backgroundColor: 'rgba(0,0,0,0.5)'}}
    >
      <div
        className="bg-white rounded-lg p-8 w-11/12 max-w-screen-xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // Prevents the modal from closing when clicking inside
      >
        <div className="flex justify-between">
          <h2 className="text-3xl font-semibold">{game.title}</h2>
          <button onClick={onClose} className="text-xl font-bold hover:cursor-pointer hover:text-red-500">X</button>
        </div>

        <div className="mt-4">
          <p className="text-lg font-medium">Description: {game.description}</p>
          <p className="mt-2">Release Date: {game.releaseDate}</p>
          <p className="mt-2">Platform: {game.platform.join(', ')}</p>
          <div className="mt-4">
            <iframe
              width="100%"
              height="315"
              src={game.trailerUrl}
              title="Game Trailer"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
            ></iframe>
          </div>
          <div className="mt-6">
            <h3 className="font-medium">Screenshots:</h3>
            <div className="grid grid-cols-2 gap-4">
              {game.screenshots.map((screenshot: string, idx: number) => (
                <img
                  key={idx}
                  src={screenshot}
                  alt={`Screenshot ${idx + 1}`}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="font-medium">Reviews:</h3>
            <ul>
              {game.reviews.map((review: string, idx: number) => (
                <li key={idx} className="text-gray-700">- {review}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullGamePopup;
