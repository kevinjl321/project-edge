import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/base/Headings.js";
import { SectionDescription } from "components/base/Typography.js";

import { ReactComponent as SvgDecoratorBlob3 } from "images/svg-decorator-blob-3.svg";

const Container = tw.div`relative bg-gray-800 -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-sm text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Subjects", subheading = "", description = "Our educators specialize in a plethora of subjects: from high school STEM to business management, we have it all!" }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) title - the title of the card
   *  2) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      title: "STEM",
      description: "Our educators are well versed in high-school level Math, Chemistry, Physics, Biology, Computer Science and more. Our educators have extensive experience in these fields, having conducted research projects in conjunction with top colleges and professors."
    },
    {  
      title: "SAT / AP",
      description: "In order to maximize your potential for college admissions, we are offering assistance and tips from educators who have scored in the 99+ percentile on their official SATs. Our team is also able to provide supplemental help for a multitude of AP subjects, all of which they have scored 5s on."
    },
    { 
      title: "Olympiads",
      description: "Interested in taking your academics to the next level? Our team has collected numerous awards from academic competitions and will provide the facilities you need to succeed in national math, science, and computing olympiads."
    },
    { 
      title: "ELA",
      description: "Learn vital skills of essay writing, persuasive speaking, literary analysis, as well as improving your vocabulary. Our educators have extensive experience with all things language arts that will surely enrich your own skills."
    },
    { 
      title: "Music",
      description: "Learn music theory as well as the ins and outs of various instruments such as violin and piano. If you prefer something more modern, we are able to teach basic music production using programs like FL Studio and Ableton."
    },
    { 
      title: "Business",
      description: "Learn important business-related skills in the fields of marketing, finance, and management that will train your entreprenurial mind and enable you to be successful running your own business or managing your own projects."
    },
    { 
      title: "Computer Science",
      description: "Learn the basics of programming, or take your existing skills to the next level. Our instructors will teach everything from machine learning to full stack development, whether you're a beginner or budding programmer."
    },
    { 
      title: "Public Speaking",
      description: "Effective communication is a vital trait to have inside and outside school. That's why we offer lessons in public speaking to help you overcome fear of talking to others and improve your ability to express yourself!"
    },
    { 
      title: "History & Government",
      description: "As a citizen of this nation, it is important to learn about our country's history and government. Learn everything from the cause of World War I to the pressing social issues of today's governmental policies and laws."
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      <DecoratorBlob />
    </Container>
  );
};
