import React from 'react';
import styled from 'styled-components';
import { MdCode, MdDesktopMac, MdPhonelinkSetup } from 'react-icons/md';
import SectionTitle from './SectionTitle';
import ServicesSectionItems from './ServicesSectionItems';

const ServicesItemStyles = styled.div`
  padding: 12rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;
export default function ServicesSection() {
  return (
    <ServicesItemStyles>
      <div className="container">
        <SectionTitle heading="Services" subheading="What I will do for you" />
        <div className="services__allItems">
          <ServicesSectionItems
            icon={<MdDesktopMac />}
            title="web design"
            desc="Lorem Ipsum 50"
          />
          <ServicesSectionItems
            icon={<MdCode />}
            title="web design"
            desc="Lorem Ipsum 50"
          />
          <ServicesSectionItems
            icon={<MdPhonelinkSetup />}
            title="App development"
            desc="Lorem Ipsum 50"
          />
        </div>
      </div>
    </ServicesItemStyles>
  );
}
