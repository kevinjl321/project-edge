import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SectionHeading as HeadingTitle } from "../base/Headings.js";
import EMWLogo from "images/EMWLogo.jpg"
import Steamcoders from "images/steamcoders.png"

const Container = tw.div`relative bg-gray-200 -mx-8 px-8 text-gray-800`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-8 md:flex justify-center items-start`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);

const EMWImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-11/12 sm:w-11/12 md:w-1/2 lg:w-1/2 xl:w-1/2 flex-shrink-0 h-24 sm:h-40 lg:h-32 xl:h-40 md:h-24 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);

const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;

export default () => {
  const cards = [
    {
      imageSrc: EMWLogo,
      title: "East Meets West Parent Education Club",
      description:
        "A nonprofit community service organization located in San Marino, CA and serving the surrounding area.",
      url: "https://www.emwpec.org/"
    },
    {
      imageSrc: Steamcoders,
      title: "STEAMCODERS",
      description:
        "A nonprofit organization based in Pasadena, CA that inspires underprivileged students and families through STEAM (Science, Technology, Engineering, Art, and Math).",
      url: "http://www.steamcoders.org/"
    },
  ];

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>Sponsors & Partners</HeadingTitle>
          <HeadingDescription>
            A special thanks to those listed below for their contributions towards the democratization of education!
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i}>
              <EMWImage imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url} target = "_blank">Visit website</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
    </Container>
  );
};