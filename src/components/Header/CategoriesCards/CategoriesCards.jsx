import React from "react";
import { Link } from 'react-router-dom';
import '../Header.css';

const CategoriesCards = () => {
    return(
        <>
            <div className="cardHome" id="rem">
                <Link exact to="categoria/Remeras">
                <p>Remeras</p>
                </Link>
            </div>
            <div className="cardHome" id="blu">
            <Link exact to="categoria/Blusas">
                <p>Blusas</p>
            </Link>
            </div>
            <div className="cardHome" id="bu">
            <Link exact to="categoria/Buzos">
                <p>Buzos</p>
            </Link>
            </div>
            <div className="cardHome" id="po">
            <Link exact to="categoria/Polleras">
                <p>Polleras</p>
            </Link>
            </div>
            <div className="cardHome" id="pan">
            <Link exact to="categoria/Pantalones">
                <p>Pantalones</p>
            </Link>
            </div>
        </>
    )
}

export default CategoriesCards;