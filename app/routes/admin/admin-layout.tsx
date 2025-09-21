import React from "react"
import { Outlet } from "react-router";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";

const AdminLayout = () => {

    return (
        <div className="admin-layout">
            MobileSideBar
            <aside className="w-full h-full max-w-[270px] hidden
            lg:block">
                <SidebarComponent></SidebarComponent>
            </aside>
            <aside className="children">
                <Outlet />
            </aside>
        </div>
    )
}

export default AdminLayout;