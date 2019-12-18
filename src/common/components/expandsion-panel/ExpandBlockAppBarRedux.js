import AppBar from '@material-ui/core/AppBar';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import LessIcon from '@material-ui/icons/ExpandLess';
import MoreIcon from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { expandBlockAppBarReduxStyle } from '../../assets/jss';

class ExpandBlockAppBarRedux extends Component {
    state = {
        expand: false,
    };

    handleClick = () => {
        this.setState(state => {
            if (!state.expand) {
                const { onClick } = this.props;
                onClick();
            }
            return {
                expand: !state.expand,
            };
        });
    };

    render() {
        const { children, classes, leftBar, rightBar } = this.props;
        const { expand } = this.state;

        return (
            <div className={classes.main}>
                <AppBar
                    position="static"
                    classes={{
                        root: classes.appbar,
                    }}
                >
                    <Toolbar
                        classes={{
                            root: classes.toolbar,
                        }}
                    >
                        <div className={classes.leftBar}>{leftBar}</div>
                        <div>
                            {rightBar}
                            <IconButton
                                color="inherit"
                                className={classes.right}
                                onClick={this.handleClick}
                            >
                                {expand ? <LessIcon /> : <MoreIcon />}
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>

                <Collapse in={expand}>
                    <div
                        className={classNames(
                            classes.markdown,
                            expand ? classes.markdownExpand : classes.markdownRetracted
                        )}
                    >
                        {children}
                    </div>
                </Collapse>
            </div>
        );
    }
}

ExpandBlockAppBarRedux.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any,
    leftBar: PropTypes.any,
    rightBar: PropTypes.any,
    onClick: PropTypes.func,
};

ExpandBlockAppBarRedux.defaultProps = {
    children: '',
    leftBar: '',
    rightBar: '',
    onClick() {},
};

export default withStyles(expandBlockAppBarReduxStyle)(ExpandBlockAppBarRedux);
