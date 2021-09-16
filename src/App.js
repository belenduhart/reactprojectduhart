import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import AddProductCard from './components/AddProductCard/AddProductCard';
import CardDetails from './components/CardDetails/CardDetails';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import HowToBuy from './components/HowToBuy/HowToBuy';

function App() {
  return (
    <BrowserRouter>
    <div>
    <NavBar/>
    </div>
    <Switch>
    <Route exact path="/cart" component={Cart}/>
    <Route exact path="/" component={Header}/>
    <Route exact path="/saludo">
    <ItemListContainer  saludo="Hola! ¡Bienvenid@s a la página de Las Chuecas!"/>
    </Route>
    <Route exact path="/categoria">
    <div className="cards">
    < CardDetails/>
    </div>
    </Route>
    <Route  path="/categoria/:idCategoria">
    <div className="cards">
    < CardDetails/>
    </div>
    </Route>
    <Route exact path="/addcart" component={AddProductCard}/>
    <Route exact path="/howtobuy" component={HowToBuy} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
