import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import { ProgressButton } from '../button/index';

const styles = () => ({
    button: {
        minWidth: 130,
    },
    dialogAction: {
        margin: 0,
    },
    actionContent: {
        overflowY: 'hidden',
        paddingBottom: 6,
        paddingRight: 20,
    },
    title: {
        fontWeight: 700,
    },
});

function ConfirmFormDialog(props) {
    const {
        classes,
        open,
        onSubmit,
        title,
        onClose,
        children,
        labelCancel,
        labelSubmit,
        disabled,
        progress,
        onClickSubmit = () => null,
        ...rest
    } = props;

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="alert-dialog-title" {...rest}>
            <form onSubmit={onSubmit}>
                {title && (
                    <DialogTitle id="alert-dialog-title" className={classes.title}>
                        {title}
                    </DialogTitle>
                )}
                {children}
                <DialogContent className={classes.actionContent}>
                    <DialogActions className={classes.dialogAction}>
                        <Button onClick={onClose}>{labelCancel}</Button>
                        <ProgressButton
                            label={labelSubmit}
                            fullWidth={false}
                            className={classes.button}
                            disabled={disabled}
                            progress={progress}
                            type="submit"
                            onClick={onClickSubmit}
                        />
                    </DialogActions>
                </DialogContent>
            </form>
        </Dialog>
    );
}

ConfirmFormDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    labelCancel: PropTypes.string.isRequired,
    labelSubmit: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    progress: PropTypes.bool,
};

ConfirmFormDialog.defaultProps = {
    title: '',
    disabled: false,
    progress: false,
};

export default withStyles(styles)(ConfirmFormDialog);
