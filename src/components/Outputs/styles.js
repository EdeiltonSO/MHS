import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: inherit;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  /* margin: 5px 5px 5px 10px; */
  padding: 20px 10px 20px 10px;
  background: rgb(33, 30, 45);
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
    flex-direction: row;
    justify-content: space-between;
    display: flex;
    height: fit-content;
    color: rgb(163, 153, 207);
    padding: 6px 8px;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }

    span.name {
      width: 40%;
      /* background: #ff0; */
    }

    p {
      /* background: #0ff; */
      width: 60%;
      text-align: right;

      .unid {
        color: rgb(96, 88, 132);
      }
    }
  }
`;
