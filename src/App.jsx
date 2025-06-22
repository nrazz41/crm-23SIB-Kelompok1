import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import MainLayout from "./assets/components/MainLayout";
import AuthLayout from "./assets/components/AuthLayout";
import Dashboard from "./assets/Pages/Dashboard";
import CustomerManagement from "./assets/Pages/CustomerManagement";
import SalesManagement from "./assets/Pages/SalesManagement";
import ProductManagement from "./assets/Pages/ProductManagement";
import ComplaintForm from "./assets/Pages/ComplaintForm";
import PromoPelanggan from "./assets/Pages/PromoPelanggan";
import CustomerFeedbackManager from "./assets/Pages/ManajemenMasukanPelanggan";
import SalesHistoryPage from "./assets/Pages/RiwayatPenjualan";
import DataPelanggan from "./assets/Pages/DataPelanggan";
import HalamanUtama from "./assets/Pages/HalamanUtama";
import LoginPage from "./assets/Pages/LoginPage"; // Halaman Login
import RegisterPage from "./assets/Pages/RegisterPage"; // Halaman Registrasi
import FAQPage from "./assets/Pages/FAQPage";
import FormPengaduan from "./assets/Pages/FormPengaduan";
import NotificationPage from "./assets/Pages/NotificationPage";
import CartPage from "./assets/Pages/CartPage";
import PromoPage from "./assets/Pages/PromoPage";
import CategoryPage from "./assets/Pages/CategoryPage";

function App() {
  return (
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
  );
}

export default App;
