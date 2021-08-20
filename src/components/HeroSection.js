import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/images/Nidhish.PNG';
import SocailMediaArrow from '../assets/images/social-media-arrow.svg';
import ScrollDownArrow from '../assets/images/scroll-down-arrow.svg';
import Ptext from './Ptext';
import Button from './Button';

const HeroStyles = styled.div`
  .hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero__heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
      color: white;
    }
    .hero__name {
      font-size: 7rem;
      font-family: 'Gill Sans', 'Gill Sans MT', 'Calibri', 'Trebuchet MS',
        sans-serif;
      color: white;
    }
  }
  .hero__img {
    max-width: 1000px;
    width: 100%;
    height: 800px;
    margin: 0 auto;
    border: 2px solid grey;
  }
  .hero__info {
    margin-top: -18rem;
  }
  .hero__social,
  .hero__ScrollDownArrow {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: absolute;
    bottom: 25px;
    width: 50px;
  }
  .hero__social {
    left: 75px;
  }
  .hero__ScrollDownArrow {
    right: 75px;
  }
  .hero__social__indicator,
  .hero__ScrollDownArrow {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__ScrollDownArrow {
    img {
      max-height: 70px;
    }
  }
  .hero_social_text {
    ul {
      li {
        margin-bottom: 1rem;
      }
      a {
        display: flex;
        font-size: 1.6rem;
        letter-spacing: 3px;
        margin-bottom: 1.5rem;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero_social_text {
        ul {
          li {
            a {
              font-size: 1rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__ScrollDownArrow {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroStyles>
      <div className="hero">
        <div className="container">
          <h1 className="hero__heading">
            <span>Hello, This is</span>
            <span className="hero__name"> Nidhish Bisht</span>
          </h1>
          <div className="hero__img">
            <img src={HeroImg} alt="" />
          </div>
          <div className="hero__info">
            <Ptext>I am Nidhish Bisht.</Ptext>
            <Button btnLink="/projects" btnText="see my work" outline={false} />
          </div>
          <div className="hero__social">
            <div className="hero__social__indicator">
              <p>Follow</p>
              <img src={SocailMediaArrow} alt="SocailMediaArrow" />
            </div>
            <div className="hero_social_text">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/nidhish.bisht.5"
                    target="_blank"
                    rel="noreffer noreferrer"
                  >
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/nidhish-bisht-61b7211bb/"
                    target="_blank"
                    rel="noreffer noreferrer"
                  >
                    LINKEDIN
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/___nidhish___/"
                    target="_blank"
                    rel="noreffer noreferrer"
                  >
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/NIDHISHBISHT"
                    target="_blank"
                    rel="noreffer noreferrer"
                  >
                    GITHUB
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="hero__ScrollDownArrow">
            <p>Scroll</p>
            <img src={ScrollDownArrow} alt="ScrollDownArrow" />
          </div>
        </div>
      </div>
    </HeroStyles>
  );
}
