import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings";
import {SectionDescription} from "components/misc/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";

import Dowson from "images/Dowson.jpeg";
import Marcus from "images/Marcus.jpg";
import Randy from "images/Randy.jpg";
import Mark from "images/Mark.jpg"
import Kevin from "images/Kevin.jpg"
import Srini from "images/Srinivasan.png"
import Philip from "images/Philip.jpg"
import Lawrence from "images/Lawrence.jpg"

import { m } from "framer-motion";

const Container = tw.div`relative bg-gray-800 -mx-8 px-8 text-gray-100`;
const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3`
const Description = tw(SectionDescription)`mx-auto text-center`
const Content = tw(SectionDescription)`mx-auto text-center`

const Cards = tw.div`flex flex-wrap flex-row justify-center sm:max-w-2xl lg:max-w-5xl mx-auto`
const Card = tw.div`mt-24 w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center`
const CardImage = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`w-64 h-64 bg-contain bg-center rounded`}
`
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-100`}
  }
  .content{
    ${tw`mt-1 mx-5 text-base font-medium text-gray-500`}
  }
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-200 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Meet Our Educators!",
  subheading = "Our Team",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  cards = [
    {
      imageSrc: Marcus,
      position: "Co-founder, COO",
      name: "Marcus Chua",
      content: "Marcus is a Business, Chemistry, and Writing tutor who has enjoyed instructing in numerous leadership camps. Outside of Edge, he serves as Business President of the robotics team and President of Red Cross club.",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Kevin,
      position: "Co-founder, CTO",
      name: "Kevin Lan",
      content: "Kevin is a STEM and Computer Science tutor who has developed numerous websites. Outside of Edge, he runs the Computing Club and also enjoys working on projects and participating in programming competitions. ",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Dowson,
      position: "Co-founder, CAO",
      name: "Dowson Yang",
      content: "Dowson is a Grammar and Math tutor who enjoys teaching students from 6th to 10th grade. Outside of Edge, Dowson is involved with the Robotics Team, Math Team, and Varsity Golf Team.",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Randy,
      position: "Co-founder, Educator",
      name: "Randy Cai",
      content: "Randy is a Biology, Chemistry, and Math tutor who enjoys learning about all things STEM. Outside of Edge, Randy serves as the Captain of SMHS's Science Team and is a 2020 USA Biology Olympiad Semifinalist.",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Mark,
      position: "Co-founder, Educator",
      name: "Mark MacDermott",
      content: "Mark is an English, Writing, Music, and Speech & Debate tutor. Outside of Edge, Mark serves as the Captain of the historic SMHS Debate Team as well as pursuing music production through self study and exploration.",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Srini,
      position: "Co-founder, Educator",
      name: "Srinivasan Arumugham",
      content: "Srinivasan is a STEM and Computer Science tutor who enjoys teaching and learning new things. Outside of Edge, he co-runs the Computing Club and participates in numerous STEM Olympiads.",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Lawrence,
      position: "Co-founder, Educator",
      name: "Lawrence Chao",
      content: "Lawrence is a STEM tutor who has had much prior experience in tutoring fellow students of all ages. Outside of Edge, he is part of his school's math team and CalTech's student research group.",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
    {
      imageSrc: Philip,
      position: "Educator",
      name: "Philip Leung",
      content: "Philip is a STEM and chess instructor who enjoys teaching 6th to 10th grade students. Outside of Edge, Philip is a nationally ranked chess player who also runs his own streetwear reselling business.",
      links: [
        {
          url: "https://twitter.com",
          icon: TwitterIcon,
        },
        {
          url: "https://linkedin.com",
          icon: LinkedinIcon,
        },
        {
          url: "https://github.com",
          icon: GithubIcon,
        },
      ],
    },
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading> }
          {description && <Description>{description}</Description> }
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <Content>
                  <p className="content">{card.content}</p>
                </Content>
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
