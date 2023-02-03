import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {Container as ContainerBase } from "components/base/Layouts.js"
import logo from "../../images/logo.png";

import {FaFacebookF, FaLinkedin} from "react-icons/fa";
import {SiInstagram} from "react-icons/si";
import {MdEmail} from "react-icons/md"

const Container = tw(ContainerBase)`bg-gray-900 text-gray-100 -mx-8 -mb-8`
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const Row = tw.div`flex items-center justify-center flex-col px-8`

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-2xl font-black tracking-wider`;

const CompanyDescription = tw.p`mt-8 text-center max-w-lg font-bold text-gray-500 text-base mx-auto md:mx-0 md:mr-4 `;
const EIN = tw.p`font-medium`;
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
          <CompanyDescription>
            Project Edge is a 501(c)(3) nonprofit organization.
            <br></br>
            <br></br>
            <EIN>EIN: 87-0834924</EIN>
          </CompanyDescription>
          <LinksContainer>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/our-team">Our Team</Link>
            <Link href="https://blog.project-edge.org/">Blog</Link>
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
            <SocialLink target = "_blank" href="mailto:admin@project-edge.org">
              <MdEmail />
            </SocialLink>
          </SocialLinksContainer>
          <CopyrightText>
            &copy; 2023 project edge | designed and developed by kevin lan
          </CopyrightText>
        </Row>
      </Content>
    </Container>
  );
};
