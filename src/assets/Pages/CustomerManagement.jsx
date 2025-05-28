import React, { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const initialCustomers = [
  { id: 1, name: "Budi Santoso", email: "budi@mail.com", phone: "081234567890", active: true, address: "Jl. Merdeka No.1" },
  { id: 2, name: "Siti Aminah", email: "siti@mail.com", phone: "089876543210", active: false, address: "Jl. Sudirman No.2" },
  { id: 3, name: "Andi Wijaya", email: "andi@mail.com", phone: "081299988877", active: true, address: "Jl. Thamrin No.3" },
];

export default function CustomerManagement() {
  const [customers, setCustomers] = useState(initialCustomers);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    active: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddClick = () => {
    setFormData({ name: "", email: "", phone: "", address: "", active: true });
    setEditingId(null);
    setShowForm(true);
  };

  const handleEditClick = (customer) => {
    setFormData({
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
      address: customer.address || "",
      active: customer.active,
    });
    setEditingId(customer.id);
    setShowForm(true);
  };

  const handleSave = () => {
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.address.trim()
    ) {
      alert("Semua field wajib diisi!");
      return;
    }

    if (editingId) {
      setCustomers((prev) =>
        prev.map((c) => (c.id === editingId ? { ...c, ...formData } : c))
      );
    } else {
      const newCustomer = {
        id: customers.length ? Math.max(...customers.map((c) => c.id)) + 1 : 1,
        ...formData,
      };
      setCustomers((prev) => [...prev, newCustomer]);
    }

    setShowForm(false);
    setEditingId(null);
    setFormData({ name: "", email: "", phone: "", address: "", active: true });
  };

  const handleDelete = (id) => {
    if (window.confirm("Yakin ingin menghapus pelanggan ini?")) {
      setCustomers(customers.filter((c) => c.id !== id));
      if (editingId === id) {
        setShowForm(false);
        setEditingId(null);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
      <header className="flex justify-between items-center p-6 max-w-7xl mx-auto w-full">
        <h1 className="text-3xl font-bold">Management Pelanggan</h1>
        <button
          onClick={showForm ? () => setShowForm(false) : handleAddClick}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white 
            transition-transform duration-300 
            ${showForm
              ? "bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-xl transform hover:scale-105"
              : "bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 shadow-lg hover:shadow-xl transform hover:scale-105"
            }
          `}
          aria-label={showForm ? "Batal tambah pelanggan" : "Tambah pelanggan baru"}
        >
          {showForm ? <FaTimes size={18} /> : <FaPlus size={18} />}
          {showForm ? "Batal" : "Tambah Pelanggan"}
        </button>
      </header>

      <div className="flex flex-1 max-w-7xl mx-auto w-full px-6 gap-6">
        {/* Tabel Pelanggan */}
        <main
          className={`flex-grow overflow-x-auto bg-white rounded-lg shadow transition-all duration-300 ${
            showForm ? "max-w-3xl" : "max-w-full"
          }`}
        >
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nama
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Nomor HP
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider max-w-xs">
                  Alamat
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-center text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {customers.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500">
                    Tidak ada data pelanggan
                  </td>
                </tr>
              )}
              {customers.map((cust) => (
                <tr
                  key={cust.id}
                  className="hover:bg-gray-50 transition cursor-pointer"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{cust.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{cust.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{cust.phone}</td>
                  <td className="px-6 py-4 max-w-xs truncate">{cust.address}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    {cust.active ? (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Aktif
                      </span>
                    ) : (
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        Tidak Aktif
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center space-x-3">
                    <button
                      onClick={() => handleEditClick(cust)}
                      className="text-blue-600 hover:text-blue-900 font-semibold"
                      title="Edit pelanggan"
                      aria-label={`Edit pelanggan ${cust.name}`}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(cust.id)}
                      className="text-red-600 hover:text-red-900 font-semibold"
                      title="Hapus pelanggan"
                      aria-label={`Hapus pelanggan ${cust.name}`}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>

        {/* Sidebar Form */}
        {showForm && (
          <aside className="w-96 bg-white rounded-lg shadow-xl p-6 flex flex-col flex-shrink-0">
            <h2 className="text-2xl font-semibold mb-6">
              {editingId ? "Edit Pelanggan" : "Tambah Pelanggan"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSave();
              }}
              className="flex flex-col flex-grow"
            >
              <div className="mb-5">
                <label htmlFor="name" className="block font-medium mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Nama pelanggan"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                  autoFocus
                />
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="block font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email pelanggan"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="block font-medium mb-1">
                  Nomor HP
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Nomor telepon"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-5">
                <label htmlFor="address" className="block font-medium mb-1">
                  Alamat
                </label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Alamat pelanggan"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 resize-y"
                  rows={3}
                  required
                ></textarea>
              </div>

              <div className="mb-6 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="active"
                  name="active"
                  checked={formData.active}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="active" className="font-medium">
                  Pelanggan aktif
                </label>
              </div>

              <div className="mt-auto flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2 rounded border border-gray-300 hover:bg-gray-100 transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
                >
                  Simpan
                </button>
              </div>
            </form>
          </aside>
        )}
      </div>
    </div>
  );
}
