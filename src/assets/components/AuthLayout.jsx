import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { MapPin, ChevronDown } from 'lucide-react';

const AuthLayout = () => {
  const [isAddressOpen, setIsAddressOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("Jl Yos Sudarso - Rumbai");

  const [isPickupOpen, setIsPickupOpen] = useState(false);
  const [selectedPickup, setSelectedPickup] = useState("Pick Up");

  const addresses = [
    "Jl Yos Sudarso - Rumbai",
    "Jl Juanda Tarumai",
    "Jl Hitam Ujung",
    "Simpang Jengkol",
    "Jl Durian No.1E Payung Sekaki",
  ];

  const pickupOptions = [
    "Ambil di Toko",
    "Antar ke Rumah",
    "Diambil oleh Perwakilan"
  ];

  const toggleAddressDropdown = () => setIsAddressOpen(!isAddressOpen);
  const togglePickupDropdown = () => setIsPickupOpen(!isPickupOpen);

  const selectAddress = (address) => {
    setSelectedAddress(address);
    setIsAddressOpen(false);
  };

  const selectPickup = (pickup) => {
    setSelectedPickup(pickup);
    setIsPickupOpen(false);
  };

  const handleLanguageClick = () => {
    const messageBox = document.createElement('div');
    messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
    messageBox.innerHTML = `
      <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4 text-center">
        <p class="text-lg text-gray-800 mb-4">Pilihan Bahasa Diklik!</p>
        <button id="closeMessageBox" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">OK</button>
      </div>
    `;
    document.body.appendChild(messageBox);
    document.getElementById('closeMessageBox').onclick = () => {
      document.body.removeChild(messageBox);
    };
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased flex flex-col items-center">
      <header className="w-full bg-red-600 py-3 px-4 md:px-8 shadow-md relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 text-white">
          
          {/* Bahasa */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLanguageClick}>
            <span className="font-medium">IND</span>
            <ChevronDown size={16} />
          </div>

          {/* Lokasi dan Pick Up */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
            {/* Lokasi */}
            <div className="relative">
              <div className="flex items-center space-x-1 cursor-pointer" onClick={toggleAddressDropdown}>
                <MapPin size={16} />
                <span className="text-sm">{selectedAddress}</span>
                <ChevronDown size={16} />
              </div>
              {isAddressOpen && (
                <div className="absolute mt-2 bg-white text-gray-900 rounded-md shadow-md w-56 z-50">
                  {addresses.map((addr, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => selectAddress(addr)}
                    >
                      {addr}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pick Up */}
            <div className="relative">
              <div className="flex items-center space-x-1 cursor-pointer" onClick={togglePickupDropdown}>
                <span className="text-sm">{selectedPickup}</span>
                <ChevronDown size={16} />
              </div>
              {isPickupOpen && (
                <div className="absolute mt-2 bg-white text-gray-900 rounded-md shadow-md w-48 z-50 right-0">
                  {pickupOptions.map((option, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                      onClick={() => selectPickup(option)}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center p-4 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
