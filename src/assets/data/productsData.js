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
      imageUrl: "https://fdrtire.com/image/0/0/51248265d2632.jpg",
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
      description: "Keripik kentang rasa sapi panggang yang renyah dan gurih.",
      category: "Makanan Ringan",
    },
    {
      id: 23,
      name: "Coca-Cola Kaleng 330ml",
      price: "8.000",
      stock: 140,
      imageUrl:
        "https://down-id.img.susercontent.com/file/abbc8f8db9e678737753d5bc00c29421",
      description: "Minuman soda menyegarkan dalam kemasan kaleng praktis.",
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
      description: "Teh manis menyegarkan dengan rasa bunga melati yang harum.",
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
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQQEBUTEBITEhIVFhcTEBEWFhAYFRcWFxUWFhYVGBUaHSgiGBolHRUYIjEhJSk3Li4uGB8zODMtNygtLisBCgoKDg0OGxAQGjUmHyUtLTc1LzUxNy8tNSsrLS0tLSsyNS8yMC0tLy8tLS0tKzUvNS0tLS0tLS0tLS0tNS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABAUGBwMBAgj/xABEEAABAwIDAwgHBgIJBQAAAAABAAIRAwQSITEFBkETFSJRVGGT0QcWIzJxgZEUQlNyobFSYhczgrLB0uHw8SRDkqLC/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EAC0RAQACAgECBQQBAwUAAAAAAAABAgMREgQhExQxQWEiUZGhgbHh8AUyQlJx/9oADAMBAAIRAxEAPwDtaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIPhKwe3fSIbavUpMteWDHYcQrNaSR72RZAgyNeC3NxUwsc7XCCY+Alchut2Lpji+qQC5xe4NcCCXGTOY61VltaNcYU5bXjXGF0z0sMj2lnWpnvIePrTDsvkv0/0q0/uW5qO/hbVpz9CAR9FUs3euajcVNtJrWyXyXl0dx5T/BUd5ZkyC4OnUCC3q6+5Qvm8PUz3U3z2rHdvrb0g8ppbRGZxVqbf3C9D6QaQ95jQerlCf1wQuZfYHD3SWcBBy/8AAy0/MKfYXt3REF1GqycTGvotbh7gWQCJHUq69TWfdGvUb9bfp0Mb+UyJFME9XK0v+f0X1u/tIAYmEO4gEkD+1hErH21evUmbK2IIBLjia0cWkucI0IGueSmu2NXeBh2dQEuxYgQctcOeGfiFdE5Ld6zH4lbztPpb9L4+kSjoKT/qAPqQvlx6QqbImlM55VaZ/ZZ3aO7VxVfLKFKkBlDXMDZ7oGuupPyX5obtvosBrUmuc7OS5kAcAA4az3f68i+XlriqnNkifheN9J1Auw8nnrGOT9A0qW30h28Zgg9XT/fAss3ZzcTXfZ6fUSOTOgALZHCSTn18OHylZNLqc0aeHPEJpy4x0WiAcI+p+Optv4v/ABp+XPHt7S1Xr7TiRTaRw9swO+bSBC+jfdx922xflrNP1hqytajSAMWzcUEDOmWh0694E6a9ap37NjMYuse5rw0KrnqOE6vVyeovHu3VP0gOLS/7DVDQYLjUZl9AV4/0mN7M7xB/lWIoUq9N2JryHdcg5dRBEEKfbua8/wDUU2gH7zRp8G8PlCjfLS0/RfX/ALCPmbT6S1DfSU0mBauJ4DlB/lUu336LxP2Vzc46TnDXT7nXksY2hRa4uY5zSIwy3MGdRrH+q9bu8eR0asmZbIeIIIj5jX5JWZ97x+nY6i3vLYu34gEmiAASJNR4GU8eT7kfvvDSeQBiBAe8nMSMuT/3KxZu3mJqOMEnIO+8Zdq7icyvQ3pIPtHkmMQdJBwiBAkxHxUuUf8AaPzDvmZ+7Rv9JIGTrV4PUXgf/K+f0mN7M7xB/lWQq0+VeC9zQ3Qww4iBphIcYHxCht3qsbSo7CDUe0hrpDiAdD0yCBpw+q5FMkz2yQ7XLltOqy3X9JY7K7xGZd+YXs30hzpak8MqzPJcu2lvtbVDha0Umzm1rJzE/egZZnTJRTvhRbkXO+bHf4Ku9ssW1H5S5Zt/2dcHpAPZD41PyT+kE9kPjM8lymlvO0tLw6Wg5HA7irKxualamKrGSx2YBOAmMujIOXUeKROXetuWyZK+rolH0jUy4NfQcySBPKMdE8TAyC3K4bfWpdk1pAjMOcwn9AF2Ddu6Na1pPd7xYA/8zei79QVPDkm0zWVnT5pvMxMrNERaGp43g9m/8rv2Kwe99Oq9/tXClbsgsLXdJ51EfzAj5ROc5by8MU3k6BrifhBXKNtbVfeVhAOEdGlT49Ux/EVRny8I+VGfLwj5ed1tWpUbgBLaf8I4/m6/gvLZ9g+u/BSbidBMS0ZDXU960+z9xHubirVRTJ+4BJHxMqx2Juy6zu2v5Rr2Oa5oywunI6SZ01CxeBkvaJuxxgyXtE3YjaOz6lu/BWbhdAdEtORJAMg9xUzdwUxUJqNNQgHBTAOZ/ic7RrRxJVrv9Rc+9Y1gLnOpNDQNT0nqTYbiPwzUr4HEZta2Y0MEk55gfRKY5rl+mNxCMYbeJMVjekV1/bHoGk2k6YxBxcJBBJaWgtJGWo4DMKdR2qKT4xiAOLm4smk58cWXAGCY71Tbd3Uq2oxgirT0Lmggt6pHV3qZb7mO5PlK9dlGdZ4TwcSRmt0dXl71micRl3rSVV3xpR0BUaRMQ1kZzpnp8QoF3vNTqiH06h/tUxwz1aVW3+xHU67aNN7aznAFuCdDpPVlmtFb7gEt6dcNd1BsgfOc1RXqOpmfpj0R1mvuNKKjf0A4wK1OePsn/MiGnj1qy2O2kXQy4YR/A/2Zd9REz1FeJ3QqNuG0qjoY+cFZoJBI4ETke5Rt5tgfYjTHKcpjDj7uGMOHvM+8ro/1Dqa1mbx2Q4XrHKa+jR7XsqdNhFKm2XfcJjqE4mtPDQgqq5tbUdTbSdjc4S8DVs6ZQJGuY7vivfY2w6pthWZXGEtL+Rc3E3ozlrlpwWgfsFzmtdLKdVoyLMUA5cepbK3x5qfXC/wrW78WEv7M03lp1C99l2sNL30eUYXYcRww0Na59TU6xEaaa8FN2rbEEsqMis0Bzy3QtzGMDqJB4fsVM2fbPFJgDoa4HGCwYQBiqyZcCSYAnQh0Lz74JpfUqa4/rQa1oxzSDQNM4RUL/YNGBzxhmXgNMBzY1/VfRa03QPspaSxtQyaTRhcS2cRd0DiAI468CpVZtZ7Za8uccP3WNDxytRuGoWuEgl1QmBEASv3UbVaXvfVaSxgw1cDQ4gtdUccIcJANQAiDOJpIyVc1j7LuMfb+iDRtGupGqLR3JifaEUxM5dFhd0ukGwB1uGa/d7sttGk6obb3QZGOmSwvOJpe0HIA4RHVKn7uWzjbUWF5a6o81s8zyVAtwtaD1uwn5lNrN5agMFN1s+5r+2Y4Euc1ueMjUNETHnnzhHDevZ3hHHevZhiFxl7iwuaczPSmdQTK776vVuOAcQC6D93hGXvBcd2jsmNqChVPQq129McWVamoPzInuXejiazMWd6Os1mYlU0KjDq2D1jQZdX0+pXT/R7unbXtqTcsmXTSLSQ4N7+qVVbxejg8o82chjS1ppGcUEe+0uMkeRXWdhbKZb0G07ZrGlrRHGTGZM6n4qeXNEx9MvYx4ZrP1M6z0ZWdKqKjWPfHute4uZPAwdY71dVdnYQTEwC4gcQBMD6KVszZdatWJuq7sBMcg3CRE5EugETpAMQrHe+u22pAAYn1CQ1vWGMdUd/dA+a5Xc1m099M/UdPF8kQ5HvvsvaDLQ3T6zWNkY7ejIwNcYEv1ccxJ06l1f0TEnY1oXEkljiSTJzqP4qHZYL+0c14htWmREPEAjqcAQRkr3ce0NHZ9Cm4QWNc0gaSHuBjuVnT332TyYq0/wBsL1ERaVSPtAexqfkd/dK5luK1pvaePqcWz/FGS6de/wBW/wDK7+6Vxa3qlha5phwgtI1BCxdVbjetmLqrcb1ltfSFXrNqMALm0cORbIBdJmSPkou511VddUhVc8tDH8liniRME66fopdjvyMGG4pYjxc2IPxaVG2lvgH1KTqdADknYgXHpQRBaI0HkOpQtanPnz/hC16cufL+GjrU286MLtfs/s54uDzMd8FUvpCuqzKjAC5tLDILSQC+TIJHdGS/W1d86dSiRTa9lXoljiBAIcCf0C+2u/LC2K9Ek8SIIPyKnfJjtE1i2t+6y+THaJrFtbW27NV9SwJuJiHgF2pZGR/dRLXb9tf0xRuRhc6MjIBdwLXDT/VUW397n3DDTpN5KmcnZy4jq7gvbZu8dsxjA+0BdTADX9AmRnMkTqkZ67477R9/cjPXfHfb+rQbG3dZaXRc1xc1zDyeKMTSCJE8cj+hUTb11btufb1bplQRha33I4YQBmqLa291SrVY+mOTFMktbMyTkcXyVxQ36pOANWicY6sJHynRd8bFrjWdO+Ni1xrOlzR2/QqVGUQXirLSA9jmnLOcxxEqj9JVM+wdBwjlATwBOAgfofoqfb29BuHsdTYKfJnEx5gvnqng3uVzZ79sLIr0ji44YIPyKjbNTJE0mf5QtmpkiaTP8rTYgLdmAR0uTeAOMnEAPqQsxuztK5deNBc90u9q10xHEkcIWttrvlbY3AyYBUq06fe3ERi64I0H/FS3fulhnkXB51AwxPxVmTjHHdta/a2/GOO7a1+0rfDA2tbPc7CZex7eL6TgMY+IyM6+91lYXe69uLIy1pcxhwPh7wac5tOUjC4Rn1yF+tubUfd1OUecMf1Yb9z4TqevrVtYuFzSl7QXBgpVmxIc0SJAOpIz/SVqxXx9TTjvvH+RLLfJGS06UDXXRocoQzksOM+1q5Y2kwWlupGXzXuyyuS1shrZb0Wmq/Q4AWxhy95ojyUa42S1uTX1iI93lap6MRkZhzYJH1BX5dbsbHKVagMZDG+YOcyT15rzc9PCtq8K5mn2S3Wt2wsPRaZLaTuVqZQHGGkNyBDSfp1qHf3N0KlMPwvdWDg15rVCMDRjcXEtkNAE/JSRshtYTTr1HO1wmq4OmIyzzMdSiVNhnGMT6wrNMt9q/E3FlOKZadFXuiW6vxYbabWe6k6p7XC3A8PrlrnufBYJYMgziYzngFWbybsuuLm3zFOo0y+Ynk2umRGsOBHxJ6lstm7Pdyp5QFvKPNSpSDn4qjhgYASTm0QP/ZaS92S6uarmAFwDG4oGIhpLsIdrq4mO/wDmWyOnmKzkiNTr8tPTxWcsSqRcOgB8EaB0dL5nivanXg9F0TxXwW0sh2o4cR8VT/aeTrU2Ew19RtPHqG4jExxjLjxWCImZ1Hq+hm0RG5anYFA1a/SL2YW4qjA8kPMw1xgZacDopG9t86m7A5oLHMJpuJyxCMTYjMwf95q12Rs/kS4l4e50Aw3CMp7zJzUXezNjG4ywFxxEEgloGYxDTULdNOOLuyReLZYmPRB2fctfRaacRGXktDs7+qb8J/UrFMvadLoUzM6DVbPZJmhTP8qr6S27TDvUV1CWiIt7I8rodB35T+xXEWHILuL2yI61nhuTafhu8Sp5rL1OG2TWmXqcNsmtOZAr7iXTfUq0/Df4lTzT1LtPw3+JU81l8nk+GbyeT4czlF0z1LtPw3eJU809S7T8N3iVPNPJ5PhzyeT4czlJXTfUu0/Dd4lTzT1MtPw3eJU808nk+HfJ5PhzNrhIkSJEjrHEKW6tQJnk3jrGKRpr16roHqXafhu8Sp5p6l2n4bvEqea7HSZI+zsdJkj7OeurUdRTdrME5RBgT8SD8l8dUowYY+YykjLPX6Quh+pdp+G/xKnmnqXafhu8Sp5p5TJ8HlcnwzFjvWKdp9n5InoOYX4gPenOPmqKi+nADmuB+84E/tP+/wBuiepdp+G7xKnmnqXafhu8Sp5qdunzW1uY7JWwZra3rs5oCpFjeuovDm92IdYmY+PEd8LonqXafhu8Sp5r56mWn4b/ABKnmo06bLS0WiYQjpMkTuNKRmGqAWmnD5cOi0TlEhp46giZEakQFGttm21R5FZzm1XOIcNIAyBBgiIHH4LW0d2bdjCwNcWHPC5zyAesT7p7wpDNjUg3CWlw/mOI/Ur1rTjy1jxY7rvLW9XPtobvUGn2dzSOebfdeO6GnP6L87Ns6bATSBdJBcSDw0bLs+/Rb2pu3bH/ALQHwkfsvzU3Zt3ADAQBwDngH4wVHDh6XFbnWJ2hPS3n00pNh2PLvxSSGiJGmfeO7IDXOT36+3phgwgZDP4zx+MpbW7abAym1rGNENa0AADuAX7LVLLkm87a8WKKR8oV3Qo1XFrx0jliEg/J3FV13ujbvacnYwIY8nNkOa6W8JlrZPdCvnMB14aL7Co4V3vXdfynWtodegT7jhjIBLTxjUjqVHtHbAosqGvAbTaXvxRkGjFP0Wm5IYg6OkBAdxjqnqVNvFupbX4i5a9wyBa2pUYHRpiwkYvmuzXaqazvcP579H28NR18WPcXU6uJwY4l2EjpANJ0ESPov6U2QfYU4/hCzOzPRjs62fylGg5rwIBNWscteLlrbagKbAxohrRDRnooVx6yTb4XzfdIq9URFarEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEUHnm37TQ8Wl5pzzb9poeLS80E5FB55t+00PFpeac82/aaHi0vNBORQeebftNDxaXmnPNv2mh4tLzQTkUHnm37TQ8Wl5pzzb9poeLS80E5FB55t+00PFpeac82/aaHi0vNBORQeebftNDxaXmnPNv2mh4tLzQTkUHnm37TQ8Wl5pzzb9poeLS80E5FB55t+00PFpeac82/aaHi0vNBORQeebftNDxaXmnPNv2mh4tLzQTkUHnm37TQ8Wl5pzzb9poeLS80E5FB55t+00PFpeac82/aaHi0vNBORQeebftNDxaXmnPNv2mh4tLzQTkUHnm37TQ8Wl5pzzb9poeLS80E5FB55t+00PFpeac82/aaHi0vNBORQeebftNDxaXmviDJIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg//9k=",
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
      description: "Tahu putih lembut, sumber protein nabati yang menyehatkan.",
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
        "data:image/jpeg;base64,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",
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
        "data:image/jpeg;base64,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",
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
        "data:image/jpeg;base64,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",
      description:
        "Sambal terasi khas Indonesia dengan cita rasa pedas gurih menggugah selera.",
      category: "Bumbu Dapur",
    },
    {
      id: 53,
      name: "Bakso Sapi Instan 250gr",
      price: "38.000",
      stock: 100,
      imageUrl:
        "data:image/jpeg;base64,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",
      description:
        "Bakso sapi siap saji dengan rasa gurih, cocok untuk kuah atau gorengan sebagai hidangan praktis sehari-hari.",
      category: "Makanan Instan",
    },
    {
      id: 54,
      name: "Kangkung Segar Ikat",
      price: "4.500",
      stock: 90,
      imageUrl:
        "data:image/jpeg;base64,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",
      description:
        "Kangkung segar cocok untuk tumisan atau lalapan, kaya akan zat besi dan serat alami.",
      category: "Sayur-sayuran",
    },
    {
      id: 55,
      name: "Sarden Kaleng ABC 425gr",
      price: "22.000",
      stock: 75,
      imageUrl:
        "data:image/jpeg;base64,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",
      description:
        "Sarden dalam saus tomat siap saji, lezat dan praktis untuk lauk harian.",
      category: "Makanan Instan",
    },
    {
      id: 56,
      name: "Lengkuas Segar 250gr",
      price: "6.000",
      stock: 75,
      imageUrl:
        "data:image/jpeg;base64,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",
      description:
        "Lengkuas segar sebagai rempah tradisional yang memberikan aroma khas pada masakan Indonesia.",
      category: "Bumbu Dapur",
    },
    {
      id: 57,
      name: "Chiki Balls Keju 75gr",
      price: "7.000",
      stock: 95,
      imageUrl:
        "data:image/jpeg;base64,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",
      description:
        "Snack bola-bola keju renyah, cocok untuk camilan ringan anak-anak.",
      category: "Makanan Ringan",
    },
    {
      id: 58,
      name: "Sapu Lidi Serat Alami",
      price: "15.000",
      stock: 40,
      imageUrl:
        "data:image/jpeg;base64,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",
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
        "data:image/jpeg;base64,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",
      description:
        "Air mineral segar dalam kemasan praktis, cocok untuk kegiatan harian.",
      category: "Minuman",
    },
    {
      id: 60,
      name: "Risol Mayo Ayam 5pcs Beku",
      price: "15.000",
      stock: 100,
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgYGBcXGBsYFxUaFxcXFxgYGhgaHSggGBolGxcXIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGyslHyUrKy0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLi0tLS0tLS0tLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAACBQEGB//EAD8QAAEDAQUECAUCBQMEAwAAAAEAAhEhAwQxQVESYXGRBSKBobHB0fATMkJS4RRiBnKi0vGCkrIVFiOTQ3PC/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACoRAAICAQQCAQQBBQEAAAAAAAABAhEDBBIhMUFRExQiYZEyBXGBofCx/9oADAMBAAIRAxEAPwB1lnmpfLL/AMZ/aQ7sDgZ4gGUFti3q9VuLgSBmII7trkmbNgj5W1Ed2C1MugX6dtMJBxGIrWCck5YiQMMOHv8ACFY2IywG87t/Z2KWTgH7IBgtn5jjOyR480xlLZokUpJFP5CZGhoEySHTrmd8QhvY0yKiuRkU7NPTJT4RaZ2ncm17kCDEVjcpm0fzR3fkKbLvun/TunXeuFkxJIIJgjfTAkhAF1WFdrTSuegXLOoBmhAIpkRKAB2hw4O7i31XTru9Va0spGOE14jiubECSRAGm7HkgDrnZ6H18kJjztDQtJIpqIPKaIzW7xjK4yx60yMI70AWKobIA0aIrkPeiK6zIk0hcAJGXM+iAI2zbTqgU0Gp9FHWeIpWnGaK7WHGmERvBJJnSqu5pjAHt/CBMALIfaOSofna0AVa4nHItaI5lHExh34dyGWnamKbMZYySfEckwLBqoW7h79lEndhjUaTqrEbj3eqBAGVpEY64DPmrmz48ypmKUg9hJHkrbW48kAyvwxvXETaCiBGMLM7IALQQ/aFSQZbBGAKOQ8igaSMg7snDCc1Vjm0r3orG9YbwQDjkffYkWcuznAUaDM/UPNWkhwdsHB01EgzIz492Kpdm0B3V48O1Gc3OK58oQM6QTBiuda4HfGi4LTKHA72n0jRXYRBEQYDo1ggeY5o1lc3muHGnZwSYIFZ3gS6ZFREtNQWN3agq7bVta4pwXR0YjmuC6u1GJz1GHOUWAqLZs4jEe+5Buts3Zb1gIAEEwaCMCtM3R3ufRV/RnTuPogYpZvBGIPaPealqOq7SOytPNHbcXBxoIjTOTOWkd6uLudB3ckWKgLm14rrGowu24dy58CDRre7Qb9UwA2o6v8AqZ/zBV2MlEFj+0e+1Q3YfYOSVgDawyiPNI1XRYDaJ2RSmHBWdZg4jDDdwTsVAgKLmxkimxG/mR5quxUxrqdOKLAC4AED7nAcusf+KLaBWtLMEVAKG6zAAx5n1TED2Y9+9FQjLeO7reRRg0amm8oZb4z3QmI5B1UXY3nu9FECMkmWzDQZGQzIGHai2OJoOQzjA8+SXmRAJE7sCOsDjkRuwTFjaDPPUEetPVSWdpXqgTuxRzZgtBAisYmNcsFVzcRLc6zI10XfpIlprWs5RCBjt1aGtBip3zCs4EnFWblwAVn2oDd65c+Xab4oWDFnvU2Tr4eiWtb4R6CqFY9JS6Kd/qudaqNG/wADHOtqodvI++aVPSMZNPafMolneaVA7JHqiGqUmEsDSDjb3d39yttP1HP8pVl+ZOZ4OH9qL+rGQdzn/wDK0+ogvJn8L9BPj2n+JXP1dpoe/wBFT9Y2JMjkhHpRu/l+UfUw9h8MvQz+qfoffYp+rdohC+t1PvtRBeWZu7k1qYvqQPC12i4vR07grfqj9vcEI3tn3dy7+qGpVfOvZPxP0F/UnT3zVhb/ALUA3pgxKvZ27Tg4IjqIydJg8LSugptv2oZIduKsT2obgF0KRi4lLIQKjNx5uJ81wn3CM4obst8rRGQLmoiQuJhRlvspjGkVg68NKdq61sZQdonDOkUPD3irss5EDAtcOYhDBNDJypORBM1OqksI3E/zT3DVR2dRmfx4rrXEZrtqTDq4Ed+0CPPsSGh174HLwVLZ2ppClqacvBVtsT2LzNbwjs04tbOEbTsBQRi5Z9jeG/EJLP6j6J7pD6csT20WWxvXNfyvN3SR3pJj1teAYGxAx1xVLa+siNl3Z/ldkREYVrQ+/RIXt8ZJwyCcLOsvTNsfOMft8k868sH1OAI0WBdpL+a0zY7WcbtIzWeWXJpGPsO+0Yfr/pJ80q0Aujb/AKSguaAOyOSDYVfROMlt6Bxpmy2yaTO2ORXQ0A/OO9L/AA4zrE88lCJGgGaiLS8CdsteCB9TeaasrQOs422gxkcViXhpTN0a4NDgtJS+3oSh+TRtDIMlpjUjhHvRWu4LXCe2DKW2WkSRBmc6yRkiXayLXHgng5mmhZOItGwx9ZVg9Ki0qETawXuY3Z5k0M2x+UfhU2ZjGm8qhfLwNPRX2sad4XYjkkcnf3qLvYFEyTJYMdmQf5nQdaFyvZwaYAQBjTnluQ2gnJs7iR4t7l1skzSu9ZmpayIlwIcIMAjOgOlMY7ER8QYJIMTRsiKjvQtky4iATBFaEwAR/SMs1d5P2EDsIE9tKpAN2ivaESZIGHE0VbTAdi5bOqZyXm63o7dOhS+5awfErMPzhPX5wJbw8ys+2PXbxXmXbO9KkaLhTCAfBIXqyxzT4cN570jbV9FlfgaELkzr9i0CC0gAmToqXOxAfjWMJqtj9PAB2aeaqeJyaoantMi8MgERPZ3JW6MG3Si3LxYuBjZMQCIn0gmhxOitZXAT8sHPjmuiOFpcGXy2ZUSd/cmfgLUtOiWkbQMbtUna3ctjawXK4Sh/I13xl0Z96sqK92e7ZAyOKveTRcuToDf8Jv8AiCGqcBEAHFRrhXcPMIXwT9XirtiHRu8Vppn9xGWPAWxMu4JoHBZ1ydLjXJaLcQvZwO0eflVEsz1z2+IR2ukujIxyA99iFdh13H3U/hM7NfwF6COBnJOgUXQBoOQ9FExGRZO6wFRnh7ouXZ3VAnCRiMnEeXegtjHA7qeCPZ2hihMDf2LI2D0Ko9sB3Af8m+iuZMcHeLI8e9DLzo2v7QDxQKhx58vFCeamdSiEUHEeKHeR1jjivL1vR3acRv3zAxl5lZzWkvG6q0r9QiTl5lZ9jPxJG9eZK+aO+NUPOaQJNPNDNm0ARjnKYeKQcUveBQVp5rPHwDZnks+Kdp+yYGlPmAr/AKjyWjdrIEUt6gRj9LRExMnjhQrOs7SHjKqftbRrSGxMhxkCcpI4ldm5cCuVUNMlzD/5JJftNJJ6oBJiDU5CMwOfbo20FGvaXACmOm6akOrv3LJtr1ZmuzWsy05mTIQrverI2hNJMVqDhArwC0UlRDb/AAejvF6tmiYBgjCDuqBvrTCUCztnOBNoI05CdaTPYkbazaaDajGA53qr2t4kRhFFhKcZF+Ogd4E1kCKot2dSQBhzjFZ1+tZyppwTtzoPJY5eEVEO+1jGK93Hiq2OBrMlqpbVy7qIl1ZDf9XktdLG2RmdI5cMX7vNaVmess25MiTqffeU+01J94L19PH7UefnfIW4tMGCMsRO/UapgE6jkfVL3V8MJAJ3AHDqimqK28t/d/sf/avQOAaDoool/jN/d/63/wBq6mBh2LrMiAWxH02p8nIlmz5hHCHScAd/sL5GOxWbwXN8h1fEfYDZmlX0kT1agxQjYjIKtnXEukAmoaRSTkARQd6+UNtDlI4LR6JvTvjWfXf87aSa1FMcEvkH8R9SY75ezxOipamprmgXa1n4cZ7OJnP8o1pMu4n8Lg1h0YDP6QMkHd5lAuQ68zki3ga89yFdWN2p2u4rznyuDsQ/atJ8jvSN4dAg45+q0bQt2aPCzraxnrbTedVjFOylVGafnFc1o7JxST7qdqdpn+5a9hdd4PA4q8kJOqHuSMy0aa/5StkQHkLYvd0d9LSkLvcXC0qDVJRltaDersYLDAjSqXtZHBaFpYGIAKTe2BFdqa6KYqmO7EYJcJ1WrZ/M3sxpX0WZYNJtBK1nClRJyy/yln8WVB8sLbtbtA4R27z4jkr/ABOoDqXeiA9gnDs/OaYt2kNa3AxhpK7tKvJy5vAK4voJmpOPEeiasrX5x7whBsyAQ2agYefchi0o8+/mAXr4Y0kcGV3Zr3P5B2+JRrUwF5Rv8U3azdsvDpbO11Jl0iK508Ux/wB6XTIvA/8ArK6ty9nLsl6N66t6jJgnZEnsCiwf+7Llqf8A1uURuj7DbL0fL2hWaENhRAfZK4WejwFFmmujrN3xWFoJhzSYEwJ3K/RNz+I7PZGhxOm4aley6OuMtLGtmIdAgAVjM57W8lJcct8BJrpGt0e07DKVAGebZjy5py3bjFZyzr4pa67TBBsxSmMnuKK+9N0HM+qiXx5lw0/7ERcsb6M63sX5NKFd7F8nqnLEei1mEOklo3Y1rx9wl7UNyaDumDwrNVwVp1J493J1KeRq6KvsThB4pC0spM+Su63aTRhB4j+1XF6AgdeuHWA7KBarRR9k/UMTtbI6J2zYQK4JsCnyWozE2rRTtagWl8aKTaD/AFeiy+lhJ0plPO65QrebGk03LN6Ptj8SMBrgtd15a76n8/yhgCpG2YxIE44ZrdaVRjVmTz2+h1zXQNl+p+YjgkbdzwSQ4jPEn8I36tuBc7/aP7l1kPo0uJ3MH9yzWja5civn/BlXS9u+JiSt2xtXvHDMgeiBZXQ4yRxaPVNbYbi6Mpj0CieFTlUZr/RayUrcS1k202h1s6UwHJXtbOMT24yqst2xR7eR9FcOBptN7dqO5q7cOncVTZzZMtsz7N82pE4DlQHHiTTcEK1ttlhcDi5oIjCXb6YBahuQmQBJzaZw8FidPWfw7KlQDtE7gDHMldsVRg3Z4K/Hae46lC2U0XVmDO+DE6CPNUc46Dn6FY7mdOxANgqIu37k+qidsW1CIartagSmLhZbTwMRid8ZdpgdqKIs9j/D91DbLa+rPfMTG/AdhXsP4fa1tm60c09Y04DRedutkYawVdQcTmea9gLPqta4QQ3LCBA9xuXlf1LM4xUI9s3wwt2xe82jYJmsYV0p5dyy763bG0JBoCJqeGgp3py02Q7CokYyDE031Stg4ufX6RU8KgThK8nHklFblwdmxPgekhuzAAaBGRoq7IocScBXrcuJXWOkYz2ntz1CpEGaz3aTRYwuUrfZTVcGZe7ICZkOihE1jUY4o3Qt3Ow51o0ElwDa1gA4HeT3BDvZEupJwGRnKB7wTjQGhoMYdbjujVdk9XkjDZfDM1hi3fkdt3ASBjEYmggAe4WJfbuXE7JrqRDRu8arRtHNE4gnXPPEeOKVtw2IwmuETIocNyjBl2y3ehOFqjJ6M2nPhwIa2rjFKZTqac5Xo5DmwwbIEDZERlrol7iwwRIoToM4qMyQPBMWxIGJGMmIpnu1Wmq1Es0qfCQoY1BcdiNvcg8iDBJglwgYE48YFP8AJOhhstdI621BqD8tQAQajNUtLQ4cpE+U4ovRUnaMdaeAgNEQplqZvD8afor4lu3MctLYGKz4Ros+3eGkAiAcp3Rl7wT1IJIhxNSAOrphjRK3k0ygGaaSJ4BYQvhtmnC4ErYbFfpPviFa73kaqWlqI1BOBrrIw3rILC21DWTDjIJFGAGoJmhigX0Ok1an9ku//Tgz4HFbl0ek/XBhMu2QGh0mgaJdJJ4Ds7Vlv6TZebMvZJG1GEbUGHEDMEE8kp0jZtt2EydhzxZmDEtadqJFYIEHiuNtQGBrIBAeIH0gGBHJyvFrN81Cvf68F5dE4Rc/VfvyeQtuq4tzBIPYYxQtpE6VcRaE060O5iv9UpMWi6qOew3xP2hRC2xoonQrFgF6P+Frn/8AIQ2J1EiMOrMxOcR1Vh2TZIGtB7lev6Msw2zx4cBQc6ntUt8D2npf4cYNovIkiQOrtcTUxNR3rcNuSBtUqZPZ3fhZfRzAyzbAqQ1xJzLhMDPNGtHGoDRpXEVyk0XymqzvJmfo9GGJKKBXgHrQ4kisx3rnRVmSHATU9bKYpI3U8Vxrds7LTJceR37p90Td0a8HZOAmYggQS3vg4LPbUejS+GQ2YBhsZkTjjMSVxz/eQnDtldfAJg03jzSNsJiNT3/4RBVyS+ewVrYy5oABMimAgY9gAmq0LY7J2aceM46/5WYLTZtmBww2xs6QDTf+FsPZ1pmRGSeTxQ7rsAbKkmpyBx/KDeLOkkQRu7YMnXLinycQa9uEjXsWffrShxpTCmfvBVBV0RbYG4yS4jAZGld2WAmqcex3ClMAD+eSR6HMNLqE7TgN0UmBnMjsTTrQTtGKZRM1wyk70TUb/JXJLRg2XTXVwpmrXNxJcXHaBIImJ+3cIoEuGTNSMacsoKpcHSXtBFNmhyB04lveiVqNjSts1bTqkENEDGDFNcKCqTtQ2IECaGK0k76ZYJu2tSJBFIwOU4ApO0b1hAbP21MjIkBKK5JQpeoaNnE0G000EbgP8Qsi923WEUBE0GUGfPkta8ACDQ5Z1jdjGOK89ebTrDaJDSC10CCW0mJwMA9y79MrkmaKvKsa6JI/TmfmD2Hsl4dxqWqhEPdSce2a+ahLAw7PUbkC6Y3ScSfNXc3rNOXqPwtcM0s649r/AH/yNtUnkxyl7dnmunLPrA/zDkZH/JZDty9H/ErBFGihBmskEEVkxiBgAvPFq9s8KgaitG5RAUO9E2Jc/u7TTwk9i9tcrptWjWgdWk8AKCcsO9YX8MXOW7VZFY/mHk3xXrv4dbO2ZgGk1iBVcety/HibXfj/ACa4Y7pG46AMIIE786UNEq9rYwrnO+ajwVwYmQd08wChWhlwcTByrHy4xSM818vF27Z6FVwZ94q4MAjBpIqSc8YpPgtawfsiGg0pXHdJWdZu2rZv3be1XAiCY5DFaNqXCszuByzrC0yWqoPFALR5kwaRkOfclrVzZBqBuxIoKEphr9RGJFciEs8xBrHaD7rpqnD2xfgVuAPxjIDpa6pOZgyNTTvK3WCgPEDGke+5ZnROwH2hMYAAxrI8k9aWsAUiawDgPeSMn8r/AADvovbkASSMKHfxWLebQnZbPzOz3kYHOhx3rStBIqNIzFCYJ7qKl0syLQNgHXaFRWaDUECo1WmOPJN0gwaAC0COGckz4qrn/SImmI0rT86Lt5OePlGFc0vYEmnfHgeYU2rodcWS8tjacRjGAzPspbot5LnNIAwNMc64It5ygmtOXrRX6KsAGEirnGpOQA00qeMom1sdlR4HH3itTUYz5DNKuedqJmtIwFACT2Ji93aQHEVpuH53JWytADtBooDM0g5EQpi2FJ9A7Wx0OINM9RXgsG+3B1pabIdQk11FBgcceQK2/jTlSu7QCdxQ7NvXaYH1ZSflI9VvjzfHK16LUW+ynSPRLXtc1hws2GIzgznkRunvOaK2bXaAd1fCVvWzy0UqQSTwOA5AcueLc4LIykg8DRaSyJNNeGr/AL+TpwqU8bjLp9f9+jL6cEgnVv8AxIK826F6zpGw6onUt44jspBXkSV9DFqUU0eC+G0VL/dFFJOqioR664sizpQ7T+47PcF7u72IsmNs/pHzSMc5IHkvDfw30jZvBl0Wk7RbE1GLmjMGBPln6m8X8vA2TUb5njIx3rzP6lhyZIpQNtPJJ8j9oGlwbBEg0wgn8ZpN5oIJMYjUxWRwSNtaXg1DgXEmSRSDFIA7J4IvwnmpA2pEwaQBwx/C8r6PIk6izsU4p9kuNm029REBxkmMMhriaeiYvN5jaA+kSe3dyySt4uziQ4CoMip5U3Klhdny5zomsZ4fKetjkn9Hkl2nwDyw7saZayTrGGBwg74quWgbFaCkQKjAT3JE3C0xFHQRjiDqnbvdrUY9pxMaBX9NkS4i/wBEucU7tAuj3/8AkgidrDjM1OOE46b05fb0GzScJMTRANxtNoGBiJpUaolpdnyOqZmpApHCPdVP02XzFjlkg3dizOkAcKGKisCuAnRFsLzsvBcCTBEExUkeav8A9PJ2iWO2pEEA1k9adBGirbXK0IJLHEkaE7sTjTxQ9PkXKT/Q1OD8nLxeztA7M6b5phirXO3DnDQaV8PJJ21lbinw3QIghoBNaYmkd6E262gdtAFpHfvjNHwTT5T/AEO4tdo0b1Q4Vy3jLuTXRlg5rGydqAcDOLnUEYx+MlmWV4tNoh7XHJrqVGcyZHer2F6tGS1oFDLTxJmuVTKTwS8pk3xSaNS1f1JA2q8IIqDwoaLMiW+GAnPjKXF4IeZmJORIPbmD5pizMQS10H5QYkEQpjCSXI2qIyxoDrO+YxQ7Z3XBzmOMggxzRetIFRnGJ0Ko8TFcDMgb+7FZdM1iMX5kAVBmtNwHr4rEvlqxjwPuBLgO50ZVlat8tJcADgPH2F5i8Xj4jy6DGmBLZAaAJNTM98LTBi3yZ1qWyKbG+kbaGktzaJM8BhlgvF21kQ4jeRiNV6+/MLbPZNC/rOn6WiP8QvI3i02nEiaknv4r6fDBwxqL8Hz+aankcl5BfDd7I9VFJdr4KLQzBBxC1+iunbSzd1nucw4yS4jeJ8FjhdSatDTPo91v+0AQaHApr9SfuK8D0T0mbIwatP8ATv4L0l3voImZBrOX+VltotuzZdeT9xVHXh33HmkW3xoQLW9tGpnKfcJJW+BdGq28E4OPqmWW5+481gWPSImJT/6poAhDg0w3Jmky3P3FBt7w6YlJW15Go5pT9fQZ13RVLa/A0zT/AFBzPgri8nXuHos8XtpFYlE+MNVNFDL727XuHoo3pB+R99iVvLgK5eKVu1pLsRKra2idyTN+zv74y5ur/Uu2nSB+0f7neZSTbQREqoeKj3VCfsbS8DQvhxge+KI2+ft8P7Vm21tsrrLem9abeCLNQ3v9vh6K3xgcvfNINcexXdaQsnGzRMLavZXq5V6uM5YrF6a6Zs7BsgdZ2DWw0mMya0Hmu9J9KNswSTyxXg7/AHl1s8vfngPtGQWmPGlzQp5G1Vjl/wClrS3NaNH0g4/zHFx7tyCC7R3elQQubXui1MkM7TtHcioltrhyCiB8Fl1dCsAk2CRArMkYEjgYXAugKSqOuc77nf7j6roc8fU7moArtRY1AoHv+481cXm0+8++xTZUDfcp2GxFjfLX7iewei46+Wmbu5cKqQixbS7L3aTQ14I46Rtde5KQoAk+QUaHP+rWuZHCvqqN6RtciBz9UuFyup5p2LaaP/V7WIgHmujp60H0g9p9Fnjh3KEnSPfBRtj6L5NAdOvxIHCUQ9PO+zjXPVZgO+FNrersnYjcZ/EbgPkdu0HMoF46fcRRrp3wAsraVXAKaTdlLhUDvdu+0MuPohAIhCqtDOjhG5UKuVVMRxcVpKiAoLs8O5dDdwXJUhZmlFoGg5n1V2x9o5u9VVtkrFsKbLUSwLdBzd6qAjTvKqpsosdFqfu5/hWAGRd3HyQ43robvTF/gLA39sKuzw5hQMC6CPt99qncVtOEbxyVAd45FXNpoAFwW+vfVFsNqOR+4HsKgr9vf6Lptjkq/GKdsVItXdzXC4/aOwqptVNsHVOwpF2k5A9kKP2sw7l6LjWzh4K2yM/L0S3BtK10dyKhOs9oKhaFJjPlPqnYVRRxCoYyIRidSeZUMH6nc09yJcWxcnf3qnamC7jzVHO3dwVbiXEpCittjQf7R6KJ2TtIOCtAXdk/uHYoDv7ioKTOj+bwV68VQdnIqCN3OEqKTCSdFydxU9/MPVSu/uSorcSRoVDGq5B/dyCld/JFBZ0H93vkuhzhg4FVg+wUO1I/bzRVi6Ja2zvtCELc6Kk8R3q+1vHNVtRG5nfjDMFcNoNTyVa7lUnhzT2i3Mt8Tiuh+4oYB3+C7TdzToFJhvjnIQufEdqELl3lSPcJUg3MMLd2inxXaIMe4K5PuqNqDewxtjmF1tvuKBPuSuh2/vCNqDexrabr3Fc2FRrvZHorBo0Hf6JUXdnNjeopA0Hf6KJjtC36l4we/wD3O9U90deXv+ZxdGG0ZPMqKLqS+482T4NIMFaaLuyJwHIKKLXavRm5y9gr3TADkFL5Aa2GtqB9LfRRRZyiq6LhKXsWAByHIIrrBtKLqixpHQmxq63NhmQcPucPAoF8uzQ0EAyRqT4lRRSkrLbdGUxgqqHBRRNk2cAoqPcookNlnZcOPiuscdVxRJloIxvHmV3YHsldUUspHdjjzKpbCNcNSoogGALzquB3uFFFSM7Gru0HJP8AwBv5n1UUWcnydEFwALePMrqiiVlUf//Z",
      description:
        "Risol isi ayam dan saus mayo dalam kemasan beku, praktis digoreng kapan saja. Renyah di luar, lembut di dalam.",
      category: "Makanan Instan",
    },
    {
      id: 61,
      name: "Nugget Ikan Crispy 500gr",
      price: "39.000",
      stock: 50,
      imageUrl:
        "data:image/jpeg;base64,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",
      description:
        "Nugget ikan siap goreng dengan rasa gurih dan tekstur renyah.",
      category: "Makanan Beku",
    },
    {
      id: 62,
      name: "Susu Kental Manis Indomilk 370gr",
      price: "13.000",
      stock: 70,
      imageUrl:
        "data:image/jpeg;base64,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",
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
        "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/7/24/77d3b840-246b-4503-b89c-79bbf22f75b0.png",
      description: "Bumbu siap pakai untuk nasi goreng lezat ala restoran.",
      category: "Bumbu Dapur",
    },
    {
      id: 64,
      name: "Pakchoy Segar 250gr",
      price: "6.500",
      stock: 85,
      imageUrl: 
        "data:image/jpeg;base64,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",
      description:
        "Pakchoy segar kaya vitamin dan mineral, cocok untuk masakan tumis dan sup.",
      category: "Sayur-sayuran",
    },
    {
      id: 65,
      name: "Keripik Singkong Balado 100gr",
      price: "8.000",
      stock: 130,
      imageUrl:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMVFhUWGBgbGRgXGBgaGhoYHRsXGRggGBsYHSggGB0lGxgXIjEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy8lICUvNS0rLy0tLS0tLS8tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABQQGBwMCAf/EAEIQAAEDAgQDAwoCCQMFAQEAAAEAAhEDIQQSMUEFUWEicYEGBxMykaGxwdHwFOEIIzNCYnJzsvFSU5IkNIKiw8IW/8QAGQEAAgMBAAAAAAAAAAAAAAAAAwQAAgUB/8QAKhEAAgIBBAICAgIBBQAAAAAAAAECEQMEEiExMkETIjNRcYFhFCNSkaH/2gAMAwEAAhEDEQA/ANxQhChAWa+eRsjCnrV/+a0pZj566+RuFPWr/wDNCz+DD6ZXlRTsMwRE9VXOIsNSo4CwaAPqpb8VVAkERtzCg0KkzfvlZ0ZcGxscHZ14bixAZs0+77hduKYltIl2rg05RrciB8T7EoxlTI4ltgR9/fVchVc5h0vFzrqrQjTsu0ptDLh9M+gMRLQCO/8AwpWBxp9C69yJ96jcNxdMFtOZzGI75Hxhd+H4C5GcRmcI6T7kCa7bHY1VDTDvAoM6ife5feE4r0jnCwFrnTqvj6YDBTkkC0jbVReGZWOcM0Xm4B0Qu7aJ3EseJcadPODJEJXjXsrvyZw1x0tId0Gi+4us/J2jqJ02Okc1UKWIL67RMdqJ5FHgm+ELKHtl+4Lw0UHntFxeO0Y5X+qtmFyNu4Nn3qtYGk4jLnDnNIAjVwI3juKfYQhsvfbLe+8bSjKLtMFljZy4piC2oXMPKARvvbuheaNOpmzvEujs/wAJ0uO5Jsbxsvf6WWnkI03vz5eCdYPHuqBphoG+176JadOboNLHKGNcCzjzTOYAH4jqEs/FuAAIv7vBMcdXJqFpFhvKgP4e4Oz5uzyOyNjcb5K09qtEikxotmAceezbT8VOpsBBBOlyBy5pbUpteBzAv3c1PwnZPqjsgGeYnSVSbe6gkeiFXoCTfqoNSJsneOLYGWCCPdqEufTFhF+aDCbiyTgpIs3muH/VVP6J/vYtQWaebQD8VUj/AGj/AHMWlrW0srx2YOtjtytAhCEyKAhCFCAhCFCAsk8/r4bg+prfCmtbWP8A6Qjobgv5q3wpqmTmLD6Z1lTKFwuo19MybssRMTyUCsIeRoDcSoFDHeiqB5BIcLjn+aYcXyuDX0zLT9wkViafHTNd5dyo84/DwzM4RIBB++aj8MqtyuBvey8cX4nUqZWmMoENAERon/B+GsFO413vIMRry6KTqMeTmOTXYhp4V+dr2xYgweh/JTsTxA0q5B9Vw22n4ppSwBZYODgIjNa24J3UbiXDDUsSB/pOob+SFuUnUug6yOuD6/Hdm+vyXPhzRUqtbsTeOWp8FXzWqMcaVVpDm89R9R1T/gFXJUY/mHARYzFvguSw7C+LLv5RoGNbRq0hTHrgHLa0crLLeLcPdRrEEEd/VXvh9MOqtY7NEl1oEOje0EWXTy5wzXtgNOaOzlBJJ5QLqRyLyX8EcVGW3+xV5L8TqZmixe0dmdCI5cwmnlBxqo1vojcuscth4qr8Epudcy1zdjIJ7k0q0n5mGoCZAcIgy0zCq917fQdqPEjlQmwNwrHwvEOFPMSIkgRt3pJUxIDgA3a22vNMeGMLmGBI1J0E8p5oUVU2i2WW/HyS8pdLhHXp3n2rpgyxxguPy6KsYnGvfNKIaf3YtOxPPvTngdQuaCbgCHGINtPbZMPFwmgFNLkdt4VIlr4IsN592/JfOK8Eq0RJByOtINxvBVl8nuG6OcNLx8vgEcfqNqPIc4taNI0Ji55I7wKOO5diK1Mvl2rr2Uk08oE6AKIapJlotpJTPiFEyWC/UqAyjlkkTYwlHFN0aEZWrLT5smH8RUJ/2o/9m/fgtKWc+bZ3694iP1Z/uatGWlpUljpGDr3edghCEwJAhCFCAhCFCAsi/SBHZwXPNW+FNa6sl8/h7OD6mt8Kapk8QuHzRjFWgXAN3B16br3isO6kwEGQdRPwG11KwVSJ328F94lUBA9/clo5HdGlKPFnvB0m1H0wBcgfDfxVtwlOIHtVY4GxrarS0/Z5K00sQM4A1GsfevRByeRdW4nriOEymQklV5kknpG0J/Xql5sQW8jqClWO4eb9Sl58u0GwvbxIR8UIqNDjd7bAm8t5Hx0X3hLm1TkFnsu07newjbeSo/EHZDBSzBveK3padi287ADWeiZxxco8lp5dr+pf+EcQM3PbaP8AlrcdAFLwnGXVK7WwB2rG8zBAv338FXOHY0Pa85HBzoy2MRzB5Lzwd7m12SJ7UyLpd49tpDONKfJdsZRa5hDhJG+4PMbhVGtxV9Or6KrcAWdpbbxVzx2OsSW9rWettVQ/K6kXGYIPLl3qaV7p8kmmoDHGtc/ttBiBGil4DiwbT9DFs03F/b3qB5KcfFPLSrzkjsuGwOzuY+qa8YwlKoRUYQZEiCDPdCLmxVe4pDNupeiRiDTfAbrGtxrbTxTnyZ4WA4UtROaof9IFwknBcNIlodmDuRI6eOqvfk1mFEvqMymSHCCJvafcmtDhVWKa3M4qkPMRislIlvYAEidtpPMqn4/ibT+9qJNov0TriWLzNdSJBJadANpgT1gqjMw4DXOeYdeOfS2imuapJA9Fi9sksxhqPDAJ2v71O/DAEh1+f5qF5OsgipUJJJsOid18uRzBAOae8TKQ6GskqdIZ+QtMCu/LMGmdf5mq9KieQjz+Ie3lTP8AcxXtaOl/GY2s/KwQhCYFQQhChAQhChAWQ/pCVMrMGeTqvwprXlkX6QOXJhMx/wB/2xSVZdBcPmjG6GJh9zYqTie20gesNOv0KgYin+zdFtDylSqdgHc/iEvLjlGjG3wzvweuABm2MQtA8nAyc9NpkTBO+m5PcqTw/DtqCYEzeBc6alPOECs2rkpeqJMHQiwhK5HcrQxCL2NFuGGFSrJI00AGpveNVAxFHK10G0m3LX6oxHE6tGH+ia4AQZJMzYEDoSlXGeLVHARTIzToZnu3XYUUcJf0VDjVE+ky5TLtB810qUQxjaLN71X842A/0hSKtJ7XGq93b0DdTGlz9F4keiJkS+LDly/JElKug2GCfZd+G8PpGi1tM5gRr96JRSo+ixTAYjMLe9JvJLjL6NYASWONxy6jkrD5TEOrsfS1i/RKZE02mxjGpKdehhh64qkg6N1K88R4Gawd2iTzdf8AzK4cHxHowGPEjYi5PMHndWrBPbUpy27RvoRpM+xV08HfDL55OPoyLG4ftejiHtkP5Ai0jpEK5+SOCY2JIORunPu6a+0KVxXhDGV31GiPTC5IFjuL+qomAwxpucY7IEe2QJ6fROZtT90mDxY18bpmj8P4IA0vpkwTmaBFzFrnvhSOEYyq/MHiMpjkfZ7lI4Him+gpmQBA/wCX2VNxNRjWuNpn367arRglSaMOcnuakiscWxQfUfl/lsNe7kotbhAaGBwEnW8zMDRdOJ08t2m8Eg9fsroyqSGlxJJibnv8LrOzct7jQjcYraQX4QU3SBpYdOXfzUPFGX+tlHXUbppi3saQ5ztef31Ch8UqMc2Ww6bW2QcipWw0JNjbyBg4h5GnoyP/AGYr+s783LcuIe2/7I6/ztWiJ7S/jMjWqszBCEJgUBCEKEBCEKEBZN5/aQNPCTpmqjxIpwtZWQfpCVy1uCgTLq1vCkqTVxC4HU0Y/VYC1kkDLr3jNPysoL8RmkAReV3r4gO5yf3SJUanh9SdtoKGl+x+239R3wGtlbINp9hT3hHESyo5zT6wgA6T9/FV7yYc1xqUnfvCW9C2Su9V2TtA9/37Urkj9hzFJOFMtWF4hVrVSSYDR2iOd/YfyRxTGjRlzzjw7ku4JXihWcDcumekLthhNPMDqPzv8UtNvcEjtXYra176mY31i+pjeNFxGAAgPPs09qnF5p1AJFxbrNlLxVAOYHC4O40Vt7QZ0uUecFhGBpy8p+V1Mq4fMM2hta+ot+aT4fE9sM3M9oHl03TqrjGsbJdMnSLjmgTi91jeN8fU64eAATtJ+iPxbqdQ1GhwncGQZEnM0rjReXmG5r7Aapbgqz6uLdTAltxJm0W+Nl2O7mvRaVLyG9fGVnuac3ZMZmnQE2E2nVS6FSPXaQBuDqeQB1UPGUyG2uJBkbAT4/4THgOI9M4C2ZuUAnYXl0R0uETFj+SVy7A5WlG0uCy8CoPqkvJLWNixHrHbfXaydVsb6Ugg5WxEC1p06ae9eWYllGhnkZZIaBq553dyPTqqyMRlBOYg3PQneBtZP5ZfDHauzIjF55OVfwTMaSapafVyewE27tEPrt7JabaQbd4nuCWU+JB5JntBsHreR818wtVoac4dF7EW752SkJb5cjfx0uSfg8lWrBkzmiNre6/wUPiFZs5W2kA3veeep/JLsRxRlNuakHOcNwYE6XjXkvfCWF5E3dvEBEauoos419vRbvN6AMRUG4pkeGZq0EKleROFy16h/gifFpV1T2KG2NGBqpbsjYIQhEFwQhChAQhChAWRfpAA5cFETmr6/wAtP5wtdWO/pEuIZgyJ9at8KarLoJi80ZNQJMkjKd4UnFlrWwWNcOYzD3iy4cEokzO6n4/yfc1s/A2/ylJVZrQmqplcFSXjIC0za8+xdsbiH3mOsDVSeE4aS9x/caXeOgXOm30jnbgTHUovDZRWl/JEwPFajA5oPZcIcNiPkrH5OY4vOQ7kRy5H3fBLOD4enMvaDe0/RWYtpgAtAaekApbUZIriguHFOuWLamIzYguBsHQ3oBYKPwrEFs03OOSZ8fv3rrxLAkD0jLxqPmlnCqnpHljnhhM5XGwk7HlM6rkI742hv5I42lIn4nFD0mcWj1Rv49/zT/Cs9JlgSHQqxSwZDi0g5pIjW/zTnAYupTaKZmmD6ri3S9wOXeg58drj0OY5uPJem1KOGpB0zVtlbqXHQgaWndVPh1U+mr1XwDMDKLTqYPS11Bdw2o9+Y12X/e7UnxTvhHB2AZTUzXmzefjdAlOEIUmSC7crO2HxTS0zlBAJaTaXO2j2r35KcHeMWytTDcgDnkGeyCHNI6x811xXBC6DTMRcSDz1m97KbisdiKdBuFY0y8Fz39HEkNnYbnvTOjzxf2/QHVJONQff/gt4zx6q8jKBkEw28DmdZnrySWpj2vN31Cf4NB0vqpuP4e8N9GIhwBcTub2A5aKCcDHZu3qPguz3Te6RbF8cI7YkvAY407GAdL/MC6aOz1RlL7HU3iOg56exIcLweCL9kn4/NXzD8HLcrSIA9bnKpXP1OZpQjy/YsdwsBghsMA8T3ncyvGBJo5XOsXyW6aaSrIxokMFi2537u9JeJ4VoIPsHv+aLig4pyfYr8m7hly8hKsud1bqehaFc1SPN22TUcdQ0Du3PwCu60Md7VZhalr5HQIQhXAAhCFCAhCFCAsn8/wCf1OFlstz1JPIwyPdmWsKi+dXBtrUWUXavFTL0cMhB9sLqjudE37OTCuD12xE6GVY8XjmuZlBFhdVKrgHMeW3DmmPv73XRlQwQZuCJHgkZ8Pg1I1JI7YaoG0sS5osWge9Qqf6ttOPWPbPylSa1PLhXunVzRHPf5LmavpACBcC4A0+xC4pcX/kaxxUpfwjjiqga62jr8om5sNLyn/AOFVMTdghjRd305pVgsJTdUBqkxaAOfU8lb+GVjScMhhrZGlo7tEHLOPCG8cJU6/oS+UvD3UA0NcZ+XikJouY7KA06TIV24rRZVGpN7XuIulAwIL3PqF2bWRztr0hTHOLVI44S7kRvw7DGxHInXovDcEJu5xHKVzzF1RwG0x1K9AOBhwc08iIXGpR4sZhUqY4wdJoyHSXRz2BGqaVsTlNpDd56a6JCDZgHMn2Qp2Mxno2NcbB07Wzcj4X9qTni3cDPHbL5wTidLK0EtLSN+fdomXlJhWVMMK9KAGAAxoBIH0WXYfGuebNDovYQe+yv/kxic1B1MugPDm3OhIvHtHsKZ0UG28bMvWaf4qyxfs5Mw7TRdUqD1wIPICwj2ApFV4W+bNzzcEfNTq/pBT9A6W5CIB2GvSbnVSWtDWiXOn70hWk6biSCa5/Yq/B1QWn0ZgXvzGk92vsVyq1poekbu9omLixJn2JDhari6xf2obAO+wHWydVsK+nhnszfrG1gSP4YcPmmNOri7AamStJ92ecSAztAh0gCRr/5KvVKmdhv+/rzuT7ICn1amZzgQLeBKXGQzTKJkDwshZZ+o9BIRqPPZefN96rzETB95CuKo3m1rEtcCTYb96vK0o+KMHN+RghCF0ECEIUICEIUICzTzzccGF/Bktlr3VQY1ECmZHPuWlrI/wBIKgHU8ISYh1WD1inHwN1aLado40nwyo8do067W4ii4E5QXAakbHvGn+FWc0WJ2XzgnEBQOVxhjhOYatP01CkeUeFIIq0oc0kSGjQnQiP3TCHnxLIvkj37HME/jfxz69EXHN/VxMgX8TyCh0qZEXMSJj5815xWLggcipFJhcfRtEueRlMxH5JOqVGrCrG9LB9vUQZiekJ3RpOiW3jWByShtWGtc6CWyD1I+X1TLh3EHPAD+yDa2nSeaRkpNmhT22ght4OxkE6WkKNiWkt7F/j17+5LeK1pquDdA78vcE5wdRuTYa9Z+quko02cdnvhuGbmaYtAzDcEGffzTHFGlUzDLmImzbkDmM0GF5wuFb6Fta4eQQYJ5mxHLRIzUc5xLmt1iRI009yI6a5LRO9XhwMQXgt6DXcTKiYtzgwse0PYSOYcDsQfb71MPFCBkFNoiI96DULjAY3W8TtroVWbjENFuS5IfAa5oPJLYY5sX0B2vv8AmtI4FwpxaXZGjcOLiSG2PZYRF41OqzHF0qhJlhFM7EwAdiMxkGeStXkfjqjarG1XF47MuEm2pDu6Ne9HwuKluYnqYSnFqJauM1WNLHnMXfvFwiTpGp0juSLiXERmLRIjRdazhWeXVSWMzGY9aSZEDdReI0Q/ssaGiBEi8cyd90HLli25Mpiw0kmybhOLhjaTcs5XGoTa7z6ob3AD39FMxPHGOBJcA5x5wTvPUzZU7FYGs0g3hvjtJNu5fcM0PaGk9rUGJh2gnoiKUqV8I49PC21yWvE8VplwZml1pNyI7/ovNSXHUwB7vmkHC8G9jnOqbTG4/hhWDgkOnMNjcnl96oedpfVFUqVv0WPzfMy1Kjdssj2tPzV6VJ8iCPTOifUdqb+syPirstHC7grMHUfkYIQhFAAhCFCAhCFCAsu8+YYaeGa/d1Qjv/Vj2dqfBaisy89DWu/Csdo/07Z5EinB9oVo9kMIxdFxe8RlymPEWH1UrAYstJpk5mDSfvSZsjGzJnUgT4AC/gAolVxBaR9lDctrobit3JNODY5xYXkWBGm4m/JSMHh8jmtzE8nCLT43G6i0cC+scwOXLefkCplKjYgk99oB5mEs9suLNHE5L7fofcWph7WsaGg0xBcAR6T94TItYnXkljKnPQbWF4717weOJmlVMO2ds7l3d6903DMQ5oyWExPt++SHPFJvkbx5tq4OGGw7CXOdJj38u8pthsG4NLsobA2uROl0i4jwpzJyOGUu0BM9D1F1afJvGVBQOdgc1sQ46mOYO0kIWXA+4hI537J+EyU6bC8xA33JM/A6pfisWXnsiJ0GpInUD5r5jnGoQ5wySRlBgz3ApbnrucTTLKbRIJJ7ZI6xI12FkBxfUgiry7/wecdTDSHVHNadhAzHvhSfJ+qHVZLTlnWNjoZ2VZwnC6lWuKbnG7jmcZMAan75havw6nSptFNokOAzne0zPXSyM4xqrKSzTiuUVHymcS6w7I0svfkjTz12sPPRfeJ41rHG00zbL0/hOxVg8kuCC+KbcZHGmP3icpAtz+qtgjKfSO5MsceLkkcbqk52CQ3ObQJJFyZC68OiGtcYJAy9PDkuOKF5J3LuQE6/RLuH131KvpBAuMsibDc80t3N7ibf9qkNPKShkovIEuixDYIO46nuVcwFHK0TaRMm3xTXjPEDnBI7LTGron94weY2XfDcOmoajwDTE5W83uve+jdITePZyv0AuUYK/ZzoB5BAaSP9Q0jv0KkfiCxuU3Ok8+cKQcWchBaLSZAiyVkuc4NtMi3InVAtSyJIpNva2y7eRhH4ggf7JPhnZCu6oHkNWzYyrtFIgDuc1X9asGmuDAy+QIQhXBghCFCAhCFCAsn8/LiG4ONZrdNqa1hZR5+pDMK4CcprGOkUpUOqr5MZqVsznSNTfpdcmvcajm5TlB5aAaQuzK4qBzmCHN15EdOu8Ltg8TcVB2mjVpMxHL6ped3yaGNquBhwdgcMrnlrQL93Vc+JsAaRTjqSdR0TDA1GPqyAMmUm+5i3x9yhUCHE6EGeqqsaq75Gflp16FbKrg0GQ6Ddp25QeUDRMOH4ovdDXQZuCNfqvT8Gy7YAPPxUAYbI8OzZHNMwd+rSufIvFh1jtbolqOELuy4QBfcjuS2txZjWBlKWkG4I9vt1Vw8nsfSqsExuAZv4pF5c4eiHAtg1N8tpHVUi7ZSGSW6mitV8a+tBvI36852U3hGKic5MNFtSBJ1MKBUrEgN2HvPVOMNh/wBW+R6zYlBzyXT9j+D6q0WThuDp1AHU3DMR6zd/z717w+HrsqNzmx9axILd9BKq/kriauHxAcGmCDI2PL2LRf8A+gDnAw2Q2Y3nu+iUjjUJeVnMmTInwrTEOK4AyoytWz5gy7QbSJseoHJP/Iam8CiYjMKjnbBrGkhpPU7e1N/wbcXRBpgBr7SRGUz2vGyVeXNYYLChlAdp/YLzs2DIbyJ+a3tOtkLfVGNnyvNJQXd/9FdxnE24qtUp0wRLnuMaBgJk+Ij2pkz9VGWA5okbEAXvPsA6dVROF440n5xuMp7iRpz0Vlw+Ka/NmJzO9WbW/NZMqUm0uTd2Pal6R24gM9Uw7s1DrERNx3AJyWue1ggjKb/NVyjj2l5BklsQGwbgxBnorPwniBzhrmwHAu56XHu2QYyuVP2DzxlGKa9C7jGKyRTBi0m11z4PVAqBx0AJPsXziGHNSs55NpsOl4+q4sqhrKsHQQO8wiYKU7E8/wCPgtXm1dOJqHf0Rn/kxaUsw81rpxNT+kf7mLT1p4PExM3kCEIRgQIQhQgIQhQgLLfPpULKeFeBOV1Ukc2/q59y1JZJ5/qhDcHBsTWkc7U9VaPZxmNYilkrTT9R92x8EUsQM5LGkSO02Zv0XhoLSaZ9UmWnkDNiplKkwUy8C+t73hAyumaGBXE7UGuyyyB3/RSMLRc1jifWB20mx+q6cErsLCW3JOh2/OZXTCvIDh4+HRLO1YzH7cI84TGtb2nRPNGKpNrAZBN9Rt98lMwlJjhIAJ5kX9/RSIDQRl136obdcjWN0xZTovpUiKbiJN+nd7FybXkgVSSTFyZPgp3FS0tDrg6QDY+H3queG4O6o5rnkgRYN8dSe9VjJ4+X7GZ7JRElOHYggernOXW4BMJ/TrwReRuPcuVfgopuhk5ieenMr5Xoz2SQHDeLePLvHsVc1T7Jp5pKrGWArXFgTPjde8fxKq4gehYBOVriA687E2G1lXsRUcx0XBGl9RzB3CfcDxOYtBNt+U2jxlBhDZJPsZyQUo7kaP5F0a9APp4gNtDpzNgZrAQLC4Piqz5z+LsrmnSonO1pcJmG5paO63PqVP8AKGarDUc+5a2wmA5skR1MlU2thQSG6hnrGdCdZWpqc7gtkTK0elU8nzSfJD4Wxjjkc1pDSZdrN9RPTTx5pviaBqNeKctcBIOmkcl9wPDGPdla4gbui09/3srZwbhOQOL7k6C2g5wsuG7JPg0tRmhij3yUjgtNwFQOtUJkOPMWgnb809o8RAqMLhBaRad435j6pmeEh2aRAkkRrdKsTgG0Xh7hsWjfa080OWNuVgv9RCaol164PanXRJnnskHcqbW7UBug8LKHihEDl8UeEaEcrqDLf5q/+5qf0j/exaisr81H/dVP6J/vYtUWng8DGzeQIQhGBAhCFCAhCFCAsi/SA9XB/wA1b4U1rqx79Ib1MF/NW+FJWj2cfRk+Ld2WOIsRHUbA/JDWTTewbxCMVT7LG82x42I94RIIIP8Ap1Gsaj2XQs65HNLLiiRwEtp1YmQbR1E+HNO8QWEBzBDuca9Cqyyk4OD7AhzZjSwEqyY2iWP3yu7QBEFLz7sbiiE2plJeBEfu/Q7KRhuJ/wCppmbf5UZ7yDlNwQvY4eHABrst79BvCHNL0NwquSdTpMqOzOqBrWazz5d6k13VX03eheReAYaT7JsvtPhlGqKdKmC3KSc3O155n81OqYKnRaGB13Dnztsl5d7i9rxZU2061E531c+Y3kbd/vU3G4c5Q8GbTbkvuL4ZnlpffbNpHKy8UMHUYwtcZy6CfG/IK7bmr9nNij0L3Ypplj7gCQdx3deYT3yNwTKlZuZxDAwutc5rQI0N1T3sc15c8g3vBT/hst7VGplJvAJBjw000V3Ha0GhkcotXRduKY5wAa1hyn1muEOtoRNxPyVaxeLysLhT3iDYjvXfh/EKxdmdTc6fWJPUiQTqLFfeInO6zf5w57bt3322S+WTnPlBsKWNUh95N0W1cG2obOzOzBp/d0EDmI2TPhOMLXCm+40a7SehHOEn4DxejQwZZIIMiXTzMQB7ddkvqcZ9KXQcoBkc+ZN/FXbSacP7F3ilNyU1x6NDxGUA20VU4s7M4DXLc96XV/KkucG3iIB0JHPlK44eqWtEuBcZufd3wu5Z26A4dM4LcyQzEw7s6R7SomMZfqQJ8V3pvAPMkX+aW4h5zE3MWsj6aFvkX1sqjwXjzUT+KqT/ALJ/vYtVWTeaN/8A1VQQf2J/vYtZTqio8IyJO2CEIXSoIQhQgIQhQgLHf0iGy3BfzVvhSWxLI/0gB2MH/NW+FNWj2cfRlLngxYkQl+IJY4Pyu11ix5wumEqRUa06SB7TdHEMQQ5wcSW6Ad1h/lTJFXbGMEvrSJFd0AE3Dr21mP8AHsVj4rX9Mym5s5mtb8NFWOHEFmlri6ecMfl7MwPklMjS4HsXPJEFUEEPsetpU3hFQOLu4ATve+ncovE8QzR4zMcYjUjmQV1wlHKYaZi4I3btI32Qpx+lDOOX3JrnBvazBhBtGoKh4ziWckucZ5xZecUWH1xruNV2wfD3Ps0uc3+Jo9gOqSUVFcmiv+R34U8PgT71440xr6gFMEOGr22tyJG8+xdMfwhzGS2Rl5WMqDgMTUDXve7sy0S6JkzaSjQxvtMWnNNhhuEU/WqFznToBPtVlwFKiIp5A0H2Hx59Ep4bjqQJD3Anb6hNcG5rnNF4BBN/v7K6pTUqZWUFJWOGUpvlOVu5+W5UjG4Om2l6V+WCBI58oHOV44djQ1/o3luQiW3bJvoZ6T3r15U0gWtDv2Y0YLdq+vO3sUyKLYGClvUSq8WykB/ZP8OgEcgBdK+IHLlcwggi4AktPVTeGYZhJe4S05mhp0M6RvbnzTQ4LLDezLv3QJjT1j7LIXEeaH20nViLh2G9I4ES+Odh3JxjsM5om0u0CmYnBtpMkWgadd/ovDXCo3Tx+PvVsScuaB5MqfRzpuAFrDRLaokld6lYRlAvuVwetLBCk2zI1mRSaii4+aFpGMqz/smP+dNa6sm80bpxVT+if72LWUVmfLsEIQoVBCEKEBCEKEBZ552+CfifwwLw0MNXvMinp7Foayzz5PIGEgkGaundTV8fkik/ExbG4QhxabOaSD3hQfTD1ag7nfVOXt3N+qW4yiDKPKCaOY5uLJXCsI+o4U2kAaydI6JzW4PVYSSSLCDt0lVjhmKdReDsr1huNDEMyE8pG86ey/cs/LhceTRxaiyqY2u6ocr4BGmxBU7Dghog9oWbGspnS4WHZg4gwdDr0I36Jjw/gzB2pugTbnwkPQnCPLZ04RwLPldW03AESdxJ+Sf0cM2zQAGtsItOvw+qR0vKPIXNq0y7Lax9hAX3C8dFSQ0Hny9qVcK5YXfOTGPGKTRSDAY/zv7FSqvDKtTsiC0EuiD3E2F1e6dKm9kvJBjXW+/yVfxWHDXgNcbmBHu3R4ZVSorCraYlo8CcLlxEcpGvUhNKAa1mjjFp1HIn815o8RzNbLjY6fEHmU1o4Mvk27V/b0HS6tv3SpjG1JWLvw1icre04DM24jc3vP1Xus1xZ6Mudl0i9+8SY8Eyw2CAqRcNIAjcmwUs4Wz2uGWRqBEx97Lmy39UT5VR3wVMZW06LRmDQAYsAoxwbqctzEGcxNyZ6H70UfhldwIAcWyBrqOY633THi2OaBAI0N1zZJ8C8pbZlexzDpJJ2Oq81scAwNaIdEH2RIUPiHFTpTPed/BLMO6/enMWDYlYtm1G61EaUTuutVvJcaRBF17aR7UZsRLr5oT/ANXV/on+9i1tZP5pR/1dX+if72LWFUFLsEIQoVBCEKEBCEKEBZR5+PVwnfW+FNCFaHkVn0ZK/TwCjVfv2lCE2BIGM3Xfh/rN8PiEIQ83ixjF2XnE/t294TBmv31QhZOPyNOfghLj/wBo/wC+ajcF/aOQhAzdMexeJbGep99Umx/r0/8Ax+IQhBw9Iq/MWs3+91auD6M/lQhHn+RhJfhR0xfre34Fdm7/ANH/APIX1CZwgvSE1H12/fJReM+q5CExDtAc3ZXWfRd6KEJifRnQ7JjPmuhXxCD+jpe/ND/3VT+if72LWkIUAy7BCEKFQQhChD//2Q==",
      description: 
        "Camilan pedas manis khas Indonesia dengan tekstur renyah.",
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
      name: "Lemper Ayam Frozen 5 Pcs",
      price: "20.000",
      stock: 100,
      imageUrl: "https://via.placeholder.com/400x400?text=Lemper+Ayam",
      description:
        "Lemper ayam beku isi daging ayam suwir gurih, siap goreng atau kukus. Cocok untuk sajian praktis di rumah.",
      category: "Makanan Beku",
    },
    {
      id: 71,
      name: "Sawi Putih Segar 500gr",
      price: "7.000",
      stock: 90,
      imageUrl: "https://via.placeholder.com/150/F0FFF0/000000?text=Sawi+Putih",
      description:
        "Sawi putih segar cocok untuk sup, tumis, dan campuran sayur lainnya. Kaya akan serat dan rendah kalori.",
      category: "Sayur-sayuran",
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
      name: "Buncis Hijau 300gr",
      price: "7.000",
      stock: 70,
      imageUrl: "https://via.placeholder.com/150/00FA9A/000000?text=Buncis",
      description:
        "Buncis segar dengan tekstur renyah, kaya vitamin dan sangat baik untuk menu diet sehat.",
      category: "Sayur-sayuran",
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
      name: "Rebung Muda Iris 250gr",
      price: "7.500",
      stock: 65,
      imageUrl: 
        "https://via.placeholder.com/400x400?text=Rebung+Muda",
      description:
        "Rebung muda yang telah diiris dan siap masak. Cocok untuk sayur lodeh, tumis, atau pelengkap masakan tradisional.",
      category: "Sayur-sayuran",
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
      imageUrl: "#",
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
      name: "Lap Pel Microfiber",
      price: "15.000",
      stock: 60,
      imageUrl: "https://via.placeholder.com/150/ADD8E6/000000?text=Lap+Pel",
      description:
        "Lap pel microfiber yang efektif menyerap air dan kotoran, cocok untuk berbagai jenis lantai.",
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
