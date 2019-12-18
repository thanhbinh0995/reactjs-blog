import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { COLOR } from '../../../constants';

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    button: {
        display: 'inline-block',
        textTransform: 'capitalize',
        borderRadius: 0,
        fontWeight: 700,
        borderRight: 'none',
    },
    buttonActive: {
        color: COLOR.WHITE,
        backgroundColor: COLOR.DEFAULT,
        '&:hover': {
            color: COLOR.WHITE,
            backgroundColor: COLOR.DEFAULT,
        },
        '&:active': {
            color: COLOR.WHITE,
            backgroundColor: COLOR.DEFAULT,
        },
        '&:focus': {
            color: COLOR.WHITE,
            backgroundColor: COLOR.DEFAULT,
        },
    },
    lastButton: {
        borderRight: '1px solid rgba(0, 0, 0, 0.23)',
    },
});

function Segmented(props) {
    const { classes, buttons, value, onChange, ...rest } = props;

    return (
        <div className={classes.root} {...rest}>
            {buttons.map((item, index) => {
                const classNameBtn = classNames(
                    classes.button,
                    item.id === value && classes.buttonActive,
                    index === buttons.length - 1 && classes.lastButton
                );
                return (
                    <Button
                        key={item.id}
                        variant="outlined"
                        className={classNameBtn}
                        onClick={() => onChange(item.id)}
                    >
                        {item.name}
                    </Button>
                );
            })}
        </div>
    );
}

Segmented.propTypes = {
    buttons: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(Segmented);
