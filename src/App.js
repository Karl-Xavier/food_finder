import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import RecipeResults from './components/RecipeResults/RecipeResults'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  const [data, setData] = useState([])

  const onSearch = (data) => {
    setData(data)
  }
  return (
    <div className="container">
      <header className="container" style={{textAlign: "center"}}>
        <h1>Food Finder</h1>
      </header>
      <SearchBar onSearch={onSearch}/>
      <RecipeResults data={data}/>   
    </div>
  );
}

export default App;
