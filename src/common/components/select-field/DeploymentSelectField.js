import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { convertDefaultDateTime } from '../../../helpers';

const styles = {
    select: {
        fontSize: 15,
        minWidth: 100,
        marginLeft: 15,
        textAlign: 'center',
    },
    menuItem: {
        fontSize: 15,
    },
};

class DeploymentSelectField extends Component {
    render() {
        const { classes, value, onChange, menuItems, ...props } = this.props;

        return (
            <Select value={value} onChange={onChange} className={classes.select}>
                {menuItems &&
                    menuItems.length > 0 &&
                    menuItems.map((item, index) => (
                        <MenuItem key={index} value={item.id} className={classes.menuItem}>
                            {convertDefaultDateTime(item.version)}
                        </MenuItem>
                    ))}
            </Select>
        );
    }
}

DeploymentSelectField.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    menuItems: PropTypes.array,
};

export default withStyles(styles)(DeploymentSelectField);
