import React from "react";


const DestinationCard = ({destination}) => {
    return (
        <div className="image">
            <img width={200} src={destination.image} alt="" />
            <div>
                <h2 style={{fontStyle: "underline"}}>{destination.name}</h2>
                <h4>Place: {destination.location}</h4>
                <p>{destination.description}</p>
                <h5>{destination.price}</h5>
            </div>
        </div>
    )
}
export default DestinationCard;