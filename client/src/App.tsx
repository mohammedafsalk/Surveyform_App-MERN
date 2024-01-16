import "./App.css";
import AdminDashBoard from "./components/DashBoard/AdminDashBoard";
import Form from "./components/Form/Form";
import AdminLogin from "./components/Login/AdminLogin";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/adminDashBoard" element={<AdminDashBoard />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
    </div>
  );
}

export default App;
