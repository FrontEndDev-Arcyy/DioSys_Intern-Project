import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import PageDashboard from "../views/private/PageDashboard/PageDashboard";
// import PageLogin from "../views/public/PageLogin/PageLogin";
// import PageAbout from "../views/public/PageAbout/PageAbout";
// import PageUsers from "../views/private/PageUsers/PageUsers";

import LandingPage from "../layouts/LandingPage";
import DashboardCard from "../views/contents/DashboardCards/DashboardCard";

export default function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />

                <Route path="/cards" element={<DashboardCard />} />

            </Routes>
        </Router>
    );
}

createRoot(document.getElementById("root")).render(<Routers />);
