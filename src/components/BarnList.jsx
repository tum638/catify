import React from "react";

const BarnList = ({ banned }) => {
    return (
        <div className="barnlist purple rounded dark-background">
            <h1 className="barnlist-header white-text centered">Barn List</h1>
            <ul className="attribute-list centered white-text">
                {banned.map((attribute, idx) => {
                    return <li key={idx}><button className="attribute-button white-text elevate">{attribute}</button></li>
                })}
            </ul>
        </div>
    )
}

export default BarnList;