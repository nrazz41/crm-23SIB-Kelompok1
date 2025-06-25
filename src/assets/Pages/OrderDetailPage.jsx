// src/assets/pages/OrderDetailPage.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, HelpCircle, Star, MessageSquare, Phone, MapPin, Copy } from 'lucide-react';

// Fungsi helper untuk memformat mata uang
const formatCurrency = (amount) => {
  return `Rp ${amount.toLocaleString('id-ID')}`;
};

// Data dummy untuk rincian pesanan (mirip dengan gambar yang diberikan)
// Anda bisa mengintegrasikan ini dengan data pesanan Anda yang sebenarnya
const dummyOrderDetail = {
  id: "HAW20240624-1",
  status: "Selesai",
  shopName: "Ayam Geprek Gold Chick - Rumbai",
  shopAddress: "Jl. Yos Sudarso Rumbai No.365 (Dekat Dcozy Cafe), Umban Sari, Rumbai, Pekanbaru, RUMBAI, KOTA PEKANBARU, RIAU",
  driverName: "WAHYUDI",
  driverRating: 5.0,
  driverPlate: "BM2112FX",
  customerAddress: "Harvia Kost, JALAN Telagasari No. 2, Umban Sari, RUMBAI, KOTA PEKANBARU, RIAU",
  customerPhone: "n.zii41 - (+62) 813-7834-7549",
  products: [
    {
      name: "[FS] Paket Nasi Ayam Geprek Sambal Matah",
      variant: "Random ( No Request ), Perlu Alat Makan",
      qty: 1,
      price: 21592,
      originalPrice: 26990, // Harga sebelum diskon
      imageUrl: "https://placehold.co/80x80/FF6347/FFFFFF?text=Ayam+Geprek", // Placeholder
    },
  ],
  subtotal: 21592,
  voucherDiscount: 14035,
  deliveryFee: 6000,
  deliveryFeeDiscount: 1000, // Misal ada diskon ongkir
  packagingFee: 2000,
  totalPaid: 14557, // Total setelah diskon dan biaya
  notes: "Bang mau sendokk bg",
  orderNo: "2564317609228288736",
  orderTime: "10 Mei 2025 18:58",
  paymentMethod: "SeaBank Bayar Instan",
};

