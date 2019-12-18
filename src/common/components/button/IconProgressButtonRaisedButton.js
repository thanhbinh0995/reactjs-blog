import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { COLOR } from '../../../constants';

const styles = {
    upload: {
        width: 145,
        marginLeft: 16,
        marginTop: 16,
    },
    progress: {
        left: 2,
        top: -1,
    },
    circularProgress: {
        color: COLOR.DEFAULT_TEXT,
        height: 'auto !important',
        position: 'absolute',
        right: 8,
    },
    button: {
        backgroundColor: COLOR.DEFAULT,
        '&:hover': {
            backgroundColor: COLOR.DEFAULT,
        },
        marginRight: 10,
        width: '100%',
        padding: 0,
    },
    buttonText: {
        color: COLOR.DEFAULT_TEXT,
        fontSize: 12,
        paddingRight: 5,
        fontWeight: 600,
        userSelect: 'none',
    },
};

class IconProgressButtonRaisedButton extends Component {
    render() {
        const { classes, label, icon, onClick, disabled, ...props } = this.props;
        const newIcon = disabled ? (
            <CircularProgress size={20} thickness={4} className={classes.circularProgress} />
        ) : (
            icon
        );
        return (
            <Button className={classes.button} onClick={onClick} disabled={disabled} {...props}>
                <Typography className={classes.buttonText}>{label}</Typography>
                {newIcon}
            </Button>
        );
    }
}

IconProgressButtonRaisedButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

export default withStyles(styles)(IconProgressButtonRaisedButton);
