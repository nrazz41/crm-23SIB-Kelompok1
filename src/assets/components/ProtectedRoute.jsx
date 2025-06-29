// src/components/ProtectedRoute.jsx (File Baru)

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const ProtectedRoute = ({ requiredRole }) => {
  const { currentUser } = useAuth();

  // 1. Cek apakah ada yang login
  if (!currentUser) {
    // Jika tidak ada, tendang ke halaman login
    return <Navigate to="/login" replace />;
  }

  // 2. Cek apakah peran user sesuai dengan yang dibutuhkan halaman
  if (currentUser.role !== requiredRole) {
    // Jika tidak sesuai, tendang ke halaman "Tidak Diizinkan" (atau kembali ke login)
    return <Navigate to="/unauthorized" replace />; 
  }

  // 3. Jika semua aman, izinkan masuk (tampilkan halaman)
  return <Outlet />;
};

export default ProtectedRoute;