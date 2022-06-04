import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  const [recipe, setRecipe] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();
  const getRecipe = async (id) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setRecipe(data);
  };
  useEffect(() => {
    getRecipe(params.id);
  }, [params.id]);
  console.log(recipe);
  return (
    <Wrapper className="container">
      <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <Button
          onClick={() => setActiveTab("instructions")}
          className={activeTab === "instructions" ? "active" : ""}
        >
          Instructions
        </Button>
        <Button
          onClick={() => setActiveTab("ingredients")}
          className={activeTab === "ingredients" ? "active" : ""}
        >
          Ingrendients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <i>Summary:</i>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.summary }} />
            <br />
            <i>Instructions: </i>
            <h3 dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((item) => {
              return <li key={item.id}>{item.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe;
