import React from 'react';
import { RadioGroup } from 'redux-form-material-ui';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

const styles = theme => ({
    formControl: {
        display: 'inline-block',
    },
    group: {
        margin: `${theme.spacing.unit}px 0 0 0`,
        display: 'inline-block',
    },
    label: {
        paddingRight: 20,
    },
    errors: {
        color: '#f44336',
        marginTop: 0,
    },
});

function ReduxPrimaryRadio(props) {
    const { classes, label, children, errors, ...rest } = props;
    return (
        <FormControl className={classes.formControl}>
            {label && <FormLabel className={classes.label}>{label}</FormLabel>}
            <Field component={RadioGroup} color="primary" className={classes.group} {...rest}>
                {children}
            </Field>
            {errors && <FormHelperText className={classes.errors}>{errors}</FormHelperText>}
        </FormControl>
    );
}

ReduxPrimaryRadio.propTypes = {
    classes: PropTypes.object.isRequired,
    label: PropTypes.string,
};

export default withStyles(styles)(ReduxPrimaryRadio);
