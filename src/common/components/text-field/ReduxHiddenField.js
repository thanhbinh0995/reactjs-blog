import React from 'react';
import { Field } from 'redux-form';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
    root: {
        display: 'none',
    },
});

function ReduxHiddenField(props) {
    const { classes, ...rest } = props;
    return <Field component="input" className={classes.root} {...rest} />;
}

export default withStyles(styles)(ReduxHiddenField);
