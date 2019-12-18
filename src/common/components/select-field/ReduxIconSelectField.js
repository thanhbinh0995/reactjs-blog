import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { Select } from 'redux-form-material-ui';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import classNames from 'classnames';
import { Field } from 'redux-form';
import { MENU_ICONS } from '../../../constants';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        marginLeft: 0,
        marginRight: 0,
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

class ReduxIconSelectField extends Component {
    render() {
        const {
            classes,
            items,
            name,
            readOnly,
            valueKey,
            label,
            fullWidth,
            disabledItems,
            color,
            ...props
        } = this.props;

        return (
            <FormControl
                className={classNames(classes.formControl, fullWidth && classes.fullWidth)}
            >
                <InputLabel>{label}</InputLabel>
                <Field
                    component={Select}
                    name={name}
                    inputProps={{
                        name,
                        readOnly,
                    }}
                    className={classes.select}
                    style={{
                        color,
                    }}
                    {...props}
                >
                    {items &&
                        items.length !== 0 &&
                        items.map((item, index) => (
                            <MenuItem
                                key={index}
                                className={classes.menuItem}
                                value={item[valueKey || 'id']}
                                disabled={
                                    disabledItems &&
                                    disabledItems.indexOf(item[valueKey || 'id']) !== -1
                                }
                            >
                                {MENU_ICONS[item[valueKey || 'id']]}{' '}
                                <span className="text-menu-icon">{item[valueKey || 'id']}</span>
                            </MenuItem>
                        ))}
                </Field>
            </FormControl>
        );
    }
}

ReduxIconSelectField.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    textKey: PropTypes.string,
    valueKey: PropTypes.string,
    textSecondKey: PropTypes.string,
    fullWidth: PropTypes.bool,
    label: PropTypes.string,
};

export default withStyles(styles)(ReduxIconSelectField);
