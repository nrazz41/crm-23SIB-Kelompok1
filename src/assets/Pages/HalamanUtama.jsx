import React from 'react';
import { Search, ShoppingCart, User, Heart } from 'lucide-react'; // Ikon tambahan

const HalamanUtama = () => {
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

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header Utama (dari halaman utama yang diberikan sebelumnya) */}
      <div className="w-full bg-red-600 py-4 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
          {/* Logo */}
          <button className="flex items-center space-x-2 text-white font-bold text-2xl cursor-pointer" onClick={() => displayMessageBox('Logo Diklik!')}>
            <img src="https://placehold.co/40x40/FFFFFF/0000FF?text=H" alt="Hawaii Logo" className="rounded-full" />
            <span>HAWAII</span>
          </button>

          {/* Search Bar */}
          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Cari apa saja, kapan saja, dimana saja"
              className="w-full pl-4 pr-10 py-2 rounded-full bg-white bg-opacity-90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" onClick={() => displayMessageBox('Cari Diklik!')} />
          </div>

          {/* User Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition text-white" onClick={() => displayMessageBox('Wavey Icon Diklik!')}>
              <img src="https://placehold.co/24x24/0000FF/FFFFFF?text=W" alt="Wavey" className="rounded-full inline-block mr-1" /> Wavey
            </button>
            <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition text-white" onClick={() => displayMessageBox('Icon Persen Diklik!')}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </button> {/* Contoh ikon persentase/promo */}
            <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition text-white" onClick={() => displayMessageBox('Keranjang Diklik!')}>
              <ShoppingCart size={24} />
            </button>
            <button className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition text-white" onClick={() => displayMessageBox('Profil Diklik!')}>
              <User size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Banner */}
      <div className="relative w-full max-w-7xl mx-auto mt-4 rounded-lg overflow-hidden shadow-lg">
        {/* Placeholder for the actual image. Replace with actual image tag if available */}
        <img
          src="https://placehold.co/1280x480/FFA500/FFD700?text=BIG+SALE+PROMO+UP+TO+75%25+OFF"
          alt="Big Sale Promo"
          className="w-full h-auto object-cover"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1280x480/cccccc/000000?text=Error+Loading+Image' }}
        />
        <div className="absolute bottom-4 left-4 right-4 text-white text-center p-2 rounded-lg bg-black bg-opacity-50 text-xs md:text-sm">
          Fully Editable And Scalable - Words and Fonts can be change
        </div>
      </div>

      {/* Dummy Content below banner (optional, for visual completeness) */}
      <div className="max-w-7xl mx-auto p-4 mt-8 bg-white rounded-lg shadow-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Produk Pilihan</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-gray-50 rounded-lg shadow-sm p-3 text-center">
              <img src={`https://placehold.co/100x100/A0C4FF/FFFFFF?text=Product+${i+1}`} alt={`Product ${i+1}`} className="w-full h-24 object-cover mb-2 rounded" />
              <p className="text-sm font-semibold">Produk {i+1}</p>
              <p className="text-xs text-green-600">Rp 120.000</p>
              <button className="mt-2 text-blue-600 hover:underline text-sm" onClick={() => displayMessageBox(`Detail Produk ${i+1} Diklik!`)}>Lihat Detail</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HalamanUtama;
