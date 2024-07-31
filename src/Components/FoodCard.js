import { Link } from "react-router-dom";

const FoodCard = ({ data }) => {
    const { name, cloudinaryImageId, costForTwo, avgRating, cuisine, id } = data.info;
    return (
        <Link to={`/restaurant/${id}`} className="block bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 w-64">
            <img
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
                alt="Food"
                className="w-full h-40 object-cover rounded-lg"
            />
            <h1 className="mt-2 text-lg font-bold text-gray-800">{name}</h1>
            <h3 className="text-gray-600">{costForTwo}</h3>
            <h3 className="text-gray-600">{cuisine}</h3>
            <h4 className="mt-1 text-green-600 font-bold">Rating - {avgRating}</h4>
        </Link>
    );
};

export const VegCard = (WrappedComponent) => {
    return (props) => {
        console.log(props)
        return (
            <div className="relative w-64">
                <span className="absolute top-0 left-0 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded-br-lg">
                  Veg
                </span>
                <WrappedComponent {...props} />
            </div>
        );
    };
};

export default FoodCard;
