import React,{useEffect, useState, Fragment} from 'react'
import Recipes from './Recipes'
import "./my styles/App.css"
import Loading from './loading'

const App=()=>{

const APP_ID="process.env.APP_ID";
const APP_key="process.env.APP_key";

const[search,setSearch]=useState("");
const[recipes,setRecipes]=useState([]);
const[query,setQuery]=useState('chicken')
const[loading,setLoading]=useState(false)

useEffect( () =>{
getRecipes()
},[query]);

const getRecipes=async ()=>{
	setLoading(!loading)
	const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_key}`)
	const data=await response.json()
	setRecipes(data.hits);

	if (data) {
		setLoading(false)
	}
	
}
const updateSearch=e=>{
	setSearch(e.target.value)
}
const getSearch=e=>{
	e.preventDefault();
	setQuery(search);
	setSearch("");
};



return(
	<Fragment>
		{
			loading ? <center><Loading /> </center>: (
				<div>
			  <header className="search">
			  <h1 className="logo">FOODY-SEARCH</h1>
			  <form onSubmit={getSearch}className="search-form">
				<input className="search-bar" placeholder="search food name to get recipes"type="text"value={search} onChange={updateSearch}/>
				<button className="search-button"type="submit">search</button>
			  </form>
			  </header>

			  <div className="recipes">
			  {recipes.map((recipe, index)=>(
				<Recipes
				title={recipe.recipe.label}
				key={index} 
			 	calories={recipe.recipe.calories}
				image={recipe.recipe.image}
				ingredients={recipe.recipe.ingredients}
				dietLabels={recipe.recipe.dietLabels}
				/>
				))}
			  </div>
			</div>
			)
		}
	</Fragment>
 )
}


export default App;