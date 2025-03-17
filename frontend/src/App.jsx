import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Only use Routes and Route here
import HomePage from './pages/auth/home/HomePage';
import LoginPage from './pages/auth/login/LoginPage';
import SignUpPage from './pages/auth/signup/SignUpPage';
import Sidebar from './components/common/Sidebar';
import ProfilePage from './pages/profile/ProfilePage';

import RightPanel from  './components/common/RightPanel';
import NotificationPage from  './pages/notifications/NotificationPage';

function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      {/* Common component, bc it's not wrapped with Routes */}
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />


      </Routes>
      <RightPanel />

     

    </div>
  );
}

export default App;
