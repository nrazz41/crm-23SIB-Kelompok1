// src/data/productsData.js

const generateDummyProducts = (count) => {
  const products = [];
  const baseProducts = [
    {
      id: 1,
      name: "Indomie Goreng Jumbo",
      price: "3.500",
      stock: 200,
      imageUrl:
        "https://c.alfagift.id/product/1/1_A7985840002167_20230731165646125_base.jpg",
      description:
        "Mie instan goreng favorit keluarga dengan porsi jumbo yang lebih mengenyangkan. Rasa bumbu yang kaya dan khas, mudah disiapkan kapan saja.",
      category: "Makanan Ringan",
    },
    {
      id: 2,
      name: "Aqua Botol 1500ml",
      price: "7.000",
      stock: 150,
      imageUrl:
        "https://images.tokopedia.net/img/cache/700/hDjmkQ/2022/7/7/5981b0f7-a23a-4033-962d-68d29a042c7e.jpg",
      description:
        "Air mineral murni dari sumber pegunungan terpilih. Menyegarkan dan cocok untuk memenuhi kebutuhan hidrasi harian Anda dan keluarga.",
      category: "Minuman",
    },
    {
      id: 3,
      name: "Sunlight Pencuci Piring 750ml",
      price: "15.000",
      stock: 80,
      imageUrl:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/96/MTA-157418412/sunlight_sunlight-botol-lime-750ml_full01.jpg",
      description:
        "Cairan pencuci piring yang ampuh membersihkan lemak membandel dan bau tak sedap. Dengan aroma segar yang menyenangkan.",
      category: "Rumah Tangga",
    },
    {
      id: 4,
      name: "Kentang Curah 1 Kg",
      price: "18.000",
      stock: 50,
      imageUrl:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-38532612/none_kentang_full01_c11d1145.jpg",
      description:
        "Kentang segar pilihan dengan kualitas terbaik, cocok untuk berbagai olahan masakan, mulai dari gorengan hingga sup.",
      category: "Grocery",
    },
    {
      id: 5,
      name: "Nugget Ayam Fiesta 500gr",
      price: "45.000",
      stock: 60,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBsPQIXn_OxoVjCNCuHphrooRfqeW6y53XQ&s",
      description:
        "Nugget ayam siap saji yang lezat dan praktis. Terbuat dari daging ayam pilihan, cocok sebagai lauk atau camilan keluarga.",
      category: "Grocery",
    },
    {
      id: 6,
      name: "Susu UHT Ultra Milk Coklat 1 Liter",
      price: "17.500",
      stock: 90,
      imageUrl:
        "https://ik.imagekit.io/dcjlghyytp1/0d4a6edd07c7041988a837910d53f329?tr=f-auto,w-360",
      description:
        "Susu UHT rasa coklat dengan kandungan nutrisi lengkap. Praktis untuk diminum kapan saja dan di mana saja, disukai anak-anak maupun dewasa.",
      category: "Minuman",
    },
    {
      id: 7,
      name: "Beras Cap Ayam Jago 5 Kg",
      price: "65.000",
      stock: 40,
      imageUrl:
        "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lsb4a67um62u0e",
      description:
        "Beras pulen dan berkualitas tinggi, cocok untuk nasi sehari-hari. Hasil masakan nasi lebih enak dan wangi.",
      category: "Grocery",
    },
    {
      id: 8,
      name: "Minyak Goreng Sania 2 Liter",
      price: "36.000",
      stock: 70,
      imageUrl:
        "https://kpriundip.com/wp-content/uploads/2021/06/sania-2-liter.jpg",
      description:
        "Minyak goreng berkualitas baik, tidak mudah keruh, dan cocok untuk segala jenis masakan gorengan.",
      category: "Grocery",
    },
    {
      id: 9,
      name: "Es Krim Walls Magnum Classic",
      price: "18.000",
      stock: 30,
      imageUrl: "https://assets.unileversolutions.com/v1/107305734.png",
      description:
        "Es krim vanilla lembut dilapisi coklat tebal dan renyah. Sensasi rasa premium yang memanjakan lidah.",
      category: "Makanan Ringan",
    },
    {
      id: 10,
      name: "Telur Ayam Negeri 1 Kg (sekitar 15-16 butir)",
      price: "28.000",
      stock: 25,
      imageUrl:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/MTA-59081287/fresh_blm_telur_ayam_1_kg_-15_-17_pcs-_kg-_full04_j5l8bbs7.jpeg",
      description:
        "Telur ayam negeri segar, sumber protein penting untuk kebutuhan gizi keluarga. Cocok untuk direbus, digoreng, atau sebagai bahan kue.",
      category: "Grocery",
    },
    {
      id: 11,
      name: "Sabun Mandi Batang Lifebuoy Merah 85gr",
      price: "3.000",
      stock: 120,
      imageUrl:
        "https://images.tokopedia.net/img/cache/700/hDjmkQ/2024/1/17/9ac44db3-5462-4759-be3b-65be696a0d23.jpg",
      description:
        "Sabun mandi batang antibakteri Lifebuoy, melindungi dari kuman penyebab masalah kesehatan. Busa melimpah dan membersihkan secara menyeluruh.",
      category: "Kecantikan & Kesehatan",
    },
    {
      id: 12,
      name: "Pasta Gigi Pepsodent Pencegah Gigi Berlubang 190gr",
      price: "13.500",
      stock: 90,
      imageUrl:
        "https://down-id.img.susercontent.com/file/sg-11134201-7rd6m-lx2nkuvkvvik6c",
      description:
        "Pasta gigi dengan formula pro-fluoride dan kalsium aktif untuk mencegah gigi berlubang dan menjaga gigi tetap kuat. Nafas lebih segar sepanjang hari.",
      category: "Kecantikan & Kesehatan",
    },
    {
      id: 13,
      name: "Popok Bayi MamyPoko Pants Standar S40",
      price: "55.000",
      stock: 70,
      imageUrl:
        "https://id.mamypoko.com/content/dam/sites/id_mamypoko_com/images/products/mpp-xtrakering-new-2023/NEW-MPPS-Xtra-Kering-S-M-L-XL-XXL-2023.png",
      description:
        "Popok celana bayi dengan daya serap tinggi, nyaman dan kering sepanjang hari.",
      category: "Bayi & Anak",
    },
    {
      id: 14,
      name: "Mainan Edukasi Balok Susun",
      price: "35.000",
      stock: 45,
      imageUrl:
        "https://down-id.img.susercontent.com/file/bf9f4ee3d2c7292b24872a239ad5d511",
      description:
        "Set balok susun warna-warni untuk melatih motorik dan kreativitas anak.",
      category: "Bayi & Anak",
    },
    {
      id: 15,
      name: "Shampo Pantene Anti Ketombe 340ml",
      price: "28.000",
      stock: 100,
      imageUrl:
        "https://images.ctfassets.net/z3lnpkvuhwcm/TWrUhRsq6xxqQqa51OZCc/64eeea31b504714928efd90d78fc17b9/04902430401012_160ml_C1N1.jpg",
      description:
        "Shampo dengan formula Pro-V yang efektif mengatasi ketombe dan membuat rambut sehat berkilau.",
      category: "Kecantikan & Kesehatan",
    },
    {
      id: 16,
      name: "Pembersih Lantai Super Pel 770ml",
      price: "12.000",
      stock: 110,
      imageUrl:
        "https://gratisongkir-storage.com/products/900x900/uumdYV5Bdoqw.jpg",
      description: 
        "Cairan pembersih lantai dengan aroma segar yang efektif mengangkat kotoran dan memberikan kilau higienis pada permukaan lantai.",
      category: "Rumah Tangga",
    },
    {
      id: 17,
      name: "Sikat WC Plastik Higienis",
      price: "8.500",
      stock: 60,
      imageUrl:
        "https://siplah-oss.tokoladang.co.id/merchant/19871/product/qAbgZeNSO1saABS15Pm955YEXVjNzyc4FaYmR6LS.png",
      description:
        "Sikat toilet dengan gagang ergonomis untuk membersihkan toilet secara menyeluruh.",
      category: "Rumah Tangga",
    },
    {
      id: 18,
      name: "Set Kunci Pas Motor 8pcs",
      price: "45.000",
      stock: 35,
      imageUrl: 
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-2010738/tekiro_tekiro-kunci-ring-set-8-pcs--6---24-mm-_full06.jpg",
      description:
        "Set kunci pas ukuran lengkap untuk perawatan dan perbaikan sepeda motor.",
      category: "Otomotif",
    },
    {
      id: 19,
      name: "Ban Dalam Sepeda Motor Ukuran 70/90-17",
      price: "25.000",
      stock: 30,
      imageUrl: 
        "https://fdrtire.com/image/0/0/51248265d2632.jpg",
      description:
        "Ban dalam berkualitas untuk sepeda motor, kuat dan tahan lama.",
      category: "Otomotif",
    },
    {
      id: 20,
      name: "Buku Tulis Sinar Dunia 58 Lembar",
      price: "4.000",
      stock: 200,
      imageUrl: 
        "https://down-id.img.susercontent.com/file/7ac1deae617a395ba8b18bd9c8833845",
      description:
        "Buku tulis standar dengan kualitas kertas yang baik, cocok untuk kebutuhan sekolah atau kantor.",
      category: "Alat Tulis Kantor",
    },
    {
      id: 21,
      name: "Pulpen Gel Faster C6 0.5mm Hitam",
      price: "2.500",
      stock: 300,
      imageUrl: 
        "https://down-id.img.susercontent.com/file/987f629882cb3fb21608282409f36bd5@resize_w900_nl.webp",
      description:
        "Pulpen gel dengan tinta hitam pekat dan lancar, nyaman digunakan untuk menulis.",
      category: "Alat Tulis Kantor",
    },
    {
      id: 22,
      name: "Chitato Sapi Panggang 68gr",
      price: "10.000",
      stock: 180,
      imageUrl: 
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//92/MTA-8822062/chitato_chitato_sapi_panggang__-68_g-_full01_h3j4pbyl.jpg",
      description: 
        "Keripik kentang rasa sapi panggang yang renyah dan gurih.",
      category: "Makanan Ringan",
    },
    {
      id: 23,
      name: "Coca-Cola Kaleng 330ml",
      price: "8.000",
      stock: 140,
      imageUrl: 
        "https://down-id.img.susercontent.com/file/abbc8f8db9e678737753d5bc00c29421",
      description: 
        "Minuman soda menyegarkan dalam kemasan kaleng praktis.",
      category: "Minuman",
    },
    {
      id: 24,
      name: "Sabun Cuci Pakaian Rinso Anti Noda 800gr",
      price: "22.000",
      stock: 90,
      imageUrl: 
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//89/MTA-2568103/rinso_rinso-molto-purple-deterjen-bubuk--800-g-_full02.jpg",
      description:
        "Deterjen bubuk dengan formula anti noda yang ampuh membersihkan pakaian.",
      category: "Rumah Tangga",
    },
    {
      id: 25,
      name: "Mi Sedaap Cup Ayam Bawang",
      price: "5.000",
      stock: 150,
      imageUrl: 
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFVeQpoqbhO6r2RaPF5uG_djX2B9MvGqlmQ&s",
      description:
        "Mi instan cup rasa ayam bawang yang gurih dan praktis, cocok untuk camilan cepat.",
      category: "Makanan Instan",
    },
    {
      id: 26,
      name: "Bayam Segar 1 Ikat",
      price: "4.500",
      stock: 120,
      imageUrl: 
        "https://down-id.img.susercontent.com/file/b36b15b9fea0722b037f7163c014e7a8",
      description:
        "Bayam hijau segar kaya zat besi, cocok untuk sayur bening dan olahan sehat lainnya.",
      category: "Sayur-Sayuran",
    },
    {
      id: 27,
      name: "Kecap Manis ABC 275ml",
      price: "9.000",
      stock: 85,
      imageUrl: 
        "data:image/jpeg;base64,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",
      description:
        "Kecap manis kental dengan rasa khas Indonesia, cocok untuk berbagai masakan.",
      category: "Bumbu Dapur",
    },
    {
      id: 28,
      name: "Sereal Nestle Koko Krunch 170gr",
      price: "28.000",
      stock: 50,
      imageUrl:
        "https://images.tokopedia.net/img/cache/700/product-1/2020/6/2/209301/209301_7f6edc25-0cf9-4885-89f2-868d787bf9e9_700_700",
      description:
        "Sereal coklat renyah berbentuk beruang, disukai anak-anak. Sumber serat dan nutrisi untuk sarapan sehat.",
      category: "Makanan Instan",
    },
    {
      id: 29,
      name: "Permen Mentos Mint",
      price: "5.000",
      stock: 250,
      imageUrl:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-45349781/mentos_permen_mentos_135gr_-isi_50_pcs-_rasa_full01_e115c8b9.jpg",
      description:
        "Permen chewy rasa mint yang menyegarkan nafas seketika. Praktis dibawa kemana saja.",
      category: "Makanan Ringan",
    },
    {
      id: 30,
      name: "Sabun Cuci Tangan Lifebuoy 500ml",
      price: "18.000",
      stock: 90,
      imageUrl:
        "data:image/jpeg;base64,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",
      description:
        "Sabun cair antibakteri untuk tangan yang bersih dan higienis setiap saat.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 31,
      name: "Daging Ayam Fillet 1 Kg",
      price: "48.000",
      stock: 40,
      imageUrl:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//101/MTA-7723379/afcbandung_daging_ayam_fillet_dada_1kg_boneless_1_kg_full01_gaq7k6zr.jpg",
      description:
        "Daging ayam tanpa tulang yang segar, cocok untuk masakan cepat saji dan diet sehat.",
      category: "Makanan Beku",
    },
    {
      id: 32,
      name: "Bawang Merah 250gr",
      price: "9.000",
      stock: 70,
      imageUrl:
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//97/MTA-21583447/bawang_bawang-merah-250gr-sunrise-_full01.jpg",
      description:
        "Bawang merah segar, bahan penting untuk masakan tradisional Indonesia.",
      category: "Bumbu Dapur",
    },
    {
      id: 33,
      name: "Coca-Cola Botol 1L",
      price: "10.000",
      stock: 110,
      imageUrl: 
        "https://solvent-production.s3.amazonaws.com/media/images/products/2024/03/66_XdWPqdz.jpg",
      description:
        "Minuman soda menyegarkan dalam botol praktis untuk keluarga.",
      category: "Minuman",
    },
    {
      id: 34,
      name: "Sabun Cuci Piring Mama Lemon 800ml",
      price: "13.000",
      stock: 100,
      imageUrl: 
        "https://down-id.img.susercontent.com/file/de14dc8e9c92a5dee90ebe49c43f4157",
      description:
        "Pembersih piring ampuh, menghilangkan lemak dengan mudah dan cepat.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 35,
      name: "Wortel Segar 1 Kg",
      price: "10.000",
      stock: 60,
      imageUrl: 
        "data:image/jpeg;base64,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",
      description:
        "Wortel segar dengan kandungan vitamin A tinggi, baik untuk kesehatan mata.",
      category: "Sayur-Sayuran",
    },
    {
      id: 36,
      name: "Sosis Ayam So Nice 12 pcs",
      price: "22.000",
      stock: 55,
      imageUrl:
        "data:image/jpeg;base64,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",
      description:
        "Sosis ayam praktis siap goreng, cocok untuk camilan anak-anak.",
      category: "Makanan Beku",
    },
    {
      id: 37,
      name: "Teh Pucuk Harum 350ml",
      price: "4.000",
      stock: 190,
      imageUrl: 
        "data:image/jpeg;base64,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",
      description: 
        "Teh manis menyegarkan dengan rasa bunga melati yang harum.",
      category: "Minuman",
    },
    {
      id: 38,
      name: "Minyak Goreng Tropical 2L",
      price: "34.000",
      stock: 70,
      imageUrl: 
        "data:image/jpeg;base64,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",
      description:
        "Minyak goreng jernih, tidak mudah hitam dan aman untuk menggoreng berkali-kali.",
      category: "Bumbu Dapur",
    },
    {
      id: 39,
      name: "Pasta Gigi CloseUp Menthol 160gr",
      price: "14.000",
      stock: 100,
      imageUrl: 
        "data:image/jpeg;base64,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ebfdeO6GnP6L87Ns6bATSBdJBcSDw0bLs+/Rb2pu3bH/ALQHwkfsvzU3Zt3ADAQBwDngH4wVHDh6XFbnWJ2hPS3n00pNh2PLvxSSGiJGmfeO7IDXOT36+3phgwgZDP4zx+MpbW7abAym1rGNENa0AADuAX7LVLLkm87a8WKKR8oV3Qo1XFrx0jliEg/J3FV13ujbvacnYwIY8nNkOa6W8JlrZPdCvnMB14aL7Co4V3vXdfynWtodegT7jhjIBLTxjUjqVHtHbAosqGvAbTaXvxRkGjFP0Wm5IYg6OkBAdxjqnqVNvFupbX4i5a9wyBa2pUYHRpiwkYvmuzXaqazvcP579H28NR18WPcXU6uJwY4l2EjpANJ0ESPov6U2QfYU4/hCzOzPRjs62fylGg5rwIBNWscteLlrbagKbAxohrRDRnooVx6yTb4XzfdIq9URFarEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEUHnm37TQ8Wl5pzzb9poeLS80E5FB55t+00PFpeac82/aaHi0vNBORQeebftNDxaXmnPNv2mh4tLzQTkUHnm37TQ8Wl5pzzb9poeLS80E5FB55t+00PFpeac82/aaHi0vNBORQeebftNDxaXmnPNv2mh4tLzQTkUHnm37TQ8Wl5pzzb9poeLS80E5FB55t+00PFpeac82/aaHi0vNBORQeebftNDxaXmnPNv2mh4tLzQTkUHnm37TQ8Wl5pzzb9poeLS80E5FB55t+00PFpeac82/aaHi0vNBORQeebftNDxaXmnPNv2mh4tLzQTkUHnm37TQ8Wl5pzzb9poeLS80E5FB55t+00PFpeac82/aaHi0vNBORQeebftNDxaXmviDJIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k=",
      description:
        "Pasta gigi segar dengan rasa menthol kuat untuk napas segar lebih lama.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 40,
      name: "Tahu Putih 10 Potong",
      price: "8.000",
      stock: 130,
      imageUrl: 
        "https://down-id.img.susercontent.com/file/164c9eb918abc706d0cfb79046fe84f3",
      description: 
        "Tahu putih lembut, sumber protein nabati yang menyehatkan.",
      category: "Grocery",
    },
    {
      id: 41,
      name: "Buku Tulis Kiky 58 Lembar",
      price: "4.500",
      stock: 300,
      imageUrl: 
        "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/103/MTA-103788417/kiky_buku_tulis_kiky_58_lembar_-_1_pack_isi_10_buku_full01_iyda5bod.jpg",
      description:
        "Buku tulis bergaris dengan kertas berkualitas untuk menulis rapi.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 42,
      name: "Pulpen Jk-100 joyko",
      price: "2.000",
      stock: 500,
      imageUrl: 
        "data:image/jpeg;base64,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",
      description:
        "Pulpen tinta hitam cepat kering, nyaman digunakan untuk sehari-hari.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 43,
      name: "Celana Seragam SD Merah",
      price: "45.000",
      stock: 80,
      imageUrl: 
        "data:image/jpeg;base64,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",
      description:
        "Celana seragam sekolah dasar warna merah dengan bahan kuat dan nyaman.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 44,
      name: "Baju Seragam Putih SD",
      price: "50.000",
      stock: 85,
      imageUrl: 
        "data:image/jpeg;base64,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",
      description:
        "Baju seragam putih lengan pendek untuk siswa sekolah dasar.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 45,
      name: "Roti Tawar Sari Roti Jumbo",
      price: "15.000",
      stock: 45,
      imageUrl: 
        "https://solvent-production.s3.amazonaws.com/media/images/products/2021/10/DSC_0465_hkicm4G.JPG",
      description:
        "Roti tawar lembut dengan ukuran jumbo, cocok untuk sarapan atau camilan keluarga.",
      category: "Makanan Ringan",
    },
    {
      id: 46,
      name: "Mentega Blue Band Sachet 200gr",
      price: "10.000",
      stock: 70,
      imageUrl: 
        "https://www.blueband.com/id-id/-/media/Project/Upfield/Brands/Blue-Band-Global/Blueband-Consumer-ID/Assets/Product/BlueBandSerbagunaSachetBebasLemak200gclean.png?rev=2240ff27b3274bf4b7dab7ea9cde1e60",
      description:
        "Mentega serbaguna untuk membuat kue, menggoreng, dan menumis.",
      category: "Bumbu Dapur",
    },
    {
      id: 47,
      name: "Tempe Bungkus Daun 1 Papan",
      price: "4.000",
      stock: 60,
      imageUrl: 
        "data:image/jpeg;base64,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",
      description:
        "Tempe tradisional dibungkus daun pisang, sumber protein nabati khas Indonesia.",
      category: "Grocery",
    },
    {
      id: 48,
      name: "Detergen Bubuk Daia Lemon 1 Kg",
      price: "18.000",
      stock: 100,
      imageUrl: 
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSERUUEhATFRUWFRYYFhUWFxgWFhcSGBcWGhYbFhgZICghGBolHhUWITEhJSorLy4uGh8zODMsNygtLisBCgoKDg0OGxAQGzclICYtNS01LS8tMy0tLTUvLS0rLTUvLS0vLy0vLS0tLS8tLS0tLS0tLS0tLS0uLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUCAwYBB//EAEUQAAIBAgQCCAEHCQcEAwAAAAECAAMRBBIhMQVBBhMiUWFxgZEyI0JSkqGx0RQVU3KCssHS8AckM2LC4fElNEOiY3OD/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EADwRAAIBAwEFBAgEBQQDAQAAAAABAgMEESEFEjFBURNhgZEUInGhscHR8BUyUuEGI0JykjM0YvE1Q4IW/9oADAMBAAIRAxEAPwD7jAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAPCYBX1uNUQSq1EqOP/GjK1T6t7zLTSy0DnsV0tqEkU0VfE6n+AHsZVVdrUYaRyyyp7MqyWZafEh/n2uczNiAiqpZmIAVUUXJY22nOhtKpcVFTpw1feb1bCnRhvTk/I24bpBWuQtYkhc2SvRqUCUuAWUOoLAFlBsbjMt7XEn151qEd+STXc+BEp0aVSW6m0+WUXfDekauQtVerY7Ne6N5HkZihd06ui0ff8uTMVrWdLXivvxL6SiMIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIB8v8A7QGZsSwyrUJejSRKoFSmt0zaU3ugYs+rEX0AvYTWvWnShHceGy22Ra0a85utwislEMU6EU8SlB6WcKwUU/kXIzC3V2NJwO0NjYHKQRccO2uKTUpvRlo7TZ91CUbfSUS9fFKpK1VrVKlNsjOBTRWUgPSd6tVkQ1MjAMFuSyk5QCJHvNk0q9Ttt9QTXvKe2ua8V2MIuTRjj8Wop5VpVFqVHoCgWam9F6y16dRFZ6Zuq/JksCNVD5bkWnbZ2zYW9V1YT3lh501RyvK9WaVOpHDyQaFWoqUWoOhTLWpggmvUzsprP1YqU1FViKLKMy6ZixD2CiXS7HspJJyXxO93TuJ3MY1sQk/Jd5Jp4nEBqa11xdDrbinUNYE5gL60bCmeW9MDXa04RuMNJwSX34kips2i4SnSrbzjq/v9zv8Aorj2rYZS9s6l0fKLLnpVHpOVB2XNTaw7rSVOO7LBRIuJoZEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAPnnEl63E5iP/Lh2/wDRZXbTqbqo98voWmzJOKq/2lVWworPiECHR8ha2jPnZlUHnkUm/IdcOZNum1qyp20FnWWMLwNdlzdO6lUXLOSz4zhKZqM1eklRaa51zP1aIjAFmrPe3zdtNF1NrAaVailKNOMN6ePDU72terSjKSnuRb44y9FyI2GwIpoRlUD8sw5ULfKM1Wj8N9bWsJmwnJTqRlo1n4IxtKuqqpyznRavi+PE2cP4JTGETMBenVDpcXyvYrnAO5UMbdxIO4BkC3vqsLKU4exvosnW+lGveJz10N9Lg9Lrg9gxFRSKmZncjL89m53JsBewG+thync03KHY5k8+s+K4cDPpVfs5xnhLGiWh0PQVf7sx78TjR7Y3E/iZ6it+bwXwRQI6KcjIgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIBxPEK9KlisQr1adPKKDjrHVLU8hUMCxGl1Iv4Sn25a3NenS9Hi203wJNrVjBy3nxNX52D64cde5HZqWP5NTH0nrDskD6CEseQF8whWuyq0Z+k7QnhLk3r7DpOupLcpI04Nq1K661xc2rZ6dN2BJb5ZHK5WBYi6Zri2g1El1pWl1Pt6Vfs8rDXcunQKNWmuzlHeNeJFeooX5CiBUSrmR6mKfPTYOoKGlTBBKi/b2vbkQt7vZtk5SjUc88v3MzpXFXCkksGrF4fNk66pUfISyinfCqtQgrnBR2qBsrMLF7WY3BmlttOlBOnY0ePHOq+h0lbb3rVqnkXPBuACqc9VauQ/TxGJcsP8qlwqr+zr47y7pTqqPrJJ9IogVFDPqtvvZ1eDwqUkWnTRURRZVUAKB3ACbtt6s0N0wBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQDTXwqOQWRSRsSNRf6J3HpMptAqcXweoTdK2buWqL2/aGv2Squ9k29y96ec/3fLU6xrSisIiHhuJHzKPoWkH/APN2+fzS9xv6TIyTguIb4qlNB/lBY/baSKWwbOnq05e1/I1defIsMDwGlTIY3qN9J9beQ2Et6dKFNbsEku45OTlqy0Am5g9gCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAeXmMgXmQLwBeALwD2AIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAeQD5/xDGV0ZmWrUb5VhkWpZrBuQJAtPOR7R1G3Ua9bh4m1NRlLEpYJ35xrW2qE5bmzAi97Zb31PPu8Yp0nWcpel7nrNYeeXPjw5ZO9Sr2clFUt5YzlAcQqn9KPO+ml9bX8tL/widlJLPpifnr5tGsbht47FmRxlT6VQep8e4+XvItajOnSc1c7z6LOfj94O1OpvTUXSwurwbMPjNe29W19gzXtIlC4aeas5Y7m/v4EmpT/AEpGqtinJOV6lrm3aa9uV5cbIjOrUlVcnup4SbItxiKUcanQcNw7InaLFjqbkm3h6T0BDPeKo5ovlJDWBBBN9CCbW8AZFvIzlRkocf3MrictUqNrbEux1sPlNe7faeX/AJktI1W3011Ovgdngyci33yi/naewisJI4m+bAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEA+W1WvXbb/FP788bD/dr+/wCZrzL0VbIVtvbWVtzXcZ1aeOMnr4l3CGd19xHEhRO+DIHTbQyTjEc40MaZIuM4mtMjQkF0QkLmALMF1GZebLtc6NpYEj1+z/4bp1KCqV8pyWUuGFy5PVr5FDU2u3WnTp4xDi+/n4LqYYPjq5y1lbq3CG6MgFUEqR8TZiOy3Z0sQbm4nobfZ1KhTVOOUl4/Qh17urKXqpNvq8adeZbp0wJtdUFwDqH2Zcw5d1vfwNuno8Or+/E5qrdfoj/l+x7W6XFRqqc9O3fQOx7NrjRG5crbx6PT6swq9y+EF/l+xFTpDdiwoUswJv8AGDnFjlsQO1qNO8HmJmNjRcsrj1wvqcK1/cUo5nCPd62cvovVOzwZYopcAMR2gNge6Q5YzoWlNycU5LDN8wbiAIAgCAIAgCAIAgCAIAgCAIAgCAIAgHywoevJ/wDlP708dQ1u0/8Al8zGNS2r1Aq3P4ytvKMneVIpc39S37ZU6Kl3GlEFYg0msLEMCw1bSxF9xvppMKEX6qjqRad7POVqbKSm1iCpGhHj3zEpSoVI78cpPOHwf33E+T7SDw8ZXHmv3RAxfDaalah6w1E0Qio67/FcIQCDzuDcWBuLCe72Ntu42nXcJwUYpZePdjJ5O9sqey7Z9nJybfBpPPXOFwNWAwyU7hKbUwSCWBIzNsSxR8zNa2Yn4rC5YgGehk97j8SBKrJPe303/a9M8uHBGzr3O4rrfc9abD6tW49ByhRXQzOrJZanH/F5+AIYnLlr2v8AEtVh9Fb/AOKGtZQbefM640+2ZVSW7lSj/g/odJ0c4MCq1amfRrorMz7aAnOSRryHnI9xW3W4Q8SRZ0HWUK1ZYay0sY8Wup1CyCWxnAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBMMHDcKwVOrWqllNgVI1t2jz3va4OnjKDZ1GnWrSm1wYksMvKdYqbBAE2BFu4/17elgrnFVpQ0zx6nfs1uavXBQ9I6wpFXpoBnOU6CwJFTKdNNbLvvpIl7b04y7bHLoStnWsKk23y5EZKFRizIxPaUDkCliL5dhY2I8NJEjTlXjl6+1aYwWbqU44jJYWPvUvMHTVXU1HXs66XNzy28dZZbLsfRYzzzfuwUlzVU5eqW352pf5vaWehH1M04nSPziPMGNASqdVWF1II8DeZMGUALAM4Bz/SXiNanUopRZVNQsDmGl7qBc8hqZV7QuK1OcIUmlvZ4+AI2Nx+LQ4emKlLrKmfMQLoSG7Otu63Kcq1xdQlTppreln2A0HpHWbDo4yhuv6trC4IyhtL7bic/xGrKlGSxne3WYLR+JVPy1qVxkFIsBYXzWHOTHc1FdOly3cmSto8WxT4TrldLqzZ7j5oC2sLb3JkSN3czte2i1lZzoDynxfFItGtVdDSdgDZdQp5nTTn7TWN5dQhCrUa3W+gLfo7jalcVKjkZC5FMWt2QTqTz5D0Mn2NepXUpy4Z09gLiTwIAgCAIAgCAIAgCADMMHG8FxKIzKw1e1jYnUZtNNR8U89sqtGE5QlzZtPkzRi+k+FYlKVdqpGhWhSq4o6cs1JSvoTPSfh8+mPbp8dTTtcmqv0iUKQ+AxyqNTVfDhgBuSUR2cDvuvpOjtIyW7vRfdn6mYVJweVlEc8SLqrUmRqbC6OpzKRztyBGxFrjaedv7y4tZ9nubvfx/YurW1o1478pOX35mrOx3Zj62HsJS1L2tP8038PgWEaFKH5YryMMRVWnTaoaXWEFFSmLBqlWowSmgY7XYjXkL7yfsm09Mr7snotWyNfXPo9PK4mlca6L1lVcI1EPkqnDisjUTnCFs7Naqqsy5tF0NxcT0Udn2VbMKGVJcHwz5FZVuLu3xKutHjpwfAvKPWBiKZcMpI1BYX89x7ympXFdScY506rK+pNqUaLScktemj+heYHirBfl1y2HxjVfs/wCZcUak5+rOOH8fYVdalGOsJZRcUnBAINwRceU7cDgbIBy3S2ir4jCo3wszA+RNO8pdpwjUr0Yy4Nv5Ah9JuHAPh6NPQZXC3N9b3GvnOG0LZb9KjDo8Ai1agbAUiiW6qt8pbvse0fO6+s4SadnBxX5ZamCxwGKFfG1KtMEoKJFyLa2H+/tJVGqq93KrD8u7gyaOFH/pdbzb/RNLb/x0/EwTMQoPCh+onvnE71I52br0XxHIuej6gYajb9Gh9SLn7TLCxSVvD2IyWElAQBAEAQBAEAQBAEA8JmJPQHzPjysMHi2sVIwtcg6jdCLj3lBsKD/EIuS8zar+UoeJNiWxVTC4ZytOmLJSBCoqKiaKNh+Jk25nUqV5LOdep7XZ9GzoWNOtVjx4vHeyDTxmKwpD9YtRA5VstRKyCoNSjFCeqqW1Gx5i9ppUo1rfDksEmlLZ+0ouFLGV3Yf7rqdDVxNGhUWtcjD4wXYKpYjF5Q1J1RR8dRQ9NgB2mphu+WFW3W0rXcf5lwfceMqOWz7lp+xokflb3smAq/8A74ihh2+pd2HqBKtfw/ax0q19e47O/uZrNOnoReK8RDUxRFKpSxVStQ/J1ZkZDWWspWolZMyOikdob62sL3lpsrZSs6sqlOe9Bp5IV5dyqwUJxxLJqr0GqYZ1pHC2F6tanT65lqgHrWphnCmmj9V3MdALgSTZ1bWNb+XnL92TrtGnfzpKVxwS88GFdnqVMtWjUxtQhGfM1Q0s9RFe1GghChFDjtEMTqdJpWv6lOo6dCOMd2vmTLPZNCrbxrXNX83LOi5faJ2BwiOai0cP+SYmmBbIMlybZQ6CyuhJUFWB0a4Pftb7Rqyn2dfVd/yZxv8AZNKlTVWhLKfBr5nd9HeIivh6VS1syI1u7MoNvQkj0m1an2dSUOjwVcJb0VIuZzNyHisaFcL1bscubsgGy3tzI+ycKlVRljGeegMF4krMAiM91V8wAsFYkAm5B+adJqq8ZSSis8/MGocWWzfI1BlZUIsnxtksvxb9tT3TT0mOH6r0ePHT6gyfiaIQGputwCdFsoLZQWse/uvNnXjDCcX5d+AZ1+IIhK5GY5lWygasylhuRyUzM60Ierjnjz1BspY1Gbq7ZXyhsjWvlPlobW1tNo1oSl2fB4zgG3B1xURXUaMLi+9pvTmpxUlwBunQCAIAgCAIAgCAIAgGnGPlpue5WPsDOVeW7Tk+ifwMo4HpI/8A0vFE7thaw9ApJ9yfskPYC3qkJvrgVOYw2BUY+o9tSG1+r+Eixm3fyj3no5Vn+Gwh7PmctwvBI6utv8XD4l6tub0uJutBj45XqKD3aS+2vLFrOT5Yx5IptjVXSvISj3/AvqVHqsJRQLULmoadJkAZ6bumLC1ACR8IZyTcWFzyldsuUqtvLXGj+JO2rcR9MjVlHe1WV10RXV+jWFp02y4uu1QDsilbIH72Y767kGQKlS3pp+vvS7i8p7Uu6s1mlFR/5ccEuvRJoYF3JZqeOwnaO5+XCEk8yVdQTzyL3S22NVlUpy9j+Z5vbcIdvmKxrky6McHKflCjUuMoG2pLKP35XbOrqVw10fzZbbauO2t4LovkiZhaNTDYc0qeIZKNEZWqMWZ2KjtEblE07KIOY3JMkzu69/cSjRwkngqaFO2tKMZVlvPGe5G7gXDQtcVA9Ri6I5NQMH7RRhmDag2tvr5TjHNK77KTy1zJlxfdvZrEd1ckvYyx6DaYKke4EfVqVBL+9/15eHwR5yh/po7CRTsQMTh6nWh6ZT4Mvavp2r303kacJ7+9DHDGoIlPg5V0a1NwqKLuDmDB2ZmXQ2JLfZOMbVxmpaPRLX25yvMGzE8MZlqi6HPWSoA17WUUrq3n1Z95tO2coyXWSfw+gMH4OSVYCmpQDKoBKZg5Y3FtiD6HXlMStd5qWixy5ccg8xPC3cszdWSaitlNypVUZbHTfW/pMTt5ybbxxTxy0WNQb14WCSWCr2aYXJoUZM+qn9r2uDN/Rstt6aLGOWM/UErh+G6umqE3yi19r+NuU70afZwUOgJM6gQBAEAQBAEAQBAEAg8ba2Hq/wD1sPcW/jIl+8W1T2MzHicR0m14XiCOWGrg/VP4zTYDUnT7mZm8KX3zRaCllxDsdjm99LfdKKd5GltGbnwz9C2UnK0jBFRwrgCUesWmWY1XLO72HZDMyqoGiU1Lu1rm5JJOwG21Ntzv3GhRWI/E4WlCNrmpJ6kipxGk718JSIL0kpF+/ISQy+hKFu7rQDsZY3ltVttmZj3J+z7+Zrb3MZ3eZG5qFqiNScBArXpimpZ2KkDNUY9hRcGyrckfFY2EejtKzhR3KMN6b0RvUhWnUzUliKK3j2Wng6JYgBMVhmYk/CoxNEknuFr+0n/w3KUoNNa4fwZx2pVUp5JzY6lhi7VK9KmL3BNRAdHDXAJu2g0sDeRNm2F3G6lKVN7rb18Trd3lKdJJS1X0IOA42xRXqYfF0XqKrlBh6lVczC96b0wdNTYHKRexlhV2HUVWUreskm9deBGjfxcEqkG8EqhxGqGvT4fjHJuO11FPN49urdT5jxtN6Gx6VOaqdss8+L+pipeSnHdcMF90awL0MJTp1QA46xmCm4UvUd8oPO2e1/CWF1VjUquUeGnuSREpQcY4Z0anScDoUHSDEMjkq5ULSLaPlsQw1y7ObfNO8rbucoy0fLPHv9/sBsq4s5KgznOMQqgX7WU1EsAN7FSfSZlW9WWJa72PetPIEF8VUBq2drkYsKA5Y3QtksnzLW0I8PCR3VqLeaf6ktemcacsdeYJfE8abE06m2GqN2T869PIdOfxWPnO9as3rB/0t/DHnqCfwmqWDlyeszEOnJPohR3Wsc3O9/ASLaTkm5cc6rp7PrzBYSUBAEAQBAEAQBAEAQBAEAq+kzWwtTxyj3ZRK7assWsvvmbR4nFY2m1XCYnDpbNVoVFQE2BqFTlFztfb1lXsK8jRuoqbxFszVWUSBx3rNVwePLGxKHDMmVuas9Uolwe5jJl1/DXa3E6060VFvPX5/I6QvN2Cio6mNVsZUGUKmDQ7uXWviLf5EQdXTbxZntuBeYorZGzNYz7SZnduK71WEaW4LTyU0RKlLqixpVqT2rqz/wCIzVCD1mf5wYEH2kWP8T1VVbnFOL5EuWz6LglF4fUPgKlu3jcYw5imuHw5Pm9KmH9iJ2j/ABDaRf8AJoJSZxdk8ZnU0PavBlDL1q16zA3VcRiamIUMNiaOYrcX5rO9xtm8gsRpqLfTGfJanOnRtc+tJtd5lguH00I6nDUKVygzU8OiHtmym9gSDrbXlIH4ltKs0pSaWnv4HacrSKzCOX3ko4VzlOfMWNTs3IJKX5i+psdNNbCYp28k1KUt7OdM4zjv1+9B+ITxhRSL3g1EKhJAzXZb+Cmxt3ag+dpd0avqcEuWhDk3J5ZNZp3pvJqT6PwjynUwY1qSHtMqm2tyBp6naaSjF6sFTU4/gg9zVpFhpmAzH0YCRXd229lyWepMjs+5ksqDMU6Q4IEkVUBO5CkE+ZtrMK8tU8qSyZ/Drn9D9xnS41g7EK9MBtwEIv56axG6tuTRr6DcfpNw41hr36xbnc2N7DblN/SrfOd4x6HX/Senj2H/AEw9m/CZ9MofqHoVf9JrbpLhRvXX2b8Jj063X9aNls+5f9BK4fxWlXzdU4fLa9r6XvbceBnWlXp1c7jzg41repRx2ixkmzscRAEAQBAEAQBAEAqOlR/u5HeyD1zA/wAJVbZeLV+1fE2hxKfCYBFALAXtroCb8wCeU8V22uG9O4nqGI8NTaWsCACwAvbVtOZ7x6Sw2ftG4U1GKckaVKEVHebwV3D+K0a21TIeQbUeV+Uveys7n89PXyfuK6jeyfMmq1wLOhubAA638jNHsmwbwsrx/Ykq8fHJk+CqMtwoI8CuvlrC2JaxXaUstrVa/sZlcyksG18DVZ3cKqZxUUaqrKHOjMUBudO8+kkytqspdolhvK5LCfDh9TjoMRgurVczoLdXYgMzN1RJTs3AUdrXX1nK5hG3gnUaXDvb3XlafELXgQ8c60VRiWOVi69lTdzrYZTfVrdkmx75D7anmOuuW1nhrx1XBZ5Gccixo1NFUG4Atfv7z67ydTnokv8Avv8AEwT7WEtKUcIMn0PhHlOxg4v+0HijArQU2BGZ7c7khR5aE+0pNq3Ek1Sj01L7Y1snmtJcNEcVKQ9CXdXAU/ySlWQPnZyjXIIuAbkDlqJMnRh6PGpHi3hldC4q+kzpSxhLK8SZwHhvWliQxVFuQvxE/NA8SfunS0odo3ngvM43ty6aSXFvnw7w+FIplzpap1ZU7g5bzEqTUN99cBVk6m4umclfXqSPJkqCK2q04slRR2X9m21fzp/65d7H4T8Cg25+aHidtLoohAEAQBAEAQBAEArePD5NfBwfUA2lLt/Ls2l1R2ofnKemhYgD7xPH21rKvNRRYb6iiV1K0VF1DudTfYW7hLWUIbPim4703r7Di5Ou3rhGqpiC3xKpU8ioItILvq29v6Y9n38Tb0eGMEWhwymz56a9U417OtMnxQ7eYtLKxvpTn60fp480RK1nCOqJ+DY0wtN17QVbldiTe5Unlf8AhPR0K27TUOLSXA4Qp8meHEsLEba6Ea2G/wDRkd3095Y4fT78SUqMMYJFSgrjUbjRhuDysfW8nVrelcw9Za8nzXiQ3mLOYp1DXVusDKFKm+pysNLnx0ufGeQVKrWqSxpjj3fuxGplallwI5nIDZly3B1GoNjodeY5d3feWezKFSMtyTyuJsmuRc1X1no0sIFjQ+ETIPm/T3/vD+on8Z5van+v4I9Xsf8A23i/kUCiVpZtnQ06qnB0qQN3FViV12IIHhzEsN5Sto01xyVTjKN1Oo1pur3F5gzToGrRNYqb0znsd1N2XT29TJtJ06LlT3scHkrqqqV1Gru54rHwMjxakRV7eQvUfI1j2fkgobbmQR36zb0qm97XGW8eWMmPRKqcdMpJZ884IXSGrfCHU2zUAFKlcnyZ01GvM6XGs53jzb+Xhod7FYue/Etc8dTjGMpD0CO6/s4oEU6rnZmUD9kG/wC9L7ZEWoSl3nm9tzTqRj0R2UuClEAQBAEAQBAEAQCn6VVMtDN3Ovtex++Vm14b9s13o3pvEiioYjtLrzv7azxlKXZz3kWMVmLLOv8AKKHB2FmHkf8AeS7lK7pq4T1isNc0c6b7N7rNC2uL7c7d3O32yJTpU5TWXmJ1beCTTqKPhuBvpv4g3kynUhvbtPOOOnwecHKUZPWRX8R41Sp9l+szNmemKdKrWYBStzlpqxCagEkW1l3ZWt7Nylu7q5Za8u9M4Vd2OFzN9LiCi2YhbcmJFj68v6tLKNtutYi8ff30MqFV/wBPuN+Gx9G1uup/stoBz1kmjBwp4awc6lGrxcX5HM0MBVNwhU2Y6OWJI11bKRrY668z6+ct6G5VlLeb7l07yLCOVgm8Er1cPda4pMSF1pZ7i2lgrE3Ub73Nz4CWtG5pxeEuJ17JxXDQuGrXMsjBfYf4B5QDkuk/RiviMQalM0wuVR2mINxe+ymU97Y1a1XfjjGC7sNpUqFHcknnJXU+hOIG7UfrN/LIq2VW6rz/AGJT2zR6P3fUmUuidcfOp/Wb+WdFs2quaOMtq0pcn9+JtPRiv9Kn9Zv5Zs9nVeqNfxKitMP78TTV6KYg7NS+s38s0ezK3Jo3jtWiuKf34kev0SxjAKatMqvwqajlR5ArYTEtm3Mlhyyva/obw2pawbkotN9y+pjhegtYsOtqU1XmUJZvS4AHnENk1G/XawZqbbppepF57zusDg0o01p0xZVFgPvJ7yTrLynTjTiox4I89VqSqTc5PVkidDQQBAEAQBAEAQBAKTpkP7o/6yfvCQNpf7d+BtHifO8NxhabBWYHL2so1YLz03ta88r6HOqt5ImdpKjSdSUXudccDok40qOuQ5y4BAUXUqdrnYbyNRoXFHNRLGNHng/abSqU5KKw3ng0n8eBcUnpv8Byt9En7j/XKdI9lUj/ACnuTfJvR+x8l3G0ozh+bVdUR8anVqS+l7jxuRytvzN/Cd7Kwuu2UlDONdeD4c9eJvB9o8ROVrcJ6zEdY9akTScNTzUQtRTTGi9aLNUpK7ZiosbtYtY6+9hXxD8rT56/epwq285S3+vs095uThyquXrgxzu7MVZ2bNVzqOyy5VTMQALDW9hrfbte409FnwS+H1NOGWlTOjXK/CMpS2hA0JN9xK7adzLsJPda79PkzrOlWoUJLk9C9wlTJQVrjXcnlKKTqUbeM4f1ce775kW3gnoV+PpCxrKTma3PS9soK31F9IUpqlGrjGpIq1nuOkTuF4klbtrqfsNj9t5d2Upyopz46kOSO4w3wL+qPuks1NkAQBAFoAgCAIAgCAIAgCAIAgCAIAgFT0op5sLUH6p9mWQ7+O9byRmPE+KPg+rxBd/pEq1+WrWIPcbengJCt61JxXdyPS076h2ChJ8Vho8qVaodXVwLO12zDMV7BG51sc3ZFtzyM6TqRlpnPUlRvrTG65aYO1pcYokC9Rb6c+ZsB6XNp5StZz3mox0zp7P+ip9Jpa4kjXiOkNGwHWh+YGYW9z/vJFpC7t5Zptr26+45TuKMfy8TXgK4ZRanTCgWUIFtlvfS3K8vad7XqUJRi8VI68OK9hxjdTc8yfElEDuHsO+8qVtm86ryRLbfU0V6YYW27rcj3jxmZbUuKkd2bTT5YNJ+tFxbPcOzqLB9O7lfwBGnvMQrbsd1VMLo1kixpOL1RnicQWGp+ywv995LleQljelvexY8dfcaOhJ8NDLB8RUWVhltoCNRp9ol/b1aVSP8t6EeUHF6n0miLKB4D7p3NTOAIAgCAIAgCAIAgCAIAgCAIAgCAIBpxdAOjKfnAj3mk470XFhHzTivRnFBtKbWF9U7QPdsbj1E81Ozr02/Uz7NTplENejtcbUq1+/q2v77zDVw1jcl5P6G7nJrDlob/wAyYr9HX+qwnPsKz/8AU/L9jTxN6cGxNtaNQ/s2mkrO4fCmzZNdT38yYrcUH+z8ZtRtLunNTjF5RjKJKcGxJGtFx7fjNrzZtZz36UdJa46PmvoSqVeO7iTB4PiP0L+0h/h90uMGde2p9Ss4r0exDC6YZixIvmViAuxI8dv+Zc7Nq16DUKsHua8I5eX39CPWjCWsXr7StXoljif+3Fu8gob+gsOXL8Zdxvab4Qmv/lL4kd031XmdD0Z6HV1a1ZFVc+a4I1Wy3FuZJDchpbnK24pVbm5jUScYpc2s+GPmdIzjCDXE+ky2I4gCAIAgCAIAgCAIAgCAIAgCAIAgCAIAgCAIAmMATIEAQDy0YB7AEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEA//9k=",
      description:
        "Deterjen wangi lemon yang ampuh membersihkan dan membuat pakaian lebih harum.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 49,
      name: "Sirup ABC Cocopandan 620ml",
      price: "19.000",
      stock: 90,
      imageUrl: 
        "data:image/jpeg;base64,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",
      description:
        "Sirup manis segar rasa cocopandan, cocok untuk es campur atau es buah.",
      category: "Minuman",
    },
    {
      id: 50,
      name: "Keripik Pisang Manis 150gr",
      price: "12.000",
      stock: 80,
      imageUrl:
        "data:image/jpeg;base64,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",
      description:
        "Camilan keripik pisang manis renyah, enak disantap kapan saja.",
      category: "Makanan Ringan",
    },
    {
      id: 51,
      name: "Daging Ayam Fillet Beku 1 Kg",
      price: "55.000",
      stock: 60,
      imageUrl:
        "https://via.placeholder.com/150/F5DEB3/000000?text=Ayam+Fillet",
      description:
        "Daging ayam tanpa tulang siap masak, praktis untuk berbagai masakan.",
      category: "Makanan Beku",
    },
    {
      id: 52,
      name: "Sambal Terasi Botol 200ml",
      price: "10.000",
      stock: 80,
      imageUrl:
        "https://via.placeholder.com/150/DC143C/FFFFFF?text=Sambal+Terasi",
      description:
        "Sambal terasi khas Indonesia dengan cita rasa pedas gurih menggugah selera.",
      category: "Bumbu Dapur",
    },
    {
      id: 53,
      name: "Tahu Putih 10 Potong",
      price: "5.000",
      stock: 120,
      imageUrl: "https://via.placeholder.com/150/FFFFE0/000000?text=Tahu+Putih",
      description:
        "Tahu putih segar, sumber protein nabati yang cocok untuk berbagai resep.",
      category: "Makanan Instan",
    },
    {
      id: 54,
      name: "Bayam Segar 250gr",
      price: "6.000",
      stock: 100,
      imageUrl: "https://via.placeholder.com/150/ADFF2F/000000?text=Bayam",
      description:
        "Sayur bayam segar, kaya zat besi dan cocok untuk menu sehat harian.",
      category: "Sayur-sayuran",
    },
    {
      id: 55,
      name: "Sarden Kaleng ABC 425gr",
      price: "22.000",
      stock: 75,
      imageUrl: "https://via.placeholder.com/150/B22222/FFFFFF?text=Sarden+ABC",
      description:
        "Sarden dalam saus tomat siap saji, lezat dan praktis untuk lauk harian.",
      category: "Makanan Instan",
    },
    {
      id: 56,
      name: "Bawang Merah Kupas 250gr",
      price: "9.000",
      stock: 85,
      imageUrl:
        "https://via.placeholder.com/150/FFB6C1/000000?text=Bawang+Merah",
      description: "Bawang merah kupas praktis siap pakai untuk bumbu masakan.",
      category: "Bumbu Dapur",
    },
    {
      id: 57,
      name: "Chiki Balls Keju 75gr",
      price: "7.000",
      stock: 95,
      imageUrl:
        "https://via.placeholder.com/150/FF6347/FFFFFF?text=Chiki+Balls",
      description:
        "Snack bola-bola keju renyah, cocok untuk camilan ringan anak-anak.",
      category: "Makanan Ringan",
    },
    {
      id: 58,
      name: "Sapu Lidi Serat Alami",
      price: "15.000",
      stock: 40,
      imageUrl: "https://via.placeholder.com/150/A0522D/FFFFFF?text=Sapu+Lidi",
      description:
        "Sapu dari serat alami untuk membersihkan halaman atau ruangan luas.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 59,
      name: "Air Mineral Le Minerale 600ml",
      price: "4.000",
      stock: 110,
      imageUrl:
        "https://via.placeholder.com/150/00CED1/000000?text=Le+Minerale",
      description:
        "Air mineral segar dalam kemasan praktis, cocok untuk kegiatan harian.",
      category: "Minuman",
    },
    {
      id: 60,
      name: "Tempe Kedelai Fresh 250gr",
      price: "4.500",
      stock: 100,
      imageUrl: "https://via.placeholder.com/150/DEB887/000000?text=Tempe",
      description:
        "Tempe segar dari kedelai pilihan, sumber protein nabati berkualitas.",
      category: "Makanan Instan",
    },
    {
      id: 61,
      name: "Nugget Ikan Crispy 500gr",
      price: "39.000",
      stock: 50,
      imageUrl:
        "https://via.placeholder.com/150/4682B4/FFFFFF?text=Nugget+Ikan",
      description:
        "Nugget ikan siap goreng dengan rasa gurih dan tekstur renyah.",
      category: "Makanan Beku",
    },
    {
      id: 62,
      name: "Susu Kental Manis Indomilk 370gr",
      price: "10.000",
      stock: 70,
      imageUrl:
        "https://via.placeholder.com/150/F0E68C/000000?text=SKM+Indomilk",
      description:
        "Susu kental manis untuk campuran minuman atau kue favorit Anda.",
      category: "Minuman",
    },
    {
      id: 63,
      name: "Bumbu Nasi Goreng Instan 60gr",
      price: "2.000",
      stock: 150,
      imageUrl:
        "https://via.placeholder.com/150/DAA520/000000?text=Nasi+Goreng",
      description: "Bumbu siap pakai untuk nasi goreng lezat ala restoran.",
      category: "Bumbu Dapur",
    },
    {
      id: 64,
      name: "Kangkung Segar 200gr",
      price: "5.500",
      stock: 95,
      imageUrl: "https://via.placeholder.com/150/008000/FFFFFF?text=Kangkung",
      description:
        "Kangkung segar siap olah, cocok untuk tumis dan sayur bening.",
      category: "Sayur-sayuran",
    },
    {
      id: 65,
      name: "Keripik Singkong Balado 100gr",
      price: "8.000",
      stock: 130,
      imageUrl:
        "https://via.placeholder.com/150/B22222/FFFFFF?text=Singkong+Balado",
      description: "Camilan pedas manis khas Indonesia dengan tekstur renyah.",
      category: "Makanan Ringan",
    },
    {
      id: 66,
      name: "Plastik Sampah Ukuran Besar 10pcs",
      price: "6.000",
      stock: 140,
      imageUrl:
        "https://via.placeholder.com/150/696969/FFFFFF?text=Plastik+Sampah",
      description:
        "Plastik tebal dan kuat untuk sampah rumah tangga atau kantor.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 67,
      name: "Daging Cincang Beku 500gr",
      price: "45.000",
      stock: 55,
      imageUrl:
        "https://via.placeholder.com/150/8B4513/FFFFFF?text=Daging+Cincang",
      description:
        "Daging sapi giling beku, cocok untuk burger, bola daging, dan lainnya.",
      category: "Makanan Beku",
    },
    {
      id: 68,
      name: "Sereal Jagung Manis 250gr",
      price: "15.000",
      stock: 80,
      imageUrl:
        "https://via.placeholder.com/150/F4A460/000000?text=Sereal+Jagung",
      description:
        "Sereal jagung manis renyah untuk sarapan pagi yang bergizi.",
      category: "Makanan Instan",
    },
    {
      id: 69,
      name: "Minuman Isotonik Pocari Sweat 500ml",
      price: "8.500",
      stock: 100,
      imageUrl: "https://via.placeholder.com/150/1E90FF/FFFFFF?text=Pocari",
      description:
        "Minuman isotonik untuk menjaga hidrasi tubuh sepanjang hari.",
      category: "Minuman",
    },
    {
      id: 70,
      name: "Nugget Ayam Beku Lezat 500gr",
      price: "35.000",
      stock: 120,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+70",
      description:
        "Produk makanan beku siap saji untuk kemudahan memasak sehari-hari.",
      category: "Makanan Beku",
    },
    {
      id: 71,
      name: "Bayam Hijau Segar 250gr",
      price: "5.500",
      stock: 80,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+71",
      description: "Sayuran segar pilihan langsung dari petani lokal.",
      category: "Sayur-Sayuran",
    },
    {
      id: 72,
      name: "Keripik Pisang Manis 100gr",
      price: "10.000",
      stock: 150,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+72",
      description: "Camilan lezat untuk menemani waktu santai Anda.",
      category: "Makanan Ringan",
    },
    {
      id: 73,
      name: "Teh Botol Sosro 350ml",
      price: "4.500",
      stock: 200,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+73",
      description:
        "Minuman menyegarkan dengan berbagai rasa untuk segala suasana.",
      category: "Minuman",
    },
    {
      id: 74,
      name: "Sapu Ijuk Pegangan Kayu",
      price: "15.000",
      stock: 60,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+74",
      description: "Produk kebutuhan rumah tangga untuk kenyamanan Anda.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 75,
      name: "Mie Goreng Instan Rasa Rendang",
      price: "3.800",
      stock: 300,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+75",
      description: "Makanan cepat saji yang praktis dan enak.",
      category: "Makanan Instan",
    },
    {
      id: 76,
      name: "Sambal Terasi 200ml",
      price: "12.000",
      stock: 90,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+76",
      description: "Bumbu dapur berkualitas untuk masakan lebih lezat.",
      category: "Bumbu Dapur",
    },
    {
      id: 77,
      name: "Daging Sapi Beku Irisan 1Kg",
      price: "85.000",
      stock: 35,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+77",
      description:
        "Produk makanan beku siap saji untuk kemudahan memasak sehari-hari.",
      category: "Makanan Beku",
    },
    {
      id: 78,
      name: "Tomat Merah Segar 1Kg",
      price: "13.000",
      stock: 100,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+78",
      description: "Sayuran segar pilihan langsung dari petani lokal.",
      category: "Sayur-Sayuran",
    },
    {
      id: 79,
      name: "Kacang Atom Pedas 250gr",
      price: "12.500",
      stock: 120,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+79",
      description: "Camilan lezat untuk menemani waktu santai Anda.",
      category: "Makanan Ringan",
    },
    {
      id: 80,
      name: "Susu Kedelai Botol 300ml",
      price: "6.000",
      stock: 110,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+80",
      description:
        "Minuman menyegarkan dengan berbagai rasa untuk segala suasana.",
      category: "Minuman",
    },
    {
      id: 81,
      name: "Kain Pel Serap Air",
      price: "18.000",
      stock: 70,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+81",
      description: "Produk kebutuhan rumah tangga untuk kenyamanan Anda.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 82,
      name: "Bubur Instan Ayam 60gr",
      price: "5.500",
      stock: 210,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+82",
      description: "Makanan cepat saji yang praktis dan enak.",
      category: "Makanan Instan",
    },
    {
      id: 83,
      name: "Kecap Manis Refill 520ml",
      price: "11.000",
      stock: 180,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+83",
      description: "Bumbu dapur berkualitas untuk masakan lebih lezat.",
      category: "Bumbu Dapur",
    },
    {
      id: 84,
      name: "Bakso Sapi Beku 500gr",
      price: "38.000",
      stock: 65,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+84",
      description:
        "Produk makanan beku siap saji untuk kemudahan memasak sehari-hari.",
      category: "Makanan Beku",
    },
    {
      id: 85,
      name: "Wortel Segar 500gr",
      price: "6.000",
      stock: 75,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+85",
      description: "Sayuran segar pilihan langsung dari petani lokal.",
      category: "Sayur-Sayuran",
    },
    {
      id: 86,
      name: "Cokelat Wafer 40gr",
      price: "7.000",
      stock: 140,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+86",
      description: "Camilan lezat untuk menemani waktu santai Anda.",
      category: "Makanan Ringan",
    },
    {
      id: 87,
      name: "Minuman Isotonik Botol 500ml",
      price: "6.500",
      stock: 95,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+87",
      description:
        "Minuman menyegarkan dengan berbagai rasa untuk segala suasana.",
      category: "Minuman",
    },
    {
      id: 88,
      name: "Lap Serbaguna Microfiber",
      price: "9.500",
      stock: 50,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+88",
      description: "Produk kebutuhan rumah tangga untuk kenyamanan Anda.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 89,
      name: "Mie Rebus Instan Rasa Soto",
      price: "3.500",
      stock: 130,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+89",
      description: "Makanan cepat saji yang praktis dan enak.",
      category: "Makanan Instan",
    },
    {
      id: 90,
      name: "Sosis Sapi Frozen Pack 500gr",
      price: "42.000",
      stock: 75,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+90",
      description:
        "Sosis daging sapi beku yang praktis dan lezat untuk berbagai hidangan.",
      category: "Makanan Beku",
    },
    {
      id: 91,
      name: "Kangkung Segar 1 Ikat",
      price: "3.000",
      stock: 100,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+91",
      description:
        "Sayur kangkung segar, cocok untuk tumisan dan hidangan khas Indonesia.",
      category: "Sayur-Sayuran",
    },
    {
      id: 92,
      name: "Kacang Goreng Gurih 150gr",
      price: "9.000",
      stock: 150,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+92",
      description: "Camilan renyah dan gurih, cocok untuk teman bersantai.",
      category: "Makanan Ringan",
    },
    {
      id: 93,
      name: "Teh Hijau Dingin 350ml",
      price: "5.000",
      stock: 120,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+93",
      description:
        "Minuman teh hijau menyegarkan, cocok dinikmati saat cuaca panas.",
      category: "Minuman",
    },
    {
      id: 94,
      name: "Ember Plastik 12L",
      price: "22.000",
      stock: 40,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+94",
      description: "Perlengkapan rumah tangga untuk kebutuhan sehari-hari.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 95,
      name: "Mie Kuah Instan Rasa Ayam Bawang",
      price: "3.200",
      stock: 300,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+95",
      description: "Mie instan dengan rasa ayam bawang gurih dan nikmat.",
      category: "Makanan Instan",
    },
    {
      id: 96,
      name: "Garam Dapur Halus 500gr",
      price: "2.500",
      stock: 250,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+96",
      description:
        "Garam halus berkualitas untuk keperluan memasak sehari-hari.",
      category: "Bumbu Dapur",
    },
    {
      id: 97,
      name: "Ikan Dori Fillet Beku 1Kg",
      price: "65.000",
      stock: 50,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+97",
      description: "Fillet ikan dori beku segar, cocok digoreng atau dibakar.",
      category: "Makanan Beku",
    },
    {
      id: 98,
      name: "Labu Siam Segar 1Kg",
      price: "7.000",
      stock: 70,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+98",
      description: "Sayuran segar berkualitas untuk campuran sayur atau tumis.",
      category: "Sayur-Sayuran",
    },
    {
      id: 99,
      name: "Kue Kering Keju 200gr",
      price: "25.000",
      stock: 80,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+99",
      description:
        "Kue kering renyah dengan taburan keju, cocok untuk cemilan keluarga.",
      category: "Makanan Ringan",
    },
    {
      id: 100,
      name: "Jus Jeruk Botol 500ml",
      price: "9.000",
      stock: 90,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+100",
      description: "Jus jeruk segar dalam kemasan praktis siap minum.",
      category: "Minuman",
    },
    {
      id: 101,
      name: "Kemoceng Serat Mikro",
      price: "13.000",
      stock: 65,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+101",
      description: "Kemoceng microfiber untuk membersihkan debu di rumah Anda.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 102,
      name: "Mie Instan Kari Ayam 80gr",
      price: "3.500",
      stock: 180,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+102",
      description: "Mie instan rasa kari ayam yang nikmat dan gurih.",
      category: "Makanan Instan",
    },
    {
      id: 103,
      name: "Kecap Asin Botol 150ml",
      price: "6.000",
      stock: 90,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+103",
      description: "Kecap asin untuk melengkapi berbagai hidangan oriental.",
      category: "Bumbu Dapur",
    },
    {
      id: 104,
      name: "Chicken Wings Frozen 1Kg",
      price: "58.000",
      stock: 45,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+104",
      description:
        "Sayap ayam beku siap masak, cocok untuk pesta BBQ atau makan malam.",
      category: "Makanan Beku",
    },
    {
      id: 105,
      name: "Kol Segar 1 Kg",
      price: "6.500",
      stock: 95,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+105",
      description: "Kol segar cocok untuk lalapan atau masakan sayur.",
      category: "Sayur-Sayuran",
    },
    {
      id: 106,
      name: "Biskuit Cokelat Sandwich 160gr",
      price: "14.000",
      stock: 110,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+106",
      description: "Biskuit isi cokelat lezat untuk camilan anak-anak.",
      category: "Makanan Ringan",
    },
    {
      id: 107,
      name: "Teh Tarik Instan 5 Sachet",
      price: "10.500",
      stock: 140,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+107",
      description: "Minuman teh tarik instan yang creamy dan nikmat.",
      category: "Minuman",
    },
    {
      id: 108,
      name: "Kipas Tangan Plastik Lipat",
      price: "3.000",
      stock: 150,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+108",
      description: "Kipas tangan praktis untuk mendinginkan saat panas.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 109,
      name: "Mie Instan Goreng Pedas Korea",
      price: "6.500",
      stock: 130,
      imageUrl: "https://via.placeholder.com/400x400?text=Produk+109",
      description:
        "Mie instan dengan rasa pedas khas Korea untuk pecinta makanan ekstrem.",
      category: "Makanan Instan",
    },
    {
      id: 110,
      name: "Buku Tulis Sinar Dunia 58 Lembar",
      price: "4.000",
      stock: 100,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Buku+Tulis",
      description:
        "Buku tulis dengan kertas berkualitas, cocok untuk pelajar semua tingkat.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 111,
      name: "Pensil 2B Joyko",
      price: "2.500",
      stock: 120,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Pensil+2B",
      description: "Pensil 2B berkualitas tinggi untuk menulis dan menggambar.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 112,
      name: "Pulpen Snowman Hitam",
      price: "3.000",
      stock: 90,
      imageUrl:
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Pulpen+Hitam",
      description:
        "Pulpen tinta hitam dengan aliran tinta lancar dan desain ergonomis.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 113,
      name: "Rautan Pensil Kecil",
      price: "1.500",
      stock: 150,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Rautan",
      description:
        "Rautan kecil yang mudah digunakan dan praktis untuk anak sekolah.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 114,
      name: "Penghapus Putih Joyko",
      price: "2.000",
      stock: 130,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Penghapus",
      description: "Penghapus bersih dan tidak merusak kertas.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 115,
      name: "Penggaris 30cm Mika Transparan",
      price: "3.500",
      stock: 85,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Penggaris",
      description:
        "Penggaris plastik bening dengan ukuran akurat dan tahan lama.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 116,
      name: "Tas Ransel Sekolah Anak SD",
      price: "85.000",
      stock: 60,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Tas+SD",
      description: "Tas ransel anak dengan banyak kompartemen dan bahan kuat.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 117,
      name: "Seragam Putih Abu-Abu Laki-laki",
      price: "95.000",
      stock: 40,
      imageUrl:
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Seragam+SMA",
      description:
        "Seragam sekolah SMA untuk laki-laki dengan bahan adem dan nyaman.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 118,
      name: "Seragam Merah Putih Anak SD",
      price: "90.000",
      stock: 50,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Seragam+SD",
      description: "Paket seragam SD lengkap untuk anak-anak.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 119,
      name: "Celana Seragam Pramuka",
      price: "60.000",
      stock: 70,
      imageUrl:
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Celana+Pramuka",
      description: "Celana pramuka standar nasional dengan bahan berkualitas.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 120,
      name: "Sepatu Sekolah Hitam Anak",
      price: "110.000",
      stock: 55,
      imageUrl:
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Sepatu+Sekolah",
      description: "Sepatu sekolah warna hitam yang nyaman dan kuat.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 121,
      name: "Tempat Pensil Karakter Anak",
      price: "15.000",
      stock: 80,
      imageUrl:
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Tempat+Pensil",
      description:
        "Tempat pensil lucu dan fungsional untuk anak-anak sekolah dasar.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 122,
      name: "Kemeja Putih Seragam Lengan Pendek",
      price: "50.000",
      stock: 75,
      imageUrl:
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Kemeja+Putih",
      description:
        "Kemeja putih lengan pendek untuk seragam SD, SMP, atau SMA.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 123,
      name: "Topi SD Warna Merah",
      price: "18.000",
      stock: 65,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Topi+SD",
      description:
        "Topi seragam sekolah dasar warna merah sesuai ketentuan nasional.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 124,
      name: "Kaos Kaki Sekolah Hitam",
      price: "10.000",
      stock: 100,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Kaos+Kaki",
      description: "Kaos kaki sekolah warna hitam yang nyaman dan awet.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 125,
      name: "Jas Hujan Anak Sekolah",
      price: "35.000",
      stock: 45,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Jas+Hujan",
      description:
        "Jas hujan untuk anak-anak agar tetap kering saat ke sekolah.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 126,
      name: "Tempat Bekal Makan Anak",
      price: "22.000",
      stock: 70,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Bekal",
      description: "Tempat makan lucu dan praktis untuk bekal sekolah anak.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 127,
      name: "Botol Minum Anak Anti Tumpah",
      price: "25.000",
      stock: 85,
      imageUrl:
        "https://via.placeholder.com/150/0000FF/FFFFFF?text=Botol+Minum",
      description: "Botol minum aman dan praktis untuk anak sekolah.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 128,
      name: "Spidol Boardmarker Snowman Hitam",
      price: "6.000",
      stock: 90,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Spidol",
      description: "Spidol berkualitas untuk menulis di papan tulis putih.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 129,
      name: "Map Plastik A4",
      price: "3.000",
      stock: 100,
      imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Map+A4",
      description:
        "Map plastik ukuran A4 untuk menyimpan dokumen penting sekolah.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 130,
      name: "Buku Gambar A3 20 Lembar",
      price: "6.000",
      stock: 100,
      imageUrl:
        "https://via.placeholder.com/150/FFDAB9/000000?text=Buku+Gambar",
      description:
        "Buku gambar ukuran A3 dengan kertas tebal, cocok untuk menggambar dan mewarnai.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 131,
      name: "Celana Panjang Seragam SD",
      price: "45.000",
      stock: 70,
      imageUrl:
        "https://via.placeholder.com/150/FFE4B5/000000?text=Celana+Seragam",
      description:
        "Celana panjang seragam untuk siswa SD dengan bahan yang nyaman dan kuat.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 132,
      name: "Kertas Origami 100 Lembar",
      price: "8.500",
      stock: 90,
      imageUrl:
        "https://via.placeholder.com/150/FAFAD2/000000?text=Kertas+Origami",
      description: "Kertas warna-warni untuk kerajinan origami anak-anak.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 133,
      name: "Baju Seragam SD Putih",
      price: "40.000",
      stock: 60,
      imageUrl:
        "https://via.placeholder.com/150/FFFACD/000000?text=Baju+SD+Putih",
      description:
        "Seragam sekolah dasar warna putih dengan bahan adem dan menyerap keringat.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 134,
      name: "Pensil 2B Joyko (isi 12)",
      price: "9.000",
      stock: 200,
      imageUrl: "https://via.placeholder.com/150/E6E6FA/000000?text=Pensil+2B",
      description:
        "Pensil berkualitas untuk menulis dan menggambar. Cocok untuk anak sekolah.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 135,
      name: "Pulpen Pilot G2 0.7mm",
      price: "12.000",
      stock: 150,
      imageUrl:
        "https://via.placeholder.com/150/F5F5DC/000000?text=Pulpen+Pilot",
      description: "Pulpen gel dengan tinta halus dan warna hitam pekat.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 136,
      name: "Rautan Pensil Dua Lubang",
      price: "3.500",
      stock: 180,
      imageUrl: "https://via.placeholder.com/150/F0FFF0/000000?text=Rautan",
      description:
        "Rautan pensil praktis dengan dua lubang untuk berbagai ukuran pensil.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 137,
      name: "Penggaris Mika 30cm",
      price: "4.500",
      stock: 160,
      imageUrl: "https://via.placeholder.com/150/F5DEB3/000000?text=Penggaris",
      description: "Penggaris transparan dengan angka jelas, panjang 30cm.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 138,
      name: "Buku Agenda Harian",
      price: "10.000",
      stock: 90,
      imageUrl:
        "https://via.placeholder.com/150/FFEFD5/000000?text=Agenda+Harian",
      description: "Buku catatan harian dengan desain minimalis dan ringkas.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 139,
      name: "Tempat Pensil Karakter",
      price: "15.000",
      stock: 110,
      imageUrl:
        "https://via.placeholder.com/150/FFF0F5/000000?text=Tempat+Pensil",
      description:
        "Tempat pensil lucu dengan desain karakter kartun favorit anak-anak.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 140,
      name: "Tas Ransel Sekolah Anak",
      price: "70.000",
      stock: 50,
      imageUrl:
        "https://via.placeholder.com/150/D8BFD8/000000?text=Tas+Sekolah",
      description:
        "Tas sekolah anak dengan banyak kompartemen dan bahan tahan air.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 141,
      name: "Kotak Makan Anak Karakter",
      price: "20.000",
      stock: 140,
      imageUrl:
        "https://via.placeholder.com/150/E0FFFF/000000?text=Kotak+Makan",
      description:
        "Kotak makan dengan sekat dan desain menarik untuk anak sekolah.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 142,
      name: "Botol Minum Anak BPA Free 600ml",
      price: "25.000",
      stock: 130,
      imageUrl:
        "https://via.placeholder.com/150/F0E68C/000000?text=Botol+Minum",
      description:
        "Botol minum anti tumpah, aman untuk anak-anak dan tidak mengandung BPA.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 143,
      name: "Crayon Oil Pastel 24 Warna",
      price: "30.000",
      stock: 80,
      imageUrl:
        "https://via.placeholder.com/150/F5FFFA/000000?text=Crayon+Oil+Pastel",
      description:
        "Crayon warna dengan tekstur lembut, ideal untuk anak yang suka menggambar.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 144,
      name: "Kemeja Putih Pramuka Anak",
      price: "50.000",
      stock: 60,
      imageUrl:
        "https://via.placeholder.com/150/FFF5EE/000000?text=Kemeja+Pramuka",
      description:
        "Kemeja seragam pramuka lengan pendek dengan bahan adem dan nyaman.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 145,
      name: "Kaos Kaki Sekolah Putih (3 Pasang)",
      price: "18.000",
      stock: 180,
      imageUrl: "https://via.placeholder.com/150/FDF5E6/000000?text=Kaos+Kaki",
      description:
        "Kaos kaki putih untuk anak sekolah dengan bahan katun elastis dan nyaman.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 146,
      name: "Sepatu Sekolah Anak Hitam",
      price: "95.000",
      stock: 40,
      imageUrl:
        "https://via.placeholder.com/150/FAEBD7/000000?text=Sepatu+Sekolah",
      description:
        "Sepatu sekolah warna hitam dengan sol kuat dan nyaman dipakai seharian.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 147,
      name: "Jas Hujan Sekolah Anak",
      price: "28.000",
      stock: 65,
      imageUrl: "https://via.placeholder.com/150/FFE4E1/000000?text=Jas+Hujan",
      description: "Jas hujan anak dengan bahan plastik tebal dan model lucu.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 148,
      name: "Kalkulator Saku Mini",
      price: "22.000",
      stock: 70,
      imageUrl: "https://via.placeholder.com/150/F5F5F5/000000?text=Kalkulator",
      description:
        "Kalkulator saku berukuran kecil dan ringan, cocok untuk pelajar.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 149,
      name: "Sticky Notes Warna-warni",
      price: "5.000",
      stock: 190,
      imageUrl:
        "https://via.placeholder.com/150/FFFACD/000000?text=Sticky+Notes",
      description:
        "Sticky notes mini untuk mencatat dan mengingat tugas sekolah.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 150,
      name: "Spidol Warna (12 Warna)",
      price: "14.000",
      stock: 120,
      imageUrl: "https://via.placeholder.com/150/FFEBCD/000000?text=Spidol",
      description: "Set spidol warna untuk keperluan menggambar dan mewarnai.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 151,
      name: "Tepung Terigu Segitiga Biru 1 Kg",
      price: "13.000",
      stock: 90,
      imageUrl:
        "https://via.placeholder.com/150/E0FFFF/000000?text=Tepung+Terigu",
      description:
        "Tepung terigu serbaguna cocok untuk membuat berbagai macam kue dan gorengan.",
      category: "Bumbu Dapur",
    },
    {
      id: 152,
      name: "Buku Gambar A3 Isi 20 Lembar",
      price: "9.000",
      stock: 70,
      imageUrl:
        "https://via.placeholder.com/150/FFFACD/000000?text=Buku+Gambar",
      description:
        "Buku gambar ukuran besar, cocok untuk kegiatan seni anak-anak di sekolah.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 153,
      name: "Kentang Beku French Fries 1 Kg",
      price: "32.000",
      stock: 50,
      imageUrl:
        "https://via.placeholder.com/150/FFE4C4/000000?text=Kentang+Fries",
      description:
        "Kentang beku siap goreng, renyah di luar dan lembut di dalam.",
      category: "Makanan Beku",
    },
    {
      id: 154,
      name: "Sosis Sapi Kanzler Bockwurst 360gr",
      price: "40.000",
      stock: 45,
      imageUrl: "https://via.placeholder.com/150/DCDCDC/000000?text=Sosis+Sapi",
      description:
        "Sosis berkualitas dari daging sapi pilihan, nikmat untuk sarapan.",
      category: "Makanan Beku",
    },
    {
      id: 155,
      name: "Minyak Wijen ABC 195ml",
      price: "18.000",
      stock: 30,
      imageUrl:
        "https://via.placeholder.com/150/F5DEB3/000000?text=Minyak+Wijen",
      description:
        "Minyak wijen harum untuk memberi cita rasa khas pada masakan Asia.",
      category: "Bumbu Dapur",
    },
    {
      id: 156,
      name: "Teh Celup Sosro 25 Kantong",
      price: "12.000",
      stock: 90,
      imageUrl: "https://via.placeholder.com/150/F5F5F5/000000?text=Teh+Sosro",
      description: "Teh celup hitam berkualitas untuk momen santai Anda.",
      category: "Minuman",
    },
    {
      id: 157,
      name: "Tahu Bakso Frozen 10 pcs",
      price: "25.000",
      stock: 60,
      imageUrl: "https://via.placeholder.com/150/FAFAD2/000000?text=Tahu+Bakso",
      description:
        "Tahu isi bakso sapi yang praktis disajikan sebagai camilan atau lauk.",
      category: "Makanan Beku",
    },
    {
      id: 158,
      name: "Brokoli Segar 500gr",
      price: "14.000",
      stock: 55,
      imageUrl: "https://via.placeholder.com/150/7FFFD4/000000?text=Brokoli",
      description:
        "Sayuran sehat kaya serat dan vitamin, cocok untuk sup dan tumisan.",
      category: "Sayur-Sayuran",
    },
    {
      id: 159,
      name: "Celana Training Anak Laki-laki",
      price: "42.000",
      stock: 40,
      imageUrl:
        "https://via.placeholder.com/150/B0E0E6/000000?text=Celana+Anak",
      description: "Celana training nyaman untuk anak laki-laki aktif bermain.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 160,
      name: "Jas Hujan Anak Karakter",
      price: "38.000",
      stock: 30,
      imageUrl: "https://via.placeholder.com/150/ADD8E6/000000?text=Jas+Hujan",
      description: "Jas hujan anak-anak dengan motif lucu dan bahan tahan air.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 161,
      name: "Ice Cream Campina Hula-Hula",
      price: "10.000",
      stock: 50,
      imageUrl: "https://via.placeholder.com/150/FFB6C1/000000?text=Campina",
      description:
        "Es krim kelapa manis dengan tekstur lembut dan rasa nostalgia.",
      category: "Makanan Ringan",
    },
    {
      id: 162,
      name: "Tempe Mendoan Frozen 10 pcs",
      price: "20.000",
      stock: 65,
      imageUrl: "https://via.placeholder.com/150/FFEBCD/000000?text=Mendoan",
      description:
        "Tempe goreng tipis khas Banyumas dalam kemasan siap goreng.",
      category: "Makanan Beku",
    },
    {
      id: 163,
      name: "Botol Minum Anak 500ml",
      price: "17.000",
      stock: 80,
      imageUrl: "https://via.placeholder.com/150/E6E6FA/000000?text=Botol+Anak",
      description: "Botol minum lucu dan anti tumpah untuk bekal sekolah anak.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 164,
      name: "Paket Sayur Sop Komplit",
      price: "12.500",
      stock: 60,
      imageUrl: "https://via.placeholder.com/150/90EE90/000000?text=Sayur+Sop",
      description:
        "Paket sayuran segar untuk membuat sop, isi wortel, kol, kentang, seledri.",
      category: "Sayur-Sayuran",
    },
    {
      id: 165,
      name: "Baju Kaos Seragam Olahraga SD",
      price: "45.000",
      stock: 70,
      imageUrl: "https://via.placeholder.com/150/FFFAF0/000000?text=Kaos+SD",
      description: "Kaos olahraga anak SD bahan adem dan menyerap keringat.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 166,
      name: "Bakso Sapi Halus Frozen 1 Kg",
      price: "38.000",
      stock: 45,
      imageUrl: "https://via.placeholder.com/150/F0FFF0/000000?text=Bakso",
      description: "Bakso sapi siap saji dengan tekstur halus dan rasa gurih.",
      category: "Makanan Beku",
    },
    {
      id: 167,
      name: "Pulpen Warna-warni Pack 10",
      price: "10.000",
      stock: 100,
      imageUrl:
        "https://via.placeholder.com/150/F5F5DC/000000?text=Pulpen+Color",
      description:
        "Pulpen dengan berbagai warna untuk belajar dan menulis kreatif.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 168,
      name: "Garam Dapur Refina 500gr",
      price: "4.000",
      stock: 150,
      imageUrl: "https://via.placeholder.com/150/FFFFFF/000000?text=Garam",
      description: "Garam dapur beryodium untuk keperluan memasak harian.",
      category: "Bumbu Dapur",
    },
    {
      id: 169,
      name: "Lauk Kering Teri Kacang 250gr",
      price: "22.000",
      stock: 50,
      imageUrl:
        "https://via.placeholder.com/150/FFE4E1/000000?text=Teri+Kacang",
      description: "Lauk kering renyah, cocok untuk nasi hangat dan bekal.",
      category: "Makanan Instan",
    },
    {
      id: 170,
      name: "Bawang Putih Kupas 250gr",
      price: "10.000",
      stock: 60,
      imageUrl:
        "https://via.placeholder.com/150/FDF5E6/000000?text=Bawang+Putih",
      description: "Bawang putih kupas siap pakai, hemat waktu dan praktis.",
      category: "Bumbu Dapur",
    },
    {
      id: 171,
      name: "Kacang Tanah Kupas 500gr",
      price: "17.000",
      stock: 40,
      imageUrl:
        "#",
      description: "Kacang tanah segar untuk gorengan atau bahan sambal pecel.",
      category: "Grocery",
    },
    {
      id: 172,
      name: "Stik Keju Renyah 200gr",
      price: "14.000",
      stock: 45,
      imageUrl: "https://via.placeholder.com/150/FFDAB9/000000?text=Stik+Keju",
      description: "Stik keju renyah sebagai camilan favorit keluarga.",
      category: "Makanan Ringan",
    },
    {
      id: 173,
      name: "Pensil 2B Joyko Pack 12",
      price: "8.000",
      stock: 100,
      imageUrl: "https://via.placeholder.com/150/EEE8AA/000000?text=Pensil",
      description: "Pensil 2B cocok untuk ujian dan menggambar.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 174,
      name: "Sapu Lidi Tradisional",
      price: "12.000",
      stock: 70,
      imageUrl: "https://via.placeholder.com/150/8B4513/FFFFFF?text=Sapu+Lidi",
      description:
        "Sapu tradisional dari bahan alami untuk membersihkan halaman.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 175,
      name: "Jam Dinding Quartz 30cm",
      price: "48.000",
      stock: 30,
      imageUrl:
        "https://via.placeholder.com/150/A9A9A9/FFFFFF?text=Jam+Dinding",
      description:
        "Jam dinding analog bergaya minimalis, cocok untuk ruang keluarga.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 176,
      name: "Gunting Kertas Joyko",
      price: "6.000",
      stock: 120,
      imageUrl: "https://via.placeholder.com/150/B0C4DE/000000?text=Gunting",
      description:
        "Gunting tajam dan ergonomis untuk keperluan sekolah atau kantor.",
      category: "Perlengkapan Sekolah",
    },
    {
      id: 177,
      name: "Mangkok Plastik Serbaguna",
      price: "5.000",
      stock: 100,
      imageUrl: "https://via.placeholder.com/150/EEE8AA/000000?text=Mangkok",
      description:
        "Mangkok tahan lama untuk keperluan dapur atau wadah makanan.",
      category: "Perlengkapan Rumah",
    },
    {
      id: 178,
      name: "Nasi Putih Instan 200gr",
      price: "7.000",
      stock: 90,
      imageUrl:
        "https://via.placeholder.com/150/FFFACD/000000?text=Nasi+Instan",
      description: "Nasi siap saji dalam kemasan praktis, tinggal panaskan.",
      category: "Makanan Instan",
    },
    {
      id: 179,
      name: "Kecap Asin Cap Kipas 150ml",
      price: "9.000",
      stock: 60,
      imageUrl: "https://via.placeholder.com/150/FAEBD7/000000?text=Kecap+Asin",
      description: "Kecap asin sebagai pelengkap rasa untuk masakan oriental.",
      category: "Bumbu Dapur",
    },
    {
      id: 180,
      name: "Toples Kue Plastik 1 Liter",
      price: "11.000",
      stock: 70,
      imageUrl: "https://via.placeholder.com/150/FFEFD5/000000?text=Toples",
      description:
        "Toples bening untuk menyimpan kue kering atau makanan ringan.",
      category: "Perlengkapan Rumah",
    },
  ];

  for (let i = 0; i < count; i++) {
    const originalProduct = baseProducts[i % baseProducts.length];
    products.push({
      ...originalProduct,
      id: i + 1, // Pastikan ID unik
      name: `${originalProduct.name}`, // Ubah nama sedikit
      price: `${(
        parseFloat(originalProduct.price.replace(".", "")) +
        i * 100
      ).toLocaleString("id-ID")}`, // Ubah harga
      stock: originalProduct.stock + i, // Ubah stok
    });
  }
  return products;
};

const allProductsData = generateDummyProducts(200); // Generate 200 produk dummy

export default allProductsData;
