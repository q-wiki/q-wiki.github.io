import React from 'react';
import PropTypes from 'prop-types';

import CustomScroll from 'react-custom-scroll';
import './reportDisplay.scss';


const ReportDisplay = ({
  children,
  ...props
}) => {
  return (
    <div className="report-display-container">
          {children}
  </div>)
};

ReportDisplay.propTypes = {
children: PropTypes.node,
};

export default ReportDisplay;
