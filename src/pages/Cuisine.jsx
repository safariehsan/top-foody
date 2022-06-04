import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import Category from "../components/Category";
import Search from "../components/Search";

function Cuisine() {
  const capitalFirstLetter = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  };
  let params = useParams();
  const [cuisines, setCuisines] = useState([]);
  const getCuisine = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const data = await response.json();
    setCuisines(data.results);
  };
  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);
  return (
    <>
      <h1 style={{ textAlign: "center", margin: "2rem 0" }}>
        {capitalFirstLetter(params.type)} Foods
      </h1>
      <Category />
      <Search />

      <Grid
        className="container"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {cuisines.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 1rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
