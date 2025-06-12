import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; 
import Header from './Header';   

export default function MainLayout() {
  return (
    <div id="app-container" className="bg-gray-100 min-h-screen flex w-full">
      {/* Sidebar. Pastikan komponen Sidebar memiliki styling 'fixed w-64' di dalamnya */}
      <Sidebar />
      
      <div id="main-content" className="flex-1 flex flex-col md:ml-64">
        {/* Header aplikasi. Ini akan berada di bagian atas konten utama */}
        <Header /> 
        
        <main className="flex-1 overflow-y-auto pt-16">
          {/* Padding di sini akan berlaku untuk semua konten yang dirender oleh Outlet */}
          <div className="p-6">
            <Outlet /> {/* Di sinilah komponen halaman (misal: Dashboard, DataPelanggan) akan dirender */}
          </div>
        </main>
      </div>
    </div>
  );
}
