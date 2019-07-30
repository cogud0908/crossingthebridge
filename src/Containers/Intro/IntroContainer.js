import React from "react";
import styled from "styled-components";
import InputText from "../../Components/Intro/InputText";
import StartButton from "../../Components/Intro/StartButton";
import * as InputActions from "../../Store/Modules/input";
import * as ViewActions from "../../Store/Modules/view";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: gray;
`;

const textArray = ["length", "weight", "value"];

class IntroContainer extends React.PureComponent {
  state = {
    length: "",
    weight: "",
    values: ""
  };

  isValidNumber = text => {
    return /^[0-9]*$/.test(text);
  };

  handleChangeLength = event => {
    const buffer = event.target.value;

    if (this.isValidNumber(buffer)) {
      this.setState({ length: buffer });
    } else {
      event.target.value = this.state.length;
    }
  };

  handleChangeWeight = event => {
    const weight = event.target.value;

    if (this.isValidNumber(weight)) {
      this.setState({ weight });
    } else {
      event.target.value = this.state.length;
    }
  };

  handleChangeValues = event => {
    const values = event.target.value;
    this.setState({ values });
  };

  valuesToArray = values => {
    const value = values.replace(/(\s*)/g, "");

    const buffer = value.split(",");
    const bufferArray = [];

    for (let index = 0; index < buffer.length; index++) {
      bufferArray[index] = buffer[index];
    }

    return bufferArray;
  };

  handleSubmit = () => {
    const { InputActions, ViewActions } = this.props;
    const { length, weight, values } = this.state;

    if (length > 10) {
      alert("길이는 최대 10 입니다!");
      this.setState({
        length: ""
      });
      return;
    }

    const value = this.valuesToArray(values);

    InputActions.setLength(parseInt(length));
    InputActions.setWeight(parseInt(weight));
    InputActions.setValues(value);
    ViewActions.setLeftWeights(value);
    ViewActions.setBridge(new Array(parseInt(length)));

    this.props.history.push("/view");
  };

  render() {
    const { length, weight, values } = this.state;
    return (
      <Root>
        <InputText
          textValue={textArray[0]}
          inputValue={length}
          onChange={this.handleChangeLength}
        />
        <InputText
          textValue={textArray[1]}
          inputValue={weight}
          onChange={this.handleChangeWeight}
        />
        <InputText
          textValue={textArray[2]}
          inputValue={values}
          onChange={this.handleChangeValues}
        />
        <StartButton onClick={this.handleSubmit} />
      </Root>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    InputActions: bindActionCreators(InputActions, dispatch),
    ViewActions: bindActionCreators(ViewActions, dispatch)
  })
)(withRouter(IntroContainer));
