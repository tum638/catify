import React from "react";
import { useState } from "react";


const Card = ({currentImage, description, fetchData}) => {
    

    const handleClick = () => {
            fetchData();
    }

    return (
        <div className="card rounded">
            <div className="card-header bluetest fill-width"><img className="image" src={currentImage} /></div>


            <div className="text">
            <div className="card-body purple fill-width dark-background">

                <p className="white-text centered">{description}</p>
                </div>
            <div className="card-footer dark-background fill-width">
                <div className="button navy centered rounded" onClick={handleClick}>DISCOVER</div>
                </div>
            </div>
            </div>
            

 )
}

export default Card;