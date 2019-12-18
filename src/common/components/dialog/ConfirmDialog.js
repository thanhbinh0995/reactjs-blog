import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import { ProgressButton } from '../button';

const styles = theme => ({
    button: {
        minWidth: 130,
    },
    buttonCancel: {
        marginBottom: theme.spacing.unit,
        marginTop: theme.spacing.unit,
    },
    dialogAction: {
        margin: 0,
        paddingRight: 20,
        paddingBottom: 6,
    },
    buttonRight: {
        marginRight: 0,
        marginLeft: theme.spacing.unit,
    },
    actionContent: {
        overflowY: 'hidden',
        paddingBottom: 6,
        paddingRight: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.3125rem',
        wordBreak: 'break-all',
    },
});

function ConfirmDialog(props) {
    const {
        classes,
        open,
        title,
        onClose,
        onConfirm,
        children,
        labelCancel,
        labelSubmit,
        disabled,
        progress,
        ...rest
    } = props;

    return (
        <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title" {...rest}>
            {title && (
                <DialogTitle id="form-dialog-title">
                    <Typography className={classes.title}>{title}</Typography>
                </DialogTitle>
            )}

            {children}
            <DialogActions className={classes.dialogAction}>
                <div className={classes.submitContainer}>
                    <Button onClick={onClose} className={classes.buttonCancel}>
                        {labelCancel}
                    </Button>
                    <ProgressButton
                        label={labelSubmit}
                        fullWidth={false}
                        className={classNames(classes.button, classes.buttonRight)}
                        disabled={disabled}
                        onClick={onConfirm}
                        progress={progress}
                    />
                </div>
            </DialogActions>
        </Dialog>
    );
}

ConfirmDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
    labelCancel: PropTypes.string.isRequired,
    labelSubmit: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    progress: PropTypes.bool,
};

ConfirmDialog.defaultProps = {
    title: '',
    disabled: false,
    progress: false,
};

export default withStyles(styles)(ConfirmDialog);
