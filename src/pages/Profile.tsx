// Profile.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  // Sample user data (replace with actual data from your backend)
  const user = {
    username: "Gamer123",
    email: "gamer123@example.com",
    profilePicture: "https://placehold.co/150", // Optional: use a default or uploaded picture
    gamesOwned: 45,
    playtime: 1200, // In hours
    achievements: 75, // Total achievements unlocked
  };

  return (
    <div className="bg-gray-50">
      {/* Main Section */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Info Section */}
          <div className="flex items-center justify-center space-x-8">
            {/* Profile Picture */}
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
              <img src={user.profilePicture} alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* User Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{user.username}</h1>
              <p className="text-lg text-gray-600">{user.email}</p>
            </div>
          </div>

          {/* Game Stats Section */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">Games Owned</h3>
              <p className="text-2xl font-bold text-gray-900">{user.gamesOwned}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">Total Playtime</h3>
              <p className="text-2xl font-bold text-gray-900">{user.playtime} hrs</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900">Achievements Unlocked</h3>
              <p className="text-2xl font-bold text-gray-900">{user.achievements}</p>
            </div>
          </div>

          {/* My Games Overview */}
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">My Game Collection</h2>
            <p className="text-lg text-gray-600">Here’s a preview of your game collection. View all of your games by clicking below.</p>
            <Link
              to="/games"
              className="mt-4 inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600"
            >
              Go to My Games
            </Link>
          </div>

          {/* Edit Profile Button */}
          <div className="mt-8 text-center">
            <Link
              to="/edit-profile"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600"
            >
              Edit Profile
            </Link>
          </div>

          {/* Change Password Button */}
          <div className="mt-4 text-center">
            <Link
              to="/change-password"
              className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-600"
            >
              Change Password
            </Link>
          </div>

          {/* Link to Settings */}
          <div className="mt-4 text-center">
            <Link
              to="/settings"
              className="inline-block bg-gray-500 text-white px-6 py-3 rounded-md hover:bg-gray-600"
            >
              Account Settings
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
