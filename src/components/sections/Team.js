import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { ContentWithPaddingXl } from "components/base/Layouts.js";
import { SectionHeading, Subheading as SubheadingBase } from "components/base/Headings";
import {SectionDescription} from "components/base/Typography";
import { ReactComponent as TwitterIcon} from "images/twitter-icon.svg";
import { ReactComponent as LinkedinIcon} from "images/linkedin-icon.svg";
import { ReactComponent as GithubIcon } from "images/github-icon.svg";
import {MdEmail, MdMail} from "react-icons/md"

import Dowson from "images/Dowson.jpg";
import Randy from "images/Randy.jpg";
import Mark from "images/Mark.jpg"
import Kevin from "images/Kevin.jpg"
import Srini from "images/Srini.jpg"
import Philip from "images/Philip.jpg"
import Lawrence from "images/Lawrence.jpg"
import Corey from "images/Corey.jpg"
import Megan from "images/Megan.jpg"
import Aidan from "images/Aidan.jpg"
import Dennis from "images/Dennis.png"


const Container = tw.div`relative bg-white -mx-8 px-8 text-gray-800`;
const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3 text-blue-500`
const Description = tw(SectionDescription)`mx-auto text-center text-gray-600`
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
    ${tw`uppercase font-bold tracking-widest text-xs text-blue-700`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-700`}
  }
  .content{
    ${tw`mt-1 mx-5 text-base font-medium text-gray-600`}
  }
`

const CardLinks = styled.div`
  ${tw`mt-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-600 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Meet Team Edge!",
  subheading = "Leadership Team",
  description = "At Edge, all of our staff members share one common goal: to democratize education. We seek to bring personalized education to all, one class at a time.",
  cards = [
    {
      imageSrc: Kevin,
      position: "Co-founder, Director of Technology",
      name: "Kevin Lan",
      content: "Kevin is a STEM and Computer Science instructor who has developed numerous websites. Outside of Edge, he runs a Computing Club and enjoys working on projects and participating in programming competitions. ",
      links: [
        {
          url: "mailto:kevinlan321@gmail.com",
          icon: MdMail,
        },
      ],
    },
    {
      imageSrc: Megan,
      position: "Co-founder, Director of Publicity",
      name: "Megan Linden",
      content: "Megan spearheads our marketing and media departments. Outside of Edge, she competes in speech and debate, is an active Girl Scout, and serves as the captain of SMHS's girls varsity track team.",
      links: [
        {
          url: "mailto:meganlinden2@gmail.com",
          icon: MdMail,
        },
      ],
    },
    {
      imageSrc: Corey,
      position: "Co-founder, Director of Finances",
      name: "Corey Sy",
      content: "Corey is a STEM and Music instructor who has been playing violin for more than eight years, and has even performed at Carnegie Hall. Outside of Edge, he serves as Co-Concertmaster of the GYO and is a MTAC panel finalist.",
      links: [
        {
          url: "mailto:coreyzsy@gmail.com",
          icon: MdMail,
        },
      ],
    },
    {
      imageSrc: Randy,
      position: "Co-founder, Curriculum Director",
      name: "Randy Cai",
      content: "Randy is a STEM instructor who enjoys learning about all things science and research. Outside of Edge, Randy serves as the Captain of SMHS's Science Team and is a two-time USA Biology Olympiad Semifinalist.",
      links: [
        {
          url: "mailto:randycai03@gmail.com",
          icon: MdMail,
        },
      ],
    },
    {
      imageSrc: Dowson,
      position: "Co-founder, Curriculum Director",
      name: "Dowson Yang",
      content: "Dowson is a Grammar and Math instructor who enjoys teaching students from 6th to 10th grade. Outside of Edge, Dowson is involved with SMHS's robotics team, math team, and varsity golf team.",
      links: [
        {
          url: "mailto:dowsonyang21@gmail.com",
          icon: MdMail,
        },
      ],
    },
    {
      imageSrc: Mark,
      position: "Co-founder, Curriculum Director",
      name: "Mark MacDermott",
      content: "Mark is a Music, Humanities, and Debate instructor. Outside of Edge, Mark serves as the Captain of the historic SMHS Debate Team and enjoys pursuing music production through self study and exploration.",
      links: [
        {
          url: "mailto:markmacdermott@gmail.com",
          icon: MdMail,
        },
      ],
    },
    {
      imageSrc: Srini,
      position: "Co-founder, Curriculum Director",
      name: "Srinivasan Arumugham",
      content: "Srinivasan is a STEM and Computer Science instructor who enjoys teaching and learning new things. Outside of Edge, he co-runs a Computing Club, participates in various STEM Olympiads, and is an AIME qualifier.",
      links: [
        {
          url: "mailto:srinivasan2003@outlook.com",
          icon: MdMail,
        },
      ],
    },
    {
      imageSrc: Lawrence,
      position: "Co-founder, Curriculum Director",
      name: "Lawrence Chao",
      content: "Lawrence is a STEM instructor who has had much prior experience in instructoring fellow students of all ages. Outside of Edge, he is part of his school's math team and CalTech's student research group.",
      links: [
        {
          url: "mailto:lawrencec1007@gmail.com",
          icon: MdMail,
        },
      ],
    },
    {
      imageSrc: Philip,
      position: "Curriculum Director",
      name: "Philip Leung",
      content: "Philip is a STEM and Chess instructor who enjoys teaching 6th to 10th grade students. Outside of Edge, Philip is a nationally ranked chess player who also runs his own streetwear reselling business.",
      links: [
        {
          url: "mailto:philiprobertl@gmail.com",
          icon: MdMail,
        },
      ],
    },
    {
      imageSrc: Aidan,
      position: "Curriculum Director",
      name: "Aidan Ye",
      content: "Aidan is a Chess and Biology instructor who enjoys all things STEM. Outside of Edge, he enjoys long distance bike trips, is a nationally ranked chess player, and plays for SMHS's varsity badminton team.",
      links: [
        {
          url: "mailto:aidanye2004@gmail.com",
          icon: MdMail,
        },
      ],
    },
    {
      imageSrc: Dennis,
      position: "Curriculum Director",
      name: "Dennis Rui",
      content: "Dennis is a computer science and music instructor; he is also currently organizing a charitable hackathon with Project Edge. Outside of Edge, he plays in the Colborn Honors String Quartet Program.",
      links: [
        {
          url: "mailto:dennis.z.rui@gmail.com",
          icon: MdMail,
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
                {
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
                }
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
