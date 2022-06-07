import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Meal({ meal }) {
  const [imgUrl, setImgUrl] = useState("");
  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setImgUrl(data.image));
  };

  useEffect(() => {
    getMealData();
  }, [meal.id]);

  return (
    <div className="meal-description">
      <h4>{meal.title}</h4>
      <img src={imgUrl} alt={meal.title} />
      <ul>
        <li>
          <b>Preparation Time: </b>
          {meal.readyInMinutes} minutes
        </li>
        <li>
          <b>Number of Serving: </b>
          {meal.servings} minutes
        </li>
      </ul>
      <Link to={`/recipe/${meal.id}`}>Go to Recipe</Link>
    </div>
  );
}

export default Meal;
