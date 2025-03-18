import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/auth/home/HomePage';
import LoginPage from './pages/auth/login/LoginPage';
import SignUpPage from './pages/auth/signup/SignUpPage';
import Sidebar from './components/common/Sidebar';
import ProfilePage from './pages/profile/ProfilePage';
import RightPanel from './components/common/RightPanel';
import NotificationPage from './pages/notifications/NotificationPage';
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "./components/common/LoadingSpinner";

function App() {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth/me");
        const data = await res.json();
        if (data.error) return null;
        if (!res.ok) {
          throw new Error(data.error || "Something went wrong");
        }
        console.log("authUser is here:", data);
        return data;
      } catch (error) {
        throw new Error(error);
      }
    },
    retry: false,
  });

  if (isLoading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <LoadingSpinner size='lg' />
      </div>
    );
  }

  return (
    <div className="flex max-w-6xl mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* HomePage with no sidebar */}
        <Route path="/login" element={<LoginPageWithNoSidebar />} /> {/* Login page with no sidebar */}
        <Route path="/signup" element={<SignUpPageWithNoSidebar />} /> {/* Signup page with no sidebar */}
        <Route path="/notifications" element={<PageWithLayout Component={NotificationPage} />} />
        <Route path="/profile/:username" element={<PageWithLayout Component={ProfilePage} />} />
      </Routes>
      <Toaster />
    </div>
  );

  function HomePageWithNoSidebar() {
    return (
      <HomePage />
    );
  }
  function LoginPageWithNoSidebar() {
    return (
      <LoginPage />
    );
  }

  function SignUpPageWithNoSidebar() {
    return (
        <SignUpPage />
    );
  }

  function PageWithLayout({ Component }) {
    return (
      <>
        <Sidebar />
        <Component />
        {authUser && <RightPanel />}
      </>
    );
  }
}

export default App;
