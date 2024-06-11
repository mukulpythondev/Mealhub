import { useEffect, useState } from "react";
import FoodCard from "./FoodCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
    const [cards, setcards] = useState([])
    const [search, setsearch] = useState("")
    const [filtercard, setfiltercard] = useState([])
    const onlinestatus= useOnlineStatus()
    const fetchdata= async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730")
        const json= await data.json()
        setcards(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setfiltercard(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
    }
    useEffect(()=>{
       fetchdata()
    },[])
    const filterCards= ()=>{
        const filterfood= cards.filter((food)=> food.info.name.toLowerCase().includes(search.toLowerCase()))
        setfiltercard(filterfood)
    }
    if(!onlinestatus) return <h1> You looks like offline! </h1>
    return (
        <div className="body">
            <div className="search-container">
                <input type="text" name="search" value={search} onChange={(e)=>{
                    setsearch(e.target.value)
                }} placeholder="Search for food..." />
                <button onClick={()=>filterCards() } type="button">Search</button>
            </div>
          { cards.length> 0 ?     <div className="cards-container">
               {filtercard.map((card)=> <FoodCard key={card.info.name} data={card} /> )}
                
            </div>: <div className="shimmer-container" >
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            <Shimmer/>
            </div>  }
        </div>
    );
};
export default Body