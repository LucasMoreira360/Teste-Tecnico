import styled from "styled-components";

export const Buttonfx = styled.button`
  width: 170px;
  height: 50px;
  border-radius: 5px;
  color: #00b6de;
  font-family: "Inter";
  font-size: 16px;
  background-color: #252835;
  border: 1px solid #00b6de;

  @media (max-width: 1200px) {
    width: 150px;
    height: 40px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 35px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 30px;
    font-size: 10px;
  }
`;
