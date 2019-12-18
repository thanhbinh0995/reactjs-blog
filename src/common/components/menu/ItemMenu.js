import React from 'react';
import PropTypes from 'prop-types';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import Icon from '@material-ui/core/Icon';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { COLOR } from '../../../constants';

const styles = {
    main: {},
    menuItem: {
        fontSize: 16,
        color: COLOR.DEFAULT_TEXT,
        padding: 16,
    },
    menuItemSelected: {
        fontSize: 16,
        color: COLOR.DEFAULT_TEXT,
        backgroundColor: COLOR.DEFAULT,
        padding: 12,
    },
    iconItem: {
        fontSize: 24,
        color: 'rgba(0, 0, 0, 0.54)',
        marginRight: 24,
    },
    menuItemText: {
        padding: 0,
    },
    listItem: {
        fontSize: 'inherit',
        color: COLOR.DEFAULT_MENU_TEXT,
    },
    selected: {
        backgroundColor: `${COLOR.DEFAULT}!important`,
    },
    root: {
        color: COLOR.DEFAULT_TEXT,
        paddingTop: 10,
        paddingBottom: 10,
    },
    iconSelected: {
        color: COLOR.DEFAULT_TEXT,
    },
    menuItemTextSelected: {
        color: COLOR.DEFAULT_TEXT,
    },
    tooltip: {
        fontSize: 13,
    },
    gutters: {
        paddingLeft: 24,
        paddingRight: 24,
    },
};

function ItemMenu(props) {
    const { index, selectedIndex, icon, title, path, classes, onChangeMenuItem, isOpen } = props;

    return (
        <ListItem
            button
            selected={index === selectedIndex}
            onClick={() => onChangeMenuItem(path, index)}
            classes={{
                selected: classes.selected,
                focusVisible: classes.selected,
                root: classes.root,
                gutters: classes.gutters,
            }}
        >
            {isOpen ? (
                <ListItemIcon
                    className={classNames(
                        classes.iconItem,
                        index === selectedIndex && classes.iconSelected
                    )}
                >
                    <Icon>{icon}</Icon>
                </ListItemIcon>
            ) : (
                <Tooltip
                    title={<span className={classes.tooltip}>{title}</span>}
                    placement="right-end"
                >
                    <ListItemIcon
                        className={classNames(
                            classes.iconItem,
                            index === selectedIndex && classes.iconSelected
                        )}
                    >
                        <Icon>{icon}</Icon>
                    </ListItemIcon>
                </Tooltip>
            )}

            <ListItemText
                disableTypography
                className={classes.menuItemText}
                primary={
                    <Typography
                        className={classNames(
                            classes.listItem,
                            index === selectedIndex && classes.menuItemTextSelected
                        )}
                    >
                        {title}
                    </Typography>
                }
            />
        </ListItem>
    );
}

ItemMenu.propTypes = {
    onChangeMenuItem: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
};

ItemMenu.defaultProps = {
    path: '',
};

export default withStyles(styles)(ItemMenu);
