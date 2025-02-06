import React from "react";
import DashboardCard from "../views/contents/DashboardPage/DashboardCards/DashboardCard";
import DashboardBreadcumb from "../views/contents/DashboardPage/DashboardBreadcumbs/DashboardBreadcumb";

function DashboardPage() {
    return (
        <div>
            <DashboardBreadcumb />
            <DashboardCard />
        </div>
    );
}

export default DashboardPage;