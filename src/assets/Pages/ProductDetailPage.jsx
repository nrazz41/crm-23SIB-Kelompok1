import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// Perbaiki path impor di sini
import { useCart } from "../contexts/CartContext"; 

// Impor komponen yang diperlukan
import ProductDetailsTabs from "../components/ProductDetailsTabs";
import ProductReviews from "../components/ProductReviews";

// Import ikon
import {
  FaStar,
  FaChevronRight,
  FaChevronDown,
  FaHeart,
  FaShareNodes,
  FaStore,
  FaCartShopping,
} from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

// Pastikan path ke file data Anda benar
import allProductsData from "../data/productsData.js";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // Panggil hook useCart untuk mendapatkan addItemToCart
  const { addItemToCart } = useCart();

  // Mencari produk berdasarkan ID
  const product = allProductsData.find((p) => p.id === parseInt(id));

  // State untuk menyimpan jumlah produk dan gambar utama yang ditampilkan
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");

  // Effect hook untuk mengatur gambar utama saat produk dimuat atau berubah
  useEffect(() => {
    if (product) {
      setMainImage(product.mainImageUrl);
    }
  }, [product]);

  // Tampilkan pesan jika produk tidak ditemukan
  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Produk Tidak Ditemukan
        </h1>
        <p className="text-gray-600 mb-6">
          Maaf, produk yang Anda cari tidak ada.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  // Fungsi untuk memformat angka menjadi Rupiah (sudah ada pengecekan NaN)
  const formatRupiah = (number) => {
    if (typeof number !== "number" || isNaN(number)) {
      return "Rp0";
    }
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  // --- FUNGSI HANDLER DENGAN LOGIKA KERANJANG BARU ---

  // Fungsi untuk tombol "Beli Langsung"
  const handleBuyNow = () => {
    // Pastikan properti shopId dan shopName ada di objek 'product' Anda
    const shopId = product.shop?.id || "default_shop_id";
    const shopName = product.shop?.name || "Toko Umum";
    const isMall = product.shop?.isMall || false;
    
    // PENTING: Sesuaikan struktur objek produk
    // GUNAKAN `itemId` DARI OBJEK PRODUCT JIKA ADA, BUKAN HANYA ID
    const productDataForCart = {
      itemId: product.itemId || product.id.toString(), // Tambahkan fallback `product.itemId`
      name: product.name,
      variant: product.options?.colors?.[0]?.name,
      originalPrice: product.originalPrice,
      currentPrice: product.currentPrice,
      imageUrl: product.mainImageUrl,
      hasDiscount: product.discountPercent > 0,
      discountPercent: product.discountPercent,
    };

    // --- DEBUGGING ---
    console.log("--- handleBuyNow ---");
    console.log("Product from allProductsData:", product);
    console.log("Data sent to addItemToCart:", productDataForCart, { shopId, shopName, isMall, quantity });
    // --- END DEBUGGING ---
    
    // Tambahkan item ke keranjang
    addItemToCart(productDataForCart, shopId, shopName, isMall, quantity);
    
    // Langsung navigasi ke halaman checkout
    navigate("/checkout");
  };

  // Fungsi untuk tombol "Keranjang"
  const handleAddToCart = () => {
    // Pastikan properti shopId dan shopName ada di objek 'product' Anda
    const shopId = product.shop?.id || "default_shop_id";
    const shopName = product.shop?.name || "Toko Umum";
    const isMall = product.shop?.isMall || false;

    // PENTING: Sesuaikan struktur objek produk
    // GUNAKAN `itemId` DARI OBJEK PRODUCT JIKA ADA, BUKAN HANYA ID
    const productDataForCart = {
      itemId: product.itemId || product.id.toString(), // Tambahkan fallback `product.itemId`
      name: product.name,
      variant: product.options?.colors?.[0]?.name,
      originalPrice: product.originalPrice,
      currentPrice: product.currentPrice,
      imageUrl: product.mainImageUrl,
      hasDiscount: product.discountPercent > 0,
      discountPercent: product.discountPercent,
    };
    
    // --- DEBUGGING ---
    console.log("--- handleAddToCart ---");
    console.log("Product from allProductsData:", product);
    console.log("Data sent to addItemToCart:", productDataForCart, { shopId, shopName, isMall, quantity });
    // --- END DEBUGGING ---

    // Tambahkan item ke keranjang
    addItemToCart(productDataForCart, shopId, shopName, isMall, quantity);

    // Tampilkan notifikasi
    alert(`${quantity} produk ${product.name} berhasil ditambahkan ke keranjang!`);
    
    // Navigasi ke halaman keranjang
    navigate("/cart");
  };

  // --- RENDERING KOMPONEN ---
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* ... (kode rendering di bawahnya tetap sama) ... */}

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 hidden sm:block">
        <div className="container mx-auto px-4 text-xs text-gray-500 flex items-center">
          <Link to="/" className="hover:text-[#E31E52]">
            Home
          </Link>
          <FaChevronRight className="mx-2 text-[10px]" />
          <span className="text-gray-900">
            {product.name.substring(0, 20)}...
          </span>
        </div>
      </div>

      {/* Main Content Layout (2 Kolom) */}
      <div className="container mx-auto p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Konten Kiri (Gambar, Detail, Toko, Deskripsi, Ulasan) */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
          {/* Bagian Atas: Gambar dan Harga/Opsi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Gambar Produk */}
            <div className="col-span-1">
              <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-white aspect-square mb-4">
                <img
                  src={
                    mainImage ||
                    "https://via.placeholder.com/500x500?text=No+Image"
                  }
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-xs px-3 py-1.5 rounded-tr-lg">
                  {product.options?.colors?.[0]?.name || "Tanpa Varian"}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {product.thumbnailUrls?.map((url, index) => (
                  <div
                    key={index}
                    className={`flex-shrink-0 w-16 h-16 rounded-md border-2 overflow-hidden cursor-pointer
                    ${
                      url === mainImage
                        ? "border-[#E31E52] ring-2 ring-[#E31E52] ring-opacity-50"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                    onClick={() => setMainImage(url)}
                  >
                    <img
                      src={url || "https://via.placeholder.com/64"}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Detail Produk di Sebelah Kanan Gambar */}
            <div className="col-span-1">
              <h1 className="text-2xl font-bold leading-tight mb-2 text-gray-900">
                {product.name}
              </h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span>Terjual {product.terjual || "0"}</span>
                <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-[#FFC107]" /> {product.rating || "0"}{" "}
                  ({product.ratingCount || "0"} rating)
                </span>
              </div>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-bold text-[#E31E52]">
                  {formatRupiah(product.currentPrice)}
                </span>
                {product.discountPercent > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-[#E31E52] bg-opacity-10 text-[#E31E52] font-bold px-1.5 py-0.5 rounded text-xs">
                      {product.discountPercent}%
                    </span>
                    <span className="text-gray-500 line-through">
                      {formatRupiah(product.originalPrice)}
                    </span>
                  </div>
                )}
              </div>

              {/* Product Options */}
              <div className="space-y-4">
                {/* Pilih kemasan (colors) */}
                {product.options?.colors &&
                  product.options.colors.length > 0 && (
                    <div>
                      <span className="text-sm text-gray-600">
                        Pilih kemasan:{" "}
                      </span>
                      <span className="font-semibold text-gray-800">
                        {product.options.colors[0]?.name}
                      </span>
                      <div className="mt-2 flex gap-2">
                        {product.options.colors.map((color, index) => (
                          <div
                            key={index}
                            className="relative border-2 border-[#E31E52] ring-2 ring-[#E31E52] ring-opacity-50 rounded-lg p-3 text-sm font-semibold cursor-pointer"
                          >
                            {color.name}
                            {color.discount > 0 && (
                              <span className="absolute -top-2 -right-2 bg-[#E31E52] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                                {color.discount}%
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                {/* Pilih rasa (sizes) */}
                {product.options?.sizes && product.options.sizes.length > 0 && (
                  <div>
                    <span className="text-sm text-gray-600">Pilih rasa: </span>
                    <span className="font-semibold text-gray-800">
                      {product.options.sizes[0]?.name}
                    </span>
                    <div className="mt-2 flex gap-2">
                      {product.options.sizes.map((size, index) => (
                        <div
                          key={index}
                          className="relative border-2 border-[#E31E52] ring-2 ring-[#E31E52] ring-opacity-50 rounded-lg p-3 text-sm font-semibold cursor-pointer"
                        >
                          {size.name}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>{" "}
          {/* Akhir dari bagian gambar + detail */}
          {/* ... Bagian toko, pengiriman, promosi (tetap sama) ... */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">Promosi</h3>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">
                Cashback
              </span>
              <span className="text-sm text-gray-800">
                Bebas Ongkir hingga Rp 15.000
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-full">
                Diskon
              </span>
              <span className="text-sm text-gray-800">
                Diskon hingga Rp 3.000
              </span>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-[#E31E52] font-bold cursor-pointer hover:underline">
              <FaChevronDown />
              Lihat Semua Promo
            </div>
          </div>
          {/* Komponen Tab Detail Produk & Ulasan Pembeli */}
          <ProductDetailsTabs product={product} />
          <ProductReviews product={product} />
        </div>

        {/* Konten Kanan (Keranjang Sticky) */}
        <div className="col-span-1 lg:col-span-2 sticky top-4 lg:top-8 self-start flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            {/* Mengubah warna tombol 'Beli Lokal' menjadi merah */}
            <button className="w-full py-3 font-bold bg-red-100 text-red-600 rounded-lg text-sm hover:bg-red-200 transition mb-6">
              Beli Lokal
            </button>
            <h3 className="font-bold text-gray-800 mb-4">
              Atur jumlah dan catatan
            </h3>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={mainImage || "https://via.placeholder.com/40"}
                alt="Item thumbnail"
                className="w-10 h-10 rounded-md object-cover"
              />
              <p className="text-xs text-gray-600 leading-tight">
                {/* Gunakan optional chaining untuk mencegah error */}
                {product.options?.colors?.[0]?.name} -{" "}
                {product.options?.sizes?.[0]?.name}
              </p>
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-10">
                <button
                  className="w-10 text-gray-500 text-xl hover:bg-gray-100 transition"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center font-bold text-gray-800 text-base border-x border-gray-300 focus:outline-none"
                />
                <button
                  className="w-10 text-gray-500 text-xl hover:bg-gray-100 transition"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
              <span className="text-xs text-gray-500">
                Stok:{" "}
                <span className="font-semibold text-gray-800">
                  {product.stock}
                </span>
              </span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm text-gray-600">Subtotal</span>
              <div className="flex flex-col items-end">
                {product.discountPercent > 0 && (
                  <span className="text-xs text-gray-500 line-through">
                    {formatRupiah(product.originalPrice * quantity)}
                  </span>
                )}
                <span className="text-2xl font-bold text-[#E31E52]">
                  {formatRupiah(product.currentPrice * quantity)}
                </span>
              </div>
            </div>
            <div className="flex gap-3 mb-6">
              {/* TOMBOL "BELI LANGSUNG" DENGAN LOGIKA onClick */}
              <button
                onClick={handleBuyNow}
                className="flex-1 py-4 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition flex items-center justify-center"
              >
                Beli Langsung
              </button>
              
              {/* TOMBOL "KERANJANG" DENGAN LOGIKA onClick */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 font-bold text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition flex items-center justify-center gap-2"
              >
                <FaCartShopping /> Keranjang
              </button>
            </div>
            <div className="flex justify-around text-sm text-gray-600">
              <button className="flex items-center gap-2 hover:text-[#E31E52] transition">
                <FaHeart /> Wishlist
              </button>
              <button className="flex items-center gap-2 hover:text-[#E31E52] transition">
                <FaShareNodes /> Share
              </button>
            </div>
          </div>
          {/* Bagian toko (jika ada) */}
          {product.shop && (
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                  <img
                    src={
                      product.shop.imageUrl || "https://via.placeholder.com/48"
                    }
                    alt="Shop Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 text-lg flex items-center gap-2">
                    {product.shop.name}
                    {product.shop.isPowerMerchant && (
                      <span className="bg-[#E31E52] text-white text-[10px] font-bold px-1 py-0.5 rounded-full">
                        Power Merchant
                      </span>
                    )}
                  </h3>
                  <div className="text-sm text-gray-500">
                    <span>{product.shop.city}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center gap-1">
                      <FaStar className="text-[#FFC107]" />{" "}
                      {product.shop.rating} ({product.shop.ratingCount})
                    </span>
                  </div>
                </div>
              </div>
              <Link
                to={`/shop/${product.shop.id}`}
                className="block w-full py-3 text-center text-[#E31E52] font-bold border border-[#E31E52] rounded-lg hover:bg-red-50 transition"
              >
                <FaStore className="inline-block mr-2" /> Lihat Toko
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;