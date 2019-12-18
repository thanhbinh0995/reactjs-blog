import React from 'react';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = () => ({});

function MaterialTable(props) {
    const { children, classes, ...rest } = props;
    return <Table {...rest}>{children}</Table>;
}

MaterialTable.propTypes = {
    classes: PropTypes.object.isRequired,
    children: PropTypes.any
};

MaterialTable.defaultProps = {
    children: ''
};

export default withStyles(styles)(MaterialTable);
