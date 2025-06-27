// src/pages/ProductDetailPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/CartContext";

import ProductDetailsTabs from "../components/ProductDetailsTabs";
import ProductReviews from "../components/ProductReviews";

import {
  FaStar,
  FaChevronRight,
  FaHeart,
  FaCartShopping,
} from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";

import allProductsData from "../data/productsData.js";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addItemToCart } = useCart();

  const product = allProductsData.find((p) => p.id.toString() === id);

  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(
    product?.mainImageUrl || product?.imageUrl || ""
  );

  useEffect(() => {
    if (product) {
      setMainImage(product.mainImageUrl || product.imageUrl);
    }
  }, [product]);

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

  // Fungsi format harga
  const formatCurrency = (value) => {
    const number = Number(value ?? 0);
    if (!isFinite(number) || isNaN(number)) return "Rp0";
    return number.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  const prepareProductDataForCart = () => {
    const shopId = product.shop?.id || "default_shop_id";
    const shopName = product.shop?.name || "Toko Umum";
    const isMall = product.shop?.isMall || false;
    const currentPrice = product.currentPrice ?? product.price ?? 0;

    return {
      itemId: product.id.toString(),
      name: product.name,
      variant: product.options?.colors?.[0]?.name || "Default",
      originalPrice: product.originalPrice ?? 0,
      currentPrice,
      imageUrl: product.mainImageUrl || product.imageUrl,
      hasDiscount: product.discountPercent > 0,
      discountPercent: product.discountPercent || 0,
      shopId,
      shopName,
      isMall,
    };
  };

  const handleAddToCart = () => {
    const productData = prepareProductDataForCart();
    addItemToCart(
      productData,
      productData.shopId,
      productData.shopName,
      productData.isMall,
      quantity
    );
    alert(`${quantity} produk ${product.name} berhasil ditambahkan ke keranjang!`);
  };

  const handleBuyNow = () => {
    const productData = prepareProductDataForCart();
    addItemToCart(
      productData,
      productData.shopId,
      productData.shopName,
      productData.isMall,
      quantity
    );
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <div className="bg-gray-100 py-4 hidden sm:block">
        <div className="container mx-auto px-4 text-xs text-gray-500 flex items-center">
          <Link to="/" className="hover:text-[#E31E52]">Home</Link>
          <FaChevronRight className="mx-2 text-[10px]" />
          <span className="text-gray-900">{product.name.substring(0, 20)}...</span>
        </div>
      </div>

      <div className="container mx-auto p-4 sm:p-8 grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Gambar & Thumbnail */}
        <div className="col-span-1 lg:col-span-3 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-1">
              <div className="relative rounded-lg overflow-hidden border bg-white aspect-square mb-4">
                <img
                  src={mainImage || "https://via.placeholder.com/500x500?text=No+Image"}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 left-0 bg-black bg-opacity-60 text-white text-xs px-3 py-1.5 rounded-tr-lg">
                  {product.options?.colors?.[0]?.name || "Tanpa Varian"}
                </div>
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {(product.thumbnailUrls || [product.imageUrl]).map((url, i) => (
                  <div
                    key={i}
                    className={`flex-shrink-0 w-16 h-16 rounded-md border-2 overflow-hidden cursor-pointer ${
                      url === mainImage
                        ? "border-[#E31E52] ring-2 ring-[#E31E52]"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                    onClick={() => setMainImage(url)}
                  >
                    <img src={url || "https://via.placeholder.com/64"} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>

            {/* Detail Produk */}
            <div className="col-span-1">
              <h1 className="text-2xl font-bold mb-2 text-gray-900">{product.name}</h1>
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <span>Terjual {product.terjual || "0"}</span>
                <span className="w-1 h-1 rounded-full bg-gray-400" />
                <span className="flex items-center gap-1">
                  <FaStar className="text-[#FFC107]" /> {product.rating || "0"} ({product.ratingCount || "0"})
                </span>
              </div>
              <div className="flex items-end gap-3 mb-6">
                <span className="text-4xl font-bold text-[#E31E52]">
                  {formatCurrency(product.currentPrice ?? product.price)}
                </span>
                {product.discountPercent > 0 && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="bg-[#E31E52] bg-opacity-10 text-[#E31E52] font-bold px-1.5 py-0.5 rounded text-xs">
                      {product.discountPercent}%
                    </span>
                    <span className="text-gray-500 line-through">
                      {formatCurrency(product.originalPrice)}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Tabs & Ulasan */}
          <ProductDetailsTabs product={product} />
          <ProductReviews product={product} />
        </div>

        {/* Panel Pembelian */}
        <div className="col-span-1 lg:col-span-2 sticky top-4 lg:top-8 self-start flex flex-col gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-800 mb-4">Atur jumlah</h3>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-10">
                <button
                  className="w-10 text-gray-500 text-xl hover:bg-gray-100"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  –
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center font-bold text-gray-800"
                />
                <button
                  className="w-10 text-gray-500 text-xl hover:bg-gray-100"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
              <span className="text-xs text-gray-500">
                Stok: <b>{product.stock}</b>
              </span>
            </div>

            {/* Subtotal */}
            <div className="flex justify-between mb-6">
              <span className="text-sm text-gray-600">Subtotal</span>
              <div className="text-right">
                {product.discountPercent > 0 && (
                  <span className="text-xs text-gray-500 line-through block">
                    {formatCurrency((product.originalPrice ?? 0) * quantity)}
                  </span>
                )}
                <span className="text-2xl font-bold text-[#E31E52]">
                  {formatCurrency((product.currentPrice ?? product.price ?? 0) * quantity)}
                </span>
              </div>
            </div>

            {/* Tombol */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handleBuyNow}
                className="flex-1 py-4 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
              >
                Beli Langsung
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 py-4 font-bold text-red-600 border border-red-600 rounded-lg hover:bg-red-50 transition flex items-center justify-center gap-2"
              >
                <FaCartShopping /> Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;