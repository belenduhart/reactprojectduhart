import React from "react";
import '../Header.css';

const CarouselChuekas = () => {
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
            <div className="carrousel carousel-item active">
                <img className="carrousel__img" src="https://i.ibb.co/HBP5pX7/chuek.png" className="d-block w-100" alt="Imagen Marca"/> 
            </div>
            <div className="carrousel carousel-item">
                <img className="carrousel__img" src="https://i.ibb.co/2WkXDDk/1.jpg" className="d-block w-100" alt="Chica con ropa de la marca"/>
                <div className="carrousel__divP">
                    <p className="carrousel__p">La ropa con la que te identificas...</p>
                    </div>
            </div>
            <div className="carrousel carousel-item">
                <img className="carrousel__img" src="https://i.ibb.co/3y5tVYd/3.jpg" className="d-block w-100" alt="Chica con ropa de la marca"/>
                <div className="carrousel__divP">
                    <p className="carrousel__p">La ropa con la que te sentis comoda...</p>
                    </div>
            </div>
            <div className="carrousel carousel-item">
                <img className="carrousel__img" src="https://i.ibb.co/N1ZrfBn/4.jpg" className="d-block w-100" alt="Chica con ropa de la marca"/>
                <div className="carrousel__divP">
                    <p className="carrousel__p">La ropa que te hace ser vos...</p>
                    </div>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden" ></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden"></span>
            </button>
        </div>
        </>
    )
}

export default CarouselChuekas;