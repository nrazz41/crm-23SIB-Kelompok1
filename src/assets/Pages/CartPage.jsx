import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, User, Percent, Bell } from "lucide-react"; // Import necessary icons

// --- DATA DUMMY PESANAN (Sama dengan yang di HomePage) ---
const dummyOrders = [
  {
    id: "HAW001",
    status: "Selesai",
    shopName: "MINISO INDONESIA",
    shopLogo: "https://via.placeholder.com/40x40", // Placeholder logo toko
    products: [
      {
        name: "MINISO Perfume Mystic Eau De Toilette (Mountain Night) 50ml Parfum Pria",
        variant: "Mountain Night",
        qty: 2,
        price: 159800,
        imageUrl: "https://via.placeholder.com/80x80/FF0000/FFFFFF?text=Parfum", // Placeholder produk
      },
    ],
    total: 102356,
    deliveryStatus: "Pesanan tiba di alamat tujuan.",
    isRated: true,
  },
  {
    id: "HAW002",
    status: "Semua", // Status default agar muncul di tab "Semua"
    shopName: "BROGUYID",
    shopLogo: "https://via.placeholder.com/40x40",
    products: [
      {
        name: "BROGUY Kemeja Koko Pria Dewasa Lengan Panjang Barra",
        variant: "Grey:L",
        qty: 1,
        price: 197000,
        imageUrl: "https://via.placeholder.com/80x80/0000FF/FFFFFF?text=Kemeja",
      },
    ],
    total: 118765,
    deliveryStatus: "Pesanan tiba di alamat tujuan. diterima oleh Yang bersangkutan.",
    isRated: false,
  },
  {
    id: "HAW003",
    status: "Dikirim",
    shopName: "Toko Bahan Pokok",
    shopLogo: "https://via.placeholder.com/40x40",
    products: [
      {
        name: "Beras Cap Ayam Jago 5 Kg",
        variant: null,
        qty: 1,
        price: 65000,
        imageUrl: "/images/beras-5kg.png",
      },
      {
        name: "Minyak Goreng Sania 2 Liter",
        variant: null,
        qty: 1,
        price: 36000,
        imageUrl: "/images/minyak-sania.png",
      },
    ],
    total: 101000,
    deliveryStatus: "Dalam perjalanan ke alamat Anda.",
    isRated: false,
  },
  {
    id: "HAW004",
    status: "Belum Bayar",
    shopName: "Elektronik Murah",
    shopLogo: "https://via.placeholder.com/40x40",
    products: [
      {
        name: "Headset Gaming RGB XYZ",
        variant: "Black",
        qty: 1,
        price: 250000,
        imageUrl: "https://via.placeholder.com/80x80/00FF00/FFFFFF?text=Headset",
      },
    ],
    total: 250000,
    deliveryStatus: "Menunggu pembayaran.",
    isRated: false,
  },
];

const CartPage = () => {
  const [activeTab, setActiveTab] = useState("Semua"); // State untuk tab aktif

  const filteredOrders = dummyOrders.filter(order => {
    if (activeTab === "Semua") return true;
    // Perhatikan: beberapa order mungkin memiliki status "Semua" di dummy,
    // yang berarti mereka akan selalu muncul di tab "Semua",
    // dan juga di tab spesifik jika statusnya cocok (misal "Dikirim")
    return order.status === activeTab;
  });

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
              disabled // Non-fungsional di halaman keranjang
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

      <div className="max-w-4xl mx-auto w-full bg-white rounded-lg shadow-lg my-8 flex flex-col min-h-[70vh]">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800 text-center">Pesanan Saya</h1>
        </div>

        {/* Navigasi Tab */}
        <div className="flex border-b border-gray-200 bg-gray-50 sticky top-0 z-10">
          {["Semua", "Belum Bayar", "Sedang Dikemas", "Dikirim", "Selesai", "Dibatalkan", "Pengembalian Barang"].map(tab => (
            <button
              key={tab}
              className={`flex-1 py-3 text-sm font-semibold border-b-2 ${
                activeTab === tab
                  ? "border-red-600 text-red-600"
                  : "border-transparent text-gray-600 hover:text-gray-800"
              } transition-colors`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Input Pencarian Pesanan */}
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Kamu bisa cari berdasarkan Nama Penjual, No. Pesanan atau Nama Produk"
              className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-300 shadow-inner"
            />
            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Konten Tab Pesanan */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {filteredOrders.length > 0 ? (
            filteredOrders.map(order => (
              <div key={order.id} className="bg-white border border-gray-200 rounded-lg shadow-sm p-4">
                {/* Header Toko */}
                <div className="flex items-center justify-between border-b pb-3 mb-3">
                  <div className="flex items-center space-x-2">
                    {/* <img src={order.shopLogo} alt={order.shopName} className="w-8 h-8 rounded-full" /> */}
                    <span className="font-bold text-gray-800">{order.shopName}</span>
                    <button className="text-sm text-blue-600 px-2 py-1 rounded-full border border-blue-600 hover:bg-blue-50">Chat</button>
                    <button className="text-sm text-gray-600 px-2 py-1 rounded-full border border-gray-300 hover:bg-gray-50">Kunjungi Toko</button>
                  </div>
                  <div className="text-sm text-green-600 font-semibold flex items-center">
                    {order.deliveryStatus}
                    {order.isRated && <span className="ml-2 text-gray-500">TELAH DINILAI</span>}
                  </div>
                </div>

                {/* Detail Produk */}
                {order.products.map((product, pIdx) => (
                  <div key={pIdx} className="flex items-start mb-3">
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-20 h-20 object-contain mr-3 border rounded"
                    />
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium line-clamp-2">{product.name}</p>
                      {product.variant && <p className="text-sm text-gray-500">Variasi: {product.variant}</p>}
                      <p className="text-sm text-gray-600">x{product.qty}</p>
                    </div>
                    <p className="text-gray-800 font-semibold">
                      Rp {product.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                ))}

                {/* Total Pesanan dan Aksi */}
                <div className="flex justify-between items-center pt-3 border-t">
                  <p className="text-gray-700 font-semibold">Total Pesanan:</p>
                  <p className="text-red-600 font-bold text-lg">
                    Rp {order.total.toLocaleString('id-ID')}
                  </p>
                </div>
                <div className="flex justify-end space-x-2 mt-3">
                  <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">Beli Lagi</button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">Hubungi Penjual</button>
                  {!order.isRated && (
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors">Tampilkan Penilaian Toko</button>
                  )}
                  {order.isRated && (
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors" disabled>Sudah Dinilai</button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              Tidak ada pesanan di tab ini.
            </div>
          )}
        </div>

        <div className="mt-auto p-4 border-t border-gray-200 text-center">
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

export default CartPage;