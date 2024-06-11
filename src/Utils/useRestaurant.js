import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./Constants";

const useRestaurant=(id)=>{
    const [Restaurantinfo, setRestaurantinfo] = useState(null);
    const fetchrestaurant = async () => {
        const data = await fetch(`${RESTAURANT_URL}${id}`);
        const json = await data.json();
        setRestaurantinfo(json?.data?.cards);
    };

    useEffect(() => {
        fetchrestaurant();
    }, []);
    return Restaurantinfo;
}
export default useRestaurant