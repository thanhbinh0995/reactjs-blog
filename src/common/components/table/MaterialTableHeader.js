import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { withNamespaces } from 'react-i18next';

const styles = ({ palette }) => ({
    headerTh: {
        color: palette.primary.main,
        border: `1px solid ${palette.primary.main}`,
        borderTop: 'none',
        borderBottom: 'none',
        whiteSpace: 'normal',
        textAlign: 'center',
        wordWrap: 'break-word',
        fontSize: 12,
        position: 'sticky',
        zIndex: 999,
        top: -2,
        fontWeight: 600
    },
    left: {
        textAlign: 'left'
    },
    right: {
        textAlign: 'right'
    },
    sortLabel: {
        fontSize: '0.875rem',
        color: palette.primary.main,
        '&:hover': {
            color: palette.primary.main
        },
        '&:focus': {
            color: palette.primary.main
        }
    },
    sortLabelActive: {
        color: palette.primary.main,
        fontWeight: 'bold'
    }
});

class MaterialTableHeader extends React.Component {
    createSortHandler = property => event => {
        const { onRequestSort } = this.props;
        onRequestSort(event, property);
    };

    render() {
        const { align, column, order, orderBy, classes, t } = this.props;

        return (
            <TableCell
                className={classnames(
                    classes.headerTh,
                    column.size || '',
                    align === 'left' ? classes.left : align === 'right' && classes.right,
                    !column.hasSort && classes.sortLabel
                )}
            >
                {column.hasSort ? (
                    <TableSortLabel
                        className={classes.sortLabel}
                        classes={{
                            active: classes.sortLabelActive
                        }}
                        active={column.hasSort && orderBy === column.id}
                        direction={order}
                        onClick={this.createSortHandler(column.id)}
                    >
                        {t(column.label)}
                    </TableSortLabel>
                ) : (
                    t(column.label)
                )}
            </TableCell>
        );
    }
}

MaterialTableHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    column: PropTypes.object.isRequired,
    align: PropTypes.string,
    order: PropTypes.string,
    orderBy: PropTypes.string,
    onRequestSort: PropTypes.func,
    t: PropTypes.func.isRequired
};

MaterialTableHeader.defaultProps = {
    align: 'center',
    order: 'desc',
    orderBy: '',
    onRequestSort: () => {}
};

export default withStyles(styles)(withNamespaces('translations')(MaterialTableHeader));
