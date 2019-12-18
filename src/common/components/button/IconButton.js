import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    iconButton: {},
};

function DefaultButton(props) {
    const { classes, onClick, children } = props;

    return (
        <IconButton onClick={onClick} className={classes.iconButton}>
            {children}
        </IconButton>
    );
}

DefaultButton.propTypes = {
    onClick: PropTypes.func,
};

export default withStyles(styles)(DefaultButton);
