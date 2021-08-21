import React from 'react';
import { MdDesktopMac } from 'react-icons/md';
import styled from 'styled-components';
import Ptext from './Ptext';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem--icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem--title {
    font-size: 2.5rem;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
      sans-serif;
  }
  .para {
    margin-top: 2rem;
  }
`;
export default function ServicesSectionItems({
  icon = <MdDesktopMac />,
  title = 'Web-Design',
  desc = 'Lorem Ipsum 50',
}) {
  return (
    <ItemStyles>
      <div className="servicesItem--icon"> </div>
      {icon}
      <div className="servicesItem--title">{title}</div>
      <Ptext>{desc}</Ptext>
    </ItemStyles>
  );
}
