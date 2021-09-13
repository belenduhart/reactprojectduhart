import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import AddProductCard from './components/AddProductCard/AddProductCard';
import CardDetails from './components/CardDetails/CardDetails';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <div>
    <NavBar/>
    </div>
    <Header/>
    <ItemListContainer saludo="Hola! ¡Bienvenid@s a la página de Las Chuecas!"/>
    <div className="cards">
    <CardDetails />
    </div>
    <AddProductCard/>
    </>
  );
}

export default App;
