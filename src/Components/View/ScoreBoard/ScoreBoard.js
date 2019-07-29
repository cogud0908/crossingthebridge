import React from "react";
import styled from "styled-components";

const Root = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const ScoreSpan = styled.span`
  margin: 0.5rem;
  font-size: 25px;
`;

const Score = ({ length, weight, values }) => {
  return (
    <Root>
      <ScoreSpan>length : {length}</ScoreSpan>
      <ScoreSpan>weight : {weight} </ScoreSpan>
      <ScoreSpan>values : {values} </ScoreSpan>
    </Root>
  );
};

export default React.memo(Score);
