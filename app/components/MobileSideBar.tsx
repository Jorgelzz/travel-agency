// @ts-nocheck
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import { NavItems } from "./index";

const MobileSideBar = () => {
  let sidebar: SidebarComponent;
  const toggleSidebar = () => {
    sidebar.toggle();
  }
  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="dashboard" className="link-logo">
          <img
            src="/assets/icons/logo.svg"
            alt="logo"
            className="size-[30px]"
          />
          <h1>TourVisitor</h1>
        </Link>
        <button onClick={toggleSidebar} className="cursor-pointer">
            <img src="/assets/icons/menu.svg" alt="Menu" className="size-6" />
        </button>
      </header>
        <SidebarComponent width={250} ref={(Sidebar) => (sidebar = Sidebar)}
            enableGestures={true} showBackdrop={false} closeOnDocumentClick={true} >
            <NavItems handleClick={toggleSidebar} />
        </SidebarComponent>
    </div>
  );
};

export default MobileSideBar;
