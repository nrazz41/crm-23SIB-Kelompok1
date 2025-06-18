// src/data/productsData.js

const generateDummyProducts = (count) => {
  const products = [];
  const baseProducts = [
    {
      name: "Indomie Goreng Jumbo",
      price: "3.500",
      stock: 200,
      imageUrl: "/images/indomie-goreng.png",
      description: "Mie instan goreng favorit keluarga dengan porsi jumbo yang lebih mengenyangkan. Rasa bumbu yang kaya dan khas, mudah disiapkan kapan saja.",
      category: "Makanan Ringan",
    },
    {
      name: "Aqua Botol 1500ml",
      price: "7.000",
      stock: 150,
      imageUrl: "/images/aqua-1.5l.png",
      description: "Air mineral murni dari sumber pegunungan terpilih. Menyegarkan dan cocok untuk memenuhi kebutuhan hidrasi harian Anda dan keluarga.",
      category: "Minuman",
    },
    {
      name: "Sunlight Pencuci Piring 750ml",
      price: "15.000",
      stock: 80,
      imageUrl: "/images/sunlight.png",
      description: "Cairan pencuci piring yang ampuh membersihkan lemak membandel dan bau tak sedap. Dengan aroma segar yang menyenangkan.",
      category: "Rumah Tangga",
    },
    {
      name: "Kentang Curah 1 Kg",
      price: "18.000",
      stock: 50,
      imageUrl: "/images/kentang.png",
      description: "Kentang segar pilihan dengan kualitas terbaik, cocok untuk berbagai olahan masakan, mulai dari gorengan hingga sup.",
      category: "Grocery",
    },
    {
      name: "Nugget Ayam Fiesta 500gr",
      price: "45.000",
      stock: 60,
      imageUrl: "/images/nugget-fiesta.png",
      description: "Nugget ayam siap saji yang lezat dan praktis. Terbuat dari daging ayam pilihan, cocok sebagai lauk atau camilan keluarga.",
      category: "Grocery",
    },
    {
      name: "Susu UHT Ultra Milk Coklat 1 Liter",
      price: "17.500",
      stock: 90,
      imageUrl: "/images/ultra-milk.png",
      description: "Susu UHT rasa coklat dengan kandungan nutrisi lengkap. Praktis untuk diminum kapan saja dan di mana saja, disukai anak-anak maupun dewasa.",
      category: "Minuman",
    },
    {
      name: "Beras Cap Ayam Jago 5 Kg",
      price: "65.000",
      stock: 40,
      imageUrl: "/images/beras-5kg.png",
      description: "Beras pulen dan berkualitas tinggi, cocok untuk nasi sehari-hari. Hasil masakan nasi lebih enak dan wangi.",
      category: "Grocery",
    },
    {
      name: "Minyak Goreng Sania 2 Liter",
      price: "36.000",
      stock: 70,
      imageUrl: "/images/minyak-sania.png",
      description: "Minyak goreng berkualitas baik, tidak mudah keruh, dan cocok untuk segala jenis masakan gorengan.",
      category: "Grocery",
    },
    {
      name: "Es Krim Walls Magnum Classic",
      price: "18.000",
      stock: 30,
      imageUrl: "/images/magnum.png",
      description: "Es krim vanilla lembut dilapisi coklat tebal dan renyah. Sensasi rasa premium yang memanjakan lidah.",
      category: "Makanan Ringan",
    },
    {
      id: 10,
      name: "Telur Ayam Negeri 1 Kg (sekitar 15-16 butir)",
      price: "28.000",
      stock: 25,
      imageUrl: "/images/telur-ayam.png",
      description: "Telur ayam negeri segar, sumber protein penting untuk kebutuhan gizi keluarga. Cocok untuk direbus, digoreng, atau sebagai bahan kue.",
      category: "Grocery",
    },
    {
      id: 11,
      name: "Sabun Mandi Batang Lifebuoy Merah 85gr",
      price: "3.000",
      stock: 120,
      imageUrl: "/images/sabun-lifebuoy.png",
      description: "Sabun mandi batang antibakteri Lifebuoy, melindungi dari kuman penyebab masalah kesehatan. Busa melimpah dan membersihkan secara menyeluruh.",
      category: "Kecantikan & Kesehatan",
    },
    {
      id: 12,
      name: "Pasta Gigi Pepsodent Pencegah Gigi Berlubang 190gr",
      price: "13.500",
      stock: 90,
      imageUrl: "/images/pepsodent.png",
      description: "Pasta gigi dengan formula pro-fluoride dan kalsium aktif untuk mencegah gigi berlubang dan menjaga gigi tetap kuat. Nafas lebih segar sepanjang hari.",
      category: "Kecantikan & Kesehatan",
    },
    {
      id: 13,
      name: "Popok Bayi MamyPoko Pants Standar S40",
      price: "55.000",
      stock: 70,
      imageUrl: "https://via.placeholder.com/150/FFC0CB/000000?text=Popok",
      description: "Popok celana bayi dengan daya serap tinggi, nyaman dan kering sepanjang hari.",
      category: "Bayi & Anak",
    },
    {
      id: 14,
      name: "Mainan Edukasi Balok Susun",
      price: "35.000",
      stock: 45,
      imageUrl: "https://via.placeholder.com/150/ADD8E6/000000?text=Mainan",
      description: "Set balok susun warna-warni untuk melatih motorik dan kreativitas anak.",
      category: "Bayi & Anak",
    },
    {
      id: 15,
      name: "Shampo Pantene Anti Ketombe 340ml",
      price: "28.000",
      stock: 100,
      imageUrl: "https://via.placeholder.com/150/90EE90/000000?text=Shampo",
      description: "Shampo dengan formula Pro-V yang efektif mengatasi ketombe dan membuat rambut sehat berkilau.",
      category: "Kecantikan & Kesehatan",
    },
    {
      id: 16,
      name: "Pembersih Lantai Super Pel 770ml",
      price: "12.000",
      stock: 110,
      imageUrl: "https://via.placeholder.com/150/D3D3D3/000000?text=Pembersih+Lantai",
      category: "Rumah Tangga",
    },
    {
      id: 17,
      name: "Sikat WC Plastik Higienis",
      price: "8.500",
      stock: 60,
      imageUrl: "https://via.placeholder.com/150/A9A9A9/000000?text=Sikat+WC",
      description: "Sikat toilet dengan gagang ergonomis untuk membersihkan toilet secara menyeluruh.",
      category: "Rumah Tangga",
    },
    {
      id: 18,
      name: "Oli Mesin Motor Yamalube Sport 1 Liter",
      price: "60.000",
      stock: 40,
      imageUrl: "https://via.placeholder.com/150/B0C4DE/000000?text=Oli+Motor",
      description: "Oli mesin berkualitas tinggi untuk performa motor yang optimal dan perlindungan mesin yang maksimal.",
      category: "Otomotif",
    },
    {
      id: 19,
      name: "Ban Dalam Sepeda Motor Ukuran 70/90-17",
      price: "25.000",
      stock: 30,
      imageUrl: "https://via.placeholder.com/150/FFD700/000000?text=Ban+Motor",
      description: "Ban dalam berkualitas untuk sepeda motor, kuat dan tahan lama.",
      category: "Otomotif",
    },
    {
      id: 20,
      name: "Buku Tulis Sinar Dunia 58 Lembar",
      price: "4.000",
      stock: 200,
      imageUrl: "https://via.placeholder.com/150/F0F8FF/000000?text=Buku+Tulis",
      description: "Buku tulis standar dengan kualitas kertas yang baik, cocok untuk kebutuhan sekolah atau kantor.",
      category: "Alat Tulis Kantor",
    },
    {
      id: 21,
      name: "Pulpen Gel Faster C6 0.5mm Hitam",
      price: "2.500",
      stock: 300,
      imageUrl: "https://via.placeholder.com/150/F5F5DC/000000?text=Pulpen",
      description: "Pulpen gel dengan tinta hitam pekat dan lancar, nyaman digunakan untuk menulis.",
      category: "Alat Tulis Kantor",
    },
    {
      id: 22,
      name: "Chitato Sapi Panggang 68gr",
      price: "10.000",
      stock: 180,
      imageUrl: "https://via.placeholder.com/150/DAA520/000000?text=Chitato",
      description: "Keripik kentang rasa sapi panggang yang renyah dan gurih.",
      category: "Makanan Ringan",
    },
    {
      id: 23,
      name: "Coca-Cola Kaleng 330ml",
      price: "8.000",
      stock: 140,
      imageUrl: "https://via.placeholder.com/150/B22222/FFFFFF?text=Coca-Cola",
      description: "Minuman soda menyegarkan dalam kemasan kaleng praktis.",
      category: "Minuman",
    },
    {
      id: 24,
      name: "Sabun Cuci Pakaian Rinso Anti Noda 800gr",
      price: "22.000",
      stock: 90,
      imageUrl: "https://via.placeholder.com/150/87CEEB/000000?text=Rinso",
      description: "Deterjen bubuk dengan formula anti noda yang ampuh membersihkan pakaian.",
      category: "Rumah Tangga",
    },
  ];

  for (let i = 0; i < count; i++) {
    const originalProduct = baseProducts[i % baseProducts.length];
    products.push({
      ...originalProduct,
      id: i + 1, // Pastikan ID unik
      name: `${originalProduct.name} - Sample ${i + 1}`, // Ubah nama sedikit
      price: `${(parseFloat(originalProduct.price.replace(".", "")) + i * 100).toLocaleString('id-ID')}`, // Ubah harga
      stock: originalProduct.stock + i, // Ubah stok
    });
  }
  return products;
};

const allProductsData = generateDummyProducts(200); // Generate 200 produk dummy

export default allProductsData;