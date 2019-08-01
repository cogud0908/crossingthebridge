import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 10rem;
  height: 3rem;

  margin-right: 8rem;
  font-size: 30px;
`;

const StartButton = ({ onClick }) => {
  return <Button onClick={() => onClick()}>start</Button>;
};

export default React.memo(StartButton);
