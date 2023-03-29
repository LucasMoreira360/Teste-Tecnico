import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  height: 100%;
  max-width: 1920px;
  background: #1b2033;
  color: #fff;
`;

export const Article = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 136px 240px;
  margin-left: 100px;
`;

export const Title = styled.h1`
  width: 567px;
  height: 70px;
  margin-top: 120px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  color: #fff;
`;

export const Subtitle = styled.h2`
  width: 528px;
  height: 120px;
  margin-left: 0px;
  margin-top: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 32px;
  line-height: 40px;
  color: #52e0ff;
`;

export const Paragraph = styled.p`
  width: 544px;
  height: 186px;
  left: 0px;
  margin-top: 20px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 155%;
  color: #fff;
`;

export const LogoGroup = styled.div`
  position: absolute;
  width: 145.9px;
  height: 141.1px;

  .LogoImage {
    width: 100%;
    height: 50%;
  }
  .LogoRectangle {
    width: 100px;
    height: 200px;
    background-color: #fff;
  }
`;