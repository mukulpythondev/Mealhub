
import Shimmer from "../Components/Shimmer";
import { useParams } from "react-router-dom";
import Accordion from "./Accordian";
import useRestaurant from "../Utils/useRestaurant"
const Restaurant = () => {
   
    const { id } = useParams();
    const Restaurantinfo= useRestaurant(id)  
   

    if (Restaurantinfo === null) return <Shimmer />;

    const { info } = Restaurantinfo[2]?.card?.card;
    const recommendation = Restaurantinfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(recommendation)
    return (
        <div className="res-container">
            <h3>{info.name} <span>({info.areaName})</span></h3>
            <h4>{info.cuisines.join(", ")}</h4>
            <h4>{info.avgRating}</h4>
            <div className="menu">
                <Accordion recommendation={recommendation} />
            </div>
        </div>
    );
};



export default Restaurant;
