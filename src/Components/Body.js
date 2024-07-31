import { useContext, useEffect, useState } from "react";
import FoodCard, { VegCard } from "./FoodCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/Context";

const Vegcards = VegCard(FoodCard);

const Body = () => {
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCards, setFilteredCards] = useState([]);
    const onlineStatus = useOnlineStatus();
    const [error, setError] = useState(null);
    const {username,setuser}=useContext(UserContext)
    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730"
            );
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            setCards(restaurants);
            setFilteredCards(restaurants);
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        if (onlineStatus) {
            fetchData();
        } else {
            setError("You seem to be offline!");
        }
    }, [onlineStatus]);

    const filterCards = () => {
        const filtered = cards.filter((food) =>
            food.info.name.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCards(filtered);
    };

    if (!onlineStatus) return <h1 className="text-center text-red-500">You seem to be offline!</h1>;

    return (
        <div className="p-5 min-h-[90vh] bg-pink-100 text-center">
            <div className="mb-5 flex gap-10 justify-start">
           <div className="flex gap-2" >
           <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search for food..."
                    className="p-2 border border-gray-300 rounded-l-md"
                />
                <button
                    onClick={filterCards}
                    type="button"
                    className="p-2 bg-gray-800 text-white rounded-r-md"
                >
                    Search
                </button>
           </div>
           <button className="px-2 py-1 bg-gray-200 rounded-lg text-bold text-lg" 
           onClick={()=>{
            const filterbyrating= cards.filter((f)=> f?.info?.avgRating > 4)
            setFilteredCards(filterbyrating)
           }}
           > Top Rated Restaurant</button>
                <input
                    type="text"
                    value={username}
                    onChange={(e)=>setuser(e.target.value)}
                    placeholder="UserName"
                    className="p-2 border border-gray-300 rounded-l-md"
                />
            </div>
            <div>
         
            </div>
            {error ? (
                <div className="text-red-500">
                    <p>Error: {error}</p>
                </div>
            ) : cards.length > 0 ? (
                <div className="flex flex-wrap justify-center gap-5">
                    {filteredCards.map((card) => {
                        return card.info.veg ? (
                            <Vegcards key={card.info.id} data={card} />
                        ) : (
                            <FoodCard key={card.info.id} data={card} />
                        );
                    })}
                </div>
            ) : (
                <div className="flex justify-center">
                    <Shimmer />
                    <Shimmer />
                    <Shimmer />
                    <Shimmer />
                </div>
            )}
        </div>
    );
};

export default Body;
