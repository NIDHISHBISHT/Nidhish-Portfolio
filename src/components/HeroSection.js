import React from 'react';
import HeroImg from '../assets/images/Nidhish.PNG';

export default function HeroSection() {
  return (
    <div className="Hero">
      <div className="Container">
        <h1 className="hero__heading">
          <span>Hello, This is</span>
          <span>Nidhish Bisht</span>
        </h1>
        <div className="hero__img">
          <img src={HeroImg} alt="" />
        </div>
      </div>
    </div>
  );
}
