import React from "react";
import styled from "styled-components";
import ScoreBoard from "../Components/View/ScoreBoard/ScoreBoard";
import SideBoard from "../Components/View/SideBoard/SideBoard";
import BridgeBoard from "../Components/View/BridgeBoard/BridgeBoard";
import PropTypes from "prop-types";

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: gray;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class View extends React.PureComponent {
  render() {
    const { length, weight, values } = this.props;
    return (
      <Root>
        <ScoreBoard length={length} weight={weight} values={values} />
        <Wrapper>
          <SideBoard position="left" values={[1, 2, 3, 4, 5]} />
          <BridgeBoard />
          <SideBoard position="right" values={[1, 2, 3, 4, 5]} />
        </Wrapper>
      </Root>
    );
  }
}

View.propTypes = {
  length: PropTypes.number,
  weight: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.number)
};

export default View;
