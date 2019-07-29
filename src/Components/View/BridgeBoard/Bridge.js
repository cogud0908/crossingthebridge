import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: row;
`;

const Image = styled.div`
  width: 70px;
  height: 70px;
  & + & {
    margin-left: 0.5rem;
  }
  &:first-child {
    margin: 0;
  }
  background-color: skyblue;
`;

const Bridge = ({ length }) => {
  return (
    <Root>
      {[...Array(length)].map(() => (
        <Image />
      ))}
    </Root>
  );
};

export default React.memo(Bridge);
