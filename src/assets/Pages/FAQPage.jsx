import React, { useState } from "react";
import { Search, ShoppingCart, User, ChevronDown, Tag } from "lucide-react";
import { Link } from 'react-router-dom';

const FAQPage = () => {
  const faqItems = [
    {
      id: 1,
      question: "Apakah di Hawaii bisa belanja secara online?",
      answer:
        "Ya, Anda bisa berbelanja secara online melalui website resmi Hawaii atau aplikasi mobile kami. Nikmati kemudahan berbelanja dari mana saja dan kapan saja.",
    },
    {
      id: 2,
      question: "Apakah di Hawaii tersedia layanan antar?",
      answer:
        "Tentu, Hawaii menyediakan layanan antar untuk memastikan produk pilihan Anda sampai dengan aman dan cepat ke rumah Anda. Cek area jangkauan kami saat checkout.",
    },
    {
      id: 3,
      question: "Apakah di Hawaii menerima pembayaran non-tunai?",
      answer:
        "Ya, kami menerima berbagai metode pembayaran non-tunai, termasuk kartu debit/kredit, e-wallet, dan transfer bank untuk kenyamanan Anda.",
    },
    {
      id: 4,
      question:
        "Apakah di Hawaii tersedia program membership atau kartu member?",
      answer:
        "Saat ini, Hawaii sedang mengembangkan program membership eksklusif untuk memberikan berbagai keuntungan dan penawaran spesial kepada pelanggan setia kami. Nantikan informasi lebih lanjut!",
    },
    {
      id: 5,
      question: "Apa saja jam operasional Supermarket Hawaii?",
      answer:
        "Supermarket Hawaii beroperasi setiap hari dari pukul 08.00 pagi hingga 22.00 malam. Kami siap melayani kebutuhan belanja Anda.",
    },
  ];

  const [openFAQId, setOpenFAQId] = useState(null);

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

  const handleToggleFAQ = (id) => {
    setOpenFAQId(openFAQId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased text-gray-800 w-full">
      <header className="w-full bg-white py-4 px-4 md:px-12 shadow-sm">
        <div className="w-full flex items-center justify-between space-x-8">
          <div className="flex items-center space-x-2">
            <img
              src="/images/logo hawai.png"
              alt="Hawaii Logo"
              className="h-10 cursor-pointer"
              onClick={() => displayMessageBox("Logo Hawaii Diklik!")}
            />
            <h1 className="text-2xl font-bold text-red-600 ml-4">FAQ</h1>
          </div>

          <div className="flex-1 max-w-2xl relative">
            <input
              type="text"
              placeholder="Cari apa saja, kapan saja, dimana saja"
              className="w-full pl-4 pr-10 py-2.5 rounded-sm border border-red-300 focus:outline-none focus:ring-1 focus:ring-red-500 text-gray-800 placeholder-gray-400"
            />
            <button
              className="absolute right-0 top-0 h-full w-10 flex items-center justify-center bg-red-600 hover:bg-red-700 transition-colors rounded-sm rounded-l-none"
              onClick={() => displayMessageBox("Cari Diklik!")}
            >
              <Search size={20} className="text-white" />
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <Link
              to="/promo-page"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition"
            >
              <Tag size={20} />
            </Link>

            <Link
              to="/cart"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition"
            >
              <ShoppingCart size={20} />
            </Link>

            <Link
              to="/profile"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-md hover:bg-gray-100 transition"
            >
              <User size={20} />
            </Link>
          </div>
        </div>
      </header>

      <div className="w-full bg-red-600 text-white py-4 px-6 md:px-12 mt-4 shadow-md">
        <h2 className="text-xl font-bold">FAQ</h2>
        <p className="text-sm mt-1">Tanya jawab seputar Hawaii</p>
      </div>

      <div className="w-full px-4 md:px-12 py-6 bg-white shadow-md">
        <div className="w-full max-w-6xl mx-auto">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                onClick={() => handleToggleFAQ(item.id)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 ${
                    openFAQId === item.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFAQId === item.id && (
                <div className="px-4 pb-4 text-gray-700">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
