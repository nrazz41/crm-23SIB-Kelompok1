import React, { useState } from "react";

export default function ProductManagement() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Teh Botol Sosro",
      price: "Rp7.000",
      image:
        "https://cdn.infobrand.id/images/img/posts/2023/02/15/menelusuri-pemilik-teh-botol-sosro-minuman-legendaris-teman-di-saat-makan.jpg",
      description: "Minuman teh melati segar siap minum, cocok disajikan dingin.",
    },
    {
      id: 2,
      name: "Indomie Goreng",
      price: "Rp4.000",
      image:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//108/MTA-5856786/indomie_indomie_goreng_85gr_full02_b3o9d3ep.jpg",
      description: "Mi instan goreng legendaris dengan rasa gurih dan pedas manis.",
    },
    {
      id: 3,
      name: "Aqua Mineral 600ml",
      price: "Rp3.000",
      image:
        "https://notisdigital.com/wp-content/uploads/2024/02/iklan-aqua.jpeg",
      description: "Air mineral dalam kemasan botol 600ml, segar dan menyehatkan.",
    },
    {
      id: 4,
      name: "Sari Roti Tawar",
      price: "Rp12.000",
      image:
        "https://swamediainc.storage.googleapis.com/swa.co.id/wp-content/uploads/2020/04/29095131/sari-roti-sariroticom.jpg",
      description: "Roti tawar lembut dan enak, cocok untuk sarapan dan camilan.",
    },
    
  ]);

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editingId !== null) {
      const updated = products.map((p) =>
        p.id === editingId ? { ...p, ...formData } : p
      );
      setProducts(updated);
      setEditingId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        ...formData,
      };
      setProducts([...products, newProduct]);
    }
    setFormData({ name: "", price: "", image: "", description: "" });
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    const filtered = products.filter((p) => p.id !== id);
    setProducts(filtered);
  };

  return (
    <div className="p-6 font-[Poppins] bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-green-800 mb-6">
        🛒 Manajemen Produk Supermarket
      </h1>

      {/* Form Tambah/Edit Produk */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 text-green-700">
          {editingId ? "✏️ Edit Produk" : "➕ Tambah Produk"}
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          <input
            name="name"
            placeholder="Nama Produk"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-600"
          />
          <input
            name="price"
            placeholder="Harga (Rp)"
            value={formData.price}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-600"
          />
          <input
            name="image"
            placeholder="URL Gambar"
            value={formData.image}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-600"
          />
          <input
            name="description"
            placeholder="Deskripsi Produk"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-600"
          />
        </div>
        <button
          onClick={handleAddOrUpdate}
          className="mt-4 bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800 transition"
        >
          {editingId ? "💾 Simpan Perubahan" : "➕ Tambah Produk"}
        </button>
      </div>

      {/* Daftar Produk */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-900">{product.name}</h2>
              <p className="text-sm text-gray-700 mt-1">{product.description}</p>
              <p className="text-green-700 font-bold mt-2">{product.price}</p>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => handleEdit(product)}
                  className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  ✏️ Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  🗑️ Hapus
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
