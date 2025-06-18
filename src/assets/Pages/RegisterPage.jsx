import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [namaLengkap, setNamaLengkap] = useState("");
  const [tanggalLahir, setTanggalLahir] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [noHp, setNoHp] = useState("");
  const [email, setEmail] = useState("");
  const [pekerjaan, setPekerjaan] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [frekuensiBelanja, setFrekuensiBelanja] = useState("");

  // --- Palet Warna Baru ---
  const primaryColor = "#B82329"; // Merah Marun Gelap
  const secondaryColor = "#FDD5D5"; // Merah Muda Sangat Terang (untuk latar belakang input)
  const accentColor = "#9B1C22"; // Merah Marun sedikit lebih gelap untuk hover/focus
  const textColor = "#333333"; // Abu-abu gelap untuk teks utama
  const placeholderColor = "#888888"; // Abu-abu untuk placeholder

  // Function to display a custom message box
  const displayMessageBox = (message, type = "info") => {
    const messageBox = document.createElement("div");
    messageBox.className =
      "fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 animate-fade-in";

    let messageBg = "bg-white";
    let messageText = "text-gray-800";
    let buttonBg = "bg-blue-600 hover:bg-blue-700"; // Default blue, will be overridden by primaryColor if type is info/success

    if (type === "error") {
      messageBg = "bg-red-50";
      messageText = "text-red-700";
      buttonBg = "bg-red-600 hover:bg-red-700";
    } else if (type === "success") {
      messageBg = "bg-green-50";
      messageText = "text-green-700";
      buttonBg = "bg-green-600 hover:bg-green-700";
    } else { // For 'info' type
        messageBg = "bg-white";
        messageText = textColor;
        buttonBg = `${primaryColor} hover:${accentColor}`;
    }


    messageBox.innerHTML = `
      <div class="${messageBg} rounded-xl shadow-2xl p-8 w-full max-w-sm mx-4 transform scale-95 animate-scale-in">
        <p class="text-xl font-semibold ${messageText} mb-6 text-center">${message}</p>
        <button id="closeMessageBox" class="block w-full px-6 py-3 ${buttonBg} text-white font-bold rounded-lg transition-colors duration-200 ease-in-out shadow-md">OK</button>
      </div>
    `;
    document.body.appendChild(messageBox);
    document.getElementById("closeMessageBox").onclick = () => {
      messageBox.classList.remove('animate-fade-in');
      messageBox.classList.add('animate-fade-out');
      messageBox.querySelector('div').classList.remove('animate-scale-in');
      messageBox.querySelector('div').classList.add('animate-scale-out');
      setTimeout(() => {
        document.body.removeChild(messageBox);
      }, 300); // Tunggu animasi selesai
    };
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== konfirmasiPassword) {
      displayMessageBox("Password dan Konfirmasi Password tidak cocok!", "error");
      return;
    }

    // Simulasi pendaftaran berhasil
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

    displayMessageBox("Pendaftaran Berhasil! Anda akan dialihkan ke halaman login.", "success");

    // Alihkan setelah pesan OK diklik
    document.getElementById("closeMessageBox").onclick = () => {
        // Hapus message box
        const messageBox = document.querySelector('.fixed.inset-0.bg-gray-900');
        if (messageBox) {
          messageBox.classList.remove('animate-fade-in');
          messageBox.classList.add('animate-fade-out');
          messageBox.querySelector('div').classList.remove('animate-scale-in');
          messageBox.querySelector('div').classList.add('animate-scale-out');
          setTimeout(() => {
            document.body.removeChild(messageBox);
            navigate("/signin"); // Pindahkan navigasi ke sini
          }, 300);
        } else {
            navigate("/signin"); // Fallback jika messageBox tidak ditemukan
        }
    };
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      {/* "REGISTRASI" Header Card */}
      <div
        className="text-white text-center py-4 px-8 rounded-2xl shadow-lg mb-10 max-w-xl w-full text-3xl font-extrabold tracking-wide transform hover:scale-105 transition-all duration-300 ease-in-out"
        style={{ backgroundColor: primaryColor }}
      >
        REGISTRASI
      </div>

      {/* Registration Form Card */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 max-w-2xl w-full border-t-8 border-b-8"
           style={{ borderColor: primaryColor }}>
        <form
          onSubmit={handleSignUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Nama Lengkap */}
          <div>
            <label htmlFor="namaLengkap" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
            <input
              id="namaLengkap"
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-200"
              style={{ backgroundColor: secondaryColor, borderColor: secondaryColor, color: textColor, placeholder: placeholderColor, focus: { borderColor: accentColor, ringColor: accentColor } }}
              value={namaLengkap}
              onChange={(e) => setNamaLengkap(e.target.value)}
              required
            />
          </div>
          {/* Tanggal Lahir */}
          <div>
            <label htmlFor="tanggalLahir" className="block text-sm font-medium text-gray-700 mb-1">Tanggal Lahir</label>
            <input
              id="tanggalLahir"
              type="date"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-200"
              style={{ backgroundColor: secondaryColor, borderColor: secondaryColor, color: textColor, focus: { borderColor: accentColor, ringColor: accentColor } }}
              value={tanggalLahir}
              onChange={(e) => setTanggalLahir(e.target.value)}
              required
            />
          </div>
          {/* Jenis Kelamin */}
          <div>
            <label htmlFor="jenisKelamin" className="block text-sm font-medium text-gray-700 mb-1">Jenis Kelamin</label>
            <select
              id="jenisKelamin"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-200 appearance-none"
              style={{ backgroundColor: secondaryColor, borderColor: secondaryColor, color: textColor, focus: { borderColor: accentColor, ringColor: accentColor } }}
              value={jenisKelamin}
              onChange={(e) => setJenisKelamin(e.target.value)}
              required
            >
              <option value="" disabled>Pilih Jenis Kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          {/* No HP. */}
          <div>
            <label htmlFor="noHp" className="block text-sm font-medium text-gray-700 mb-1">Nomor HP</label>
            <input
              id="noHp"
              type="tel"
              placeholder="Contoh: 081234567890"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-200"
              style={{ backgroundColor: secondaryColor, borderColor: secondaryColor, color: textColor, placeholder: placeholderColor, focus: { borderColor: accentColor, ringColor: accentColor } }}
              value={noHp}
              onChange={(e) => setNoHp(e.target.value)}
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Alamat email Anda"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-200"
              style={{ backgroundColor: secondaryColor, borderColor: secondaryColor, color: textColor, placeholder: placeholderColor, focus: { borderColor: accentColor, ringColor: accentColor } }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Pekerjaan */}
          <div>
            <label htmlFor="pekerjaan" className="block text-sm font-medium text-gray-700 mb-1">Pekerjaan</label>
            <input
              id="pekerjaan"
              type="text"
              placeholder="Pekerjaan saat ini"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-200"
              style={{ backgroundColor: secondaryColor, borderColor: secondaryColor, color: textColor, placeholder: placeholderColor, focus: { borderColor: accentColor, ringColor: accentColor } }}
              value={pekerjaan}
              onChange={(e) => setPekerjaan(e.target.value)}
              required
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Minimal 6 karakter"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-200"
              style={{ backgroundColor: secondaryColor, borderColor: secondaryColor, color: textColor, placeholder: placeholderColor, focus: { borderColor: accentColor, ringColor: accentColor } }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="6"
            />
          </div>
          {/* Frekuensi Belanja */}
          <div>
            <label htmlFor="frekuensiBelanja" className="block text-sm font-medium text-gray-700 mb-1">Frekuensi Belanja</label>
            <select
              id="frekuensiBelanja"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-200 appearance-none"
              style={{ backgroundColor: secondaryColor, borderColor: secondaryColor, color: textColor, focus: { borderColor: accentColor, ringColor: accentColor } }}
              value={frekuensiBelanja}
              onChange={(e) => setFrekuensiBelanja(e.target.value)}
              required
            >
              <option value="" disabled>Pilih Frekuensi Belanja</option>
              <option value=">3x/minggu">Lebih dari 3 kali per minggu</option>
              <option value="1-3x/minggu">1–3 kali per minggu</option>
              <option value="1-2x/bulan">1–2 kali per bulan</option>
              <option value="jarang">Jarang (hanya saat promo)</option>
              <option value="pertama kali">Baru pertama kali</option>
            </select>
          </div>
          {/* Konfirmasi Password (akan menempati kolom kedua jika layar cukup lebar) */}
          <div className="md:col-span-2">
            <label htmlFor="konfirmasiPassword" className="block text-sm font-medium text-gray-700 mb-1">Konfirmasi Password</label>
            <input
              id="konfirmasiPassword"
              type="password"
              placeholder="Ketik ulang password Anda"
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 transition-all duration-200"
              style={{ backgroundColor: secondaryColor, borderColor: secondaryColor, color: textColor, placeholder: placeholderColor, focus: { borderColor: accentColor, ringColor: accentColor } }}
              value={konfirmasiPassword}
              onChange={(e) => setKonfirmasiPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign Up Button */}
          <div className="md:col-span-2 flex justify-center mt-6">
            <button
              type="submit"
              className="py-3 px-12 text-white font-bold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50"
              style={{ backgroundColor: primaryColor, ':hover': { backgroundColor: accentColor }, ':focus': { ringColor: primaryColor } }}
            >
              Daftar Sekarang
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;