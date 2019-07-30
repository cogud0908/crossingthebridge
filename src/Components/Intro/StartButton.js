import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 15rem;
  height: 2rem;

  font-size: 20px;
`;

const StartButton = ({ onClick }) => {
  return <Button onClick={() => onClick()}>start</Button>;
};

export default React.memo(StartButton);
