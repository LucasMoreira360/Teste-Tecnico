import styled from "styled-components";

export const PageContainer = styled.nav`
  display: flex;
  background-color: #1b2033;
  height: 100vh;
  max-width: 1920px;
  margin: 0 auto;

  @media (max-width: 1920px) {
    max-width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 47px 70px ;
  color: #fdfdfd;
  gap: 0px;

  .firstText {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 50px;
    margin-bottom: 30px;
  }

  .secondText {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 230px;

  }

  @media (max-width: 1920px) {
    padding: 47px 100px 20px;
  }

  @media (max-width: 1200px) {
    .firstText {
      font-size: 36px;
      line-height: 38px;
    }

    .secondText {
      font-size: 16px;
      line-height: 20px;
    }
  }

  @media (max-width: 768px) {
    padding: 24px;
    .firstText {
      font-size: 30px;
      line-height: 32px;
    }
    .secondText {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const Aside = styled.div`
  display: block;
  max-width: 100%;
  height: auto;

  img {
    width: 550px;
    height: 750px;
  }
`;

export const Article = styled.div`
  position: relative;
  margin-bottom:50px;

  .WhatsappContainer {
    position: absolute;
    width: 118px;
    height: 118px;
    background-color: #00b6de;
    right: 0;
    bottom: 0;
    margin-right: 150px;
    margin-bottom: 250px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  WhatsappIcon{
    width: 50px;
    height: 50px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
