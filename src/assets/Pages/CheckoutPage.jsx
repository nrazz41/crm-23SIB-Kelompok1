// src/assets/pages/CheckoutPage.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import {
  MapPin,
  ShoppingCart,
  User,
  Percent,
  Bell,
} from "lucide-react";

// ✅ Format Rupiah yang Aman
const formatCurrency = (value) => {
  const number = Number(value);
  if (typeof number !== "number" || isNaN(number) || !isFinite(number)) return "Rp0";
  try {
    return number.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  } catch (e) {
    console.error("Format error:", e, "for value:", value);
    return "Rp0";
  }
};

const CheckoutPage = () => {
  const { getSelectedCartItems } = useCart();
  const [productsToCheckout, setProductsToCheckout] = useState([]);

  useEffect(() => {
    const selectedItems = getSelectedCartItems?.() ?? [];
    const filtered = selectedItems.filter((item) => item && typeof item === "object");
    setProductsToCheckout(filtered);
  }, [getSelectedCartItems]);

  const subtotalProducts = productsToCheckout.reduce((total, item) => {
    const price = Number(item?.currentPrice ?? item?.price ?? 0);
    const qty = Number(item?.qty ?? 1);
    return total + price * qty;
  }, 0);

  const shippingFee = 25000;
  const serviceFee = 1000;
  const voucherDiscount = 5000;
  const hawaiiCoinUsed = 80;

  const totalPayment = subtotalProducts + shippingFee + serviceFee - voucherDiscount - hawaiiCoinUsed;

  const displayMessageBox = (message) => {
    const box = document.createElement("div");
    box.className = "fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center";
    box.innerHTML = `
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <p class="text-gray-800 text-lg mb-4">${message}</p>
        <button id="okBtn" class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">OK</button>
      </div>
    `;
    document.body.appendChild(box);
    document.getElementById("okBtn").onclick = () => {
      document.body.removeChild(box);
    };
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-white py-4 px-6 shadow">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link to="/">
            <div className="flex items-center text-red-600 font-bold text-xl space-x-2">
              <img
                src="/images/logo hawai.png"
                alt="Logo"
                className="w-10 h-10 rounded-full border-2 border-red-600"
              />
              <span>HAWAII</span>
            </div>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/notification" className="icon-button">
              <Bell size={20} />
            </Link>
            <Link to="/promo-page" className="icon-button">
              <Percent size={20} />
            </Link>
            <Link to="/cart" className="icon-button">
              <ShoppingCart size={20} />
            </Link>
            <Link to="/signin" className="icon-button">
              <User size={20} />
            </Link>
          </div>
        </div>
      </header>

      <main className="w-full max-w-4xl bg-white rounded-lg shadow-lg mt-6 p-4">
        <section className="mb-4 border-b pb-4">
          <h2 className="text-lg font-semibold text-red-600 flex items-center">
            <MapPin size={20} className="mr-2" /> Alamat Pengiriman
          </h2>
          <div className="mt-2 text-sm text-gray-700">
            <p className="font-semibold">Fadlan - 0895410950887</p>
            <p>Gg. Intisari - Umbansari - Rumbai, Pekanbaru 28265</p>
          </div>
        </section>

        <section className="border-b pb-4 mb-4">
          <h3 className="font-semibold text-gray-800 mb-2">Produk Dipesan</h3>
          {productsToCheckout.length === 0 ? (
            <p className="text-gray-500 text-sm">Tidak ada produk terpilih.</p>
          ) : (
            productsToCheckout.map((product, idx) => {
              const price = Number(product?.currentPrice ?? product?.price ?? 0);
              const qty = Number(product?.qty ?? 1);
              return (
                <div key={product?.id ?? idx} className="flex items-center justify-between border-t py-2">
                  <div className="flex items-center space-x-3">
                    <img
                      src={product?.imageUrl || "https://via.placeholder.com/64"}
                      alt={product?.name || "Produk"}
                      className="w-14 h-14 rounded object-contain border"
                    />
                    <div>
                      <p className="font-medium text-gray-800">{product?.name}</p>
                      <p className="text-sm text-gray-500">Qty: {qty}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">{formatCurrency(price)}</p>
                    <p className="font-semibold text-gray-800">
                      {formatCurrency(price * qty)}
                    </p>
                  </div>
                </div>
              );
            })
          )}
        </section>

        <section className="space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal Produk</span>
            <span>{formatCurrency(subtotalProducts)}</span>
          </div>
          <div className="flex justify-between">
            <span>Ongkir</span>
            <span>{formatCurrency(shippingFee)}</span>
          </div>
          <div className="flex justify-between">
            <span>Biaya Layanan</span>
            <span>{formatCurrency(serviceFee)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Voucher</span>
            <span>-{formatCurrency(voucherDiscount)}</span>
          </div>
          <div className="flex justify-between text-green-600">
            <span>Hawaii Coin</span>
            <span>-{formatCurrency(hawaiiCoinUsed)}</span>
          </div>
          <div className="border-t pt-2 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span className="text-red-600">{formatCurrency(totalPayment)}</span>
          </div>
        </section>

        <button
          onClick={() => displayMessageBox("Pesanan berhasil dibuat!")}
          className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg"
        >
          Buat Pesanan
        </button>
      </main>

      <footer className="w-full text-center py-4 text-xs text-gray-500 mt-8">
        © 2025 HAWAII. All rights reserved.
      </footer>
    </div>
  );
};

export default CheckoutPage;
