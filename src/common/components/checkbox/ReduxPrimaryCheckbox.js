import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import { Checkbox } from 'redux-form-material-ui';
import { COLOR } from '../../../constants';

const styles = theme => ({
    labelField: {
        margin: '3px auto',
        position: 'relative',
    },
    root: {
        color: COLOR.WHITE,
        '&$checked': {
            color: COLOR.WHITE,
        },
        '&$disabledCheckbox': {
            color: COLOR.DISABLED_ICON,
        },
    },
    disabledCheckbox: {},
    checked: {},
    label: {},
    disabled: {},
});

function ReduxPrimaryCheckbox(props) {
    const { label, classes, labelPlacement = 'end', ...rest } = props;

    return (
        <FormControlLabel
            control={
                <Field
                    component={Checkbox}
                    classes={{
                        root: classes.root,
                        checked: classes.checked,
                        disabled: classes.disabledCheckbox,
                    }}
                    color="primary"
                    {...rest}
                />
            }
            label={label}
            classes={{
                root: classes.labelField,
                label: classes.label,
                disabled: classes.disabled,
            }}
            labelPlacement={labelPlacement}
        />
    );
}

ReduxPrimaryCheckbox.propTypes = {
    classes: PropTypes.object.isRequired,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.bool,
    label: PropTypes.string,
};

export default withStyles(styles)(ReduxPrimaryCheckbox);
