import React from 'react';
import { Outlet } from 'react-router-dom';
import { MapPin, ChevronDown } from 'lucide-react'; // Ikon untuk header

const AuthLayout = () => {
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

  const handleLanguageClick = () => { displayMessageBox('Pilihan Bahasa Diklik!'); };
  const handleLocationClick = () => { displayMessageBox('Lokasi Diklik!'); };
  const handlePickupClick = () => { displayMessageBox('Pilihan Pick Up Diklik!'); };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center">
      {/* Top Header Bar (Red) - Replikasi dari desain Login/Registrasi */}
      <header className="w-full bg-red-600 py-3 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 text-white">
          {/* Pemilih Bahasa */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLanguageClick}>
            <span className="font-medium">IND</span>
            <ChevronDown size={16} />
          </div>

          {/* Lokasi dan Pengambilan */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            <div className="flex items-center space-x-1 cursor-pointer" onClick={handleLocationClick}>
              <MapPin size={16} />
              <span className="text-sm">Jl Yosudarso - Mumbai</span>
              <ChevronDown size={16} />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer" onClick={handlePickupClick}>
              <span className="text-sm">Pick Up</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center p-4 w-full">
        <Outlet /> {/* Ini akan merender komponen halaman seperti HomePage, LoginPage, RegisterPage */}
      </div>
    </div>
  );
};

export default AuthLayout;
