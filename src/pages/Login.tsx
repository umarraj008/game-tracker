// Login.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  // States for email and password
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Handle login form submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just logging the details
    alert(`Logging in with email: ${email}`);
    // You can handle actual login logic here (e.g., API call)
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-8">Login to Your Account</h2>
        
        <form onSubmit={handleLogin} className="space-y-6">
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
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 border rounded-md w-full dark:bg-gray-700 dark:text-white"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Don't have an account? 
            <Link to="/signup" className="text-blue-600 hover:text-blue-700"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
