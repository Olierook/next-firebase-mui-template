import React from "react";
import PropTypes from "prop-types";

const Section = ({id, padding, border, children}) => {
  return (
    <div className={`section ${id}`}>
      {children}
      <style jsx>{`
        .section {
            padding: ${padding};
            border: ${border};
            grid-area: ${id};
        }
        `}</style>
    </div>
  );
};

Section.propTypes = {
  id: PropTypes.string,
  padding: PropTypes.string,
  border: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Section;