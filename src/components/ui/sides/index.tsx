import React, { Fragment } from 'react';

import Left from './left';
import Right from './right';

const Sides: React.FC = () => {
  return (
    <Fragment>
      <Left />
      <Right />
    </Fragment>
  );
};

export default Sides;