const OrderDetailPage = () => {
  const { id } = useParams(); // Mengambil ID pesanan dari URL jika digunakan routing dinamis

  // Dalam aplikasi nyata, Anda akan mengambil data pesanan berdasarkan ID ini dari API atau context
  // Untuk contoh ini, kita menggunakan dummy data di atas.
  const order = dummyOrderDetail; // Menggunakan dummy data langsung

  if (!order) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Pesanan tidak ditemukan.</p>
      </div>
    );
  }

  const copyToClipboard = (text, message) => {
    // Fallback for document.execCommand('copy') as navigator.clipboard.writeText() might not work in iframes
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed"; // Avoid scrolling to bottom
    textArea.style.left = "-9999px"; // Hide from view
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      alert(message); // Using alert as per previous instructions, consider custom modal if needed
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Gagal menyalin. Silakan coba lagi secara manual.');
    } finally {
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-100">
      {/* Header */}
      <div className="w-full bg-white py-3 px-4 md:px-8 shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-red-600">
            <ArrowLeft size={24} />
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Rincian Pesananmu</h1>
          <button className="text-gray-500 hover:text-gray-700">
            <HelpCircle size={24} />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow w-full max-w-4xl bg-white rounded-lg shadow-lg my-6 md:my-8 p-4 md:p-6">
        {/* Status Pengiriman */}
        <div className="bg-red-500 text-white p-3 rounded-t-lg flex items-center justify-between">
          <span className="font-semibold text-lg">Pengiriman Hemat</span>
          <img src="/images/delivery-truck.png" alt="Delivery" className="h-6 w-6" /> {/* Placeholder icon */}
        </div>
        <div className="bg-white p-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-red-600 mb-2">{order.status}</h2>
          <p className="text-gray-700 text-sm">Mau coba menu lainnya? Pesan lagi di ShopeeFood</p>
          {/* Progress bar dummy */}
          <div className="flex justify-between items-center mt-4 text-gray-500 text-xs">
            <div className="flex flex-col items-center">
              <img src="/images/order-placed.png" alt="Order Placed" className="h-8 w-8 opacity-75" />
              <span>Dipesan</span>
            </div>
            <div className="flex-1 h-0.5 bg-red-400 mx-1"></div>
            <div className="flex flex-col items-center">
              <img src="/images/cooking.png" alt="Cooking" className="h-8 w-8 opacity-75" />
              <span>Dimasak</span>
            </div>
            <div className="flex-1 h-0.5 bg-red-400 mx-1"></div>
            <div className="flex flex-col items-center">
              <img src="/images/delivery.png" alt="Delivery" className="h-8 w-8 opacity-75" />
              <span>Dikirim</span>
            </div>
            <div className="flex-1 h-0.5 bg-red-400 mx-1"></div>
            <div className="flex flex-col items-center">
              <img src="/images/delivered.png" alt="Delivered" className="h-8 w-8" />
              <span>Selesai</span>
            </div>
          </div>
        </div>

        {/* Driver Info */}
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/images/driver-wahyudi.png" alt="WAHYUDI" className="w-12 h-12 rounded-full border-2 border-red-500" />
            <div>
              <p className="font-bold text-gray-800">{order.driverName} (Driver)</p>
              <p className="text-sm text-gray-600 flex items-center">
                <Star size={14} className="text-yellow-500 mr-1" fill="currentColor"/> {order.driverRating} <span className="ml-2">· {order.driverPlate}</span>
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-red-600">
              <Phone size={20} />
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-red-600">
              <MessageSquare size={20} />
            </button>
          </div>
        </div>

        {/* Pick Up Location */}
        <div className="p-4 border-b border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Diambil dari</p>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <MapPin size={18} className="text-red-500" />
              <span className="font-semibold text-gray-800">{order.shopName}</span>
            </div>
            <button className="text-sm text-gray-500 hover:text-gray-700">
              <MessageSquare size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-600">{order.shopAddress}</p>
        </div>

        {/* Delivery Location */}
        <div className="p-4 border-b border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Diantar ke</p>
          <p className="font-semibold text-gray-800">{order.customerAddress}</p>
          <p className="text-sm text-gray-600">{order.customerPhone}</p>
        </div>

        {/* Rincian Pesanan Menu */}
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Rincian Pesanan Menu</h3>
          {order.products.map((product, index) => (
            <div key={index} className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-3">
                <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <p className="text-gray-800 font-medium">{product.qty} x {product.name}</p>
                  {product.variant && <p className="text-sm text-gray-500">{product.variant}</p>}
                </div>
              </div>
              <div className="text-right">
                <p className="text-gray-800 font-semibold">{formatCurrency(product.price)}</p>
                {product.originalPrice && product.originalPrice > product.price && (
                  <p className="text-gray-500 text-xs line-through">{formatCurrency(product.originalPrice)}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Ringkasan Pembayaran */}
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Subtotal Pesanan ({order.products.length} menu)</h3>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700">Subtotal Pesanan</p>
            <p className="text-gray-800 font-semibold">{formatCurrency(order.subtotal)}</p>
          </div>
          {order.voucherDiscount > 0 && (
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-700">Voucher Diskon</p>
              <p className="text-red-600 font-semibold">- {formatCurrency(order.voucherDiscount)}</p>
            </div>
          )}
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-700 flex items-center">
              Biaya Pengiriman <HelpCircle size={14} className="text-gray-400 ml-1" />
            </p>
            <div className="text-right">
              {order.deliveryFeeDiscount > 0 ? (
                <>
                  <p className="text-gray-500 text-xs line-through">{formatCurrency(order.deliveryFee)}</p>
                  <p className="text-gray-800 font-semibold">{formatCurrency(order.deliveryFee - order.deliveryFeeDiscount)}</p>
                </>
              ) : (
                <p className="text-gray-800 font-semibold">{formatCurrency(order.deliveryFee)}</p>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-700">Biaya Pengemasan</p>
            <p className="text-gray-800 font-semibold">{formatCurrency(order.packagingFee)}</p>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-gray-200">
            <div className="flex flex-col items-start">
              <span className="text-green-600 font-bold text-lg">Paid</span>
              <p className="text-gray-500 text-sm">Sudah termasuk pajak</p>
            </div>
            <p className="text-red-600 font-bold text-2xl">{formatCurrency(order.totalPaid)}</p>
          </div>
        </div>

        {/* Catatan Tambahan & Detail Pesanan */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex justify-between items-start mb-2">
            <p className="text-gray-700">Catatan Tambahan</p>
            <p className="text-gray-800 text-right">{order.notes}</p>
          </div>
          <div className="flex justify-between items-start mb-2">
            <p className="text-gray-700">No. Pesanan</p>
            <div className="flex items-center">
              <p className="text-gray-800 mr-2">{order.orderNo}</p>
              <button
                onClick={() => copyToClipboard(order.orderNo, 'Nomor pesanan berhasil disalin!')}
                className="text-red-600 hover:text-red-700 flex items-center text-sm"
              >
                SALIN <Copy size={14} className="ml-1"/>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-start mb-2">
            <p className="text-gray-700">Waktu Pemesanan</p>
            <p className="text-gray-800">{order.orderTime}</p>
          </div>
          <div className="flex justify-between items-start mb-2">
            <p className="text-gray-700">Pembayaran</p>
            <p className="text-gray-800">{order.paymentMethod}</p>
          </div>
          <div className="flex justify-between items-start">
            <p className="text-gray-700">Bukti Pengiriman</p>
            <button className="text-blue-600 hover:text-blue-700">Lihat Foto</button>
          </div>
        </div>

        {/* Action Button: Pesan Lagi */}
        <div className="p-4 border-t border-gray-200">
          <button className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-700 transition-colors">
            Pesan lagi
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

export default OrderDetailPage;
