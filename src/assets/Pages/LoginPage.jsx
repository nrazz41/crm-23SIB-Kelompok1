import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link dan useNavigate

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Inisialisasi hook useNavigate

  // Function to display a custom message box (instead of alert)
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

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder for actual login logic (e.g., API call to authenticate)
    // Untuk saat ini, kita akan mensimulasikan login berhasil dan melakukan navigasi.
    displayMessageBox(`Login dengan Email: ${email} dan Password: ${password}`); // Pesan opsional
    console.log('Email:', email, 'Password:', password); // Log data login

    // Langsung arahkan ke halaman dashboard setelah (simulasi) login berhasil
    navigate('/dashboard'); // BARIS INI YANG MENGARAHKAN KE DASHBOARD
  };

  const handleForgotPassword = () => {
    displayMessageBox('Link "Lupa Password?" Diklik!');
  };

  return (
    // Mengurangi padding vertikal pada container utama
    // Konten kini akan lebih terpusat dan padat
    <div className="w-full flex flex-col items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      {/* Label "Halaman Login" dipindahkan ke AuthLayout untuk menghindari duplikasi
          dan agar konsisten dengan struktur layout. */}

      {/* "Silahkan Login Terlebih Dahulu" Card - Mengurangi margin-bottom & menambah lebar */}
      <div className="bg-orange-100 text-orange-800 text-center py-3 px-6 rounded-lg shadow-md mb-4 max-w-md w-full">
        Silahkan Login Terlebih Dahulu
      </div>

      {/* Login Form Card - Mengurangi padding internal & menambah lebar */}
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full text-center">
        {/* Logo Hawaii - Mengurangi margin-bottom */}
        <div className="mb-4">
          <img
            src="/images/logo hawai.png"
            alt="Hawaii Logo"
            className="mx-auto mb-2 rounded-full w-50 h-50"
          />
          <p className="text-xl font-semibold text-red-700"></p>
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Lupa Password Link */}
        <div className="text-right mb-3">
          <button
            onClick={handleForgotPassword}
            className="text-sm text-red-600 hover:underline focus:outline-none"
          >
            Lupa password?
          </button>
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin} // Panggil fungsi handleLogin saat diklik
          className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Login
        </button>

        {/* "Belum memiliki akun? Daftar" Link - Menggunakan Link untuk navigasi */}
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
