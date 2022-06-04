import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Wrapper from "./UI/Wrapper";
import Card from "./UI/Card";
import Gradient from "./UI/Gradient";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tag=vegetarian`
      );
      const data = await response.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  useEffect(() => {
    getVeggie();
  }, []);
  return (
    <Wrapper>
      <h4>Vegetarian</h4>
      <Splide
        options={{
          perPage: 4,
          arrows: true,
          pagination: false,
          gap: "1rem",
          drag: "free",
        }}
      >
        {veggie.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <Card key={index}>
                <p>{item.title}</p>
                <img src={item.image} alt={item.title} />
                <Gradient />
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

export default Veggie;
