import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    button: {
        fontSize: 14,
        color: '#fff',
    },
};

function DefaultButton(props) {
    const { classes, children, className, ...rest } = props;

    return (
        <Button
            variant="contained"
            color="primary"
            className={classNames(classes.button, className)}
            {...rest}
        >
            {children}
        </Button>
    );
}

DefaultButton.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
};

DefaultButton.defaultProps = {
    className: '',
};

export default withStyles(styles)(DefaultButton);
