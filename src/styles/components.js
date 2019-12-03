import styled, { css } from "styled-components";

export const Viewport = styled.div`
  width: 850px;
  height: auto;
  margin: 0;
  /* border: 1px solid #f00; */
  padding: 10px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  /* background: rgba(0, 0, 0, 0.6); */
`;

export const DataView = styled.div`
  width: 100%;
  height: 400px;
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
  padding: 10px;
  background: rgb(40, 37, 53);
  /* box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2); */
  /* border-radius: 5px; */

  h2 {
    color: rgb(134, 120, 194);
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
    padding: 10px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    p {
      color: rgb(163, 153, 207);
      width: 60%;

      span {
        color: rgb(96, 88, 132);
      }
    }

    input {
      /* border-radius: 5px; */
      padding: 3px 5px;
      border: none;
      border-bottom: 1px solid rgb(96, 88, 132);
      color: rgb(163, 153, 207);
      width: 80px;
      background: none;
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
  /*div#lastField {
    border: 1px solid #f00; 
    margin-bottom: 35px;
  }*/
`;
