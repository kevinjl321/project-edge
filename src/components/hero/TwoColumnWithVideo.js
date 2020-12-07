import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import Header from "../headers/light.js";

import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/dot-pattern.svg";
import DesignIllustration from "../../images/graduation.svg";

const Container = tw.div`relative bg-white -mx-8 px-8 text-gray-100`;
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;

const Heading = tw.h1`font-black text-gray-800 text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-xl lg:text-xl font-medium text-gray-500 max-w-lg mx-auto lg:mx-0`;

const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-gray-300 text-primary-600 hocus:bg-primary-700 hocus:text-gray-100 focus:shadow-outline focus:outline-none transition duration-300`;
const SecondaryButton = tw.button`mt-3 mx-6 sm:mt-0 md:mt-0 lg:mt-0 xl:mt-0 font-bold px-8 lg:px-10 py-3 rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 focus:shadow-outline focus:outline-none transition duration-300`;
const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3  -z-10`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none fill-current text-primary-500 opacity-25 absolute w-32 h-32 right-0 bottom-0 transform translate-x-10 translate-y-10 -z-10`}
`;

export default ({
  heading = <>
  Changing education as we know it
  <wbr />
  <span class = "text-color"> one student at a time.</span>
</>,
  description="Further your education. Learn real world skills. All for the low price of $0, no catches, no hidden fees ever.",
  primaryButtonText="Learn More",
  primaryButtonUrl="/about",
  secondaryButtonText = "Sign Up",
  secondaryButtonUrl = "/sign-up",
  imageSrc=DesignIllustration,
  imageCss=null,
  imageDecoratorBlob = false,
}) => {

  return (
    <>
      <Header />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton>
              <SecondaryButton as="a" href={secondaryButtonUrl}>{secondaryButtonText}</SecondaryButton>
            </Actions>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                css={imageCss}
                src={imageSrc}
                alt="Hero"
              />
              {imageDecoratorBlob && <DecoratorBlob2 />}
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};
