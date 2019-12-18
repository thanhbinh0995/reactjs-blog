import React from 'react';
import { TextField } from 'redux-form-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        width: '100%',
        marginLeft: 0,
        marginRight: 0,
    },
});

function ReduxTextField(props) {
    const { classes, ...rest } = props;
    return (
        <Field component={TextField} className={classes.formControl} variant="outlined" {...rest} />
    );
}

export default withStyles(styles)(ReduxTextField);
