import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const styles = ({ color }) => ({
    borderNone: {
        border: 'none',
        background: color.white
    },
    borderNoneOdd: {
        border: 'none',
        background: '#F7F7F7'
    }
});

function MaterialTableRow(props) {
    const { odd, children, classes } = props;

    return (
        <tr className={classnames(odd ? classes.borderNoneOdd : classes.borderNone)}>{children}</tr>
    );
}

MaterialTableRow.propTypes = {
    classes: PropTypes.object.isRequired,
    odd: PropTypes.bool,
    children: PropTypes.any.isRequired
};

MaterialTableRow.defaultProps = {
    odd: false
};

export default withStyles(styles)(MaterialTableRow);
