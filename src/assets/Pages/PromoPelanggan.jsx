export default function PromoPelanggan() {
  const promos = [
    {
      id: 1,
      title: "Diskon 20% untuk Pembelian Pertama",
      description: "Dapatkan potongan harga 20% untuk pembelian pertama Anda di toko kami.",
      validUntil: "30 Juni 2025",
    },
    {
      id: 2,
      title: "Cashback Rp50.000 untuk Transaksi Rp500.000+",
      description: "Nikmati cashback Rp50.000 untuk setiap transaksi minimal Rp500.000.",
      validUntil: "15 Juli 2025",
    },
    {
      id: 3,
      title: "Gratis Ongkir untuk Semua Pelanggan Setia",
      description: "Pengiriman gratis tanpa minimal pembelian untuk pelanggan yang sudah pernah bertransaksi.",
      validUntil: "31 Desember 2025",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto mt-8 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Promo Pelanggan</h1>

      <ul className="space-y-5">
        {promos.map((promo) => (
          <li
            key={promo.id}
            className="border border-gray-200 rounded-lg p-5 bg-gray-50 hover:shadow-md transition-shadow duration-200"
          >
            <h2 className="text-lg font-semibold text-blue-700">{promo.title}</h2>
            <p className="mt-2 text-gray-700">{promo.description}</p>
            <p className="mt-3 text-sm text-gray-500">
              Berlaku sampai: <span className="font-medium">{promo.validUntil}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
