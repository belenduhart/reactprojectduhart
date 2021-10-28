//Styles
import './App.css';

//Utilities
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import HowToBuy from './components/NavBar/HowToBuy/HowToBuy';
import Item from './components/ItemListContainer/ItemDetailContainer/ItemDetail/Item/Item';
import Footer from './components/Footer/Footer';
//Context
import { CartContextProvider } from './components/CartContext/CartContext';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <div>
        <NavBar/>
      </div>
      <Switch>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/" component={Header}/>
        <Route exact path="/categoria">
          <div className="cards">
          <ItemListContainer/>
          </div>
        </Route>
        <Route exact path="/categoria/:idCategoria">
        <div className="cards">
          <ItemListContainer/>
          </div>
        </Route>
        <Route exact path="/detalle" component={Item}/>
        <Route exact path="/detalle/:id" component={Item}/>
        <Route exact path="/comocomprar" component={HowToBuy}/>
      </Switch>
      <Footer/>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
