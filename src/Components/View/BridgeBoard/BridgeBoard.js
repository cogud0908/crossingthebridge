import React from "react";
import styled from "styled-components";
import Time from "./Time";
import PropTypes from "prop-types";
import Bridge from "./Bridge";
import Weight from "./Weight";

const Root = styled.div`
  height: 60vh;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BridgeBoard = () => {
  return (
    <Root>
      <Time time={10} />
      <Bridge length={5} />
      <Weight weight={10} />
    </Root>
  );
};

BridgeBoard.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number)
};

export default React.memo(BridgeBoard);
