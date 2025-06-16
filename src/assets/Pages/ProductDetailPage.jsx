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
    imageUrl: "/images/indomie-goreng.png",
    description: "Mie instan goreng favorit keluarga dengan porsi jumbo yang lebih mengenyangkan. Rasa bumbu yang kaya dan khas, mudah disiapkan kapan saja.",
    type: "pilihan",
  },
  {
    id: 2,
    name: "Aqua Botol 1500ml",
    price: "7.000",
    stock: 150,
    imageUrl: "/images/aqua-1.5l.png",
    description: "Air mineral murni dari sumber pegunungan terpilih. Menyegarkan dan cocok untuk memenuhi kebutuhan hidrasi harian Anda dan keluarga.",
    type: "pilihan",
  },
  {
    id: 3,
    name: "Sunlight Pencuci Piring 750ml",
    price: "15.000",
    stock: 80,
    imageUrl: "/images/sunlight.png",
    description: "Cairan pencuci piring yang ampuh membersihkan lemak membandel dan bau tak sedap. Dengan aroma segar yang menyenangkan.",
    type: "pilihan",
  },
  {
    id: 4,
    name: "Kentang Curah 1 Kg",
    price: "18.000",
    stock: 50,
    imageUrl: "/images/kentang.png",
    description: "Kentang segar pilihan dengan kualitas terbaik, cocok untuk berbagai olahan masakan, mulai dari gorengan hingga sup.",
    type: "pilihan",
  },
  {
    id: 5,
    name: "Nugget Ayam Fiesta 500gr",
    price: "45.000",
    stock: 60,
    imageUrl: "/images/nugget-fiesta.png",
    description: "Nugget ayam siap saji yang lezat dan praktis. Terbuat dari daging ayam pilihan, cocok sebagai lauk atau camilan keluarga.",
    type: "pilihan",
  },
  {
    id: 6,
    name: "Susu UHT Ultra Milk Coklat 1 Liter",
    price: "17.500",
    stock: 90,
    imageUrl: "/images/ultra-milk.png",
    description: "Susu UHT rasa coklat dengan kandungan nutrisi lengkap. Praktis untuk diminum kapan saja dan di mana saja, disukai anak-anak maupun dewasa.",
    type: "pilihan",
  },
  {
    id: 7,
    name: "Beras Cap Ayam Jago 5 Kg",
    price: "65.000",
    stock: 40,
    imageUrl: "/images/beras-5kg.png",
    description: "Beras pulen dan berkualitas tinggi, cocok untuk nasi sehari-hari. Hasil masakan nasi lebih enak dan wangi.",
    type: "pilihan",
  },
  {
    id: 8,
    name: "Minyak Goreng Sania 2 Liter",
    price: "36.000",
    stock: 70,
    imageUrl: "/images/minyak-sania.png",
    description: "Minyak goreng berkualitas baik, tidak mudah keruh, dan cocok untuk segala jenis masakan gorengan.",
    type: "pilihan",
  },
  {
    id: 9,
    name: "Es Krim Walls Magnum Classic",
    price: "18.000",
    stock: 30,
    imageUrl: "/images/magnum.png",
    description: "Es krim vanilla lembut dilapisi coklat tebal dan renyah. Sensasi rasa premium yang memanjakan lidah.",
    type: "pilihan",
  },
  {
    id: 10,
    name: "Telur Ayam Negeri 1 Kg (sekitar 15-16 butir)",
    price: "28.000",
    stock: 25,
    imageUrl: "/images/telur-ayam.png",
    description: "Telur ayam negeri segar, sumber protein penting untuk kebutuhan gizi keluarga. Cocok untuk direbus, digoreng, atau sebagai bahan kue.",
    type: "pilihan",
  },
  {
    id: 11,
    name: "Sabun Mandi Batang Lifebuoy Merah 85gr",
    price: "3.000",
    stock: 120,
    imageUrl: "/images/sabun-lifebuoy.png",
    description: "Sabun mandi batang antibakteri Lifebuoy, melindungi dari kuman penyebab masalah kesehatan. Busa melimpah dan membersihkan secara menyeluruh.",
    type: "pilihan",
  },
  {
    id: 12,
    name: "Pasta Gigi Pepsodent Pencegah Gigi Berlubang 190gr",
    price: "13.500",
    stock: 90,
    imageUrl: "/images/pepsodent.png",
    description: "Pasta gigi dengan formula pro-fluoride dan kalsium aktif untuk mencegah gigi berlubang dan menjaga gigi tetap kuat. Nafas lebih segar sepanjang hari.",
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