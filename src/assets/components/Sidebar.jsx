import React from 'react'
import {
  LayoutDashboard,
  Users,          
  Box,            
  BarChart2,       
  Settings,
  History,         
  Gift,           
  LogIn,
  UserPlus,
  MessageCircle,   
  Briefcase,       
  ClipboardList,   
} from 'lucide-react' 
import { Link, useLocation } from 'react-router-dom'

const menuItems = [
  // Memastikan semua menu utama ada
  { name: 'Dashboard', icon: <LayoutDashboard />, path: '/dashboard' },
  { name: 'Produk', icon: <Box />, path: '/produk' }, // Kembali ke 'Produk'
  { name: 'Pelanggan', icon: <Users />, path: '/pelanggan' },
  { name: 'Penjualan', icon: <ShoppingCart />, path: '/penjualan' },
  { name: 'Laporan', icon: <BarChart2 />, path: '/laporan' }, // Laporan tetap ada
  { name: 'Keluhan & Layanan', icon: <FileText />, path: '/keluhan-layanan' }, // Keluhan & Layanan tetap ada
  { name: 'Promo', icon: <Tag />, path: '/Promo' }, // Promo sebagai halaman utama
];

const accountItems = [
  // Memastikan semua menu akun ada
  { name: 'Pengaturan Akun', icon: <Settings />, path: '/akun' }, // Kembali ke 'Pengaturan Akun'
  { name: 'Sign In', icon: <LogIn />, path: '/signin' }, // Sign In tetap ada
  { name: 'Sign Up', icon: <UserPlus />, path: '/signup' }, // Sign Up tetap ada
  { name: 'Logout', icon: <LogOut />, path: '/logout' }, // Logout tetap ada
];

const Sidebar = () => {
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    // Menggunakan startsWith agar path seperti /produk/detail juga mengaktifkan 'Produk'
    return location.pathname.startsWith(path);
  };

  return (
    <aside className="bg-white w-64 h-screen shadow-lg px-4 py-6 hidden md:block fixed top-0 left-0 z-20">
      <div className="text-xl font-bold mb-8 text-purple-700">UMKM CRM</div>
      <nav className="space-y-1">
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
      </nav>

      <div className="mt-8 text-xs font-semibold text-gray-500">AKUN</div>
      <nav className="mt-2 space-y-1">
        {accountItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-purple-100 transition ${
              isActive(item.path)
                ? 'bg-purple-200 text-purple-800 font-semibold'
                : 'text-gray-700'
            }`}
          >
            <span className="w-5 h-5">{item.icon}</span>
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar;