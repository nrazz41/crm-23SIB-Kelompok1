// src/App.jsx
// Hapus import React, { useState } karena tidak digunakan langsung di sini
import { Routes, Route } from "react-router-dom"; 

// Import komponen layout
import MainLayout from "./assets/components/MainLayout";
import AuthLayout from "./assets/components/AuthLayout";

// Import halaman-halaman, pastikan casing path sesuai
import Dashboard from "./assets/pages/Dashboard";
import CustomerManagement from "./assets/pages/CustomerManagement";
import SalesManagement from "./assets/pages/SalesManagement";
import ProductManagement from "./assets/pages/ProductManagement";
import ComplaintForm from "./assets/pages/ComplaintForm";
import PromoPelanggan from "./assets/pages/PromoPelanggan";
import CustomerFeedbackManager from "./assets/pages/ManajemenMasukanPelanggan";
import SalesHistoryPage from "./assets/pages/RiwayatPenjualan";
import DataPelanggan from "./assets/pages/DataPelanggan";
import HalamanUtama from "./assets/pages/HalamanUtama";
import LoginPage from "./assets/pages/LoginPage";
import RegisterPage from "./assets/pages/RegisterPage";
import FAQPage from "./assets/pages/FAQPage";
import FormPengaduan from "./assets/pages/FormPengaduan";
import NotificationPage from "./assets/pages/NotificationPage";
import CartPage from "./assets/pages/CartPage";
import PromoPage from "./assets/pages/PromoPage";
import CategoryPage from "./assets/pages/CategoryPage";
import OrderDetailPage from "./assets/pages/OrderDetailPage";
import CheckoutPage from "./assets/pages/CheckoutPage";
import ChatPage from "./assets/Pages/ChatPage";

// Pastikan hanya ada SATU BARIS ini dan jalurnya benar
import { CartProvider } from './assets/contexts/CartContext'; 

function App() {
  return (
    <CartProvider>
      <Routes>
        {/* Rute untuk halaman yang tidak memerlukan layout penuh (misal: halaman utama, login, register) */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HalamanUtama />} />{" "}
          {/* Halaman utama sebagai root */}
          <Route path="/signin" element={<LoginPage />} /> {/* Halaman Login */}
          <Route path="/signup" element={<RegisterPage />} />{" "}
          {/* Halaman Registrasi */}
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/form-pengaduan" element={<FormPengaduan />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/promo-page" element={<PromoPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/order/:id" element={<OrderDetailPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>

        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Pelanggan" element={<CustomerManagement />} />
          <Route path="/sales" element={<SalesManagement />} />
          <Route path="/product" element={<ProductManagement />} />
          <Route path="/complaint-form" element={<ComplaintForm />} />
          <Route path="/promo" element={<PromoPelanggan />} />
          <Route path="/masukan" element={<CustomerFeedbackManager />} />
          <Route path="/riwayat" element={<SalesHistoryPage />} />
          <Route path="/data" element={<DataPelanggan />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;
