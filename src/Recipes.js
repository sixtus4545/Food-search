import React from "react";
import "./my styles/App.css"
const Recipes=({title,calories,image,ingredients,dietLabels})=>{
return(
	<div className="details">
		<h1 className="title">{title}</h1>
		<ol>
			{ingredients.map((ingredient, index)=>(
				<li key={index}>{ingredient.text}</li>
				))}
		</ol>
		<p className="cal">calorie:{ calories}</p>
		<p className="diet">dietLabel:{ dietLabels} </p>
		<img src={image} alt=""/>

	</div>

	)


}
export default Recipes;