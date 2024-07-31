import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Store/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
     const dispatch= useDispatch()
    return (
        <div className="p-4 min-h-[77.5vh] ">
            <h1 className="text-2xl font-semibold mb-4 text-center">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-lg">Your cart is empty</p>
            ) : (
                <ul className="list-none p-0 m-0">
                    <button onClick={()=>dispatch(clearCart())} className="px-3 rounded-md bg-zinc-800 text-white font-semibold py-2" >Clear Cart</button>
                    {cartItems.map((item, index) => (
                        <li key={index} className="border-b p-4 flex justify-between items-center">
                            <div className="flex-grow mr-4">
                                <h3 className="text-xl font-semibold">{item.card.info.name}</h3>
                                {item.card.info.price && !isNaN(item.card.info.price / 100) && (
                                    <h4 className="text-lg">₹ {item.card.info.price / 100}</h4>
                                )}
                                <h4 className="text-lg">Rating: {item.card.info.ratings.aggregatedRating.rating}</h4>
                                <p className="text-gray-600">{item.card.info.description}</p>
                            </div>
                            {item.card.info.imageId && (
                                <img 
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} 
                                    alt={item.card.info.name} 
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
