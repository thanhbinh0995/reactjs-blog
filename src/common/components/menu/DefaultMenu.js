import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles/index';

const styles = {
    button: {
        fontSize: 14,
        textTransform: 'capitalize',
    },
    menu: {},
    menuItem: {
        fontSize: 13,
        textTransform: 'capitalize',
    },
};

class DefaultMenu extends React.Component {
    state = {
        anchorEl: null,
        defaultValue: this.props.defaultValue,
    };

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = e => {
        const env = e.target.textContent;
        this.setState({ anchorEl: null });
        if (env) {
            this.setState({ defaultValue: env });
            this.props.onChange(env);
        }
    };

    render() {
        const { anchorEl } = this.state;
        const { classes, color, items, stylesCSS, defaultValue } = this.props;

        return (
            <div style={stylesCSS}>
                <Button
                    aria-owns={anchorEl ? 'default-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                    className={classes.button}
                    style={{
                        color: color,
                    }}
                >
                    {defaultValue}
                </Button>
                <Menu
                    id="default-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >
                    {items.map((item, index) => {
                        return (
                            <MenuItem
                                onClick={this.handleClose}
                                key={index}
                                value={item.name}
                                className={classes.menuItem}
                            >
                                {item.name}
                            </MenuItem>
                        );
                    })}
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(DefaultMenu);
