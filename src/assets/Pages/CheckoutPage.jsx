// src/assets/pages/CheckoutPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, ChevronRight, ShoppingCart, Info, Search, User, Percent, Bell } from 'lucide-react';
// PERBAIKI JALUR IMPOR DI SINI: dari pages/ naik satu level (../), lalu masuk ke contexts/
import { useCart } from "../contexts/CartContext"; // JALUR YANG BENAR

// Fungsi helper untuk memformat mata uang
const formatCurrency = (amount) => {
  return `Rp ${amount.toLocaleString('id-ID')}`;
};

const CheckoutPage = () => {
  const { getSelectedCartItems } = useCart(); // Ambil fungsi untuk mendapatkan item terpilih
  const [productsToCheckout, setProductsToCheckout] = useState([]);

  // Ambil item yang dipilih dari keranjang saat komponen dimuat
  useEffect(() => {
    const selected = getSelectedCartItems();
    setProductsToCheckout(selected);
  }, [getSelectedCartItems]);


  // Dummy data untuk simulasi biaya dan total
  // Hitung ulang berdasarkan productsToCheckout yang sudah filter
  const subtotalProducts = productsToCheckout.reduce((sum, item) => sum + (item.currentPrice * item.qty), 0);
  const shippingFee = 25000; // Contoh biaya pengiriman untuk swalayan
  const serviceFee = 1000; // Biaya layanan

  const voucherDiscount = 5000; // Simulasi voucher diskon
  const hawaiiCoinUsed = 80; // Simulasi koin yang digunakan

  const totalPayment = (subtotalProducts + shippingFee + serviceFee) - voucherDiscount - hawaiiCoinUsed;

  // Fungsi untuk menampilkan message box (seperti yang digunakan di HomePage)
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

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-100">
      {/* Header (Mirip dengan halaman lain, dengan logo Hawaii) */}
      <div className="w-full bg-white py-3 px-4 md:px-8 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-2 text-red-600 font-bold text-2xl">
            <Link to="/">
              <img
                src="/images/logo hawai.png" // Menggunakan logo Hawaii
                alt="Logo Hawaii"
                className="w-11 h-11 rounded-full border-2 border-red-600"
              />
            </Link>
            <span>HAWAII</span>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-xl font-bold text-gray-800">Checkout</h1>
          </div>
          <div className="flex items-center space-x-2">
            {/* Icons on the right, for consistency with other pages */}
            <Link to="/notification" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition">
              <Bell size={20} />
            </Link>
            <Link to="/promo-page" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition">
              <Percent size={20} />
            </Link>
            <Link to="/cart" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition">
              <ShoppingCart size={20} />
            </Link>
            <Link to="/signin" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-red-600 shadow-md hover:bg-gray-200 transition">
              <User size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Checkout Content */}
      <div className="max-w-4xl mx-auto w-full bg-white rounded-lg shadow-lg my-6 md:my-8">
        {/* Alamat Pengiriman */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center text-red-600 font-semibold mb-3">
            <MapPin size={20} className="mr-2" />
            Alamat Pengiriman
          </div>
          <div className="flex items-start justify-between">
            <div>
              <p className="font-semibold text-gray-800">Fadlan (+62) 895410950887</p>
              <p className="text-gray-600 text-sm">Gg. Intisari - Kel. Umbansari - Kec. Rumbai - PEKANBARU  28265</p>
            </div>
            <span className="text-red-600 border border-red-600 px-2 py-0.5 rounded-full text-xs font-semibold">Utama</span>
            <button className="text-blue-600 font-semibold text-sm ml-4" onClick={() => displayMessageBox("Fungsi 'Ubah Alamat' akan diimplementasikan!")}>Ubah</button>
          </div>
          <div className="flex items-center mt-4">
            <input type="checkbox" id="dropshipper" className="mr-2" />
            <label htmlFor="dropshipper" className="text-gray-700 text-sm">Kirim sebagai Dropshipper</label>
          </div>
        </div>

        {/* Produk Dipesan Header */}
        <div className="p-4 border-b border-gray-200 hidden md:flex justify-between items-center text-gray-500 font-semibold text-sm">
          <div className="flex-1">Produk Dipesan</div>
          <div className="w-24 text-center">Harga Satuan</div>
          <div className="w-16 text-center">Jumlah</div>
          <div className="w-24 text-right">Subtotal Produk</div>
        </div>

        {/* Produk-produk */}
        {productsToCheckout.length > 0 ? (
          productsToCheckout.map(product => (
            <div key={product.id || product.itemId} className="p-4 border-b border-gray-200">
              {product.shopName && (
                <div className="flex items-center space-x-2 mb-3">
                  {product.isMall && (
                    <span className="bg-red-600 text-white px-2 py-0.5 text-xs font-bold rounded-sm">Mall.ORI</span>
                  )}
                  <span className="font-semibold text-gray-800">{product.shopName}</span>
                  <button className="text-blue-600 text-sm hover:text-blue-700" onClick={() => displayMessageBox("Fungsi 'Chat Toko' akan diimplementasikan!")}>Chat sekarang</button>
                </div>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1">
                  <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-contain mr-3 border rounded" />
                  <div>
                    <p className="text-gray-800 font-medium line-clamp-2">{product.name}</p>
                    {product.variant && <p className="text-sm text-gray-500">{product.variant}</p>}
                  </div>
                </div>
                <div className="hidden md:block w-24 text-center text-gray-800">{formatCurrency(product.currentPrice)}</div> {/* Menggunakan currentPrice */}
                <div className="hidden md:block w-16 text-center text-gray-800">{product.qty}</div>
                <div className="hidden md:block w-24 text-right text-gray-800 font-semibold">{formatCurrency(product.currentPrice * product.qty)}</div> {/* Menggunakan currentPrice */}
              </div>
              {product.isProtection && (
                <div className="mt-3 text-sm text-gray-600 flex items-center justify-between">
                  <span>Melindungi produkmu dari kerusakan/kerugian total selama 6 bulan. <Link to="#" className="text-blue-600" onClick={() => displayMessageBox("Fungsi 'Pelajari Proteksi' akan diimplementasikan!")}>Pelajari</Link></span>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">Tidak ada produk yang dipilih untuk checkout.</div>
        )}

        {/* Voucher Toko */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <div className="flex items-center text-red-600">
            <img src="https://placehold.co/20x20/FF0000/FFFFFF?text=V" alt="Voucher Icon" className="mr-2" /> {/* Placeholder icon */}
            <span>Voucher Toko</span>
          </div>
          <button className="text-blue-600 font-semibold text-sm" onClick={() => displayMessageBox("Fungsi 'Pilih Voucher Toko' akan diimplementasikan!")}>Pilih Voucher</button>
        </div>

        {/* Pesan & Opsi Pengiriman */}
        <div className="p-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <p className="text-gray-700 font-semibold mb-2">Pesan:</p>
            <textarea
              placeholder="(Opsional) Tinggalkan pesan"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-300 h-20 md:h-auto resize-none"
            ></textarea>
          </div>
          <div className="w-full md:w-1/2 md:ml-4">
            <p className="text-gray-700 font-semibold mb-2">Opsi Pengiriman: <span className="font-normal text-gray-600">Reguler</span></p>
            <div className="flex justify-between items-center mb-2">
              <p className="text-blue-600 text-sm flex items-center">
                <Info size={14} className="mr-1" /> Garansi tiba: 29 Jun - 1 Jul
              </p>
              <button className="text-blue-600 font-semibold text-sm" onClick={() => displayMessageBox("Fungsi 'Ubah Opsi Pengiriman' akan diimplementasikan!")}>Ubah</button>
              <span className="font-semibold text-gray-800">{formatCurrency(shippingFee)}</span>
            </div>
            <p className="text-gray-500 text-xs">Voucher s/d Rp10.000 jika pesanan belum tiba 1 Jul 2025. <Info size={12} className="inline ml-1" /></p>
          </div>
        </div>
      </div>

      {/* Bagian Bawah Checkout: Voucher Hawaii, Koin Hawaii, Metode Pembayaran, Rincian Pembayaran */}
      <div className="max-w-4xl mx-auto w-full bg-white rounded-lg shadow-lg mb-6 md:mb-8 p-4 md:p-6">
        {/* Voucher Hawaii */}
        <div className="border-b border-gray-200 pb-4 mb-4 flex justify-between items-center">
          <div className="flex items-center text-red-600">
            <img src="https://placehold.co/20x20/FF0000/FFFFFF?text=V" alt="Voucher Icon" className="mr-2" /> {/* Placeholder icon */}
            <span>Voucher Hawaii</span> {/* Mengubah dari Shopee ke Hawaii */}
          </div>
          <button className="text-blue-600 font-semibold text-sm" onClick={() => displayMessageBox("Fungsi 'Pilih Voucher Hawaii' akan diimplementasikan!")}>Pilih Voucher</button>
        </div>

        {/* Koin Hawaii */}
        <div className="border-b border-gray-200 pb-4 mb-4 flex justify-between items-center">
          <div className="flex items-center text-gray-700">
            <img src="https://placehold.co/20x20/FFD700/000000?text=K" alt="Coin Icon" className="mr-2" /> {/* Placeholder icon */}
            <span>Koin Hawaii</span> {/* Mengubah dari Shopee ke Hawaii */}
            <span className="ml-2 text-red-600 font-bold">Tukarkan {hawaiiCoinUsed} Koin Hawaii</span> {/* Mengubah dari Shopee ke Hawaii */}
          </div>
          <div className="flex items-center">
            <span className="text-red-600 font-bold mr-2">-{formatCurrency(hawaiiCoinUsed)}</span>
            <input type="checkbox" checked={hawaiiCoinUsed > 0} readOnly className="form-checkbox text-red-600" />
          </div>
        </div>

        {/* Metode Pembayaran */}
        <div className="pb-4 mb-4">
          <p className="text-gray-700 font-semibold mb-3">Metode Pembayaran</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Saldo HawaiiPay (Rp50.605)", "COD", "COD - Cek Dulu", "Transfer Bank", "Kartu Kredit/Debit", "Cicilan Kartu Kredit"].map((method, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-md border text-sm ${index === 0 ? 'bg-red-600 text-white border-red-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                onClick={() => displayMessageBox(`Metode pembayaran ${method} akan dipilih!`)}
              >
                {method}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {["BRI Direct Debit", "BCA OneKlik", "Bayar Tunai di Mitra/Agen"].map((method, index) => (
              <button
                key={index + 6} // Offset index untuk keunikan
                className="px-4 py-2 rounded-md border bg-white text-gray-700 border-gray-300 hover:bg-gray-50 text-sm"
                onClick={() => displayMessageBox(`Metode pembayaran ${method} akan dipilih!`)}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        {/* Rincian Pembayaran */}
        <div className="pt-4 border-t border-gray-200">
          <h3 className="text-gray-700 font-semibold text-lg mb-3">Rincian Pembayaran</h3>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600">Subtotal Pesanan</p>
            <p className="text-gray-800">{formatCurrency(subtotalProducts)}</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600">Subtotal Pengiriman</p>
            <p className="text-gray-800">{formatCurrency(shippingFee)}</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-600 flex items-center">
              Biaya Layanan <Info size={14} className="ml-1 text-gray-400" />
            </p>
            <p className="text-gray-800">{formatCurrency(serviceFee)}</p>
          </div>
          <div className="flex justify-between items-center font-bold text-xl mt-4">
            <p className="text-gray-800">Total Pembayaran</p>
            <p className="text-red-600">{formatCurrency(totalPayment)}</p>
          </div>
        </div>

        {/* Buat Pesanan Button */}
        <div className="mt-6">
          <button
            className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors"
            onClick={() => displayMessageBox("Fungsi 'Buat Pesanan' akan diimplementasikan!")}
          >
            Buat Pesanan
          </button>
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

export default CheckoutPage;
