import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles/index';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/DeleteOutline';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { ConfirmDialog, MaterialTextField } from '../../common/components';

const styles = () => ({});

class ConfirmDeleteButton extends React.Component {
    state = {
        open: false,
        confirm: '',
        submit: false,
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.success && prevState.submit) {
            return {
                submit: false,
                open: false,
                confirm: '',
            };
        }
        return null;
    }

    onCloseDialogDelete = () => {
        this.setState({
            open: false,
            confirm: '',
        });
    };

    onClickDelete = () => {
        const { isCofirm, onConfirm } = this.props;
        if (isCofirm) {
            this.setState({
                open: true,
            });
        } else {
            onConfirm();
        }
    };

    onConfirmDelete = () => {
        const { onConfirm } = this.props;
        const { confirm } = this.state;
        if (confirm === 'YES') {
            this.setState({ submit: true }, () => {
                onConfirm();
            });
        }
    };

    handleChange = event => {
        this.setState({ confirm: event.target.value });
    };

    render() {
        const {
            classes,
            inProgress,
            className,
            onConfirm,
            title,
            isCofirm,
            success,
            ...rest
        } = this.props;
        const { open, confirm } = this.state;

        return (
            <React.Fragment>
                <IconButton
                    color="inherit"
                    onClick={this.onClickDelete}
                    className={classNames(className)}
                    {...rest}
                >
                    <DeleteIcon />
                </IconButton>
                <ConfirmDialog
                    open={open}
                    onClose={this.onCloseDialogDelete}
                    onConfirm={this.onConfirmDelete}
                    title={title}
                    labelCancel="Cancel"
                    labelSubmit="Delete"
                    fullWidth
                    disabled={inProgress}
                >
                    <DialogContent>
                        <Typography gutterBottom variant="h6">
                            {`Please type "YES" to confirm.`}
                        </Typography>
                        <MaterialTextField value={confirm} onChange={this.handleChange} />
                    </DialogContent>
                </ConfirmDialog>
            </React.Fragment>
        );
    }
}

ConfirmDeleteButton.propTypes = {
    classes: PropTypes.object.isRequired,
};

ConfirmDeleteButton.defaultProps = {};

export default withStyles(styles)(ConfirmDeleteButton);
