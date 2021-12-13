// Imagen del home de landingpage
import './Header.css';
import CarouselChuekas from './Carousel/Carousel';
import CategoriesCards from './CategoriesCards/CategoriesCards';

const Header= ()=>{
    return (
        <>
        <CarouselChuekas/>
            <div className="contcardHome">
            <p className="h4Header">
                El estilo, es un vehículo para expresar <b> quienes somos...</b> <br/>
                Concentrate en revelar <b>tu verdadero ser...</b>
                </p>
            <CategoriesCards/>
        </div>
        </>
    );
}

export default Header;