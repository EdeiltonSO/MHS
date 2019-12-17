import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 1px solid rgb(96, 88, 132);
  color: rgb(163, 153, 207);
  width: 120px;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  input {
    width: 100%;
    color: rgb(163, 153, 207);
    border: none;
    background: none;
    padding: 5px;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    display: none;
    margin: 0;
  }

  button {
    width: 30px;
    height: 25px;
    margin-top: -2px;
    background: none;
    color: rgb(163, 153, 207);
    border: none;
    font-weight: bolder;
    font-size: 20px;
  }
`;

export const Input = styled.input``;
