import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { COLOR } from '../../../constants';
import { COMMON } from '../../../actions';

const styles = {
    link: {
        display: 'inline-block',
        textTransform: 'capitalize',
        padding: '0 4px',
        minHeight: 32,
        borderRadius: 0,
        marginBottom: 4,
        fontWeight: 700,
    },
    linkActive: {
        color: COLOR.DEFAULT,
    },
    separator: {
        padding: '0 4px',
        fontSize: 16,
    },
};

function Breadcrumb(props) {
    const { classes, breadcrumb, onRedirectTo } = props;

    return (
        <div>
            {breadcrumb.map((item, index) => {
                if (index === breadcrumb.length - 1) {
                    return (
                        <Button
                            key={index}
                            className={classNames(classes.link, classes.linkActive)}
                            onClick={() => onRedirectTo(item.path)}
                        >
                            {item.title}
                        </Button>
                    );
                }
                return (
                    <React.Fragment key={index}>
                        <Button className={classes.link} onClick={() => onRedirectTo(item.path)}>
                            {item.title}
                        </Button>
                        <span className={classes.separator}>/</span>
                    </React.Fragment>
                );
            })}
        </div>
    );
}

Breadcrumb.propTypes = {
    classes: PropTypes.object.isRequired,
    breadcrumb: PropTypes.array,
    onRedirectTo: PropTypes.func.isRequired,
};

Breadcrumb.defaultProps = {
    breadcrumb: [],
};

const mapDispatchToProps = dispatch => ({
    onRedirectTo: to => dispatch({ type: COMMON.REDIRECT_TO, to }),
});

function mapStateToProps() {
    return {};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(Breadcrumb));
