import { cn } from "lib/utils";
import { Link, NavLink } from "react-router";
import { sidebarItems } from "~/constants";

const NavItems = () => {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/assets/images/david.webp",
  }
  return (
    <section className="nav-items">
      <Link to="/" className="link-logo">
        <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
        <h1>TourVisist</h1>
      </Link>

      <div className="container">
        <nav>
          {sidebarItems.map((item) => (
            <NavLink
              to={item.href}
              key={item.id}
              className={({ isActive }) =>
                cn("group nav-item", {
                  "!bg-primary-100 !text-white": isActive,
                })
              }
            >
              {({ isActive }) => (
                <>
                  <img
                    src={item.icon}
                    alt={item.label}
                    className={`group-hover:brightness-0 size-5 ${isActive ? "brightness-0 invert" : "text-dark-200"}`}
                  />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </div>

      <footer className="nav-footer">
          <img src={user.avatar} alt={user.name} className="size-[40px] rounded-full" />
          <div className="user-text">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        <button className="cursor-pointer">
          <img src="/assets/icons/logout.svg" alt="Logout" className="size-6" />
        </button>
      </footer>
    </section>
  );
};

export default NavItems;
