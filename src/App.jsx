// src/App.jsx
import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./assets/components/MainLayout";
import AuthLayout from "./assets/components/AuthLayout";

// Pages - Auth & Umum
import HalamanUtama from "./assets/Pages/HalamanUtama";
import LoginPage from "./assets/Pages/LoginPage";
import RegisterPage from "./assets/Pages/RegisterPage";
import FAQPage from "./assets/Pages/FAQPage";
import FormPengaduan from "./assets/Pages/FormPengaduan";
import NotificationPage from "./assets/Pages/NotificationPage";
import CartPage from "./assets/Pages/CartPage";
import PromoPage from "./assets/Pages/PromoPage";
import CategoryPage from "./assets/Pages/CategoryPage";
import OrderDetailPage from "./assets/Pages/OrderDetailPage";
import CheckoutPage from "./assets/Pages/CheckoutPage";
import ChatPage from "./assets/Pages/ChatPage";

// Pages - Fitur Internal
import Dashboard from "./assets/Pages/Dashboard";
import CustomerManagement from "./assets/Pages/CustomerManagement";
import SalesManagement from "./assets/Pages/SalesManagement";
import ProductManagement from "./assets/Pages/ProductManagement";
import ComplaintForm from "./assets/Pages/ComplaintForm";
import PromoPelanggan from "./assets/Pages/PromoPelanggan";
import CustomerFeedbackManager from "./assets/Pages/ManajemenMasukanPelanggan";
import SalesHistoryPage from "./assets/Pages/RiwayatPenjualan";
import DataPelanggan from "./assets/Pages/DataPelanggan";
import ManajemenPenjualanPage from "./assets/Pages/ManajemenPenjualanPage";
import ArticleDashboard from "./assets/Pages/ArticleDashboard";
// Import halaman laporan yang baru
import SalesReportsPage from "./assets/Pages/SalesReportsPage"; // PASTIKAN NAMA FILE DAN LOKASI BENAR
import ProfilePage from "./assets/Pages/ProfilePage";

// Context
import { CartProvider } from './assets/contexts/CartContext';
import ProductDetailPage from "./assets/Pages/ProductDetailPage";

function App() {
  return (
    <CartProvider>
      <Routes>
        {/* Halaman-halaman umum (tanpa layout utama) */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HalamanUtama />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/form-pengaduan" element={<FormPengaduan />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/promo-page" element={<PromoPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/order/:id" element={<OrderDetailPage />} />
          
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Route>

        {/* Halaman internal (butuh MainLayout) */}
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
          <Route path="/Penjualan" element={<ManajemenPenjualanPage />} />
          <Route path="/artikel" element={<ArticleDashboard />} />
          {/* Rute baru untuk halaman Laporan Penjualan */}
          <Route path="/laporan-penjualan" element={<SalesReportsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}

export default App;