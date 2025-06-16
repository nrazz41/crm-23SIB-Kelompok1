// src/assets/pages/HomePage.jsx
import React from "react";
import { Search, ShoppingCart, User, Percent, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import allProductsData from '../data/productsData';

// Komponen untuk satu kartu produk (tidak ada perubahan pada ini)
const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block h-full">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-[1.02] border border-gray-100 flex flex-col h-full">
        {/* Tombol switch dan ellipsis - hanya untuk estetika, tidak fungsional */}
        <div className="flex justify-between items-center p-2 text-gray-400">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" disabled />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
            <span className="ml-2 text-sm text-gray-500">To activated</span>
          </label>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4z"></path>
            </svg>
          </button>
        </div>

        <div className="p-4 pt-0 flex flex-col items-center text-center flex-grow">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-32 object-contain mb-3"
          />
          <h3 className="text-gray-800 font-medium text-sm mb-1 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-red-600 font-bold text-lg mb-2">
            Rp {product.price}
          </p>
          <p className="text-gray-500 text-xs">
            <span className="font-semibold">{product.stock}</span> In Stock
          </p>
          {product.rating && (
            <div className="flex items-center text-yellow-500 text-sm mt-1">
              <span className="mr-1">⭐</span> {product.rating}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

const HomePage = () => {
  const navigate = useNavigate();

  const displayMessageBox = (message) => {
    const messageBox = document.createElement("div");
    messageBox.className =
      "fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50";
    messageBox.innerHTML = `
      <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4 text-center">
        <p class="text-lg text-gray-800 mb-4">${message}</p>
        <button id="closeMessageBox" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">OK</button>
      </div>
    `;
    document.body.appendChild(messageBox);
    document.getElementById("closeMessageBox").onclick = () => {
      document.body.removeChild(messageBox);
    };
  };

  const categories = [
    { name: "Grocery", img: "/images/grocery.png" },
    { name: "Bayi & Anak", img: "/images/bayi & anak.png" },
    { name: "Kecantikan & Kesehatan", img: "/images/skincare.png" },
    { name: "Rumah Tangga", img: "/images/rt.png" },
    { name: "Otomotif", img: "/images/otomotif.png" },
    { name: "Alat Tulis Kantor", img: "/images/alat tulis.png" },
    { name: "Makanan Ringan", img: "/images/snack.png" },
    { name: "Minuman", img: "/images/drink.png" },
  ];

  const initialRecommendedProducts = allProductsData.slice(0, 12);

  return (
    // Mengubah elemen terluar untuk menjadi full screen dan background abu-abu
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-100">
      {/* Header - Pencarian & Ikon */}
      {/* Mengubah background dari red-600 menjadi white */}
      <div className="w-full bg-white py-3 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-2 text-red-600 font-bold text-2xl"> {/* Mengubah warna teks logo */}
            <img
              src="/images/logo hawai.png"
              alt="Logo Hawai"
              className="w-11 h-11 rounded-full border-2 border-red-600" // Mengubah warna border
            />
            <span>HAWAII</span>
          </div>

          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Cari kebutuhan sehari-hari..."
              className="w-full pl-4 pr-10 py-2.5 rounded-full bg-gray-100 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-inner" // Mengubah bg input menjadi abu-abu
            />
            <Search
              size={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => displayMessageBox("Fungsi Cari akan diimplementasi di sini!")}
            />
          </div>

          <div className="flex items-center space-x-2">
            {/* Ikon Notifikasi - Warna teks dan background disesuaikan */}
            <Link
              to="/notifications"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition"
            >
              <Bell size={20} />
            </Link>

            {/* Ikon Promo - Warna teks dan background disesuaikan */}
            <Link
              to="/promo"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition"
            >
              <Percent size={20} />
            </Link>

            {/* Ikon Keranjang Belanja - Warna teks dan background disesuaikan */}
            <Link
              to="/cart"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition"
            >
              <ShoppingCart size={20} />
            </Link>

            {/* Ikon User - Warna teks dan background disesuaikan */}
            <Link
              to="/signin"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition"
            >
              <User size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full max-w-7xl mx-auto mt-4 rounded-lg overflow-hidden shadow-lg">
        <img
          src="/images/big-sale-promo.png"
          alt="Big Sale Promo"
          className="w-full h-auto object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/1280x480/cccccc/000000?text=Error+Loading+Image";
          }}
        />
        <div className="absolute top-4 left-4 bg-red-700 text-white text-xs px-2 py-1 rounded-full">ONLY 24 HOURS</div>
        <div className="absolute top-4 right-4 bg-green-700 text-white text-xs px-2 py-1 rounded-full">UP TO 75% OFF SALE</div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center text-xs">Fully Editable And Scalable - Words and Fonts can be change</div>
      </div>

      {/* Kategori */}
      <div className="w-full max-w-7xl mx-auto mt-8 bg-red-700 rounded-lg shadow-md overflow-hidden">
        <h2 className="text-white text-center py-3 font-semibold text-xl">
          KATEGORI
        </h2>
      </div>

      <div className="max-w-7xl mx-auto p-4 bg-white rounded-b-lg shadow-md w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
        {/* Kategori lainnya */}
        {categories.map((category, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-3 text-center cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
            onClick={() => navigate(`/category/${category.name}`)}
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-24 h-24 object-cover mb-2 rounded-full border border-gray-200"
            />
            <p className="text-sm font-semibold text-gray-800">
              {category.name}
            </p>
          </div>
        ))}
      </div>

      {/* Bagian Produk Pilihan Hari Ini */}
      <div className="w-full max-w-7xl mx-auto mt-8 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Produk Pilihan Hari Ini
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 items-stretch">
          {initialRecommendedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* Gunakan mt-auto agar footer selalu di bawah jika konten tidak penuh */}
      <footer className="w-full bg-red-800 text-white py-8 mt-8 md:mt-auto">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/faq"
                  className="hover:text-white transition-colors"
                  onClick={() => displayMessageBox("Halaman FAQ segera hadir!")}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/form-pengaduan"
                  className="hover:text-white transition-colors"
                  onClick={() =>
                    displayMessageBox("Silakan hubungi customer service kami.")
                  }
                >
                  Pengaduan Pelanggan
                </a>
              </li>
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
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.instagram.com/hawaiiswalayanpku?igsh=amN0c2VkeGh2eXhm"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Location</h3>
            <p className="text-sm">
              Jl Yos Sudarso
              <br />
              Jl Juanda Tarumai
              <br />
              Jl Hitam Ujung
              <br />
              Simpang Jengkol
              <br />
              Jl Durian No.1E Payung Sekaki
            </p>
          </div>
        </div>

        <div className="text-center text-white-500 text-xs mt-8 border-t border-gray-700 pt-4">
          © 2024 HAWAII. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default HomePage;