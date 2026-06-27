import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Books from "./pages/Books";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgetPassword from "./pages/ForgetPassword";
import ResetCode from "./pages/ResetCode";
import CreateNewPassword from "./pages/CreateNewPassword";
import PasswordChanged from "./pages/PasswordChanged";

function App() {
  return (
    <Routes>
      {/* أول صفحة */}
      <Route path="/" element={<Home />} />

      {/* Books */}
      <Route path="/books" element={<Books />} />
      <Route path="/product-details" element={<ProductDetails />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/reset-code" element={<ResetCode />} />
      <Route path="/create-password" element={<CreateNewPassword />} />
      <Route path="/password-changed" element={<PasswordChanged />} />
    </Routes>
  );
}

export default App;