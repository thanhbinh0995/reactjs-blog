import React from 'react';
import ReactTable from 'react-table';
import PropsType from 'prop-types';

const getNoDataProps = props => ({
    loading: props.loading,
});

const NoDataComponent = props => {
    const { children, loading } = props;
    return loading ? null : <div className="rt-noData">{children}</div>;
};

NoDataComponent.propTypes = {
    children: PropsType.any.isRequired,
    loading: PropsType.any.isRequired,
};

function TableReact(props) {
    const {
        data,
        columns,
        filterable = false,
        onFilteredChange,
        onSortedChange,
        onClickRow,
        ...rest
    } = props;

    return (
        <ReactTable
            data={data}
            columns={columns}
            filterable={filterable}
            onFilteredChange={onFilteredChange}
            onSortedChange={onSortedChange}
            className="react-table -striped -highlight"
            getNoDataProps={getNoDataProps}
            NoDataComponent={NoDataComponent}
            {...rest}
        />
    );
}

export default TableReact;
