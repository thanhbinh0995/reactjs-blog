import React from 'react';
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

function ReduxInput(props) {
    const { classes, ...rest } = props;
    return <Field component="input" type="text" {...rest} />;
}

export default withStyles(styles)(ReduxInput);
