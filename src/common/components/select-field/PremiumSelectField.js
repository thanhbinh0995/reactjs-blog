import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
    select: {
        fontSize: 15,
        minWidth: 200,
    },
    menuItem: {
        fontSize: 15,
    },
};

class PremiumSelectField extends Component {
    render() {
        const { classes, value, onChange, menuItems, ...props } = this.props;
        return (
            <Select value={value} onChange={onChange} className={classes.select} {...props}>
                {menuItems.length > 0 ? (
                    menuItems.map((item, index) => (
                        <MenuItem
                            key={`select-${index}`}
                            value={`${item.type} - ${item.plan}`}
                            className={classes.menuItem}
                        >
                            {item.type} - {item.plan}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem value="Please choose file to see detail" className={classes.menuItem}>
                        Please choose file to see detail
                    </MenuItem>
                )}
            </Select>
        );
    }
}

PremiumSelectField.propTypes = {
    classes: PropTypes.object.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
    menuItems: PropTypes.array,
};

export default withStyles(styles)(PremiumSelectField);
