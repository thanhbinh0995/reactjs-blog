import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import React from 'react';
import MaterialTableHeader from './MaterialTableHeader';

const styles = () => ({
    headerTr: {
        border: 'none',
        backgroundColor: '#FFFFFF',
    },
});

function HeaderTableRow(props) {
    const { classes, columns, ...rest } = props;
    return (
        <TableRow className={classes.headerTr}>
            {columns.map((column, index) => (
                <MaterialTableHeader key={index} column={column} {...rest} />
            ))}
        </TableRow>
    );
}

HeaderTableRow.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.array.isRequired,
};

export default withStyles(styles)(HeaderTableRow);
