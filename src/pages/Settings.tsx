// Settings.tsx
import React, { useState } from 'react';

const Settings: React.FC = () => {
  // State for personal info form
  const [name, setName] = useState<string>('John Doe');
  const [email, setEmail] = useState<string>('johndoe@example.com');
  const [profilePicture, setProfilePicture] = useState<string>('https://placehold.co/150');
  
  // State for password management
  const [currentPassword, setCurrentPassword] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  // State for notification preferences
  const [emailNotifications, setEmailNotifications] = useState<boolean>(true);

  // State for linking social accounts
  const [isLinkedGoogle, setIsLinkedGoogle] = useState<boolean>(false);
  const [isLinkedFacebook, setIsLinkedFacebook] = useState<boolean>(false);

  // State for theme preferences (light/dark mode)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Handle form submission for updating profile
  const handleProfileUpdate = () => {
    alert('Profile updated!');
  };

  // Handle password change form submission
  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Password changed!');
  };

  // Handle deleting account
  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to delete your account? This action is permanent.')) {
      alert('Account deleted!');
    }
  };

  // Handle theme preference toggle
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* Main Settings Section */}
      <main className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">Account Settings</h2>

          {/* Personal Info Section */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Personal Info</h3>
            <form onSubmit={handleProfileUpdate} className="mt-4 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="profilePicture" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Profile Picture</label>
                <input
                  type="file"
                  id="profilePicture"
                  onChange={(e) => setProfilePicture(URL.createObjectURL(e.target.files![0]))}
                  className="mt-1 p-2 border rounded-md w-full"
                />
              </div>
              <div className="flex items-center mt-4">
                <img
                  src={profilePicture}
                  alt="Profile"
                  className="w-16 h-16 rounded-full border border-gray-300"
                />
                <button type="submit" className="ml-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Update Profile
                </button>
              </div>
            </form>
          </section>

          {/* Password Management Section */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Password Management</h3>
            <form onSubmit={handlePasswordChange} className="mt-4 space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700 dark:text-white"
                  required
                />
              </div>
              <button type="submit" className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Change Password
              </button>
            </form>
          </section>

          {/* Notification Preferences Section */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Notification Preferences</h3>
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="emailNotifications"
                checked={emailNotifications}
                onChange={() => setEmailNotifications(!emailNotifications)}
                className="mr-2"
              />
              <label htmlFor="emailNotifications" className="text-gray-700 dark:text-gray-300">Email Notifications for Game Sales & Updates</label>
            </div>
          </section>

          {/* Link Social Accounts Section */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Social Accounts</h3>
            <div className="mt-4 space-y-4">
              <button
                onClick={() => setIsLinkedGoogle(!isLinkedGoogle)}
                className={`w-full p-2 text-white ${isLinkedGoogle ? 'bg-red-600' : 'bg-blue-600'} rounded-md`}
              >
                {isLinkedGoogle ? 'Unlink Google Account' : 'Link Google Account'}
              </button>
              <button
                onClick={() => setIsLinkedFacebook(!isLinkedFacebook)}
                className={`w-full p-2 text-white ${isLinkedFacebook ? 'bg-blue-800' : 'bg-blue-600'} rounded-md`}
              >
                {isLinkedFacebook ? 'Unlink Facebook Account' : 'Link Facebook Account'}
              </button>
            </div>
          </section>

          {/* Delete Account Section */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Delete Account</h3>
            <button
              onClick={handleDeleteAccount}
              className="mt-4 w-full bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
            >
              Delete Account Permanently
            </button>
          </section>

          {/* Theme Preferences Section */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Theme Preferences</h3>
            <div className="mt-4">
              <button
                onClick={toggleTheme}
                className="w-full bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700"
              >
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Settings;
