import styled, { css } from "styled-components";

export const Viewport = styled.div`
  width: 1000px;
  height: 100%;
  margin: 0 auto;
  background: rgba(75, 65, 121, 0.7);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: contents;
  min-height: 100%;
  /* border: 1px solid #f00; */
  /* padding: 10px; */
  /* background: rgba(0, 0, 0, 0.6); */
`;

export const DataView = styled.div`
  width: 100%;
  height: 250px;
  /* border: 1px solid #0d0; */
  flex-direction: row;
  display: flex;
  /* padding: 5px; */
`;

export const ContainerInputs = styled.div`
  width: 100%;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  /* margin: 0px 5px 0px 0px; */
  /* border-right: 1px solid rgb(96, 88, 132); */
  padding: 20px 10px 20px 10px;
  background: rgb(40, 37, 53);
  /* box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2); */
  /* border-radius: 5px; */

  h2 {
    color: rgb(134, 120, 194);
    line-height: 30px;
    font-size: 22px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 5px;
    margin-bottom: 5px;
  }

  div.field {
    z-index: 0;
    flex-direction: row;
    justify-content: space-between;
    height: fit-content;
    display: flex;
    align-items: center;
    padding: 0 10px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    p {
      line-height: 40px;
      color: rgb(163, 153, 207);
      width: 60%;
      /* background: rgba(0, 255, 0, 0.5); */

      span {
        color: rgb(96, 88, 132);
      }
    }

    p.sup {
      line-height: 30px; /* sempre 10 px a menos */
    }

    input {
      /* border-radius: 5px; */
      padding: 3px 5px;
      border: none;
      font-size: 16px;
      border-bottom: 1px solid rgb(96, 88, 132);
      color: rgb(163, 153, 207);
      width: 80px;
      height: min-content;
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
