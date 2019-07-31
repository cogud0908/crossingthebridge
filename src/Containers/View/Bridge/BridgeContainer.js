import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SideBoard from "../../../Components/View/SideBoard/SideBoard";
import BridgeBoard from "../../../Components/View/BridgeBoard/BridgeBoard";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ViewActions from "../../../Store/Modules/view";
import * as IntroActions from "../../../Store/Modules/input";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class BridgeContainer extends React.PureComponent {
  state = {
    time: 0
  };

  componentWillMount() {
    const { weight } = this.props;

    if (weight) {
      setInterval(() => {
        this.move();
        this.setState({
          time: this.state.time + 0.5
        });
      }, 500);
    }
  }

  move = () => {
    const { ViewActions } = this.props;
    const {
      leftWeights,
      rightWeights,
      weight,
      bridge,
      totalWeight
    } = this.props;

    const bufferBridge = Array.apply(null, new Array(bridge.length)).map(
      Number.prototype.valueOf,
      0
    );

    if (bridge[bridge.length - 1]) {
      // 여기가 문제
      const bufferRight = [...rightWeights, bridge[bridge.length - 1]];
      //
      bufferBridge[bridge.length - 1] = 0;
      ViewActions.setRightWeights(bufferRight);
    }

    for (let i = bridge.length - 2; i >= 0; i--) {
      bufferBridge[i + 1] = bridge[i];
    }

    if (weight >= parseInt(leftWeights[0]) + totalWeight) {
      bufferBridge[0] = leftWeights.shift();

      const bufferLeft = [...leftWeights];

      ViewActions.setBridge(bufferBridge);
      ViewActions.setLeftWeights(bufferLeft);
      ViewActions.setTotalWeight(bufferBridge.reduce((a, b) => a + b, 0));
    } else {
      ViewActions.setTotalWeight(bufferBridge.reduce((a, b) => a + b, 0));
      ViewActions.setBridge(bufferBridge);
    }
  };

  render() {
    const { time } = this.state;
    const { weight, leftWeights, rightWeights, bridge } = this.props;
    return (
      <Root>
        <SideBoard position="left" values={leftWeights} />
        <BridgeBoard bridge={bridge} weight={weight} time={time} />
        <SideBoard position="right" values={rightWeights} />
      </Root>
    );
  }
}

BridgeContainer.propTypes = {
  bridge: PropTypes.array,
  weight: PropTypes.number,
  leftWeights: PropTypes.array,
  rightWeights: PropTypes.array,
  totalWeight: PropTypes.number
};

BridgeContainer.defaultProps = {
  leftWeights: [],
  rightWeights: [],
  totalWeight: 0
};

export default connect(
  state => ({
    weight: state.input.get("weight"),
    leftWeights: state.view.get("leftWeights"),
    rightWeights: state.view.get("rightWeights"),
    bridge: state.view.get("bridge"),
    totalWeight: state.view.get("totalWeight")
  }),
  dispatch => ({
    IntroActions: bindActionCreators(IntroActions, dispatch),
    ViewActions: bindActionCreators(ViewActions, dispatch)
  })
)(BridgeContainer);
