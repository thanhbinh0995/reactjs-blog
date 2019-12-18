import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { COLOR } from '../../../constants';

const styles = {
    button: {
        backgroundColor: COLOR.DEFAULT,
        '&:hover': {
            backgroundColor: COLOR.DEFAULT,
        },
        marginRight: 10,
        width: '100%',
        minWidth: 85,
        paddingLeft: 0,
    },
    buttonText: {
        color: COLOR.DEFAULT_TEXT,
        fontSize: 12,
        paddingRight: 5,
        fontWeight: 600,
        userSelect: 'none',
    },
};

class LeftIconRaisedButton extends Component {
    render() {
        const { classes, label, icon, onClick } = this.props;
        return (
            <Button className={classes.button} onClick={onClick}>
                <Typography className={classes.buttonText}>{label}</Typography>
                {icon}
            </Button>
        );
    }
}

LeftIconRaisedButton.propTypes = {
    label: PropTypes.string,
    onClick: PropTypes.func,
};

export default withStyles(styles)(LeftIconRaisedButton);
