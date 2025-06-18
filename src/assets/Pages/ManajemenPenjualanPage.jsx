import React, { useState, useEffect } from 'react';
import { Search, Plus, Filter, Trash2, Edit3 } from 'lucide-react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';

const ManajemenPenjualanPage = () => {
  const [penjualan, setPenjualan] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const produkList = ['Beras', 'Minyak Goreng', 'Gula', 'Telur', 'Susu', 'Sabun', 'Mie Instan', 'Kopi'];
    const metode = ['Tunai', 'Transfer', 'QRIS'];

    const dummy = Array.from({ length: 25 }, (_, i) => {
      const id = `TRX${(i + 1).toString().padStart(4, '0')}`;
      const produk = produkList[i % produkList.length];
      const jumlah = Math.floor(Math.random() * 10 + 1);
      const total = jumlah * (Math.floor(Math.random() * 10000) + 5000);
      const metodePembayaran = metode[i % metode.length];
      const tanggal = new Date(Date.now() - Math.random() * 604800000).toISOString().split('T')[0];

      return {
        id,
        produk,
        jumlah,
        total,
        metodePembayaran,
        tanggal
      };
    });
    setPenjualan(dummy);
  }, []);

  const totalPenjualanHariIni = penjualan.filter(p => p.tanggal === new Date().toISOString().split('T')[0])
    .reduce((sum, p) => sum + p.total, 0);
  const totalBulanIni = penjualan
    .filter(p => new Date(p.tanggal).getMonth() === new Date().getMonth())
    .reduce((sum, p) => sum + p.total, 0);
  const totalKeseluruhan = penjualan.reduce((sum, p) => sum + p.total, 0);

  const filteredData = penjualan.filter(p =>
    p.produk.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <main className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 mb-8 bg-white text-gray-800 rounded-xl shadow-lg border-b-4 border-[#B82329]">
        <h2 className="text-3xl font-extrabold tracking-wide text-[#B82329]">Manajemen Penjualan</h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg">
          <h3 className="text-sm text-gray-500">Penjualan Hari Ini</h3>
          <p className="text-2xl font-bold text-gray-700">Rp{totalPenjualanHariIni.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg">
          <h3 className="text-sm text-gray-500">Total Bulan Ini</h3>
          <p className="text-2xl font-bold text-gray-700">Rp{totalBulanIni.toLocaleString()}</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg">
          <h3 className="text-sm text-gray-500">Total Keseluruhan</h3>
          <p className="text-2xl font-bold text-gray-700">Rp{totalKeseluruhan.toLocaleString()}</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari produk atau ID transaksi..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3">ID Transaksi</th>
              <th className="px-6 py-3">Produk</th>
              <th className="px-6 py-3">Jumlah</th>
              <th className="px-6 py-3">Total</th>
              <th className="px-6 py-3">Metode Pembayaran</th>
              <th className="px-6 py-3">Tanggal</th>
              <th className="px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((trx) => (
              <tr key={trx.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-mono text-gray-700">{trx.id}</td>
                <td className="px-6 py-4">{trx.produk}</td>
                <td className="px-6 py-4">{trx.jumlah}</td>
                <td className="px-6 py-4">Rp{trx.total.toLocaleString()}</td>
                <td className="px-6 py-4">{trx.metodePembayaran}</td>
                <td className="px-6 py-4">{trx.tanggal}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center p-4 border-t bg-gray-50">
          <span className="text-sm text-gray-600">
            Menampilkan {(currentPage - 1) * itemsPerPage + 1} - {Math.min(currentPage * itemsPerPage, filteredData.length)} dari {filteredData.length} transaksi
          </span>
          <div className="space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-xl border text-sm bg-white disabled:opacity-50"
            >
              Sebelumnya
            </button>
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-xl border text-sm bg-white disabled:opacity-50"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ManajemenPenjualanPage;