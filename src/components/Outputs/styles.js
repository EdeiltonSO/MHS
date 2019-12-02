import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: inherit;
  margin: 0 auto;
  margin: 5px 5px 5px 10px;
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
    color: #666;

    span.name {
      width: 70%;
      /* background: #ff0; */
    }

    p {
      /* background: #0ff; */
      width: 30%;
      .unid {
        color: #bbb;
      }
    }
  }
`;
