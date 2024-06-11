import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Navbar = () => {
    const onlinestatus= useOnlineStatus()
    return (
        <nav className="navbar">
            <div className="logo">Food Order</div>
            <div className="nav-links">
                <li> Online Status : { onlinestatus? "🟢":"🔴"} </li>
                <Link to={"/"} >Home</Link>
                <Link to={"/about"} >About</Link>
                <Link to={"/menu"}>Menu</Link>
                <Link to={"/contact"}>Contact</Link>
            </div>
        </nav>
    );
}
export default Navbar;
