import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tile = styled.div`
  width: 70px;
  height: 70px;

  margin-right: 0.5rem;

  background-color: skyblue;
`;

const Image = styled.img.attrs({
  src: "https://image.flaticon.com/icons/png/128/149/149071.png"
})`
  width: 70px;
  height: 70px;

  margin-right: 0.5rem;
`;

const Bridge = ({ bridge }) => {
  return <Root>{bridge.map(item => (item ? <Image /> : <Tile />))}</Root>;
};

export default React.memo(Bridge);
