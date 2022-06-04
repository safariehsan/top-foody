import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };
  return (
    <StyledForm onSubmit={submitHandler}>
      <FaSearch />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 1rem auto;
  position: relative;
  width: 100%;
  text-align: center;
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 400px;
  }
  svg {
    position: absolute;
    top: 50%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

export default Search;
