import './App.css';
import NavBar from './components/NavBar/NavBar';
import itemListContainer from './components/itemListContainer/itemListContainer';
import cartWidget from './components/cardWidget/cardwidget';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <itemListContainer greeting={'Bienvenidos'}/>

    </div>
  );
}

export default App;
