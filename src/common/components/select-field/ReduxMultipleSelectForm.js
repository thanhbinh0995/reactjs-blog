import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles/index';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';

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
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    itemSelected: {
        backgroundColor: '#f5faff !important',
    },
    iconSelected: {
        position: 'absolute',
        right: 10,
        top: 'calc(50% - 7.5px)',
        width: 15,
        height: 15,
        background: '#a4ff2a',
        borderRadius: '50%',
    },
});

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

class ReduxMultipleSelectForm extends React.Component {
    render() {
        const {
            classes,
            items,
            valueKey,
            textKey,
            label,
            name,
            handleDelete,
            disabledItems,
            value,
            ...rest
        } = this.props;
        return (
            <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor={name}>{label}</InputLabel>
                <Select
                    multiple
                    input={<Input id={name} name={name} />}
                    renderValue={selected => (
                        <div className={classes.chips}>
                            {selected.map(value => {
                                const labelSelect = items.find(
                                    item => item[valueKey || 'id'] === value
                                );
                                return (
                                    <Chip
                                        key={value}
                                        label={labelSelect[textKey || 'name']}
                                        className={classes.chip}
                                        onDelete={() => handleDelete(value)}
                                    />
                                );
                            })}
                        </div>
                    )}
                    MenuProps={MenuProps}
                    value={value || []}
                    {...rest}
                >
                    {items &&
                        items.map(item => (
                            <MenuItem
                                key={item[valueKey || 'id']}
                                value={item[valueKey || 'id']}
                                className={
                                    value.indexOf(item[valueKey || 'id']) !== -1
                                        ? classes.itemSelected
                                        : ''
                                }
                            >
                                {item[textKey || 'name']}
                                {value.indexOf(item[valueKey || 'id']) !== -1 && (
                                    <p className={classes.iconSelected} />
                                )}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
        );
    }
}

ReduxMultipleSelectForm.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    textKey: PropTypes.string,
    valueKey: PropTypes.string,
    textSecondKey: PropTypes.string,
    fullWidth: PropTypes.bool,
    label: PropTypes.string,
};

export default withStyles(styles, { withTheme: true })(ReduxMultipleSelectForm);
