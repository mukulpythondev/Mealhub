import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../Utils/Context";
import { useSelector } from "react-redux";

const Navbar = () => {
    const onlineStatus = useOnlineStatus();
    const {username}= useContext(UserContext)
    const cartitems= useSelector((store)=> store.cart.items)
    // less efficient code we are subscribing to the store every time the changes in other slices 
    // const store= useSelector((store)=> store)
    // const cartiems= store.cart.items

    return (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4">
            <div className="text-2xl font-bold">Food Order</div>
            <div className="flex items-center space-x-4">
                {/* <li className="list-none">
                    Online Status: {onlineStatus ? "🟢" : "🔴"}
                </li> */}
                 <Link to="/cart" className="list-none  text-bold" >
                   Cart - <span className="text-orange-500">({cartitems.length})</span>
                  </Link>
                <Link to="/" className="hover:underline">Home</Link>
                <Link to="/about" className="hover:underline">About</Link>
            
                  <li className="list-none text-orange-500 text-bold" >
                    { username}
                  </li>
            </div>
        </nav>
    );
}

export default Navbar;
