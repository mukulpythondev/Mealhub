import { useState } from "react";

const Accordion = ({ recommendation }) => {
    const [isOpen, setIsOpen] = useState(false);
    return recommendation!=undefined? (
        <div className="accordion">
            <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
                <h4> Recommended ({recommendation.length}) </h4>
            </div>
            {isOpen && (
                <ul className="accordion-content">
                    {recommendation.map((item) => (
                        <li key={item.card.info.id} className="rec-item">
                            <div className="rec-details">
                                <h3>{item.card.info.name}</h3>
                                <h4>₹ {item.card.info.price / 100}</h4>
                                <h4>{item.card.info.ratings.aggregatedRating.rating}</h4>
                                <p>{item.card.info.description}</p>
                            </div>
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item.card.info.imageId}`} alt={item.card.info.name} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    ): <div> Loading... </div>
};
export default Accordion