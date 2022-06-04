import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import Wrapper from "./UI/Wrapper";
import Card from "./UI/Card";
import Gradient from "./UI/Gradient";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await response.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  useEffect(() => {
    getPopular();
  }, []);
  return (
    <Wrapper>
      <h4>Popular</h4>
      <Splide
        options={{
          perPage: 6,
          arrows: true,
          pagination: false,
          gap: "1rem",
          drag: "free",
        }}
      >
        {popular.map((item, index) => {
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

export default Popular;
