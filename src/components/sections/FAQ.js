import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/base/Headings.js";
import { SectionDescription } from "components/base/Typography.js";
import { Container, ContentWithPaddingXl } from "components/base/Layouts.js";
import { ReactComponent as ChevronDownIcon } from "feather-icons/dist/icons/chevron-down.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const ContainerA = tw(Container)`-mx-8 px-8 bg-gray-300`;
const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full text-gray-900`;
const Description = tw(SectionDescription)`w-full text-center text-gray-600`;

const Column = tw.div`flex flex-col items-center`;
const HeaderContent = tw.div``;

const FAQSContainer = tw.dl`mt-12 max-w-4xl relative`;
const FAQ = tw.div`cursor-pointer select-none mt-5 px-8 sm:px-10 py-5 sm:py-4 rounded-lg text-gray-800 hover:text-gray-900 bg-gray-200 hover:bg-blue-200 transition duration-300`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = motion.custom(styled.span`
  ${tw`ml-2 transition duration-300`}
  svg {
    ${tw`w-6 h-6`}
  }
`);
const Answer = motion.custom(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-56 w-56 opacity-15 transform translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-64 w-64 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;



export default ({
  subheading = "",
  heading = "FAQ",
  description = "If your question isn't answered below, please feel free to contact us!",
  faqs = [
    {
      question: "How do I sign up?",
      answer:
        "Sign up for a class through this website and choose a time and subject. You'll receive a Zoom link for your instructional session 24-48 hours before your scheduled time. That's it!"
    },
    {
      question: "Are there any restrictions to the amount of classes I can take?",
      answer:
        "We ask that you minimize your sessions to two 30 minute classes per day."
    },
    {
      question: "When are classes offered?",
      answer:
        "Our operating ours are Monday through Friday from 3pm - 6pm. Please sign up for classes 72 hours in advance; in the rare event that no instructors are available for a specific time slot, we'll notify you immediately and request that you reschedule."
    },
    {
      question: "What if I can't make it to a session I signed up for?",
      answer:
        "We ask that you cancel sessions at least 24 hours in advance unless there are emergency circumstances."
    },
    {
      question: "How can I get involved?",
      answer: "If you're interested in becoming an instructor, navigate to the join us link on our website and fill out the form. From there, you'll undergo a screening and interview process. Once we approve you for the team, you're all set and can start teaching right away!"

    }
  ]
}) => {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <ContainerA>
      <ContentWithPaddingXl>
        <Column>
          <HeaderContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            {description && <Description>{description}</Description>}
          </HeaderContent>
          <FAQSContainer>
            {faqs.map((faq, index) => (
              <FAQ
                key={index}
                onClick={() => {
                  toggleQuestion(index);
                }}
                className="group"
              >
                <Question>
                  <QuestionText>{faq.question}</QuestionText>
                  <QuestionToggleIcon
                    variants={{
                      collapsed: { rotate: 0 },
                      open: { rotate: -180 }
                    }}
                    initial="collapsed"
                    animate={activeQuestionIndex === index ? "open" : "collapsed"}
                    transition={{ duration: 0.02, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <ChevronDownIcon />
                  </QuestionToggleIcon>
                </Question>
                <Answer
                  variants={{
                    open: { opacity: 1, height: "auto", marginTop: "16px" },
                    collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                  }}
                  initial="collapsed"
                  animate={activeQuestionIndex === index ? "open" : "collapsed"}
                  transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                >
                  {faq.answer}
                </Answer>
              </FAQ>
            ))}
          </FAQSContainer>
        </Column>
      </ContentWithPaddingXl>
      <DecoratorBlob1/>
      <DecoratorBlob2 />
    </ContainerA>
  );
};
