import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs({
  type: "text"
})`
  width: 15rem;
  height: 2rem;
  margin-bottom: 2rem;
  margin-right: 5rem;

  text-align: right;
  font-size: 20px;
`;

const InputText = ({ InputValue, textValue, onChange }) => {
  return (
    <div>
      {textValue + " : "}
      <Input value={InputValue} onChange={onChange} />
    </div>
  );
};

export default InputText;
