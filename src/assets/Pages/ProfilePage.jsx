import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, Edit3, Lock, LogOut, Save, XCircle, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const primaryRed = '#B82329';
  const navigate = useNavigate();

  const [currentMode, setCurrentMode] = useState('view');

  const [userData, setUserData] = useState({
    name: 'Budi Santoso',
    email: 'budi.santoso@example.com',
    phone: '081234567890',
    address: 'Jl. Contoh Alamat No. 123, Pekanbaru',
    role: 'customer',
    membership: 'Gold',
    joinDate: '2023-01-15',
    lastLogin: '2024-06-27 14:30',
  });

  const [editFormData, setEditFormData] = useState({ ...userData });
  const [passwordFormData, setPasswordFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });

  useEffect(() => {
    setEditFormData({ ...userData });
  }, [userData, currentMode]);

  const handleEditFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    console.log('Menyimpan perubahan profil:', editFormData);
    // === LOGIKA SIMPAN PERUBAHAN KE API DI SINI ===
    setUserData(editFormData);
    alert('Profil berhasil diperbarui!');
    setCurrentMode('view');
  };

  const handlePasswordFormChange = (e) => {
    const { name, value } = e.target;
    setPasswordFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePasswordFormSubmit = (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmNewPassword } = passwordFormData;

    if (newPassword !== confirmNewPassword) {
      alert('Password baru dan konfirmasi password tidak cocok!');
      return;
    }
    if (newPassword.length < 6) {
      alert('Password baru minimal 6 karakter!');
      return;
    }
    // === LOGIKA UBAH PASSWORD KE API DI SINI ===
    console.log('Mengubah password:', { currentPassword, newPassword });
    alert('Password berhasil diubah!');
    setPasswordFormData({
      currentPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    });
    setCurrentMode('view');
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    console.log('User logged out');
    alert('Anda telah keluar.');
    navigate('/signin');
  };

  const renderContent = () => {
    switch (currentMode) {
      case 'edit':
        return (
          <form onSubmit={handleEditFormSubmit} className="space-y-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: primaryRed }}>Edit Profil</h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                value={editFormData.name}
                onChange={handleEditFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B82329] focus:border-[#B82329] sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={editFormData.email}
                onChange={handleEditFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B82329] focus:border-[#B82329] sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Nomor Telepon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={editFormData.phone}
                onChange={handleEditFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B82329] focus:border-[#B82329] sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Alamat</label>
              <textarea
                id="address"
                name="address"
                value={editFormData.address}
                onChange={handleEditFormChange}
                rows="3"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B82329] focus:border-[#B82329] sm:text-sm"
              ></textarea>
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={() => setCurrentMode('view')}
                className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm shadow hover:bg-gray-200 transition-colors"
              >
                <XCircle size={16} /> Batal
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm shadow hover:brightness-90 transition-colors"
                style={{ backgroundColor: primaryRed, color: 'white' }}
              >
                <Save size={16} /> Simpan Perubahan
              </button>
            </div>
          </form>
        );
      case 'changePassword':
        return (
          <form onSubmit={handlePasswordFormSubmit} className="space-y-6">
            <h3 className="text-xl font-bold mb-4" style={{ color: primaryRed }}>Ubah Password</h3>
            <div>
              <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Password Saat Ini</label>
              <input
                type="password"
                id="currentPassword"
                name="currentPassword"
                value={passwordFormData.currentPassword}
                onChange={handlePasswordFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B82329] focus:border-[#B82329] sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Password Baru</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                value={passwordFormData.newPassword}
                onChange={handlePasswordFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B82329] focus:border-[#B82329] sm:text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmNewPassword" className="block text-sm font-medium text-gray-700">Konfirmasi Password Baru</label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                value={passwordFormData.confirmNewPassword}
                onChange={handlePasswordFormChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B82329] focus:border-[#B82329] sm:text-sm"
                required
              />
            </div>
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={() => setCurrentMode('view')}
                className="flex items-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm shadow hover:bg-gray-200 transition-colors"
              >
                <XCircle size={16} /> Batal
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm shadow hover:brightness-90 transition-colors"
                style={{ backgroundColor: primaryRed, color: 'white' }}
              >
                <Save size={16} /> Ubah Password
              </button>
            </div>
          </form>
        );
      default: // 'view' mode
        return (
          <>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Avatar / Foto Profil */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-4 border-gray-300">
                  <User size={64} className="text-gray-500" />
                </div>
              </div>

              {/* Detail Informasi Pengguna */}
              {/* PERUBAHAN: Hapus text-center dari div ini dan sesuaikan margin */}
              <div className="flex-grow text-center md:text-left pt-4 md:pt-0"> {/* Added pt-4 for small screens */}
                <h3 className="text-2xl font-bold mb-1" style={{ color: primaryRed }}>{userData.name}</h3> {/* Adjusted mb */}
                <p className="text-gray-600 mb-4 capitalize">Role: {userData.role}</p>

                {/* PERUBAHAN: Adjust space-y dan tambahkan padding horizontal */}
                <div className="space-y-3 text-gray-700 px-2 md:px-0"> {/* Added px for consistency on smaller screens */}
                  <div className="flex items-center gap-3"> {/* Increased gap for icons */}
                    <Mail size={20} className="text-gray-500 flex-shrink-0" /> {/* Added flex-shrink-0 */}
                    <span>{userData.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={20} className="text-gray-500 flex-shrink-0" />
                    <span>{userData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-gray-500 flex-shrink-0" />
                    <span>{userData.address}</span>
                  </div>
                  {userData.role === 'customer' && (
                    <div className="flex items-center gap-3 pt-2"> {/* Added pt for spacing below address */}
                      <span className="p-1 px-3 rounded-full text-xs font-bold text-white shadow-sm" style={{ backgroundColor: primaryRed }}> {/* Adjusted padding and added shadow */}
                        {userData.membership}
                      </span>
                      <span className="text-gray-500">Membership</span>
                    </div>
                  )}
                  {/* PERUBAHAN: Adjust top margin for joinDate */}
                  <div className="text-xs text-gray-500 pt-4">
                    Bergabung sejak: {userData.joinDate}
                  </div>
                  <div className="text-xs text-gray-500">
                    Terakhir login: {userData.lastLogin}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons for View Mode */}
            {/* PERUBAHAN: Gunakan justify-center untuk tombol di layar kecil juga */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-center gap-4"> {/* Changed justify-end to justify-center */}
              <button
                onClick={() => setCurrentMode('edit')}
                className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg text-sm shadow hover:brightness-90 transition-colors w-full sm:w-auto" // Added w-full sm:w-auto
                style={{ backgroundColor: primaryRed, color: 'white' }}
              >
                <Edit3 size={16} /> Edit Profil
              </button>
              <button
                onClick={() => setCurrentMode('changePassword')}
                className="flex items-center justify-center gap-2 px-5 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm shadow hover:bg-gray-200 transition-colors w-full sm:w-auto" // Added w-full sm:w-auto
              >
                <Lock size={16} /> Ubah Password
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 px-5 py-2 bg-red-500 text-white rounded-lg text-sm shadow hover:bg-red-600 transition-colors w-full sm:w-auto" // Added w-full sm:w-auto
              >
                <LogOut size={16} /> Logout
              </button>
            </div>
          </>
        );
    }
  };

  return (
    <main className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center px-6 py-4 mb-8 bg-white text-gray-800 rounded-xl shadow-lg border-b-4" style={{ borderColor: primaryRed }}>
        <h2 className="text-3xl font-extrabold tracking-wide" style={{ color: primaryRed }}>
          {currentMode === 'view' ? 'Profil Pengguna' :
           currentMode === 'edit' ? 'Edit Profil' :
           'Ubah Password'}
        </h2>
        {currentMode !== 'view' && (
            <button
                onClick={() => setCurrentMode('view')}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm shadow hover:bg-gray-200 transition-colors"
            >
                <ChevronLeft size={16} /> Kembali
            </button>
        )}
      </div>

      <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto border-t-4" style={{ borderColor: primaryRed }}>
        {renderContent()}
      </div>
    </main>
  );
};

export default ProfilePage;