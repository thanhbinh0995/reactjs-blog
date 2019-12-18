import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import Icon from '@material-ui/core/Icon';
import { COLOR } from '../../../constants';

const styles = theme => ({
    button: {
        display: 'inline-block',
        marginRight: theme.spacing.unit,
    },
    deleteIcon: {
        color: COLOR.RED,
    },
});

function AddViewUpdateDeleteButton(props) {
    const {
        onSave,
        onView,
        onUpdate,
        onDelete,
        onAdd,
        disabledUpdate,
        disabledDelete,
        disabledSave,
        disabledAdd,
        children,
        classes,
    } = props;

    return (
        <div className="action">
            {onSave && (
                <Tooltip title="Save">
                    <div className={classes.button}>
                        <Button variant="outlined" onClick={onSave} disabled={disabledSave}>
                            <Icon>save</Icon>
                        </Button>
                    </div>
                </Tooltip>
            )}
            {onView && (
                <Tooltip title="View">
                    <div className={classes.button}>
                        <Button variant="outlined" onClick={onView}>
                            <Icon>remove_red_eye</Icon>
                        </Button>
                    </div>
                </Tooltip>
            )}
            {onUpdate && (
                <Tooltip title="Edit">
                    <div className={classes.button}>
                        <Button variant="outlined" onClick={onUpdate} disabled={disabledUpdate}>
                            <Icon>edit</Icon>
                        </Button>
                    </div>
                </Tooltip>
            )}
            {onDelete && (
                <Tooltip title="Delete">
                    <div className={classes.button}>
                        <Button variant="outlined" onClick={onDelete} disabled={disabledDelete}>
                            <Icon className={classes.deleteIcon}>delete_forever</Icon>
                        </Button>
                    </div>
                </Tooltip>
            )}
            {onAdd && (
                <Tooltip title="Add">
                    <div className={classes.button}>
                        <Button variant="outlined" onClick={onAdd} disabled={disabledAdd}>
                            <Icon>add_circle</Icon>
                        </Button>
                    </div>
                </Tooltip>
            )}
            {children}
        </div>
    );
}

AddViewUpdateDeleteButton.propTypes = {
    classes: PropTypes.object.isRequired,
    onView: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onAdd: PropTypes.func,
    onSave: PropTypes.func,
    disabledUpdate: PropTypes.bool,
    disabledDelete: PropTypes.bool,
    disabledSave: PropTypes.bool,
    disabledAdd: PropTypes.bool,
    children: PropTypes.any,
};

AddViewUpdateDeleteButton.defaultProps = {
    disabledUpdate: false,
    disabledDelete: false,
    disabledSave: false,
    disabledAdd: false,
    onView: null,
    onUpdate: null,
    onDelete: null,
    onAdd: null,
    onSave: null,
    children: null,
};

export default withStyles(styles)(AddViewUpdateDeleteButton);
