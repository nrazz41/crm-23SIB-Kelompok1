import React from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

// --- DATA DUMMY PRODUK LENGKAP (Harus sama persis dengan yang di HomePage.jsx) ---
const allProductsData = [
  // Produk Pilihan Hari Ini (Supermarket)
  {
    id: 1,
    name: "Indomie Goreng Jumbo",
    price: "3.500",
    stock: 200,
    imageUrl: "#",
    description: "Mie instan goreng favorit keluarga dengan porsi jumbo yang lebih mengenyangkan. Rasa bumbu yang kaya dan khas, mudah disiapkan kapan saja.",
    type: "pilihan",
  },
  {
    id: 2,
    name: "Aqua Botol 1500ml",
    price: "7.000",
    stock: 150,
    imageUrl: "#",
    description: "Air mineral murni dari sumber pegunungan terpilih. Menyegarkan dan cocok untuk memenuhi kebutuhan hidrasi harian Anda dan keluarga.",
    type: "pilihan",
  },
  {
    id: 3,
    name: "Sunlight Pencuci Piring 750ml",
    price: "15.000",
    stock: 80,
    imageUrl: "#",
    description: "Cairan pencuci piring yang ampuh membersihkan lemak membandel dan bau tak sedap. Dengan aroma segar yang menyenangkan.",
    type: "pilihan",
  },
  {
    id: 4,
    name: "Kentang Curah 1 Kg",
    price: "18.000",
    stock: 50,
    imageUrl: "#",
    description: "Kentang segar pilihan dengan kualitas terbaik, cocok untuk berbagai olahan masakan, mulai dari gorengan hingga sup.",
    type: "pilihan",
  },
  {
    id: 5,
    name: "Nugget Ayam Fiesta 500gr",
    price: "45.000",
    stock: 60,
    imageUrl: "#",
    description: "Nugget ayam siap saji yang lezat dan praktis. Terbuat dari daging ayam pilihan, cocok sebagai lauk atau camilan keluarga.",
    type: "pilihan",
  },
];
// --- AKHIR DATA DUMMY ---

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = allProductsData.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Produk Tidak Ditemukan</h1>
        <p className="text-gray-600 mb-6">Maaf, produk yang Anda cari tidak ada.</p>
        <Link
          to="/"
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 sm:p-6 border-b border-gray-200 flex items-center justify-between">
          <Link
            to="/"
            className="text-red-600 hover:text-red-800 font-semibold flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
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
          <h1 className="text-2xl font-bold text-gray-800">Detail Produk</h1>
        </div>

        <div className="flex flex-col md:flex-row p-4 sm:p-6 gap-6">
          <div className="md:w-1/2 flex justify-center items-center p-4 bg-gray-50 rounded-lg">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="max-w-full h-auto max-h-80 object-contain"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {product.name}
            </h2>
            <p className="text-xl text-red-600 font-bold mb-4">
              Rp {product.price}
            </p>
            <p className="text-gray-700 mb-4 text-base leading-relaxed">
              {product.description}
            </p>
            <div className="flex items-center text-gray-600 mb-6">
              <span className="font-semibold mr-2">Stok:</span>
              <span className="text-lg">{product.stock}</span>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 bg-red-600 text-white py-3 rounded-lg flex items-center justify-center font-semibold hover:bg-red-700 transition-colors">
                <ShoppingCart className="mr-2" size={20} />
                Masukkan Keranjang
              </button>
              <button className="flex-1 border-2 border-red-600 text-red-600 py-3 rounded-lg flex items-center justify-center font-semibold hover:bg-red-50 transition-colors">
                Beli Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;