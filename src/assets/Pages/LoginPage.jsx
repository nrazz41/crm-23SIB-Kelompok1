// src/pages/LoginPage.jsx (Tampilan Asli Kamu, Logika Baru)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; // <-- Impor 'useAuth'

// --- Simulasi Database User ---
const dummyUsers = {
  "user@email.com": { 
    password: "123", 
    role: "pelanggan", 
    name: "Suci Pelanggan" 
  },
  "admin@email.com": {
    password: "123",
    role: "admin",
    name: "Admin Hawaii"
  },
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // <-- Ambil fungsi login dari context

  // Ini adalah fungsi message box asli dari kodemu, kita pakai lagi
  const displayMessageBox = (message) => {
    const messageBox = document.createElement('div');
    messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
    messageBox.innerHTML = `
      <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4 text-center">
        <p class="text-lg text-gray-800 mb-4">${message}</p>
        <button id="closeMessageBox" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">OK</button>
      </div>
    `;
    document.body.appendChild(messageBox);
    document.getElementById('closeMessageBox').onclick = () => {
      document.body.removeChild(messageBox);
    };
  };

  // --- INI SATU-SATUNYA BAGIAN YANG KITA UBAH: LOGIKA handleLogin ---
  const handleLogin = (e) => {
    e.preventDefault();
    const userInDb = dummyUsers[email];

    if (userInDb && userInDb.password === password) {
      // Login berhasil
      const userData = {
        name: userInDb.name,
        email: email,
        role: userInDb.role,
      };
      login(userData); // Simpan data user ke context

      // Arahkan ke halaman yang sesuai
      if (userInDb.role === 'admin') {
        navigate('/dashboard');
      } else {
        navigate('/profile');
      }
    } else {
      // Login gagal, panggil message box dari kodemu
      displayMessageBox('Email atau password yang Anda masukkan salah.');
    }
  };

  const handleForgotPassword = () => {
    displayMessageBox('Link "Lupa Password?" Diklik!');
  };

  // --- TAMPILAN (JSX) DI BAWAH INI 100% SAMA SEPERTI KODEMU YANG AWAL ---
  return (
    <div className="w-full flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="bg-orange-100 text-orange-800 text-center py-3 px-6 rounded-lg shadow-md mb-4 max-w-md w-full">
        Silahkan Login Terlebih Dahulu
      </div>
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center">
        <div className="mb-4">
          <img
            src="/images/logo hawai.png"
            alt="Hawaii Logo"
            className="mx-auto mb-2 rounded-full w-50 h-50"
          />
          <p className="text-xl font-semibold text-red-700"></p>
        </div>
        <form onSubmit={handleLogin}>
            <div className="mb-3">
            <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className="mb-3">
            <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <div className="text-right mb-3">
            <button
                type="button" // Ubah jadi type="button" agar tidak men-submit form
                onClick={handleForgotPassword}
                className="text-sm text-red-600 hover:underline focus:outline-none"
            >
                Lupa password?
            </button>
            </div>
            <button
                type="submit" // Gunakan type="submit" untuk tombol login utama
                className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
                Login
            </button>
        </form>
        <div className="mt-4 text-sm text-gray-700">
          Belum memiliki akun?{' '}
          <Link
            to="/signup"
            className="text-red-600 font-semibold hover:underline focus:outline-none"
          >
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;