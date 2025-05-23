import { Routes, Route } from "react-router-dom";
import MainLayout from "./assets/components/MainLayout";
import Dashboard from "./assets/Pages/Dashboard";
import CustomerManagement from "./assets/Pages/CustomerManagement";
import SalesManagement from "./assets/Pages/SalesManagement";
import ProductManagement from "./assets/Pages/ProductManagement";
function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Pelanggan" element={<CustomerManagement />} />
        <Route path="/sales" element={<SalesManagement />} />
        <Route path="/product" element={<ProductManagement />} />
      </Route>
    </Routes>
  );
}

export default App;
