import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles/index';
import PropTypes from 'prop-types';
import React from 'react';
import { Field } from 'redux-form';
import { TextField } from 'redux-form-material-ui';

const styles = theme => ({
    menuItem: {
        paddingTop: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    textField: {
        margin: theme.spacing.unit,
        marginLeft: 0,
        marginRight: 0,
    },
    list: {
        padding: 0,
        width: '100%',
    },
});

function ReduxSelectFormAdvanced(props) {
    const {
        classes,
        items,
        valueKey,
        textKey,
        textSecondKey,
        disabledItems,
        advancedData,
        onClickAdvanced,
        ...rest
    } = props;
    return (
        <Field
            select
            component={TextField}
            className={classes.textField}
            variant="outlined"
            value=""
            {...rest}
        >
            {items && items.length !== 0 ? (
                items.map((item, index) => {
                    let primaryText = item[textKey];
                    primaryText += textSecondKey ? ` (${item[textSecondKey]})` : '';
                    if (index === items.length - 1) {
                        return (
                            <MenuItem
                                key={index}
                                className={classes.menuItem}
                                value={item[valueKey]}
                            >
                                <List className={classes.list}>
                                    <ListItem
                                        className={classes.list}
                                        onClick={() => onClickAdvanced(advancedData)}
                                    >
                                        {primaryText}
                                    </ListItem>
                                </List>
                            </MenuItem>
                        );
                    }
                    return (
                        <MenuItem
                            key={index}
                            className={classes.menuItem}
                            value={item[valueKey]}
                            disabled={
                                item.isDefault ||
                                (disabledItems && disabledItems.indexOf(item[valueKey]) !== -1)
                            }
                        >
                            {primaryText}
                        </MenuItem>
                    );
                })
            ) : (
                <MenuItem className={classes.menuItem} value="" />
            )}
        </Field>
    );
}

ReduxSelectFormAdvanced.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    textKey: PropTypes.string,
    valueKey: PropTypes.string,
    textSecondKey: PropTypes.string,
};

ReduxSelectFormAdvanced.defaultProps = {
    textKey: 'name',
    valueKey: 'id',
    textSecondKey: '',
};

export default withStyles(styles)(ReduxSelectFormAdvanced);
