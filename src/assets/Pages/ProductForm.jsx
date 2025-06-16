// src/assets/components/ProductForm.jsx
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react'; // Import ikon 'X' untuk tombol tutup

export default function ProductForm({ isOpen, onClose, onSubmit, initialData }) {
  // State untuk setiap input form
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');
  const [status, setStatus] = useState('Active'); // Default status
  const [imageUrl, setImageUrl] = useState('');

  // Categories for dropdown (contoh, sesuaikan dengan kategori Anda)
  const productCategories = [
    'Dairy & Frozen',
    'Staple Food',
    'Cooking Needs',
    'Snacks & Instant',
    'Personal Care',
    'Beverages',
    'Home & Living', // Contoh tambahan
    'Electronics', // Contoh tambahan
  ];

  // Efek untuk mengisi form saat modal dibuka dengan initialData (untuk mode edit)
  useEffect(() => {
    if (isOpen && initialData) {
      setProductName(initialData.name || '');
      setCategory(initialData.category || '');
      setStock(initialData.stock || '');
      setPrice(initialData.price || '');
      setStatus(initialData.status || 'Active');
      setImageUrl(initialData.imageUrl || '');
    } else if (!isOpen) {
      // Reset form ketika modal ditutup atau saat mode tambah produk
      setProductName('');
      setCategory('');
      setStock('');
      setPrice('');
      setStatus('Active');
      setImageUrl('');
    }
  }, [isOpen, initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!productName || !category || !stock || !price || !imageUrl) {
      alert('Semua kolom harus diisi!');
      return;
    }
    if (parseFloat(price) <= 0 || parseInt(stock, 10) < 0) {
        alert('Harga harus lebih besar dari 0 dan Stok tidak boleh negatif!');
        return;
    }

    const productData = {
      // Jika initialData ada, gunakan ID yang sama, jika tidak, ID akan di-handle di komponen induk
      id: initialData ? initialData.id : null,
      name: productName,
      category: category,
      stock: parseInt(stock, 10), // Pastikan stok adalah integer
      price: parseFloat(price),   // Pastikan harga adalah float
      status: status,
      imageUrl: imageUrl,
    };
    onSubmit(productData); // Kirim data ke fungsi onSubmit dari parent
    onClose(); // Tutup modal setelah submit
  };

  if (!isOpen) return null; // Jangan render apa-apa jika modal tidak terbuka

  return (
    // Latar belakang transparan dengan filter blur
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-md border-t-4 border-[#B82329] relative overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold" style={{ color: "#B82329" }}>
            {initialData ? 'Edit Produk' : 'Tambah Produk Baru'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Tutup"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Nama Produk */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="productName">
              Nama Produk
            </label>
            <input
              type="text"
              id="productName"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-[#B82329] transition-all duration-200"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Masukkan nama produk"
              required
            />
          </div>

          {/* Kategori */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="category">
              Kategori
            </label>
            <select
              id="category"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-[#B82329] transition-all duration-200"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">Pilih Kategori</option>
              {productCategories.map((cat, index) => (
                <option key={index} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          {/* Stok */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="stock">
              Stok
            </label>
            <input
              type="number"
              id="stock"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-[#B82329] transition-all duration-200"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Masukkan jumlah stok"
              min="0"
              required
            />
          </div>

          {/* Harga */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="price">
              Harga (Rp)
            </label>
            <input
              type="number"
              id="price"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-[#B82329] transition-all duration-200"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Contoh: 15000"
              min="0"
              step="any" // Mengizinkan harga desimal (jika perlu)
              required
            />
          </div>
          
          {/* Status */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-[#B82329] transition-all duration-200"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            >
              <option value="Active">Aktif</option>
              <option value="Low Stock">Stok Rendah</option>
              <option value="Out of Stock">Stok Habis</option>
            </select>
          </div>

          {/* URL Gambar Produk */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="imageUrl">
              URL Gambar Produk
            </label>
            <input
              type="url"
              id="imageUrl"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-[#B82329] transition-all duration-200"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Contoh: https://example.com/gambar_produk.jpg"
              required
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              className="bg-gray-200 text-gray-700 font-semibold py-2 px-5 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              onClick={onClose}
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-[#B82329] text-white font-semibold py-2 px-5 rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              {initialData ? 'Perbarui Produk' : 'Tambah Produk'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}