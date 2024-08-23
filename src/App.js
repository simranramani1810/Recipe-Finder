import './App.css';
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import RecipeList from './Components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);
  const api = process.env.API_KEY;

  const fetchRecipes = async (query) => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=1d27db01&app_key=cc15b87fa1bb9037a51ef72b72ebfa76
`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App" >
      <div style={{position:"relative", marginTop:"30px"}}><i><h1>Recipe Finder</h1></i>
      <SearchBar onSearch={fetchRecipes} />
      <RecipeList recipes={recipes} /></div>
    </div>
  );
}

export default App;
