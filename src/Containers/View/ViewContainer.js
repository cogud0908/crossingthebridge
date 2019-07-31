import React from "react";
import styled from "styled-components";
import ScoreBoard from "../../Components/View/ScoreBoard/ScoreBoard";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as InputActions from "../../Store/Modules/input";
import BridgeContainer from "./Bridge/BridgeContainer";

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: gray;
`;

class ViewContainer extends React.PureComponent {
  componentDidMount() {
    // store
    const { length, weight, values } = this.props;
    if (length === 0 || weight === 0 || values === 0) {
      this.props.history.push("/");
    }
  }

  render() {
    // store
    const { length, weight, values } = this.props;
    return (
      <Root>
        <ScoreBoard length={length} weight={weight} values={values} />
        <BridgeContainer />
      </Root>
    );
  }
}

ViewContainer.propTypes = {
  length: PropTypes.number,
  weight: PropTypes.number,
  values: PropTypes.array
};

export default connect(
  state => ({
    length: state.input.get("length"),
    weight: state.input.get("weight"),
    values: state.input.get("values")
  }),
  dispatch => ({
    InputActions: bindActionCreators(InputActions, dispatch)
  })
)(withRouter(ViewContainer));
