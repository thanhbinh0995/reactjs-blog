import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    dialog: {
        padding: 15,
    },
    dialogTitle: {
        width: '30vw',
        paddingBottom: 0,
    },
    dialogAction: {
        display: 'inline-block',
        paddingLeft: 20,
        paddingBottom: 6,
        paddingRight: 20,
        textAlign: 'right',
    },
};

function CloseDialog(props) {
    const { classes, open, title, onClose, children, labelCancel, ...rest } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            classes={{
                paper: classes.dialog,
            }}
            {...rest}
        >
            <DialogTitle id="form-dialog-title">{title}</DialogTitle>
            {children}
            <DialogActions className={classes.dialogAction}>
                <Button onClick={onClose} color="primary">
                    {labelCancel}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default withStyles(styles)(CloseDialog);
