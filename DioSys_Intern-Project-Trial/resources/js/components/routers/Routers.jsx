import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PageDashboard from "../views/private/PageDashboard/PageDashboard";
// import PageLogin from "../views/public/PageLogin/PageLogin";
// import PageAbout from "../views/public/PageAbout/PageAbout";
// import PageUsers from "../views/private/PageUsers/PageUsers";

import LoginPage from "../layouts/LoginPage";
import LandingPage from "../layouts/LandingPage";
import DashboardPage from "../layouts/DashboardPage";
import MatrimonyPage from "../layouts/MatrimonyPage";
import MemorialPage from "../layouts/MemorialPage";
import BaptismPage from "../layouts/BaptismPage";


export default function Routers() {
    return (
        <Router>
            <Routes>

                <Route path="/login" element={<LoginPage />} />

                <Route path="/" element={<LandingPage />} />

                <Route path="/dashboard" element={<DashboardPage />} />

                <Route path="/matrimony" element={<MatrimonyPage />} />

                <Route path="/memorial" element={<MemorialPage />} />

                <Route path="/baptism" element={<BaptismPage />} />

            </Routes>
        </Router>
    );
}

createRoot(document.getElementById("root")).render(<Routers />);
