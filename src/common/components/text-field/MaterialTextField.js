import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';

const styles = theme => ({
    root: {
        margin: theme.spacing.unit,
        marginLeft: 0,
        marginRight: 0,
    },
});

function MaterialTextField(props) {
    const { classes, ...rest } = props;
    return <TextField fullWidth variant="outlined" classes={{ root: classes.root }} {...rest} />;
}

export default withStyles(styles)(MaterialTextField);
