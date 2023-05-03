import './App.css';
import Navbar from './components/NavBar/navbar';
import itemListContainer from './components/itemListContainer/itemListContainer';
import cartWidget from './components/cardWidget/cardwidget';

function App() {
  return (
    <div className="App">

      <Navbar/>
      <itemListContainer greeting={'Bienvenidos'}/>

    </div>
  );
}

export default App;
