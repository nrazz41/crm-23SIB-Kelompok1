import React from "react";
import { Search, ShoppingCart, User, Percent } from "lucide-react";
import { Link } from "react-router-dom"; // Tambahkan Link untuk navigasi

const HomePage = () => {
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
    {
      name: "Grocery",
      img: "/images/grocery.png",
    },
    {
      name: "Bayi & Anak",
      img: "/images/bayi & anak.png",
    },
    {
      name: "Kecantikan & Kesehatan",
      img: "/images/skincare.png",
    },
    {
      name: "Rumah Tangga",
      img: "/images/rt.png",
    },
    {
      name: "Otomotif",
      img: "/images/otomotif.png",
    },
    {
      name: "Alat Tulis Kantor",
      img: "/images/alat tulis.png",
    },
    {
      name: "Makanan Ringan",
      img: "/images/snack.png",
    },
    {
      name: "Minuman",
      img: "/images/drink.png",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header - Pencarian & Ikon */}
      <div className="w-full bg-red-600 py-3 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-white font-bold text-2xl">
            <img
              src="/images/logo hawai.png"
              alt="Logo Hawai"
              className="w-11 h-11 rounded-full border-2 border-white"
            />
            <span>HAWAII</span>
          </div>

          {/* Pencarian */}
          <div className="flex-1 max-w-md relative">
            <input
              type="text"
              placeholder="Cari apa saja, kapan saja, dimana saja"
              className="w-full pl-4 pr-10 py-2.5 rounded-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 shadow-inner"
            />
            <Search
              size={20}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => displayMessageBox("Cari Diklik!")}
            />
          </div>

          {/* Ikon */}
          <div className="flex items-center space-x-2">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition"
              onClick={() => displayMessageBox("Ikon Persen Diklik!")}
            >
              <Percent size={20} />
            </button>

            <button
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition"
              onClick={() => displayMessageBox("Keranjang Diklik!")}
            >
              <ShoppingCart size={20} />
            </button>

            {/* User Icon - menuju /login */}
            <Link
              to="/signin"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition"
            >
              <User size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="relative w-full max-w-7xl mx-auto mt-4 rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://placehold.co/1280x480/FFA500/FFD700?text=BIG+SALE+PROMO+UP+TO+75%25+OFF"
          alt="Big Sale Promo"
          className="w-full h-auto object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/1280x480/cccccc/000000?text=Error+Loading+Image";
          }}
        />
        <div className="absolute bottom-4 left-4 right-4 text-white text-center p-2 rounded-lg bg-black bg-opacity-50 text-xs md:text-sm">
          Fully Editable And Scalable - Words and Fonts can be change
        </div>
      </div>

      {/* Kategori */}
      <div className="w-full max-w-7xl mx-auto mt-8 bg-red-700 rounded-lg shadow-md overflow-hidden">
        <h2 className="text-white text-center py-3 font-semibold text-xl">
          KATEGORI
        </h2>
      </div>

      <div className="max-w-7xl mx-auto p-4 bg-white rounded-b-lg shadow-md w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
        {categories.map((category, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-3 text-center cursor-pointer hover:bg-gray-50 rounded-lg transition-colors"
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

      {/* Footer */}
      <footer className="w-full bg-red-800 text-white py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/faq"
                  className="hover:text-white transition-colors"
                  onClick={() => displayMessageBox("FAQ Diklik!")}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="/form-pengaduan"
                  className="hover:text-white transition-colors"
                  onClick={() =>
                    displayMessageBox("Pengaduan Pelanggan Diklik!")
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
