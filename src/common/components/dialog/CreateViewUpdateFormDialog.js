import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ProgressButton } from '../button/index';
import { COLOR } from '../../../constants';

const styles = theme => ({
    button: {
        minWidth: 130,
        margin: theme.spacing.unit,
    },
    buttonCancel: {
        marginBottom: theme.spacing.unit,
        marginTop: theme.spacing.unit,
    },
    dialogAction: {
        margin: 0,
        justifyContent: 'space-between',
    },
    actionContent: {
        overflowY: 'hidden',
        paddingBottom: 6,
        paddingRight: 20,
    },
    title: {
        fontWeight: 700,
    },
    buttonLeft: {
        marginLeft: 0,
    },
    buttonRight: {
        marginRight: 0,
    },
    buttonDelete: {
        backgroundColor: COLOR.RED,
        '&:hover': {
            backgroundColor: COLOR.RED,
        },
    },
    buttonView: {
        backgroundColor: COLOR.PRIMARY,
        '&:hover': {
            backgroundColor: COLOR.PRIMARY,
        },
    },
    submitContainer: {
        marginLeft: 'auto',
    },
});

function CreateViewUpdateFormDialog(props) {
    const {
        classes,
        open,
        onSubmit,
        title,
        onClose,
        children,
        labelCancel,
        labelSubmit,
        labelDelete,
        labelView,
        disabled,
        progress,
        onClickSubmit = () => null,
        isItemDisplay,
        onDelete,
        onView,
        inProgressDelete,
        progressDelete,
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
                        {isItemDisplay && (
                            <div className={classes.additionalContainer}>
                                <ProgressButton
                                    label={labelDelete}
                                    fullWidth={false}
                                    className={classNames(
                                        classes.button,
                                        classes.buttonLeft,
                                        classes.buttonDelete
                                    )}
                                    progress={inProgressDelete && progressDelete}
                                    disabled={disabled || inProgressDelete}
                                    onClick={onDelete}
                                />
                                <ProgressButton
                                    label={labelView}
                                    fullWidth={false}
                                    className={classNames(
                                        classes.button,
                                        classes.buttonLeft,
                                        classes.buttonView
                                    )}
                                    progress={false}
                                    disabled={disabled}
                                    onClick={onView}
                                />
                            </div>
                        )}
                        <div className={classes.submitContainer}>
                            <Button onClick={onClose} className={classNames(classes.buttonCancel)}>
                                {labelCancel}
                            </Button>
                            <ProgressButton
                                label={labelSubmit}
                                fullWidth={false}
                                className={classNames(classes.button, classes.buttonRight)}
                                disabled={disabled}
                                progress={progress}
                                type="submit"
                                onClick={onClickSubmit}
                            />
                        </div>
                    </DialogActions>
                </DialogContent>
            </form>
        </Dialog>
    );
}

CreateViewUpdateFormDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    title: PropTypes.string,
    onClose: PropTypes.func.isRequired,
    onView: PropTypes.func,
    onDelete: PropTypes.func,
    onSubmit: PropTypes.func.isRequired,
    labelCancel: PropTypes.string.isRequired,
    labelSubmit: PropTypes.string.isRequired,
    labelView: PropTypes.string,
    labelDelete: PropTypes.string,
    disabled: PropTypes.bool,
    progress: PropTypes.bool,
    isItemDisplay: PropTypes.bool,
    inProgressDelete: PropTypes.bool,
};

CreateViewUpdateFormDialog.defaultProps = {
    title: '',
    disabled: false,
    progress: false,
    inProgressDelete: false,
    isItemDisplay: false,
    onView: () => null,
    onDelete: () => null,
    labelView: '',
    labelDelete: '',
};

export default withStyles(styles)(CreateViewUpdateFormDialog);
