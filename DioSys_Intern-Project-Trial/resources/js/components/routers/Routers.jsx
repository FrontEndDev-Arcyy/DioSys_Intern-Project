import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PageDashboard from "../views/private/PageDashboard/PageDashboard";
// import PageLogin from "../views/public/PageLogin/PageLogin";
// import PageAbout from "../views/public/PageAbout/PageAbout";
// import PageUsers from "../views/private/PageUsers/PageUsers";

import LoginPage from "../layouts/LoginPage";
import LandingPage from "../layouts/LandingPage";
import MatrimonyPage from "../layouts/MatrimonyPage";
import MemorialPage from "../layouts/MemorialPage";
import BaptismPage from "../layouts/BaptismPage";
import ConfirmationPage from "../layouts/ConfirmationPage";
import CalendarPage from "../layouts/CalendarPage";
import PageLanding from "../layouts/PageLanding";
import CommunionPage from "../layouts/CommunionPage";
import ConversionPage from "../layouts/ConversionPage";
import PastoralPage from "../layouts/PastoralPage";
import EmployeesPage from "../layouts/EmployeesPage";
import SystemPage from "../layouts/SystemPage";


export default function Routers() {
    return (
        <Router>
            <Routes>

                <Route path="/login" element={<LoginPage />} />

                <Route path="/" element={<PageLanding />} />

                <Route path="/matrimony" element={<MatrimonyPage />} />

                <Route path="/memorial" element={<MemorialPage />} />

                <Route path="/baptism" element={<BaptismPage />} />

                <Route path="/confirmation" element={<ConfirmationPage />} />

                <Route path="/communion" element={<CommunionPage />} />

                <Route path="/conversion" element={<ConversionPage />} />

                <Route path="/pastoral" element={<PastoralPage />} />

                <Route path="/employees" element={<EmployeesPage />} />

                <Route path="/calendar" element={<CalendarPage />} />

                <Route path="/settings" element={<SystemPage />} />

            </Routes>
        </Router>
    );
}

createRoot(document.getElementById("root")).render(<Routers />);
