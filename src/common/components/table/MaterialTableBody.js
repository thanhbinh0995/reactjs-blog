import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const styles = ({ palette }) => ({
    main: {
        border: `1px solid ${palette.primary.main}`,
        borderTop: 'none',
        wordWrap: 'break-word',
        whiteSpace: 'normal',
        textAlign: 'center',
        padding: 8,
        color: palette.primary.main
    },
    left: {
        textAlign: 'left'
    },
    right: {
        textAlign: 'right'
    },
    textNewLine: {
        margin: 0,
        textTransform: 'capitalize'
    }
});

function MaterialTableBody(props) {
    const { size, align, hasNewLine, classes } = props;
    let { data } = props;
    if (hasNewLine && data) {
        data = data.split('\n').map((item, i) => (
            <p className={classes.textNewLine} key={i}>
                {item}
            </p>
        ));
    }

    return (
        <td
            className={classnames(
                classes.main,
                size,
                data && align === 'left' ? classes.left : align === 'right' && classes.right
            )}
        >
            {!data ? '-' : data}
        </td>
    );
}

MaterialTableBody.propTypes = {
    classes: PropTypes.object.isRequired,
    size: PropTypes.string,
    align: PropTypes.string,
    hasNewLine: PropTypes.bool,
    data: PropTypes.any
};

MaterialTableBody.defaultProps = {
    size: '',
    align: 'center',
    data: '',
    hasNewLine: false
};

export default withStyles(styles)(MaterialTableBody);
