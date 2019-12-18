import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({ counter }) => (
    <span>
        <p>{counter}</p>
    </span>
);

Counter.propTypes = {
    counter: PropTypes.number,
};

Counter.defaultProps = {
    counter: 1,
};
