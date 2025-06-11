import React, { useState } from 'react';
// Tidak perlu MapPin atau ChevronDown di sini karena sudah ada di AuthLayout

const RegisterPage = () => {
  const [namaLengkap, setNamaLengkap] = useState('');
  const [tanggalLahir, setTanggalLahir] = useState('');
  const [jenisKelamin, setJenisKelamin] = useState('');
  const [noHp, setNoHp] = useState('');
  const [email, setEmail] = useState('');
  const [pekerjaan, setPekerjaan] = useState('');
  const [password, setPassword] = useState('');
  const [konfirmasiPassword, setKonfirmasiPassword] = useState('');
  const [frekuensiBelanja, setFrekuensiBelanja] = useState('');

  // Function to display a custom message box (instead of alert)
  const displayMessageBox = (message) => {
    const messageBox = document.createElement('div');
    messageBox.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
    messageBox.innerHTML = `
      <div class="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm mx-4 text-center">
        <p class="text-lg text-gray-800 mb-4">${message}</p>
        <button id="closeMessageBox" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">OK</button>
      </div>
    `;
    document.body.appendChild(messageBox);
    document.getElementById('closeMessageBox').onclick = () => {
      document.body.removeChild(messageBox);
    };
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Placeholder for sign up logic
    if (password !== konfirmasiPassword) {
      displayMessageBox('Password dan Konfirmasi Password tidak cocok!');
      return;
    }
    displayMessageBox('Pendaftaran Berhasil! Data yang disubmit (cek console).');
    console.log({
      namaLengkap,
      tanggalLahir,
      jenisKelamin,
      noHp,
      email,
      pekerjaan,
      password,
      frekuensiBelanja,
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* "Halaman Registrasi" label di luar AuthLayout karena ini adalah spesifik halaman registrasi */}
      <div className="w-full bg-white py-2 px-4 shadow-sm text-gray-700 text-sm -mt-4 mb-4 text-left md:text-center"> {/* Margin disesuaikan untuk visual alignment */}
        Halaman Registrasi
      </div>

      {/* "REGISTRASI" Card */}
      <div className="bg-orange-100 text-orange-800 text-center py-3 px-6 rounded-lg shadow-md mb-8 max-w-lg w-full">
        REGISTRASI
      </div>

      {/* Registration Form Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-lg w-full">
        <form onSubmit={handleSignUp} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Nama Lengkap */}
          <div>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
              value={namaLengkap}
              onChange={(e) => setNamaLengkap(e.target.value)}
            />
          </div>
          {/* Tanggal Lahir */}
          <div>
            <input
              type="date"
              placeholder="Tanggal Lahir"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
            />
          </div>
          {/* Jenis Kelamin */}
          <div>
            <input
              type="text" // Could be a select dropdown in a real app
              placeholder="Jenis Kelamin"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
              value={jenisKelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
            />
          </div>
          {/* No HP. */}
          <div>
            <input
              type="tel"
              placeholder="No HP."
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
            />
          </div>
          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Pekerjaan */}
          <div>
            <input
              type="text"
              placeholder="Pekerjaan"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
              value={pekerjaan}
              onChange={(e) => setPekerjaan(e.target.value)}
            />
          </div>
          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Frekuensi Belanja */}
          <div>
            <select
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900"
              value={frekuensiBelanja}
              onChange={(e) => setFrekuensiBelanja(e.target.value)}
            >
              <option value="" disabled>Frekuensi Belanja</option>
              <option value="Harian">Harian</option>
              <option value="Mingguan">Mingguan</option>
              <option value="Bulanan">Bulanan</option>
              <option value="Jarang">Jarang</option>
            </select>
          </div>
          {/* Konfirmasi Password */}
          <div className="md:col-span-1"> {/* Memastikan ini di kolom sendiri jika grid-cols-2 */}
            <input
              type="password"
              placeholder="Konfirmasi Password"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 bg-red-50 text-red-900 placeholder-red-400"
              value={konfirmasiPassword}
              onChange={(e) => setKonfirmasiPassword(e.target.value)}
            />
          </div>

          {/* Sign Up Button */}
          <div className="md:col-span-2 flex justify-end mt-4"> {/* Tombol di pojok kanan bawah */}
            <button
              type="submit"
              className="py-3 px-8 bg-red-600 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
