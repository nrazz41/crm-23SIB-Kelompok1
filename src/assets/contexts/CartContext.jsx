import React, { createContext, useState, useContext, useEffect } from 'react';

// Membuat Context
const CartContext = createContext();

// Dummy data produk yang tersedia (Sudah oke, tidak perlu diubah)
const availableProducts = [
  {
    itemId: "item001",
    name: "Beras Cap Ayam Jago 5 Kg",
    variant: "Jenis: Premium",
    originalPrice: 70000,
    currentPrice: 65000,
    imageUrl: "https://placehold.co/80x80/228B22/FFFFFF?text=Beras",
    hasDiscount: true,
    discountPercent: 7,
  },
  {
    itemId: "item003",
    name: "Minyak Goreng Sania 2 Liter Pouch",
    variant: "Ukuran: 2L",
    originalPrice: 38000,
    currentPrice: 36000,
    imageUrl: "https://placehold.co/80x80/FFD700/000000?text=Minyak",
    hasDiscount: true,
    discountPercent: 5,
  },
  {
    itemId: "item002",
    name: "Indomie Goreng Jumbo",
    variant: "Rasa: Original",
    originalPrice: 3500,
    currentPrice: 3000,
    imageUrl: "https://placehold.co/80x80/8B0000/FFFFFF?text=Indomie",
    hasDiscount: true,
    discountPercent: 14,
  },
  {
    itemId: "item004",
    name: "Kopi Kapal Api Special Mix 10 Sachet",
    variant: "Isi: 10 sachet",
    originalPrice: 15000,
    currentPrice: 12500,
    imageUrl: "https://placehold.co/80x80/8B4513/FFFFFF?text=Kopi",
    hasDiscount: true,
    discountPercent: 16,
  },
  {
    itemId: "item005",
    name: "Biaya Proteksi Barang Elektronik (Opsional)",
    variant: null,
    currentPrice: 1700,
    originalPrice: 1700,
    imageUrl: "https://placehold.co/80x80/cccccc/000000?text=Proteksi",
    shopName: null, // Aslinya tidak ada di availableProducts
    isProtection: true,
    hasDiscount: false,
    discountPercent: 0,
  }
];

