import React from "react";

import { Container, Input, OneMoreButton } from "./styles";

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
    <Input
      id={id}
      type={type}
      min={min}
      max={max}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <OneMoreButton onClick={() => oneLessClick(min)} className="qtdButton">
      -
    </OneMoreButton>
    <OneMoreButton onClick={() => oneMoreClick(max)} className="qtdButton">
      +
    </OneMoreButton>
  </Container>
);

export default InputNumber;
