import { Routes, Route } from "react-router-dom";
import MainLayout from "./assets/components/MainLayout";
import Dashboard from "./assets/Pages/Dashboard";
import CustomerManagement from "./assets/Pages/CustomerManagement";
import ProductManagement from "./assets/Pages/ProductManagement";
import PromoDashboard from "./assets/Pages/PromoDashboard";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
         <Route path="/Pelanggan" element={<CustomerManagement />} />
         <Route path="/Produk" element={<ProductManagement />} />
         <Route path="/Promo" element={<PromoDashboard />} />
         
         
      </Route>
    </Routes>
  );
}

export default App;
