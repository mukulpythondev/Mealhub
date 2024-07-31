import { useDispatch } from "react-redux";
import {addItem} from '../Store/cartSlice'
const Accordion = ({ data, openitem, setActiveIndex }) => {
    if (!data) return <h1 className="text-xl text-center font-semibold">Menu Not Available!</h1>;
    const dispatch= useDispatch()

    return (
        <div className="accordion border rounded-lg overflow-hidden">
            <div 
                className="accordion-header bg-gray-100 p-4 cursor-pointer" 
                onClick={setActiveIndex}
            >
                <h4 className="text-lg font-medium flex justify-between items-center">
                    {data.title} ({data.itemCards.length}) <span>{!openitem ? "🔽" : "🔼"}</span>
                </h4>
            </div>
            {openitem && (
                <ul className="accordion-content list-none p-0 m-0">
                    {data.itemCards.map((item) => (
                        <li key={item.card.info.id} className="rec-item border-b p-4 flex justify-between items-center">
                            <div className="rec-details flex-grow mr-4">
                                <h3 className="text-xl font-semibold">{item.card.info.name}</h3>
                                {item.card.info.price && !isNaN(item.card.info.price / 100) && (
                                    <h4 className="text-lg">₹ {item.card.info.price / 100}</h4>
                                )}
                                <h4 className="text-lg">Rating: {item.card.info.ratings.aggregatedRating.rating}</h4>
                                <p className="text-gray-600">{item.card.info.description}</p>
                            </div>
                            {item.card.info.imageId && (
                               <div className="relative" >
                                 <img 
                                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} 
                                    alt={item.card.info.name} 
                                    className="w-24 h-24 object-cover rounded-lg"
                                />
                                <button onClick={()=> dispatch(addItem(item))} className="absolute left-5 text-sm bottom-1 px-2 py-1 bg-green-500 rounded-lg text-white" >Add +</button>
                               </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Accordion;
