import React from 'react';
import Tooltip from './component';

const withTooltip = (Component, options = {}) => ({
  ...props,
}) => (
  <Tooltip {...options}>
    <Component {...props} />
  </Tooltip>
);

export default withTooltip;
