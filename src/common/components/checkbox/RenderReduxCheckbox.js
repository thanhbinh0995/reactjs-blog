import React from 'react';
import { Checkbox } from 'redux-form-material-ui';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const styles = () => ({});

function ReduxPrimaryCheckbox(props) {
    const { label, ...rest } = props;
    return (
        <FormControlLabel
            control={<Field component={Checkbox} color="primary" {...rest} />}
            label={label}
        />
    );
}

ReduxPrimaryCheckbox.propTypes = {
    label: PropTypes.string,
};

export default withStyles(styles)(ReduxPrimaryCheckbox);
