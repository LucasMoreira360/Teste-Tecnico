import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #fdfdfd;
  height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
`;

export const Section = styled.div`
  height: 100vh;
  max-width: 1920px;
  display: flex;
  
  .principal {
    display: block;
    width: 530px;
    height: 400px;
    margin: 240px 264px;
    
    
  }
  .secundaria {
    position: absolute;
    width: 308px;
    height: 190px;
    margin: 120px 361px;
  }
  .terceira {
    position: absolute;
    width: 197.2px;
    height: 316.9px;
    margin: 490px 491px;
  }
  .textContainer {
    display: flex;
    flex-direction: column-reverse;
    color: #115678;
    margin: 321px 154px;
    width: 500px;
    height: 40px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 60px;
  }
  .paragrafoContainer {
    position: absolute;
    width: 546.17px;
    height: 159.49px;
    margin: 400px 990px;
    left: 220px;

    flex-direction: column;
    color: #373737;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 155%;
  }
  .imageConfirma {
    position: absolute;
    width: 456px;
    height: 229.03px;
    margin-left: 990px;
    margin-top: 610px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .text{
    position: absolute;
    width: 342px;
    height: 23px;
    margin-left: 1240px;
    margin-top: 600px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  
  }
`;
