import React from "react";
import styled from "styled-components";
import InputText from "../Components/Intro/InputText";
import StartButton from "../Components/Intro/StartButton";

const Root = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  background-color: gray;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const textArray = ["length", "max", "value"];

class Intro extends React.PureComponent {
  handleChangeInputText = event => {};

  render() {
    // const { InputValue } = this.state;
    return (
      <Root>
        <Wrapper>
          {textArray.map(item => (
            <InputText
              key={item}
              textValue={item}
              //   value={InputValue}
              onChange={this.handleChangeInputText}
            />
          ))}
          <StartButton />
        </Wrapper>
      </Root>
    );
  }
}
export default Intro;
