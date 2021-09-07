import CarritoWidget from "../CarritoWidget/CarritoWidget";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

const NavBar= () =>{
    return (
        <>
        <div style={{width:"100%", display:"flex", flexDirection:"row", flexWrap:"nowrap" }}>
        <img style={{width: 150, height: 150, marginTop:"1vh", marginLeft:"1vw"}} src="https://i.ibb.co/sKqRN9Y/laschuecas.jpg" alt="Logo las chuecas"/>
            <Navbar expand="lg" style={{width:"100%", backgroundColor:"white"}}>
                <Navbar.Toggle  aria-controls="navbarScroll" />
                <Navbar.Collapse  id="navbarScroll">
                <Nav 
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' , width:"100%"}}
                navbarScroll
                >
                <Nav.Link style={{marginLeft:"2vw"}} href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">¿Cómo comprar?</Nav.Link>
                <NavDropdown title="Productos" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Remeras</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Blusas</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Buzos</NavDropdown.Item>
                    <NavDropdown.Item href="#action6">Pantalones</NavDropdown.Item>
                    <NavDropdown.Item href="#action7">Polleras</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Todos los productos</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            {/* Icono del carrito */}
            <CarritoWidget />
            </Navbar.Collapse>
            </Navbar>
            </div>
        </>
    )
}

export default NavBar; 

            {/* Buscador para productos en la seccion Productos */}
            {/* <Form style={{display:"flex", flexDirection:"row", width:"30vw", margin:"0vh auto"}}>
                <FormControl
                    type="search"
                    placeholder="Buscar Producto..."
                    className="mr-2"
                    aria-label="Search"
                />
                <Button style={{backgroundColor:"#5ed8ac", border:"1px solid #5ed8ac"}}>Buscar</Button>
                </Form>  */}