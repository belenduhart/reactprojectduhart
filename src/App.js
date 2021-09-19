import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import HowToBuy from './components/NavBar/HowToBuy/HowToBuy';
import Item from './components/ItemListContainer/ItemDetailContainer/ItemDetail/Item/Item';


function App() {
  return (
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
    </BrowserRouter>
  );
}

export default App;
