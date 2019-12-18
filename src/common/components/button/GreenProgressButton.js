import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { COLOR } from '../../../constants';

const styles = {
    button: {
        backgroundColor: COLOR.DEFAULT,
        color: COLOR.DEFAULT_TEXT,
        fontSize: 14,
        '&:hover': {
            backgroundColor: COLOR.DEFAULT,
        },
        borderRadius: 4,
        marginRight: 16,
        paddingLeft: 32,
        paddingRight: 32,
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    },
    label: {
        color: COLOR.DEFAULT_TEXT,
        fontSize: 14,
    },
    iconProgress: {
        color: COLOR.DEFAULT_TEXT,
        position: 'absolute',
        right: 7,
        top: 'calc(50% - 12px)',
    },
};

function GreenProgressButton(props) {
    const {
        classes,
        progress = true,
        className = '',
        label,
        onClick,
        disabled,
        hideIcon,
        ...rest
    } = props;
    let progressIcon = '';

    if (progress && disabled && !hideIcon) {
        progressIcon = (
            <CircularProgress size={24} thickness={5} className={classes.iconProgress} />
        );
    }

    return (
        <Button
            variant="contained"
            onClick={onClick}
            className={`${classes.button} ${className}`}
            disabled={disabled}
            {...rest}
        >
            <Typography className={classes.label}>{label}</Typography>
            {progressIcon}
        </Button>
    );
}

export default withStyles(styles)(GreenProgressButton);
