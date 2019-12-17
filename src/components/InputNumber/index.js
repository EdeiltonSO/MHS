import React from "react";

import { Container } from "./styles";

const InputNumber = ({
  id,
  type,
  min,
  max,
  placeholder,
  value,
  onChange,
  oneLessClick,
  oneMoreClick
}) => (
  <Container>
    <input
      id={id}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <button onClick={() => oneLessClick(min)} className="qtdButton">
      -
    </button>
    <button onClick={() => oneMoreClick(max)} className="qtdButton">
      +
    </button>
  </Container>
);

export default InputNumber;
