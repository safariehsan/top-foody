import React from "react";
import Meal from "./Meal";

function MealList({ list }) {
  const { nutrients, meals } = list;
  return (
    <div>
      <h3>Nutrients: </h3>
      <ul>
        <li>
          <b>Calories: </b>
          {nutrients.calories}
        </li>
        <li>
          <b>Carbo Hydrates: </b>
          {nutrients.carbohydrates}
        </li>
        <li>
          <b>Fat: </b>
          {nutrients.fat}
        </li>
        <li>
          <b>Protein: </b>
          {nutrients.protein}
        </li>
      </ul>
      <hr />
      {meals.map((item) => (
        <Meal meal={item} key={item.id} />
      ))}
    </div>
  );
}

export default MealList;
