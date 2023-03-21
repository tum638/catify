import React from "react";

const Attributes = ({ name, origin, temperaments, addToBanned }) => {
    const addtoBanned = (e) => {
        addToBanned(e.target.textContent);
    }
     
    return (
        <div className="attributes green rounded dark-background">
            <h1 className="attributes-header centered white-text">Attributes</h1>
            <p className="centered ">Click on an attribute to add it to the ban list</p>
            <ul className="attribute-list centered white-text">
                <p className="white-text">name</p>
                <li className="white-text"><button className="attribute-button white-text elevate"> {name}</button></li>
                <p className="white-text">origin</p>
                <li className="white-text"><button className="attribute-button white-text elevate">{origin}</button></li>
                <p className="white-text">temperaments</p>
                {temperaments.slice(0, 4).map((temperament, idx) => {
                    return <li key={idx}><button onClick={addtoBanned} className="attribute-button white-text elevate">{temperament}</button></li>
                })}
            </ul>
          
        </div>
    )
}

export default Attributes;