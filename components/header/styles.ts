import styled from "styled-components";

export const Container = styled.header`
  padding: 23px 10%;
  width: 100%;
  background-color: #252835;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fdfdfd;

  @media (max-width: 1200px) {
    padding: 23px 5%;
  }

  @media (max-width: 768px) {
    padding: 15px 5%;
  }
`;

export const Menu = styled.div`
  .styleMenu {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 70%;
    margin-right: auto;
    gap: 20%;
    font-size: 16px;
    font-style: normal;
    font-family: "Inter";
    font-weight: bold;
    list-style-type: none;
    white-space: nowrap;

    @media (max-width: 1200px) {
      margin-left: auto;
      margin-right: auto;
      gap: 10%;
    }

    @media (max-width: 768px) {
      margin-left: auto;
      margin-right: auto;
      gap: 5%;
      font-size: 14px;
    }

    @media (max-width: 480px) {
      gap: 1%;
      font-size: 12px;
    }
  }
`;

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
