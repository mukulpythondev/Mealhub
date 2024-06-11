import { Link } from "react-router-dom";

const FoodCard = ({data}) => {
    const {name,cloudinaryImageId,costForTwo,avgRating,cuisine,id} = data.info
    return (
        <Link to={`/restaurant/${id}`} className="food-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="Food" />
            <h1>{name}</h1>
            <h3>  {costForTwo} </h3>
            <h3> {cuisine} </h3>
            <h4> Rating - {avgRating} </h4>
        </Link>
    );
};
export default FoodCard;