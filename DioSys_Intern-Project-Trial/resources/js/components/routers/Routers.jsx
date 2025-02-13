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
import EmailPage from "../layouts/EmailPage";
import OfficialReceiptPage from "../layouts/OfficialReceiptPage";
import PayrollPage from "../layouts/PayrollPage";
import ProfilePage from "../layouts/ProfilePage";
import ReportPage from "../layouts/ReportPage";
import VenuePage from "../layouts/VenuePage";
import UserPage from "../layouts/UserPage";


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

                <Route path="/emails" element={<EmailPage />} />

                <Route path="/receipt" element={<OfficialReceiptPage />} />

                <Route path="/payroll" element={<PayrollPage />} />

                <Route path="/profile" element={<ProfilePage />} />

                <Route path="/reports" element={<ReportPage />} />

                <Route path="/venue" element={<VenuePage/>}/>

                <Route path="/users" element={<UserPage/>}/>
                
            </Routes>
        </Router>
    );
}

createRoot(document.getElementById("root")).render(<Routers />);
