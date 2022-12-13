import React from "react";
import PropTypes from "prop-types";
import { useStore } from "./../context/Store";

const ResponsiveGrid = ({small, medium, big, children}) => {
  const [{isSmall, isMedium}] = useStore();

  return (
    <div className='grid'>
      {children}
      <style jsx>{`
        .grid {
          display: grid;
          grid-template: ${isSmall ? small : isMedium ? medium : big};
        }
      `}</style>
    </div>
  );
};

ResponsiveGrid.propTypes = {
  small: PropTypes.string,
  medium: PropTypes.string,
  big: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element)
};

export default ResponsiveGrid;