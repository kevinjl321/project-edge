import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/base/Layouts.js"
import logo from "../../images/logo.png";

import {FaFacebookF, FaLinkedin} from "react-icons/fa";
import {SiInstagram} from "react-icons/si";

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const LinksContainer = tw.div`mt-8 font-medium flex flex-wrap justify-center items-center flex-col sm:flex-row`
const Link = tw.a`border-b-2 border-transparent hocus:text-gray-300 hocus:border-gray-300 pb-1 transition duration-300 mt-2 mx-4`;

const SocialLinksContainer = tw.div`mt-10`;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block text-gray-100 hover:text-gray-500 transition duration-300 mx-4`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const CopyrightText = tw.p`text-center mt-10 font-medium tracking-wide text-sm text-gray-600`
export default () => {
  return (
    <Container>
      <Content>
        <Row>
          <LogoContainer>
            <LogoImg src={logo} />
            <LogoText>project edge</LogoText>
          </LogoContainer>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/our-team">Our Team</Link>
            {/*</LinksContainer><Link href="/blog">Blog</Link>*/}
            <Link href="/contact">Contact Us</Link>
            <Link href="https://docs.google.com/forms/d/1UhsrBAIGHhkUx9sy8-nQ374zae-4EJIdhyN1mis-B9g/edit?usp=sharing" target="_blank">Join Us</Link>
          </LinksContainer>
          <SocialLinksContainer>
            <SocialLink target = "_blank" href="https://www.facebook.com/projectedgeofficial">
              <FaFacebookF />
            </SocialLink>
            <SocialLink target = "_blank" href="https://instagram.com/projectedgeofficial">
              <SiInstagram />
            </SocialLink>
            <SocialLink target = "_blank" href="https://www.linkedin.com/company/project-edge-learning">
              <FaLinkedin />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; 2020 project edge | designed and developed by kevin lan
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
