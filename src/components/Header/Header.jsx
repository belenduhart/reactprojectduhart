// Imagen del home de landingpage
import './Header.css';
import { Link } from 'react-router-dom';

const Header= ()=>{
    return (
        <>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carrousel carousel-item active">
            <img class="carrousel__img" src="https://i.ibb.co/QdwNb1Y/chuequis.png" class="d-block w-100" alt="..."/> 
        </div>
        <div class="carrousel carousel-item">
            <img class="carrousel__img" src="https://i.ibb.co/2WkXDDk/1.jpg" class="d-block w-100" alt="..."/>
            <div class="carrousel__divP">
                <p class="carrousel__p">La ropa con la que te identificas...</p>
                </div>
        </div>
        <div class="carrousel carousel-item">
            <img class="carrousel__img" src="https://i.ibb.co/3y5tVYd/3.jpg" class="d-block w-100" alt="..."/>
            <div class="carrousel__divP">
                <p class="carrousel__p">La ropa con la que te sentis comoda...</p>
                </div>
        </div>
        <div class="carrousel carousel-item">
            <img class="carrousel__img" src="https://i.ibb.co/N1ZrfBn/4.jpg" class="d-block w-100" alt="..."/>
            <div class="carrousel__divP">
                <p class="carrousel__p">La ropa que te hace ser vos...</p>
                </div>
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden" ></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden"></span>
        </button>
    </div>
        <div className="contcardHome">
            <p className="h4Header">
                El estilo, es un vehículo para expresar <b> quienes somos...</b> <br/>
                Concentrate en revelar <b>tu verdadero ser...</b></p>
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
        </div>
        </>
    );
}

export default Header;