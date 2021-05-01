import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #E8E8E8;
  padding: 10px 16px;
  h1 {
    font-style: normal;
    font-weight: 300;
    font-size: 60px;
    line-height: 72px;
    margin-top: 10px;
    letter-spacing: -0.5px;
    color: #3A3A3A;
  }

  @media (max-width: 767px) {
    padding: 0;
    background: white;
    h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      color: #FFFFFF;
      margin-left: 22px;
      margin-top: -10px;
    }
  }
`;