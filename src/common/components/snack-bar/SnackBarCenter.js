import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';

const styles = {
    snackBar: {
        textAlign: 'center',
        width: '100%',
    },
    text: {
        textAlign: 'center',
        width: '100%',
        fontSize: 14,
        padding: '0 15px',
    },
};

function SnackBarCenter(props) {
    const { classes, message, ...rest } = props;

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            classes={{
                root: classes.snackBar,
            }}
            open={message !== ''}
            autoHideDuration={10000}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={
                <span id="message-id" className={classes.text}>
                    {message}
                </span>
            }
            {...rest}
        />
    );
}

export default withStyles(styles)(SnackBarCenter);
