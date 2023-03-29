import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fdfdfd;
  height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
  background: #f4f4f4;
`;

export const Section = styled.div`
  height: 100vh;
  max-width: 1920px;
  display: flex;

  .principal {
    display: flex;
    width: 850px;
    height: 850px;
    margin-left: 900px;
    margin-top: -750px;
  }
  .textContainer {
    display: flex;
    color: #1c2c44;
    margin-top:130px;
    margin-left:141px;
    width: 870px;
    height: 120px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 60px;
  }
 
  .imageConfirma {
    position: absolute;
    width: 570px;
    height: 351px;
    margin-left: -121px;
    margin-top: 510px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .text {
    position: absolute;
    width: 500px;
    height: 423px;
    margin-left:191px;
    margin-top: 510px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
`;
