import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { ConfirmDialog, MaterialTextField } from '../../common/components';

const styles = () => ({
    dialogContent: {
        paddingBottom: 8,
    },
    confirmText: {
        fontSize: '1rem',
        fontWeight: 'normal',
    },
});

class ConfirmTypingDialog extends React.Component {
    onConfirm = () => {
        const { onConfirmDialog, confirmText } = this.props;
        if (confirmText === 'YES') {
            onConfirmDialog();
        }
    };

    render() {
        const {
            classes,
            open,
            onClose,
            title,
            confirmText,
            labelCancel,
            labelSubmit,
            disabled,
            onChange,
            onConfirmDialog,
            ...rest
        } = this.props;

        return (
            <ConfirmDialog
                open={open}
                onClose={onClose}
                onConfirm={this.onConfirm}
                title={title}
                labelCancel={labelCancel}
                labelSubmit={labelSubmit}
                fullWidth
                disabled={disabled}
                {...rest}
            >
                <DialogContent className={classes.dialogContent}>
                    <Typography className={classes.confirmText} gutterBottom>
                        {`Please type "YES" to confirm.`}
                    </Typography>
                    <MaterialTextField value={confirmText} onChange={onChange} />
                </DialogContent>
            </ConfirmDialog>
        );
    }
}

ConfirmTypingDialog.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    confirmText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    labelCancel: PropTypes.string.isRequired,
    labelSubmit: PropTypes.string.isRequired,
    onConfirmDialog: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(ConfirmTypingDialog);
