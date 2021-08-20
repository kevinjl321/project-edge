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

import Dowson from "images/Dowson.jpg";
import Randy from "images/Randy.jpg";
import Mark from "images/Mark.jpg"
import Kevin from "images/Kevin.jpg"
import Srini from "images/Srini.jpg"
import Philip from "images/Philip.jpg"
import Lawrence from "images/Lawrence.jpg"
import Corey from "images/Corey.jpg"
import Tavis from "images/Tavis.png"
import Yuxiang from "images/Yuxiang.jpg"
import Ben from "images/Ben.png"
import Jeffrey from "images/Jeffrey.jpg"
import Megan from "images/Megan.jpg"
import Matthew from "images/Matthew.png"
import Jeremy from "images/Jeremy.jpg"
import Cassie from "images/Cassie.jpg"
import Amanda from "images/Amanda.png"
import Jacob from "images/Jacob.jpg"
import Nikkie from "images/Nikkie.jpg"
import Marlene from "images/Marlene.png"
import Aidan from "images/Aidan.jpg"
import Shrish from "images/Shrish.jpg"
import Anika from "images/Anika.jpg"


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
  description = "At Edge, all of our staff members share one common goal: to democratize education.",
  cards = [
    {
      imageSrc: Randy,
      position: "Co-founder, Chief Operating Officer",
      name: "Randy Cai",
      content: "Randy is a STEM instructor who enjoys learning about all things science and research. Outside of Edge, Randy serves as the Captain of SMHS's Science Team and is a two-time USA Biology Olympiad Semifinalist.",
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
      position: "Co-founder, Chief Technology Officer",
      name: "Kevin Lan",
      content: "Kevin is a STEM and Computer Science instructor who has developed numerous websites. Outside of Edge, he runs a Computing Club and enjoys working on projects and participating in programming competitions. ",
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
      position: "Co-founder, Chief Marketing Officer",
      name: "Megan Linden",
      content: "Megan is our CMO; she spearheads our marketing and media departments. Outside of Edge, she competes in speech and debate, is an active Girl Scout, and serves as the captain of SMHS's girls varsity track team.",
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
      position: "Co-founder, Chief Information Officer",
      name: "Lawrence Chao",
      content: "Lawrence is a STEM instructor who has had much prior experience in instructoring fellow students of all ages. Outside of Edge, he is part of his school's math team and CalTech's student research group.",
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
      position: "Co-founder, Chief Financial Officer",
      name: "Corey Sy",
      content: "Corey is a STEM and Music instructor who has been playing violin for more than eight years, and has even performed at Carnegie Hall. Outside of Edge, he serves as Co-Concertmaster of the GYO and is a MTAC panel finalist.",
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
      position: "Co-founder, Director of Mathematics",
      name: "Dowson Yang",
      content: "Dowson is a Grammar and Math instructor who enjoys teaching students from 6th to 10th grade. Outside of Edge, Dowson is involved with SMHS's robotics team, math team, and varsity golf team.",
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
      position: "Co-founder, Director of Humanities",
      name: "Mark MacDermott",
      content: "Mark is a Music, Humanities, and Debate instructor. Outside of Edge, Mark serves as the Captain of the historic SMHS Debate Team and enjoys pursuing music production through self study and exploration.",
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
      position: "Co-founder, Director of Phys. Sciences",
      name: "Srinivasan Arumugham",
      content: "Srinivasan is a STEM and Computer Science instructor who enjoys teaching and learning new things. Outside of Edge, he co-runs a Computing Club, participates in various STEM Olympiads, and is an AIME qualifier.",
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
      position: "Vice President of Outreach",
      name: "Philip Leung",
      content: "Philip is a STEM and Chess instructor who enjoys teaching 6th to 10th grade students. Outside of Edge, Philip is a nationally ranked chess player who also runs his own streetwear reselling business.",
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
      imageSrc: Matthew,
      position: "Educator",
      name: "Matthew Lee",
      content: "Matthew is a STEM instructor who has extensive experience in math and computer science. Outside of Edge, he is interested in the intersection of technology and society, and leads San Marino's robotics and math teams.",
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
      imageSrc: Aidan,
      position: "Educator",
      name: "Aidan Ye",
      content: "Aidan is a Chess and Biology instructor who enjoys all things STEM. Outside of Edge, he enjoys long distance bike trips, is a nationally ranked chess player, and plays for SMHS's varsity badminton team.",
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
      imageSrc: Anika,
      position: "Educator",
      name: "Anika Kesavalu",
      content: "Anika is a Math, English, Science, and History instructor who enjoys teaching students of all ages. Outside of Edge, she competes for her school’s speech & debate team, is a Girl Scout, and volunteers for the National Charity League. ",
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
      imageSrc: Amanda,
      position: "Educator",
      name: "Amanda Lopez",
      content: "Amanda is a Chemistry, English, and Public Speaking instructor with extensive experience in instructoring other students. Outside of Edge, she serves as Marketing VP for SMHS’s robotics team and competes in speech and debate.",
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
      imageSrc: Cassie,
      position: "Educator",
      name: "Cassandra Liong",
      content: "Cassandra is a Science, English, and Math instructor who enjoys assisting students of all ages, especially at the elementary and middle school level. She also enjoys playing sports and making crafts.",
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
      content: "Yuxiang is a STEM instructor who enjoys applying computer science to solve problems. Outside of Edge, he is a mentor for Computing Club, and is on the science, math, robotics, and Caltech student research team.",
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
      imageSrc: Marlene,
      position: "Educator",
      name: "Marlene Ketelaar",
      content: "Marlene is a Biology, Chemistry, and Math instructor and has some experience in the field of chemistry research. Outside of Edge, she plays for the school’s Varsity Volleyball team and is involved in Girls Who Code.",
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
      imageSrc: Jeremy,
      position: "Educator",
      name: "Jeremy Yoo",
      content: "Jeremy is a Math and Computer Science instructor who has extensive experience developing apps and websites. Outside of Edge, he is involved with SMHS's robotics, math, computing, and hack teams/clubs.",
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
      imageSrc: Nikkie,
      position: "Educator",
      name: "Nicole Tan",
      content: "Nicole is a Math, English, and Physics instructor who loves to work with younger students. Outside of Edge, she enjoys competing as a member of her school's tennis team, playing her guitar, and cooking for friends and family.",
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
      content: "Jeffrey is a Computer Science instructor and hackathon enthusiast who has experience in many fields of computer science. Outside of Edge, he participates in robotics & is the president of SMHS's math team.",
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
      content: "Tavis is a STEM instructor that has had experience in multiple fields of chemistry research. Outside of Edge, he serves as the mechanical captain in SMHS's robotics team and captain of the cross country and track team.",
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
      imageSrc: Jacob,
      position: "Educator",
      name: "Jacob Brassard",
      content: "Jacob is a History and Social Studies instructor who competes in domestic extemporaneous speaking. Outside of Edge, he volunteers for EMWC club and works part time as a life guard at the Rose Bowl Aquatics Center.",
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
      content: "Ben is a Computer Science instructor who has experience in multiple fields of machine learning and data science. Outside of Edge, he serves as team captain of SMHS's varsity badminton team.",
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
      imageSrc: Shrish,
      position: "Educator",
      name: "Shrish Goel",
      content: "Shrish is a Computer Science instructor who has extensive teaching experience and is proficient in many programming languages. Outside of Edge, he is involved with the Math, Coding, and AI clubs at his school.",
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
