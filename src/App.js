import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <>
    <div>
     <NavBar/>
    </div>
    <Header/>
    <ItemListContainer saludo="Hola! ¡Bienvenid@s a la página de Las Chuecas!"/>
    </>
  );
}

export default App;
