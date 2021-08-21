import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import Ptext from './Ptext';
import AboutImage from '../assets/images/Nidhish.PNG';
import Button from './Button';

const AboutSectionStyle = styled.div`
  padding: 10rem 0;
  /* background-color: royalblue; */
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .aboutSection_Left,
  .aboutSection_Right {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .AboutSection__Button {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3rem;
    margin-top: 2rem;
  }
  @media only screen and (max-width: 950px) {
    .aboutSection_Left {
      flex: 4;
    }
    .aboutSection_Right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection_Left,
    .aboutSection_Right {
      width: 100%;
    }
    .aboutSection_Right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .AboutSection__Button {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;
export default function AboutSection() {
  return (
    <AboutSectionStyle>
      <div className="container">
        <div className="aboutSection_Left">
          <SectionTitle
            subheading="Let Me Introduce Myself"
            heading="About ME"
          />
          <Ptext>
            I am Nidhish Bisht I am Nidhish Bisht I am Nidhish Bisht I am
            Nidhish Bisht I am Nidhish Bisht I am Nidhish Bisht I am Nidhish
            Bisht
          </Ptext>
          <div className="AboutSection__Button">
            <Button btnLink="/projects" btnText="Works" />
            <Button btnLink="/about" btnText="Read More" outline />
          </div>
        </div>
        <div className="aboutSection_Right">
          <img src={AboutImage} alt="" />
        </div>
      </div>
    </AboutSectionStyle>
  );
}
