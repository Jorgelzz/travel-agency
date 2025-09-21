import { Link } from "react-router";


const NavItems = () => {
  return (
    <section>
        <Link to='/' className="nav-items">
        <img src="/assets/icons/logo.svg" alt="Logo" className="size-[30px]"/>
        <h1>TourVisist</h1>
        </Link>
    </section>
  )
}


export default NavItems;