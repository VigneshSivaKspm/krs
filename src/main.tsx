
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./app/components/navigation";
import App from "./app/App.tsx";
import SignUp from "./app/pages/SignUp";
import Login from "./app/pages/Login";
import ReportForm from "./app/pages/ReportForm";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navigation />
    <div className="pt-20"> {/* offset for fixed header (matches nav height) */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<ReportForm />} />
      </Routes>
    </div>
  </BrowserRouter>
);
  