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
  align-items: flex-end;

  background: url("https://post-phinf.pstatic.net/MjAxNzA2MjhfMTQw/MDAxNDk4NjU2MzY1ODYw.xfxbU2-DZu-LcYMzxLZc-SgvmAvBY3WDQQLGjGP3CJog.F9Hufm5_CpSfnARL6rDl1sV-iig6wKSG5FDbxSRicKIg.JPEG/%EB%B0%B0%EA%B2%BD%ED%99%94%EB%A9%B450.jpg?type=w1200");
`;

const textArray = ["length", "weight", "value"];

class IntroContainer extends React.PureComponent {
  state = {
    length: "",
    weight: "",
    values: ""
  };

  // 숫자 정규식
  isValidNumber = text => {
    return /^[0-9]*$/.test(text);
  };

  // 문자 정규식
  isNotValidCharacter = text => {
    return !/[ㄱ-ㅎ|가-힣|a-z|A-Z|ㅏ-ㅣ.*]/.test(text);
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
      event.target.value = this.state.weight;
    }
  };

  handleChangeValues = event => {
    const values = event.target.value;

    if (this.isNotValidCharacter(values)) {
      this.setState({ values });
    } else {
      event.target.value = this.state.values;
    }
  };

  // value값을 배열로 변환
  valuesToArray = values => {
    // 정규식 (공백제거, 특수문자 제거, ","앞뒤 중복제거)
    const value = values
      .replace(/(\s*)/g, "")
      .replace(/[\{\}\[\]\/?.;:|\)*~`_!^\-+<>@\#$%&\\\=\(\'\"]/gi, "")
      .replace(/,+/g, ",")
      .replace(/^,/, "")
      .replace(/,$/, "");

    // 배열만들기
    const buffer = value.split(",");
    const bufferArray = [];

    // String ===> Number
    for (let index = 0; index < buffer.length; index++) {
      bufferArray[index] = parseInt(buffer[index]);
    }

    // 0이하 제거
    const filter = bufferArray.filter(element => element > 0);

    return filter;
  };

  exception = () => {
    const { length, weight, values } = this.state;

    if (length === "" || weight === "" || values === "") {
      return { success: false, msg: "빈칸을 입력해주세요!" };
    }

    if (length > 10) {
      return { success: false, msg: "길이는 최대 10입니다!" };
    }

    const value = this.valuesToArray(values);

    // if (value.length > 15) {
    //   return { success: false, msg: "사람 수는 최대 15명입니다!" };
    // }

    for (let index = 0; index < value.length; index++) {
      if (value[index] > parseInt(weight)) {
        return { success: false, msg: "최대중량보다 높은 사람이 있습니다!" };
      }
    }

    return { success: true, value: value };
  };

  // start시 store설정
  handleSubmit = () => {
    // Actions
    const { InputActions, ViewActions } = this.props;

    const { length, weight } = this.state;

    const result = this.exception();

    if (!result.success) {
      alert(result.msg);
      return;
    }

    InputActions.setLength(parseInt(length));
    InputActions.setWeight(parseInt(weight));
    InputActions.setValues(result.value);
    ViewActions.setRightWeights([]);
    ViewActions.setLeftWeights(result.value);
    ViewActions.setBridge(new Array(parseInt(length)).fill(0));

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
