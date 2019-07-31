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

const BridgeBoard = ({ bridge, totalWeight, time }) => {
  return (
    <Root>
      <Time time={time} />
      <Bridge bridge={bridge} />
      <Weight totalWeight={totalWeight} />
    </Root>
  );
};

BridgeBoard.propTypes = {
  length: PropTypes.array,
  totalWeight: PropTypes.number,
  time: PropTypes.number
};

export default React.memo(BridgeBoard);
