import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: ${props => (props.textValue === "value" ? "15rem" : "10rem")};
  height: 2rem;
  margin-bottom: 2rem;
  margin-right: 8rem;

  border: 0;
  text-align: right;
  font-size: 20px;
`;

const InputText = ({ InputValue, textValue, onChange }) => {
  return (
    <div>
      <span style={{ fontSize: 25, color: "white" }}>{textValue + " : "}</span>
      <Input
        type="text"
        value={InputValue}
        onChange={onChange}
        textValue={textValue}
      />
    </div>
  );
};

export default InputText;
