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
import { ReactComponent as InstagramIcon } from "images/ig.svg"

import Dowson from "images/Dowson.jpeg";
import Marcus from "images/Marcus.jpg";
import Randy from "images/Randy.jpg";
import Mark from "images/Mark.jpg"
import Kevin from "images/Kevin.jpg"
import Srini from "images/Srini.jpg"
import Philip from "images/Philip.jpg"
import Lawrence from "images/Lawrence.jpg"
import Corey from "images/Corey.jpg"
import Lucas from "images/Lucas.jpg"
import Tavis from "images/Tavis.png"
import Yuxiang from "images/Yuxiang.jpg"
import Ben from "images/Ben.png"
import Jeffrey from "images/Jeffrey.jpg"
import Megan from "images/Megan.jpg"

const Container = tw.div`relative bg-gray-200 -mx-8 px-8 text-gray-800`;
const HeadingContainer = tw.div``
const Heading = tw(SectionHeading)``
const Subheading = tw(SubheadingBase)`text-center mb-3 text-blue-500`
const Description = tw(SectionDescription)`mx-auto text-center text-gray-700`
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
    ${tw`mr-8 last:mr-0 text-gray-200 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw`fill-current w-6 h-6`}
    }
  }
`

export default ({
  heading = "Meet Team Edge!",
  subheading = "Our Team",
  description = "Each of our staff members have extensive experience in their fields and are eager to teach and assist their peers, free of cost during this difficult time.",
  cards = [
    {
      imageSrc: Marcus,
      position: "Co-founder, COO",
      name: "Marcus Chua",
      content: "Marcus is a Business, Chemistry, and Writing tutor who has enjoyed instructing in numerous leadership camps. Outside of Edge, he serves as Business President of SMHS's robotics team and President of Red Cross club.",
      links: [
        {
          url: "https://twitter.com",
          icon: InstagramIcon,
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
      content: "Kevin is a STEM and Computer Science tutor who has developed numerous websites. Outside of Edge, he runs a Computing Club and enjoys working on projects and participating in programming competitions. ",
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
      imageSrc: Megan,
      position: "Chief Marketing Officer",
      name: "Megan Linden",
      content: "Megan is our team’s publicity manager! Outside of Edge, she participates in speech and debate, Girl Scouts, and has run track for 6 years.",
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
      position: "Co-founder, CIO",
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
      imageSrc: Corey,
      position: "Co-founder, CFO",
      name: "Corey Sy",
      content: "Corey is a STEM and music tutor who has been playing violin for more than eight years, and has even performed at Carnegie Hall. Outside of Edge, he serves as Co-Concertmaster of the GYO and is a MTAC panel finalist.",
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
      position: "Co-founder, Dir. of Mathematics",
      name: "Dowson Yang",
      content: "Dowson is a Grammar and Math tutor who enjoys teaching students from 6th to 10th grade. Outside of Edge, Dowson is involved with SMHS's robotics team, math team, and varsity golf team.",
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
      position: "Co-founder, Dir. of Life Sciences",
      name: "Randy Cai",
      content: "Randy is a STEM tutor who enjoys learning about all things science and research. Outside of Edge, Randy serves as the Captain of SMHS's Science Team and is a 2020 USA Biology Olympiad Semifinalist.",
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
      position: "Co-founder, Dir. of Humanities",
      name: "Mark MacDermott",
      content: "Mark is a music, humanities, and debate instructor. Outside of Edge, Mark serves as the Captain of the historic SMHS Debate Team and enjoys pursuing music production through self study and exploration.",
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
      position: "Co-founder, Dir. of Physical Sciences",
      name: "Srinivasan Arumugham",
      content: "Srinivasan is a STEM and computer science tutor who enjoys teaching and learning new things. Outside of Edge, he co-runs the Computing Club and participates in numerous STEM Olympiads.",
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
      imageSrc: Lucas,
      position: "Educator",
      name: "Lucas Chen",
      content: "Lucas is a public speaking tutor with over five years of teaching experience. Outside of Edge, he serves as the captain of the SMHS Limited Preparation Speech Team and is a nationally ranked fencer.",
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
    {
      imageSrc: Tavis,
      position: "Educator",
      name: "Tavis Chen",
      content: "Tavis is a STEM tutor that has had experience in multiple fields of chemistry research. Outside of Edge, he serves as the mechanical captain in SMHS's robotics team and captain of the cross country and track team.",
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
      imageSrc: Yuxiang,
      position: "Educator",
      name: "Yuxiang Zhang",
      content: "Yuxiang is a STEM tutor who enjoys applying computer science to solve problems. Outside of Edge, he is a mentor for Computing Club, and is on the science, math, robotics, and Caltech student research team.",
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
      imageSrc: Ben,
      position: "Educator",
      name: "Ben Guo",
      content: "Ben is a Computer Science tutor who has experience in multiple fields of machine learning and data science. Outside of Edge, he serves as team captain of SMHS's varsity badminton team.",
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
      imageSrc: Jeffrey,
      position: "Educator",
      name: "Jeffrey Deng",
      content: "Jeffrey is a Computer Science tutor and hackathon enthusiast who has experience in many fields of computer science. Outside of Edge, he participates in robotics & is the president of SMHS's math team.",
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
                {/*
                <CardLinks>
                  {card.links.map((link, linkIndex) => (
                    <a key={linkIndex} className="link" href={link.url}>
                      <link.icon className="icon" />
                    </a>
                  ))}
                </CardLinks>
                  */}
              </CardContent>
            </Card>
          ))}
        </Cards>
      </ContentWithPaddingXl>
    </Container>
  );
};
