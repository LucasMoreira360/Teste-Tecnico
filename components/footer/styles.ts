import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 259px;
  background: #1c2c44;
  color: #fff;
  margin-top: 66px;
  padding-top: 20px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-left: 9.38%;
  margin-right: 82.08%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 10px;
  margin-bottom: 20px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;

  h2 {
    color: #52e0ff;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  p {
    width: 223px;
    height: 30px;
    left: 435px;
    top: 124px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    margin-bottom: 10px;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .SocialMediaIcon {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
