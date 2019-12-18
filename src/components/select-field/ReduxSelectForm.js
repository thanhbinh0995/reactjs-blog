import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import { Select } from 'redux-form-material-ui';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles/index';
import { Field } from 'redux-form';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const styles = theme => ({
    formControl: {
        margin: '12px 0 0',
    },
    fullWidth: {
        width: '100%',
    },
    select: {
        fontSize: 15,
        minWidth: '100%',
        marginBottom: '10px',
    },
    menuItem: {
        color: 'rgba(0, 0, 0, 0.87)',
        paddingTop: '5px',
        paddingBottom: '5px',
        fontSize: 15,
    },
});

function ReduxSelectForm(props) {
    const {
        classes,
        items,
        fullWidth,
        valueKey,
        textKey,
        label,
        name,
        readOnly = false,
        textSecondKey,
        disabledItems,
        ...rest
    } = props;
    return (
        <FormControl className={classNames(classes.formControl, fullWidth && classes.fullWidth)}>
            <InputLabel>{label}</InputLabel>
            <Field
                component={Select}
                name={name}
                inputProps={{
                    name,
                    readOnly,
                }}
                className={classes.select}
                {...rest}
            >
                {items &&
                    items.length !== 0 &&
                    items.map((item, index) => {
                        let primaryText = item[textKey];
                        primaryText += textSecondKey ? ` (${item[textSecondKey]})` : '';
                        return (
                            <MenuItem
                                key={index}
                                className={classes.menuItem}
                                value={item[valueKey]}
                                disabled={
                                    disabledItems && disabledItems.indexOf(item[valueKey]) !== -1
                                }
                            >
                                {primaryText}
                            </MenuItem>
                        );
                    })}
            </Field>
        </FormControl>
    );
}

ReduxSelectForm.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    textKey: PropTypes.string,
    valueKey: PropTypes.string,
    textSecondKey: PropTypes.string,
    fullWidth: PropTypes.bool,
    label: PropTypes.string,
};

ReduxSelectForm.defaultProps = {
    textKey: 'name',
    valueKey: 'id',
    textSecondKey: null,
    fullWidth: null,
    label: null,
};

export default withStyles(styles)(ReduxSelectForm);
