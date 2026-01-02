
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./app/components/navigation";
import App from "./app/App";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Navigation />
    <div className="pt-20"> {/* offset for fixed header (matches nav height) */}
      <App />
    </div>
  </BrowserRouter>
);
  