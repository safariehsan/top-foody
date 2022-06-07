import React, { useState } from "react";
import MealList from "./MealList";

function Calories() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);
  const handleChange = (e) => {
    setCalories(e.target.value);
  };
  const getMealData = () => {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.REACT_APP_API_KEY}&timeFrame=day&targetCalories=${calories}`
    )
      .then((response) => response.json())
      .then((data) => setMealData(data))
      .catch((err) => console.log(err));
  };
  console.log(mealData);
  return (
    <div className="container">
      <input
        type="number"
        onChange={handleChange}
        placeholder="Calories (e.g. 2000)"
      />
      <button onClick={getMealData}>Get Daily Meal Plan</button>
      <br />
      {mealData && <MealList list={mealData} />}
    </div>
  );
}

export default Calories;
