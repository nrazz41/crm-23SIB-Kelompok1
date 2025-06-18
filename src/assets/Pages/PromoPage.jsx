import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Percent, Bell } from "lucide-react"; // Import necessary icons

const PromoPage = () => {
  // Dummy data promo
  const promos = [
    {
      id: 1,
      title: "🔥 Flash Sale Hebat!",
      description: "Dapatkan diskon hingga 50% untuk produk-produk terpilih hanya untuk 24 jam ke depan.",
      validity: "Berlaku hingga 19 Juni 2025",
      image: "https://via.placeholder.com/400x200/FFA500/FFFFFF?text=Promo+1",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
    },
    {
      id: 2,
      title: "🎁 Voucher Cashback!",
      description: "Belanja minimal Rp 100.000, dapatkan cashback Rp 10.000. Kode: HAWAIIHEMAT",
      validity: "Berlaku s/d 30 Juni 2025",
      image: "https://via.placeholder.com/400x200/800080/FFFFFF?text=Promo+2",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
    },
    {
      id: 3,
      title: "⚡ Diskon Kilat Indomie!",
      description: "Indomie Goreng Jumbo hanya Rp 3.000 per bungkus. Stok terbatas!",
      validity: "Sampai stok habis",
      image: "/images/indomie-goreng.png", // Menggunakan gambar indomie dari produk dummy
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      textColor: "text-red-800",
    },
    {
      id: 4,
      title: "🚛 Gratis Ongkir!",
      description: "Nikmati gratis ongkir untuk setiap pembelian di atas Rp 75.000. Otomatis diterapkan saat checkout.",
      validity: "Berlaku sepanjang bulan ini",
      image: "https://via.placeholder.com/400x200/008000/FFFFFF?text=Promo+3",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-100">
      {/* Header (Mirroring HomePage header for consistency) */}
      <div className="w-full bg-red-600 py-3 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-2 text-white font-bold text-2xl">
            <Link to="/">
              <img
                src="/images/logo hawai.png"
                alt="Logo Hawai"
                className="w-11 h-11 rounded-full border-2 border-white"
              />
            </Link>
            <span>HAWAII</span>
          </div>

          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Cari kebutuhan sehari-hari..."
              className="w-full pl-4 pr-10 py-2.5 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-inner"
              disabled // Non-fungsional di halaman promo
            />
            <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <div className="flex items-center space-x-2">
            <Link to="/notification" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition">
              <Bell size={20} />
            </Link>
            <Link to="/promo-page" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition">
              <Percent size={20} />
            </Link>
            <Link to="/cart" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition">
              <ShoppingCart size={20} />
            </Link>
            <Link to="/signin" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition">
              <User size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full bg-white rounded-lg shadow-lg my-8 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Promo & Diskon Terbaru</h1>

        {promos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {promos.map(promo => (
              <div key={promo.id} className={`flex flex-col ${promo.bgColor} rounded-lg ${promo.borderColor} border overflow-hidden shadow-md`}>
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-40 object-cover"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/cccccc/000000?text=Gambar+Promo"; }}
                />
                <div className="p-4">
                  <h3 className={`font-semibold text-xl ${promo.textColor} mb-2`}>{promo.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">{promo.description}</p>
                  <p className="text-xs text-gray-500">Berlaku: {promo.validity}</p>
                </div>
                <div className="p-4 border-t border-gray-200 flex justify-end">
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                    Lihat Detail
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg py-10">Tidak ada promo aktif saat ini.</p>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>
      </div>

      {/* Footer (Mirroring HomePage footer) */}
      <footer className="w-full bg-red-800 text-white py-8 mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="#" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Pengaduan Pelanggan</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li>📞 081378237282</li>
              <li>📧 hawaii@gmail.com</li>
              <li>☎️ 1334314</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4 text-2xl text-white">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors"><i className="fab fa-facebook"></i></a>
              <a href="https://www.instagram.com/hawaiiswalayanpku?igsh=amN0c2VkeGh2eXhm" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors"><i className="fab fa-instagram"></i></a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors"><i className="fab fa-tiktok"></i></a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-4">Location</h3>
            <p className="text-sm">Jl Yos Sudarso<br />Jl Juanda Tarumai<br />Jl Hitam Ujung<br />Simpang Jengkol<br />Jl Durian No.1E Payung Sekaki</p>
          </div>
        </div>
        <div className="text-center text-white-500 text-xs mt-8 border-t border-gray-700 pt-4">
          © 2024 HAWAII. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default PromoPage;