//Style
import "./NavBar.css";

//Utilities
import {Link} from "react-router-dom";

//Components
import CarritoWidget from "../Cart/CarritoWidget/CarritoWidget";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar= () =>{
    return (
        <>
        <marquee direction="down" scrolldelay="500">
            <span>Envío gratis a todo el país desde $5000.</span>
        </marquee>
        <div className="ContenedorNavBar">
        <div className="NavBarContainer">
            {/* Logo de la marca */}
        <img className="NavBarLogo"
        src="https://i.ibb.co/sKqRN9Y/laschuecas.jpg"
        alt="Logo las chuecas"/>
            <Navbar className="NavBarra" expand="lg">
                <Navbar.Toggle  aria-controls="navbarScroll" />
                <Navbar.Collapse  id="navbarScroll">
                <Nav 
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' , width:"100%"}}
                navbarScroll
                >
                <Link exact to="/">
                <b className="hover"> <Nav.Link className="NavBarContent"
                href="#action1">Home </Nav.Link></b>
                </Link>
                <Link exact to="/comocomprar">
                <Nav.Link href="#action2" className="hover">¿Cómo comprar?</Nav.Link>
                </Link>
                <NavDropdown className="hover"  title="Productos" id="navbarScrollingDropdown">
                    <Link exact to="/categoria/Remeras">
                    <NavDropdown.Item href="#action3" >Remeras</NavDropdown.Item>
                    </Link>
                    <Link exact to="/categoria/Blusas">
                    <NavDropdown.Item href="#action4">Blusas</NavDropdown.Item>
                    </Link>
                    <Link exact to="/categoria/Buzos">
                    <NavDropdown.Item href="#action5" >Buzos</NavDropdown.Item>
                    </Link>
                    <Link exact to="/categoria/Pantalones">
                    <NavDropdown.Item href="#action6" >Pantalones</NavDropdown.Item>
                    </Link>
                    <Link exact to="/categoria/Polleras">
                    <NavDropdown.Item href="#action7" >Polleras</NavDropdown.Item>
                    </Link>
                    <NavDropdown.Divider />
                    <Link exact to="/categoria">
                    <NavDropdown.Item href="#action8" >Todos los productos</NavDropdown.Item>
                    </Link>
                </NavDropdown>
                </Nav>
            {/* Icono del carrito */}
            </Navbar.Collapse>
            </Navbar>
            </div>
            <CarritoWidget />
            </div>
        </>
    )
}

export default NavBar; 

            /* Buscador para productos en la seccion Productos */
            /* <Form style={{display:"flex", flexDirection:"row", width:"30vw", margin:"0vh auto"}}>
                <FormControl
                    type="search"
                    placeholder="Buscar Producto..."
                    className="mr-2"
                    aria-label="Search"
                />
                <Button style={{backgroundColor:"#5ed8ac", border:"1px solid #5ed8ac"}}>Buscar</Button>
                </Form>  */