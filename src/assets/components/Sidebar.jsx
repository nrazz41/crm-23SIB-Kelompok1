// src/assets/components/Sidebar.jsx

import {
  LayoutDashboard,
  Users, // untuk pelanggan
  ShoppingCart, // untuk penjualan
  Box, // untuk produk
  BarChart2, // untuk laporan
  Settings, // untuk pengaturan akun
  Tag, // Ikon untuk Promo
  LogIn, // Untuk Sign In
  UserPlus, // Untuk Sign Up
  FileText, // Ikon untuk Keluhan & Layanan
  LogOut, // Ikon untuk Logout
  Newspaper,
  Briefcase,
  MessageCircle,
  Gift,
  ClipboardList,
  History, // <<< --- IMPORT INI untuk Artikel
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const HAWAII_LOGO_URL = 'https://bajo.jumbomark.com/labels/JID2022057238';

const menuItems = [
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
  { name: 'Produk', icon: <Box />, path: '/produk' },
  { name: 'Pelanggan', icon: <Users />, path: '/pelanggan' },
  { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' },
  { name: 'Keluhan & Layanan', icon: <FileText />, path: '/masukan' },
  { name: 'Promo', icon: <Tag />, path: '/Promo' },
  { name: 'Artikel', icon: <Newspaper />, path: '/artikel' },
];

const accountItems = [
  { name: 'Logout', icon: <LogOut />, path: '/logout' },
];

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    // Perbaikan: gunakan startsWith untuk mencocokkan path awal
    // Misalnya, '/promo' akan cocok dengan '/promo/edit/123'
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="bg-white w-64 min-h-screen shadow-lg p-6 hidden md:flex flex-col border-r border-gray-100">
      {/* Logo Hawaii */}
      <div className="mb-10 flex justify-center p-2">
        <img
          src={HAWAII_LOGO_URL}
          alt="Hawaii Swalayan Logo"
          className="max-w-[120px] h-auto object-contain"
        />
      </div>

      {/* Bagian Menu Utama */}
      <nav className="flex-grow space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`
              flex items-center gap-3 px-4 py-2.5 rounded-lg
              font-medium text-base transition-all duration-200 ease-in-out
              ${
                isActive(item.path)
                  ? 'bg-[#B82329] text-white shadow-md'
                  : 'text-[#B82329] hover:bg-[#FDD5D5] hover:text-[#B82329]'
              }
            `}
          >
            <span className="w-5 h-5 flex-shrink-0">{item.icon}</span>
            <span className="truncate">{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Bagian Akun dengan judul "AKUN" */}
      <div className="mt-8 pt-4 border-t border-gray-200">
        <div className="text-xs font-semibold text-gray-500 uppercase mb-3 px-2">AKUN</div>
        <nav className="space-y-2">
          {accountItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-2.5 rounded-lg
                ${
                  isActive(item.path)
                    ? 'bg-[#B82329] text-white shadow-md'
                    : 'text-[#B82329] hover:bg-[#FDD5D5] hover:text-[#B82329]'
                }
              `}
            >
              <span className="w-5 h-5 flex-shrink-0">{item.icon}</span>
              <span className="truncate">{item.name}</span>
            </Link>
          ))}
        </nav>
      </div>

    

      {/* Footer opsional */}
      <div className="mt-auto pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} UMKM CRM.
      </div>
    </aside>
  );
};

export default Sidebar;