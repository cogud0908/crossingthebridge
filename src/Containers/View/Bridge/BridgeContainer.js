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
    const { leftWeights, weight } = this.props;

    if (weight) {
      setInterval(() => {
        if (leftWeights !== []) {
          this.move();
        } else {
          return false;
        }
      }, 1000);
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

    console.log(leftWeights, rightWeights, weight, bridge, totalWeight);

    const bufferBridge = new Array(bridge.length);
    const bufferRight = new Array(rightWeights.length);

    if (bridge[bridge.length - 1]) {
      // 여기가 문제
      bufferRight = [...rightWeights, bridge[bridge.length - 1]];
      //
      bufferBridge[bridge.length - 1] = 0;
    }

    for (let i = bridge.length - 2; i >= 0; i--) {
      if (bridge[i] !== null) {
        bufferBridge[i + 1] = bridge[i];
      }
    }

    if (weight < parseInt(leftWeights[0]) + totalWeight) return false;

    bufferBridge[0] = leftWeights.shift();

    const bufferLeft = leftWeights.slice(0, leftWeights.length);

    // 여기가 문제
    ViewActions.setTotalWeight(bridge.reduce((a, b) => a + b, 0));
    //
    ViewActions.setBridge(bufferBridge);
    ViewActions.setRightWeights(bufferRight);
    ViewActions.setLeftWeights(bufferLeft);

    this.setState({
      time: this.state.time + 1
    });
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
    rightWeights: state.view.get("rightWeigths"),
    bridge: state.view.get("bridge"),
    totalWeight: state.view.get("totalWeight")
  }),
  dispatch => ({
    IntroActions: bindActionCreators(IntroActions, dispatch),
    ViewActions: bindActionCreators(ViewActions, dispatch)
  })
)(BridgeContainer);
