import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid rgb(96, 88, 132);
  color: rgb(163, 153, 207);
  width: 120px;
  height: 25px;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
`;

export const Input = styled.input`
  width: 60%;
  color: rgb(163, 153, 207);
  border: none;
  background: none;
  box-shadow: none;
  padding: 5px;
  appearance: none;
  -moz-appearance: textfield;
`;

export const OneMoreButton = styled.button`
  width: 20%;
  height: 25px;
  margin-top: -2px;
  background: none;
  color: rgb(163, 153, 207);
  border: none;
  font-weight: bolder;
  font-size: 20px;
`;
