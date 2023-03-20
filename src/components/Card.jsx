import React from "react";
import { useState } from "react";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY; 

const Card = () => {
    const [currentImage, setCurrentImage] = useState("http://beepeers.com/assets/images/commerces/default-image.jpg");

    const [description, setDescription] = useState("No Description");

    const handleClick = () => {
        fetchData();
    }
   async function fetchData() {
    const url = `https://api.thecatapi.com/v1/images/search?limit=1&api_key=${ACCESS_KEY}&has_breeds=1`;
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
       setCurrentImage(data[0].url);
       setDescription(data[0].breeds[0].description)
       console.log(data[0].breeds[0].alt_names)

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