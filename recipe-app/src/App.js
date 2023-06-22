import Categories from './Components/Categories/Categories';
import SearchBar from './Components/SearchBar';
import Pages from './pages/Pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='nav'>
          <h2>Baran<br/> Chef</h2>
          <Categories/>
          <SearchBar/>
      </nav>
      <Pages/>
      

    </div>
  );
}

export default App;
