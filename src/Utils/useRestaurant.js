import { useEffect, useState } from "react";
import { RESTAURANT_URL } from "./Constants";
import useOnlineStatus from "../Utils/useOnlineStatus";

const useRestaurant = (id) => {
    const onlineStatus = useOnlineStatus();
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    const [error, setError] = useState(null);

    const fetchRestaurant = async () => {
        try {
            const response = await fetch(`${RESTAURANT_URL}${id}`);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            setRestaurantInfo(json?.data?.cards);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        if (onlineStatus) {
            fetchRestaurant();
        } else {
            setError("You are offline. Please check your internet connection.");
        }
    }, [onlineStatus]);

    return { restaurantInfo, error };
};

export default useRestaurant;
