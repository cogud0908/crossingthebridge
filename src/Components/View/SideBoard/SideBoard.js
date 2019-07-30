import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Root = styled.div`
  height: 60vh;

  flex: 0.2;
  display: flex;
  flex-wrap: ${props => (props.position === "left" ? "wrap-reverse" : "wrap")};
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${props =>
    props.position === "left" ? "0 2rem 0 5rem" : "0 5rem 0 2rem"};
`;

const Image = styled.img.attrs({
  src:
    "data:image/jpeg;base64,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"
})`
  width: 70px;
  height: 70px;
  margin: 0.5rem;
`;

const SideBoard = ({ position, values }) => {
  return (
    <Root position={position}>
      {values.map(item => (
        <Image key={item} />
      ))}
    </Root>
  );
};

SideBoard.propTypes = {
  values: PropTypes.array
};

export default React.memo(SideBoard);