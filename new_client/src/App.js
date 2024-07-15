import logo from "./logo.svg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import UserLogin from "./pages/UserLogin/UserLogin";
import AdminRegister from "./pages/AdminRegister/AdminRegister";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path="/adminregister" element={<AdminRegister />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
