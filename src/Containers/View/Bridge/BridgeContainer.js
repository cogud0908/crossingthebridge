import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SideBoard from "../../../Components/View/SideBoard/SideBoard";
import BridgeBoard from "../../../Components/View/BridgeBoard/BridgeBoard";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ViewActions from "../../../Store/Modules/view";
import * as IntroActions from "../../../Store/Modules/input";

import { withRouter } from "react-router-dom";

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
    const timer = setInterval(() => {
      let result = this.move();

      if (result.flag) {
        clearInterval(timer);
        alert(result.msg);
        this.props.history.push("/");
      } else {
        this.setState({
          time: this.state.time + 0.5
        });
      }
    }, 500);
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

    // excetionHandling (예외처리)
    if (leftWeights[0] === undefined && totalWeight === 0) {
      return { flag: true, msg: "동작이 완료되었습니다." };
    }

    if (weight < parseInt(leftWeights[0]) && totalWeight === 0) {
      return { flag: true, msg: "최대 무게보다 무거운 사람이 있습니다." };
    }

    // 다리 현재 무게 값 구하는 함수
    const total = () => bufferBridge.reduce((a, b) => a + b, 0);

    // 임시 다리 배열 초기화
    const bufferBridge = Array.apply(null, new Array(bridge.length)).map(
      Number.prototype.valueOf,
      0
    );

    // 오른쪽 지역으로 이동 할 값이 있을경우 실행
    if (bridge[bridge.length - 1]) {
      const bufferRight = [...rightWeights, bridge[bridge.length - 1]];

      bufferBridge[bridge.length - 1] = 0;
      ViewActions.setRightWeights(bufferRight);
    }

    // 다리에 있는 인원 한칸 씩 이동
    for (let i = bridge.length - 2; i >= 0; i--) {
      bufferBridge[i + 1] = bridge[i];
    }

    // 다리에 새로 올라갈 수 있는 인원이 있을 경우 실행
    if (weight >= parseInt(leftWeights[0]) + total()) {
      bufferBridge[0] = leftWeights.shift();

      const bufferLeft = [...leftWeights];

      ViewActions.setLeftWeights(bufferLeft);
    }

    // 다리 값과 다리 중량 store에 저장
    ViewActions.setTotalWeight(total());
    ViewActions.setBridge(bufferBridge);

    return { flag: false };
  };

  render() {
    const { time } = this.state;
    const { totalWeight, leftWeights, rightWeights, bridge } = this.props;
    return (
      <Root>
        <SideBoard position="left" values={leftWeights} />
        <BridgeBoard bridge={bridge} totalWeight={totalWeight} time={time} />
        <SideBoard position="right" values={rightWeights} />
      </Root>
    );
  }
}

BridgeContainer.propTypes = {
  bridge: PropTypes.array,
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
)(withRouter(BridgeContainer));
