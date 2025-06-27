import React, { useState, useEffect } from "react";
import { Search, Plus, Trash2, Edit3, Filter, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ManajemenPelangganPage = () => {
  // --- Theme Colors ---
  const primaryRed = '#B82329'; // Main red color for theme
  const goldColor = '#DAA520';
  const silverColor = '#C0C0C0';
  const classicColor = '#CD7F32'; // Color for Classic membership

  // --- Membership Levels Definition (Reordered and Bronze removed) ---
  const membershipLevels = [
    { level: 'Classic', color: classicColor, badgeBg: '#CD7F32', badgeText: 'text-white' },
    { level: 'Silver', color: silverColor, badgeBg: '#C0C0C0', badgeText: 'text-gray-800' },
    { level: 'Gold', color: goldColor, badgeBg: '#DAA520', badgeText: 'text-white' },
    { level: 'Platinum', color: primaryRed, badgeBg: '#B82329', badgeText: 'text-white' },
  ];

  // Helper function for membership level badge classes
  const getMembershipLevelClasses = (level) => {
    const membership = membershipLevels.find(m => m.level === level);
    if (membership) {
      return `bg-[${membership.badgeBg}] ${membership.badgeText} font-bold`;
    }
    return 'bg-gray-200 text-gray-700';
  };

  // State for customer data and filters
  const [pelanggan, setPelanggan] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMembership, setFilterMembership] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    membership: "",
    status: "",
    address: "",
    notes: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const navigate = useNavigate();

  // --- CUSTOM MESSAGE/CONFIRMATION BOX ---
  const displayMessageBox = (message, type = 'alert', onConfirm = null) => {
    const messageBox = document.createElement('div');
    messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
    messageBox.innerHTML = `
      <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4 text-center">
        <p class="text-lg text-gray-800 mb-4">${message}</p>
        <div class="flex justify-center space-x-4">
          ${type === 'confirm' ? `<button id="cancelMessageBox" class="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors">Batal</button>` : ''}
          <button id="okMessageBox" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">OK</button>
        </div>
      </div>
    `;
    document.body.appendChild(messageBox);

    document.getElementById('okMessageBox').onclick = () => {
      document.body.removeChild(messageBox);
      if (type === 'confirm' && onConfirm) {
        onConfirm();
      }
    };

    if (type === 'confirm') {
      document.getElementById('cancelMessageBox').onclick = () => {
        document.body.removeChild(messageBox);
      };
    }
  };

  useEffect(() => {
    const statuses = ["Aktif", "Nonaktif"];
    const namaDepan = [
      "Ahmad", "Siti", "Budi", "Dewi", "Rizky", "Fitri", "Agus", "Putri", "Joko", "Lestari",
    ];
    const namaBelakang = [
      "Santoso", "Aminah", "Saputra", "Wulandari", "Faisal", "Permata", "Hidayat", "Rahma", "Gunawan", "Sari",
    ];

    setPelanggan(
      Array.from({ length: 100 }, (_, i) => {
        const idNum = i + 1;
        const pad = idNum.toString().padStart(3, "0");
        const randomFirst = namaDepan[Math.floor(Math.random() * namaDepan.length)];
        const randomLast = namaBelakang[Math.floor(Math.random() * namaBelakang.length)];

        // Assign membership based on the new order and number of levels
        const assignedMembership = membershipLevels[i % membershipLevels.length].level;

        return {
          id: `C${pad}`,
          name: `${randomFirst} ${randomLast}`,
          email: `pelanggan${idNum}@mail.com`,
          phone: `0812${Math.floor(1000000 + Math.random() * 8999999)}`,
          address: `Jl. Contoh Alamat No. ${idNum}`,
          membership: assignedMembership,
          status: statuses[i % 2],
          totalTransaction: Math.floor(Math.random() * 20000000 + 1000000),
          joinDate: `202${i % 5}-0${(i % 9) + 1}-${(i % 28) + 1}`,
          notes: `Catatan pelanggan ke-${idNum}`,
        };
      })
    );
  }, []);

  const handleDelete = (id) => {
    displayMessageBox("Yakin ingin menghapus data pelanggan ini?", 'confirm', () => {
      setPelanggan((prev) => prev.filter((p) => p.id !== id));
      displayMessageBox("Pelanggan berhasil dihapus!");
    });
  };

  const handleEdit = (cust) => {
    setFormData(cust);
    setIsEditing(true);
    setShowFormModal(true);
  };

  const handleAdd = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      membership: "",
      status: "",
      address: "",
      notes: "",
    });
    setIsEditing(false);
    setShowFormModal(true);
  };

  const handleFormSubmit = () => {
    if (isEditing) {
      setPelanggan((prev) => prev.map((p) => (p.id === formData.id ? formData : p)));
      displayMessageBox("Pelanggan berhasil diperbarui!");
    } else {
      const newId = `C${(pelanggan.length + 1).toString().padStart(3, "0")}`;
      setPelanggan((prev) => [
        ...prev,
        { ...formData, id: newId, totalTransaction: 0, joinDate: new Date().toISOString().slice(0, 10) },
      ]);
      displayMessageBox("Pelanggan berhasil ditambahkan!");
    }
    setShowFormModal(false);
  };

  // Counting for each membership dynamically
  const membershipCounts = membershipLevels.reduce((acc, level) => {
    acc[level.level] = pelanggan.filter(p => p.membership === level.level).length;
    return acc;
  }, {});


  const sortedPelanggan = [...pelanggan].sort(
    (a, b) => new Date(b.joinDate) - new Date(a.joinDate)
  );

  const filteredPelanggan = sortedPelanggan.filter(
    (cust) =>
      (cust.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cust.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cust.id.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterMembership ? cust.membership === filterMembership : true) &&
      (filterStatus ? cust.status === filterStatus : true)
  );

  const totalPages = Math.ceil(filteredPelanggan.length / itemsPerPage);
  const paginatedPelanggan = filteredPelanggan.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <main className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center px-6 py-4 mb-8 bg-white text-gray-800 rounded-xl shadow-lg border-b-4 border-[#B82329]">
        <h2
          className="text-3xl font-extrabold tracking-wide"
          style={{ color: primaryRed }}
        >
          Manajemen Pelanggan
        </h2>
      </div>

      {/* Membership Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {membershipLevels.map((level) => (
          <Card
            key={level.level}
            title={`Membership ${level.level}`}
            count={membershipCounts[level.level] || 0}
            color={level.color}
          />
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Cari pelanggan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl shadow-sm bg-white"
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleAdd}
            className="px-5 py-2 rounded-xl flex items-center shadow hover:brightness-90"
            style={{ backgroundColor: primaryRed, color: 'white' }}
          >
            <Plus size={18} className="mr-2" /> Tambah Pelanggan
          </button>
          <button
            onClick={() => setShowFilterModal(true)}
            className="px-5 py-2 bg-gray-100 text-gray-700 rounded-xl flex items-center hover:bg-gray-200 shadow"
          >
            <Filter size={18} className="mr-2" /> Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-[#B82329] text-white">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Nama</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Telepon</th>
              <th className="px-6 py-3">Membership</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Total Transaksi</th>
              <th className="px-6 py-3">Bergabung Sejak</th>
              <th className="px-6 py-3">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedPelanggan.map((cust) => (
              <tr
                key={cust.id}
                onClick={() => navigate(`/pelanggan/${cust.id}/transaksi`)}
                className="border-b hover:bg-gray-100 cursor-pointer transition"
              >
                <td className="px-6 py-4 font-mono text-gray-700">{cust.id}</td>
                <td className="px-6 py-4">{cust.name}</td>
                <td className="px-6 py-4">{cust.email}</td>
                <td className="px-6 py-4">{cust.phone}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${getMembershipLevelClasses(cust.membership)}`}>
                    {cust.membership}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cust.status === "Aktif"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {cust.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  Rp{cust.totalTransaction.toLocaleString('id-ID')}
                </td>
                <td className="px-6 py-4">{cust.joinDate}</td>
                <td className="px-6 py-4 space-x-2 text-right">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleEdit(cust); }}
                    className="text-yellow-500 hover:text-yellow-600 p-1 rounded-md hover:bg-yellow-100 transition-colors"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDelete(cust.id); }}
                    className="text-red-500 hover:text-red-600 p-1 rounded-md hover:bg-red-100 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center p-4 border-t bg-gray-50">
          <span className="text-sm text-gray-600">
            Menampilkan{" "}
            {Math.min(
              (currentPage - 1) * itemsPerPage + 1,
              filteredPelanggan.length
            )}{" "}
            - {Math.min(currentPage * itemsPerPage, filteredPelanggan.length)}{" "}
            dari {filteredPelanggan.length} pelanggan
          </span>
          <div className="space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded-xl border text-sm bg-white disabled:opacity-50"
            >
              Sebelumnya
            </button>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded-xl border text-sm bg-white disabled:opacity-50"
            >
              Selanjutnya
            </button>
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-sm shadow-lg">
            <h2 className="text-xl font-semibold mb-4" style={{ color: primaryRed }}>
              Filter Pelanggan
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Membership
                </label>
                <select
                  value={filterMembership}
                  onChange={(e) => setFilterMembership(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                >
                  <option value="">Semua</option>
                  {membershipLevels.map(level => (
                    <option key={level.level} value={level.level}>{level.level}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full border border-gray-300 p-2 rounded-lg"
                >
                  <option value="">Semua</option>
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowFilterModal(false);
                  setFilterMembership("");
                  setFilterStatus("");
                }}
                className="px-4 py-2 bg-gray-300 text-sm rounded-lg"
              >
                Reset
              </button>
              <button
                onClick={() => setShowFilterModal(false)}
                className="px-4 py-2 text-white text-sm rounded-lg hover:brightness-90"
                style={{ backgroundColor: primaryRed }} // Filter button to red
              >
                Terapkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Form Modal */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4" style={{ color: primaryRed }}>
              {isEditing ? "Edit" : "Tambah"} Pelanggan
            </h2>
            <div className="space-y-3">
              <input
                className="w-full border p-2 rounded-lg"
                placeholder="Nama"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <input
                className="w-full border p-2 rounded-lg"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                className="w-full border p-2 rounded-lg"
                placeholder="Telepon"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <input
                className="w-full border p-2 rounded-lg"
                placeholder="Alamat"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              />
              <select
                className="w-full border p-2 rounded-lg"
                value={formData.membership}
                onChange={(e) =>
                  setFormData({ ...formData, membership: e.target.value })
                }
              >
                <option value="">Pilih Membership</option>
                {membershipLevels.map(level => (
                  <option key={level.level} value={level.level}>{level.level}</option>
                ))}
              </select>
              <select
                className="w-full border p-2 rounded-lg"
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
              >
                <option value="">Pilih Status</option>
                <option value="Aktif">Aktif</option>
                <option value="Nonaktif">Nonaktif</option>
              </select>
              <textarea
                className="w-full border p-2 rounded-lg"
                placeholder="Catatan"
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => setShowFormModal(false)}
                className="px-4 py-2 bg-gray-300 text-sm rounded-lg"
              >
                Batal
              </button>
              <button
                onClick={handleFormSubmit}
                className="px-4 py-2 text-white text-sm rounded-lg hover:brightness-90"
                style={{ backgroundColor: primaryRed }} // Save button to red
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

// Komponen Card
const Card = ({ title, count, color }) => (
  <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between items-center border-b-4"
    style={{ borderColor: color }}>
    <div>
      <h3 className="text-sm text-gray-500">{title}</h3>
      <p className="text-2xl font-bold" style={{ color }}>{count}</p>
    </div>
    <Award className="w-10 h-10" style={{ color }} />
  </div>
);

export default ManajemenPelangganPage;