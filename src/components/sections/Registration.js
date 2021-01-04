import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "components/base/Headings.js";
import { SectionDescription } from "components/base/Typography.js";
import Calendly from "components/utils/Calendly"


const Container = tw.div`relative bg-gray-800 -mx-8 px-8 text-gray-100`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full mt-4`;
const Description = tw(SectionDescription)`w-full text-center`;

export default ({ cards = null, heading = "", subheading = "", description = "" }) => {

  return (
    <Container>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <Calendly />
    </Container>
  );
};
