import React from "react";
import PropTypes from "prop-types";

import sectionWrapperStyles from "./sectionWrapperStyles";

const { Sections, Title } = sectionWrapperStyles;

function Section({ title, children }) {
  return (
    <Sections>
      <Title>{title}</Title>
      {children}
    </Sections>
  );
}

Section.defaultProps = {
  title: "Homework",
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
