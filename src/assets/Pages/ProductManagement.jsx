import React, { useState } from 'react';
import { PlusCircle, Search, Edit, Trash2, Box, PackageX, CheckCircle } from 'lucide-react';
import ProductForm from '../Pages/ProductForm';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Susu UHT Full Cream 1L', category: 'Dairy & Frozen', stock: 150, price: 17500, status: 'Active', imageUrl: 'https://asbajayaberkah.com/wp-content/uploads/2024/01/ULTRA-MILK-SUSU-UHT-FULL-CREAM-1L.jpg' },
    { id: 2, name: 'Beras Premium 5kg', category: 'Staple Food', stock: 80, price: 62000, status: 'Active', imageUrl: 'https://asbajayaberkah.com/wp-content/uploads/2024/01/ULTRA-MILK-SUSU-UHT-FULL-CREAM-1L.jpg' },
    { id: 3, name: 'Minyak Goreng 2L', category: 'Cooking Needs', stock: 30, price: 35000, status: 'Low Stock', imageUrl: 'https://asbajayaberkah.com/wp-content/uploads/2024/01/ULTRA-MILK-SUSU-UHT-FULL-CREAM-1L.jpg' },
    { id: 4, name: 'Mie Instan Goreng', category: 'Snacks & Instant', stock: 200, price: 3000, status: 'Active', imageUrl: 'https://asbajayaberkah.com/wp-content/uploads/2024/01/ULTRA-MILK-SUSU-UHT-FULL-CREAM-1L.jpg' },
    { id: 5, name: 'Sabun Mandi Cair', category: 'Personal Care', stock: 5, price: 25000, status: 'Out of Stock', imageUrl: 'https://asbajayaberkah.com/wp-content/uploads/2024/01/ULTRA-MILK-SUSU-UHT-FULL-CREAM-1L.jpg' },
    { id: 6, name: 'Kopi Bubuk Murni 250gr', category: 'Beverages', stock: 75, price: 15000, status: 'Active', imageUrl: 'https://asbajayaberkah.com/wp-content/uploads/2024/01/ULTRA-MILK-SUSU-UHT-FULL-CREAM-1L.jpg' },
    { id: 7, name: 'Gula Pasir 1kg', category: 'Staple Food', stock: 120, price: 13500, status: 'Active', imageUrl: 'https://asbajayaberkah.com/wp-content/uploads/2024/01/ULTRA-MILK-SUSU-UHT-FULL-CREAM-1L.jpg' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const totalProducts = products.length;
  const activeProducts = products.filter(p => p.status === 'Active').length;
  // Perbarui logika ini jika Anda ingin menghitung stok rendah/habis berdasarkan angka,
  // bukan dari status dummy. Contoh:
  const lowStockProducts = products.filter(p => p.stock > 0 && p.stock <= 20).length;
  const outOfStockProducts = products.filter(p => p.stock === 0).length;

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsFormOpen(true);
  };

  const handleEditProduct = (id) => {
    const productToEdit = products.find(p => p.id === id);
    setEditingProduct(productToEdit);
    setIsFormOpen(true);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus produk dengan ID: ${id}?`)) {
      setProducts(products.filter(p => p.id !== id));
      alert('Produk berhasil dihapus!');
    }
  };

  const handleSubmitProduct = (productData) => {
    if (productData.id) {
      setProducts(products.map(p => p.id === productData.id ? productData : p));
      alert('Produk berhasil diperbarui!');
    } else {
      const newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
      setProducts([...products, { ...productData, id: newId }]);
      alert('Produk berhasil ditambahkan!');
    }
    setIsFormOpen(false);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Low Stock': return 'bg-yellow-100 text-yellow-800';
      case 'Out of Stock': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Warna Merah Utama Anda
  const primaryRed = '#B82329';

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Header Halaman */}
      <div className="flex justify-between items-center px-6 py-4 mb-8 bg-white text-gray-800 rounded-xl shadow-lg border-b-4 border-[#B82329]">
        <h2 className="text-3xl font-extrabold tracking-wide" style={{ color: primaryRed }}>Manajemen Produk</h2>
      </div>

      {/* Kartu Ringkasan Produk - Lebih Menarik dengan Aksen Warna yang Terkontrol */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Kartu Total Produk - Aksen Merah */}
        <div className="relative p-6 rounded-xl overflow-hidden cursor-pointer
                      bg-white text-gray-800
                      shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out
                      border-b-4 border-transparent hover:border-[#B82329] group"> {/* Border bawah berwarna merah saat hover */}
          
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-gray-500 group-hover:text-red-700 transition-colors duration-300">Total Produk</div>
              <div className="text-4xl font-bold mt-1 text-gray-800 group-hover:text-red-900 transition-colors duration-300">{totalProducts}</div>
            </div>
            <Box className="w-12 h-12 text-gray-400 group-hover:text-[#B82329] transition-colors duration-300" /> {/* Ikon berubah ke merah utama */}
          </div>
        </div>

        {/* Kartu Produk Aktif - Aksen Hijau */}
        <div className="relative p-6 rounded-xl overflow-hidden cursor-pointer
                      bg-white text-gray-800
                      shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out
                      border-b-4 border-transparent hover:border-green-500 group"> {/* Border bawah berwarna hijau saat hover */}
          
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-gray-500 group-hover:text-green-700 transition-colors duration-300">Produk Aktif</div>
              <div className="text-4xl font-bold mt-1 text-gray-800 group-hover:text-green-900 transition-colors duration-300">{activeProducts}</div>
            </div>
            <CheckCircle className="w-12 h-12 text-gray-400 group-hover:text-green-600 transition-colors duration-300" /> {/* Ikon berubah ke hijau */}
          </div>
        </div>

        {/* Kartu Stok Rendah - Aksen Kuning */}
        <div className="relative p-6 rounded-xl overflow-hidden cursor-pointer
                      bg-white text-gray-800
                      shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out
                      border-b-4 border-transparent hover:border-yellow-500 group"> {/* Border bawah berwarna kuning saat hover */}
          
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-gray-500 group-hover:text-yellow-700 transition-colors duration-300">Stok Rendah</div>
              <div className="text-4xl font-bold mt-1 text-gray-800 group-hover:text-yellow-900 transition-colors duration-300">{lowStockProducts}</div>
            </div>
            <PackageX className="w-12 h-12 text-gray-400 group-hover:text-yellow-600 transition-colors duration-300" /> {/* Ikon berubah ke kuning */}
          </div>
        </div>

        {/* Kartu Stok Habis - Aksen Merah Lebih Gelap */}
        <div className="relative p-6 rounded-xl overflow-hidden cursor-pointer
                      bg-white text-gray-800
                      shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out
                      border-b-4 border-transparent hover:border-red-600 group"> {/* Border bawah berwarna merah gelap saat hover */}
          
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-gray-500 group-hover:text-red-800 transition-colors duration-300">Stok Habis</div>
              <div className="text-4xl font-bold mt-1 text-gray-800 group-hover:text-red-900 transition-colors duration-300">{outOfStockProducts}</div>
            </div>
            <Trash2 className="w-12 h-12 text-gray-400 group-hover:text-red-700 transition-colors duration-300" /> {/* Ikon berubah ke merah gelap */}
          </div>
        </div>
      </div>

      {/* Bagian Pencarian, Filter, dan Tombol Tambah */}
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
          {/* Input Pencarian */}
          <div className="relative flex-1 w-full md:w-auto">
            <input
              type="text"
              placeholder="Cari produk..."
              className="pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[#B82329] focus:border-[#B82329] transition-all duration-200 text-gray-700"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          {/* Dropdown Kategori */}
          <select
            className="px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B82329] focus:border-[#B82329] transition-all duration-200 w-full md:w-auto appearance-none pr-8 bg-white bg-no-repeat bg-right-center text-gray-700"
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3e%3cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundSize: '1.25rem' }}
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>

          {/* Tombol Tambah Produk - Merah Putih Khas */}
          <button
            onClick={handleAddProduct}
            className="flex items-center gap-2 px-6 py-2.5 bg-[#B82329] text-white rounded-lg 
                       hover:bg-red-700 transition-all duration-300 shadow-md 
                       hover:shadow-lg w-full md:w-auto justify-center font-semibold text-lg"
            style={{ backgroundColor: primaryRed }}
          >
            <PlusCircle className="w-5 h-5" />
            <span>Tambah Produk</span>
          </button>
        </div>

        {/* Tabel Produk */}
        <div className="overflow-x-auto rounded-lg shadow-inner">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#B82329] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Gambar</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Nama Produk</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Kategori</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Stok</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Harga</th>
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-right text-xs font-semibold uppercase tracking-wider">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-red-50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <img src={product.imageUrl} alt={product.name} className="w-14 h-14 rounded-full object-cover border-2 border-gray-200 shadow-sm" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-800">{product.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{product.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{product.stock}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">Rp{product.price.toLocaleString('id-ID')}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusClass(product.status)}`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleEditProduct(product.id)}
                        className="text-blue-500 hover:text-blue-700 mr-3 p-2 rounded-full hover:bg-blue-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => handleDeleteProduct(product.id)}
                        className="text-red-500 hover:text-red-700 p-2 rounded-full hover:bg-red-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-10 text-center text-gray-500 text-lg">
                    Tidak ada produk ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ProductForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleSubmitProduct}
        initialData={editingProduct}
      />
    </div>
  );
};

export default ProductManagement;