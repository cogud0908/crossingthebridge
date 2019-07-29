import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled.button`
  width: 15rem;
  height: 2rem;
  margin-right: 5rem;

  font-size: 20px;
`;

const StartButton = () => {
  return (
    <Link to="/view">
      <Button>start</Button>
    </Link>
  );
};

export default React.memo(StartButton);
