import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyle = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid grey;
    img {
      height: 100%;
    }
  }
  .ProjectItem__info {
    margin-top: 1rem;
    background-color: black;
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItme_title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMOno Regular';
    margin-top: 1rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;
export default function ProjectItem({
  img = projectImg,
  title = 'Project 1',
  desc = 'lorem10',
}) {
  return (
    <ProjectItemStyle>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project Img" />
      </Link>
      <div className="ProjectItem__info">
        <Link to="#">
          <h3 className="projectItme_title">{title} </h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
      </div>
    </ProjectItemStyle>
  );
}
