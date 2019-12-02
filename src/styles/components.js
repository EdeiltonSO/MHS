import styled, { css } from "styled-components";

export const Viewport = styled.div`
  width: 800px;
  height: auto;
  margin: 0;
  /* border: 1px solid #f00; */
  padding: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`;

export const DataView = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  /* border: 1px solid #0d0; */
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  padding: 5px;
`;

export const ContainerInputs = styled.div`
  width: 100%;
  height: max-content;
  margin: 0 auto;
  margin: 5px 10px 5px 5px;
  padding: 15px;
  background: #f5f5f5;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
  border-radius: 5px;

  h2 {
    color: #777;
    line-height: 30px;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 2px;
    margin-bottom: 5px;
  }

  div.field {
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    margin-top: 7px;

    p {
      color: #666;
      width: 50%;

      span {
        color: #bbb;
      }
    }

    input {
      border-radius: 5px;
      padding: 3px 5px;
      border: 1px solid #ddd;
      width: 100px;
    }

    input#periodo,
    input#massa {
      ${props =>
        props.value < 0 &&
        css`
          border: 1.5px solid #f95e5a;
        `}
    }
  }

  /* Solução provisória para deixar as divs de input e output com mesma altura */
  div#lastField {
    /* border: 1px solid #f00; */
    margin-bottom: 33px;
  }
`;
