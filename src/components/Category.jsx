import React from "react";
import { FaHamburger, FaPizzaSlice } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function Category() {
  return (
    <List>
      <StyledLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledLink>
      <StyledLink to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </StyledLink>
      <StyledLink to="/cuisine/thai">
        <GiNoodles />
        <h4>Thai</h4>
      </StyledLink>
      <StyledLink to="/cuisine/korean">
        <GiChopsticks />
        <h4>Korean</h4>
      </StyledLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled(NavLink)`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 0.5rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  text-decoration: none;

  h4 {
    color: white;
    font-size: 0.8rem;
  }
  svg {
    color: orange;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, orange, #e94057);
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;

export default Category;
