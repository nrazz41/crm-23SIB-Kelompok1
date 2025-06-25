import React from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Percent, Bell } from "lucide-react"; // Import necessary icons

const NotificationPage = () => {
  // Dummy data notifikasi
  const notifications = [
    {
      id: 1,
      type: "diskon",
      title: "🎉 Diskon Spesial!",
      message: "Dapatkan potongan 15% untuk semua produk kategori Grocery hari ini.",
      time: "2 jam yang lalu",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
    },
    {
      id: 2,
      type: "pesanan",
      title: "✅ Pesanan #HAW20240618 Berhasil Dikirim!",
      message: "Pesanan Anda dengan nomor #HAW20240618 telah berhasil dikirim dan sedang dalam perjalanan.",
      time: "Kemarin",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      textColor: "text-green-800",
    },
    {
      id: 3,
      type: "pengingat",
      title: "🔔 Pengingat!",
      message: "Jangan lewatkan flash sale untuk produk elektronik besok pukul 10.00 WIB.",
      time: "3 hari yang lalu",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      textColor: "text-yellow-800",
    },
    {
      id: 4,
      type: "info",
      title: "⚠️ Pemeliharaan Sistem",
      message: "Sistem akan mengalami pemeliharaan pada tanggal 25 Juni 2025 pukul 00:00 - 02:00 WIB. Transaksi mungkin terganggu.",
      time: "5 hari yang lalu",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-100">
      {/* Header (Mirroring HomePage header for consistency) */}
      <div className="w-full bg-white py-3 px-4 md:px-8 shadow-md"> 
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-2 text-red-600 font-bold text-2xl"> 
            <Link to="/">
              <img
                src="/images/logo hawai.png"
                alt="Logo Hawai"
                className="w-11 h-11 rounded-full border-2 border-red-600" 
              />
            </Link>
            <span>HAWAII</span>
          </div>

          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Cari kebutuhan sehari-hari..."
              className="w-full pl-4 pr-10 py-2.5 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-inner"
              disabled // Non-fungsional di halaman notifikasi
            />
            <Search size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>

          <div className="flex items-center space-x-2">
            <Link to="/notification" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition"> {/* UBAH: bg-white text-gray-700 menjadi bg-gray-100 text-red-600 */}
              <Bell size={20} />
            </Link>
            <Link to="/promo-page" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition"> {/* UBAH: bg-white text-gray-700 menjadi bg-gray-100 text-red-600 */}
              <Percent size={20} />
            </Link>
            <Link to="/cart" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition"> {/* UBAH: bg-white text-gray-700 menjadi bg-gray-100 text-red-600 */}
              <ShoppingCart size={20} />
            </Link>
            <Link to="/signin" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition"> {/* UBAH: bg-white text-gray-700 menjadi bg-gray-100 text-red-600 */}
              <User size={20} />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full bg-white rounded-lg shadow-lg my-8 p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Notifikasi Anda</h1>

        {notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map(notif => (
              <div key={notif.id} className={`p-4 ${notif.bgColor} rounded-lg ${notif.borderColor} border`}>
                <p className={`font-semibold ${notif.textColor} mb-1`}>{notif.title}</p>
                <p className="text-sm text-gray-700">{notif.message}</p>
                <p className="text-xs text-gray-500 mt-2">{notif.time}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-lg py-10">Tidak ada notifikasi baru saat ini.</p>
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
      <footer className="w-full bg-red-800 text-white py-8 mt-auto"> {/* mt-auto agar footer di bawah */}
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

export default NotificationPage;
