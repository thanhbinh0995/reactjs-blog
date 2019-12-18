import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles/index';
import PropTypes from 'prop-types';
import React from 'react';

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
    },
    listItem: {
        paddingLeft: 16,
    },
});

function SelectFieldMaterial(props) {
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
        <TextField select className={classes.textField} variant="outlined" value="" {...rest}>
            {items && items.length !== 0 ? (
                items.map((item, index) => {
                    let primaryText = item[textKey];
                    primaryText += textSecondKey ? ` (${item[textSecondKey]})` : '';
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
            {advancedData && (
                <List className={classes.list}>
                    <ListItem
                        className={classes.listItem}
                        onClick={() => onClickAdvanced(advancedData)}
                    >
                        Advanced
                    </ListItem>
                </List>
            )}
        </TextField>
    );
}

SelectFieldMaterial.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    textKey: PropTypes.string,
    valueKey: PropTypes.string,
    textSecondKey: PropTypes.string,
};

SelectFieldMaterial.defaultProps = {
    textKey: 'name',
    valueKey: 'id',
    textSecondKey: '',
};

export default withStyles(styles)(SelectFieldMaterial);
