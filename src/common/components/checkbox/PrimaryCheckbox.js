import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    label: {
        margin: 0,
    },
});

function PrimaryCheckbox(props) {
    const { label, classes, ...rest } = props;
    return (
        <FormControlLabel
            control={<Checkbox color="primary" {...rest} />}
            label={label}
            className={classes.label}
        />
    );
}

PrimaryCheckbox.propTypes = {
    classes: PropTypes.object.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.bool,
    label: PropTypes.string,
};

export default withStyles(styles)(PrimaryCheckbox);