// CartProvider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Memuat dari localStorage jika ada
    try {
      const savedCart = localStorage.getItem('hawaiiCart');
      if (savedCart) {
        // Coba parse, jika gagal, kembalikan data default
        return JSON.parse(savedCart);
      }
    } catch (error) {
      console.error("Error parsing cart data from localStorage:", error);
      // Fallback to default data if parsing fails
    }

    // Data dummy awal jika localStorage kosong atau error
    return [
      {
        id: "shop001",
        shopName: "Sinar Jaya Swalayan",
        isMall: false,
        products: [
          { ...availableProducts.find(p => p.itemId === "item001"), qty: 1, selected: true },
          { ...availableProducts.find(p => p.itemId === "item003"), qty: 2, selected: true },
        ],
        hasShopVoucher: true,
      },
      {
        id: "shop002",
        shopName: "Toko Cemilan Murah",
        isMall: false,
        products: [
          { ...availableProducts.find(p => p.itemId === "item002"), qty: 5, selected: true },
          { ...availableProducts.find(p => p.itemId === "item004"), qty: 1, selected: true },
        ],
        hasShopVoucher: false,
      },
      {
        id: "shop003",
        shopName: null,
        isMall: false,
        products: [
          { ...availableProducts.find(p => p.itemId === "item005"), qty: 1, selected: true },
        ],
        hasShopVoucher: false,
      }
    ];
  });

  // Menyimpan cartItems ke localStorage setiap kali berubah
  useEffect(() => {
    try {
      localStorage.setItem('hawaiiCart', JSON.stringify(cartItems));
    } catch (error) {
      console.error("Error saving cart data to localStorage:", error);
    }
  }, [cartItems]);

  // FUNGSI UTAMA YANG DIPERBAIKI: Menambah item ke keranjang
  const addItemToCart = (productToAdd, shopId, shopName, isMall = false, quantity = 1) => {
    // Validasi input
    if (!productToAdd || !productToAdd.itemId || quantity <= 0) {
      console.error("Invalid product or quantity for addItemToCart.");
      return;
    }

    // Pastikan produk yang akan ditambahkan ada di daftar `availableProducts`
    const productData = availableProducts.find(p => p.itemId === productToAdd.itemId);
    if (!productData) {
      console.error(`Product with itemId ${productToAdd.itemId} not found in availableProducts.`);
      return;
    }
    
    // Perbarui state cart
    setCartItems(prevCartItems => {
      // 1. Cari apakah toko sudah ada di keranjang
      const existingShopIndex = prevCartItems.findIndex(shop => shop.id === shopId);
      
      // Jika toko sudah ada
      if (existingShopIndex > -1) {
        const updatedShops = [...prevCartItems];
        const shopToUpdate = { ...updatedShops[existingShopIndex] };
        
        // 2. Cari apakah produk sudah ada di toko tersebut
        const existingProductIndex = shopToUpdate.products.findIndex(p => p.itemId === productToAdd.itemId);
        
        if (existingProductIndex > -1) {
          // Jika produk sudah ada, perbarui kuantitasnya
          const updatedProducts = [...shopToUpdate.products];
          updatedProducts[existingProductIndex] = {
            ...updatedProducts[existingProductIndex],
            qty: updatedProducts[existingProductIndex].qty + quantity,
          };
          shopToUpdate.products = updatedProducts;
        } else {
          // Jika produk belum ada, tambahkan produk baru ke toko
          shopToUpdate.products = [
            ...shopToUpdate.products,
            { ...productData, qty: quantity, selected: true },
          ];
        }
        updatedShops[existingShopIndex] = shopToUpdate;
        return updatedShops;
      } else {
        // Jika toko belum ada, tambahkan toko baru beserta produknya
        return [
          ...prevCartItems,
          {
            id: shopId,
            shopName: shopName,
            isMall: isMall,
            products: [{ ...productData, qty: quantity, selected: true }],
            hasShopVoucher: false,
          }
        ];
      }
    });
  };

  // Fungsi untuk mengubah kuantitas item
  const updateQuantity = (shopId, itemId, delta) => {
    setCartItems(prevCartItems => {
      return prevCartItems.map(shop => {
        if (shop.id === shopId) {
          return {
            ...shop,
            products: shop.products.map(product => {
              if (product.itemId === itemId) {
                const newQty = Math.max(1, product.qty + delta);
                return { ...product, qty: newQty };
              }
              return product;
            }),
          };
        }
        return shop;
      });
    });
  };

  // Fungsi untuk menghapus item dari keranjang
  const removeItem = (shopId, itemId) => {
    setCartItems(prevCartItems => {
      return prevCartItems.map(shop => {
        if (shop.id === shopId) {
          return {
            ...shop,
            products: shop.products.filter(product => product.itemId !== itemId),
          };
        }
        return shop;
      }).filter(shop => shop.products.length > 0);
    });
  };

  // Fungsi untuk memilih/tidak memilih item
  const toggleItemSelection = (shopId, itemId) => {
    setCartItems(prevCartItems => {
      return prevCartItems.map(shop => {
        if (shop.id === shopId) {
          return {
            ...shop,
            products: shop.products.map(product => {
              if (product.itemId === itemId) {
                return { ...product, selected: !product.selected };
              }
              return product;
            }),
          };
        }
        return shop;
      });
    });
  };

  // Fungsi untuk memilih/tidak memilih semua item dalam satu toko
  const toggleShopSelection = (shopId, selected) => {
    setCartItems(prevCartItems => {
      return prevCartItems.map(shop => {
        if (shop.id === shopId) {
          return {
            ...shop,
            products: shop.products.map(product => ({ ...product, selected: selected })),
          };
        }
        return shop;
      });
    });
  };

  // Fungsi untuk memilih/tidak memilih semua item di seluruh keranjang
  const toggleSelectAll = (selected) => {
    setCartItems(prevCartItems => {
      return prevCartItems.map(shop => ({
        ...shop,
        products: shop.products.map(product => ({ ...product, selected: selected })),
      }));
    });
  };

  // Mendapatkan item-item yang terpilih
  const getSelectedCartItems = () => {
    const selected = [];
    cartItems.forEach(shop => {
      shop.products.forEach(product => {
        if (product.selected) {
          selected.push({
            ...product,
            shopName: shop.shopName,
            shopId: shop.id,
            isMall: shop.isMall
          });
        }
      });
    });
    return selected;
  };

  const calculateTotals = () => {
    let totalProductsSelected = 0;
    let totalPrice = 0;
    cartItems.forEach(shop => {
      shop.products.forEach(product => {
        if (product.selected) {
          totalProductsSelected += product.qty;
          totalPrice += product.currentPrice * product.qty;
        }
      });
    });
    return { totalProductsSelected, totalPrice };
  };

  const { totalProductsSelected, totalPrice } = calculateTotals();

  // Nilai yang akan disediakan oleh Context
  const contextValue = {
    cartItems,
    addItemToCart,
    updateQuantity,
    removeItem,
    toggleItemSelection,
    toggleShopSelection,
    toggleSelectAll,
    getSelectedCartItems,
    totalProductsSelected,
    totalPrice
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook untuk menggunakan Cart Context
export const useCart = () => {
  return useContext(CartContext);
};