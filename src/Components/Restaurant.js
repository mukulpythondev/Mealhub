import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router-dom";
import Accordion from "./Accordian";
import useRestaurant from "../Utils/useRestaurant";
import { useState } from "react";

const Restaurant = () => {
    const { id } = useParams();
    const { restaurantInfo, error } = useRestaurant(id);
    const [activeIndex, setActiveIndex] = useState(null);

    if (error) return <h1 className="text-center text-red-500">{error}</h1>;
    if (!restaurantInfo) return <Shimmer />;

    const { info } = restaurantInfo[2]?.card?.card;
    const categories = restaurantInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (f) => f?.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="p-4">
            <h3 className="text-2xl font-semibold">
                {info.name} <span className="text-gray-500">({info.areaName})</span>
            </h3>
            <h4 className="text-lg text-gray-700">{info.cuisines.join(", ")}</h4>
            <h4 className="text-lg text-gray-700">Rating: {info.avgRating}</h4>
            <div className="mt-6 flex flex-col gap-y-2">
                {categories.map((cat, index) => (
                    <Accordion 
                        key={cat.card.card.title} 
                        data={cat.card.card} 
                        openitem={index === activeIndex} 
                        setActiveIndex={() => setActiveIndex(index === activeIndex? null: index )}
                    />
                ))}
            </div>
        </div>
    );
};

export default Restaurant;
