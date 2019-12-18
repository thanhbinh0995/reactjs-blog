import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

function ReactPagination(props) {
    const { page, pageCount, onPageClick } = props;

    return (
        <ReactPaginate
            previousLabel="Previous"
            nextLabel="Next"
            breakLabel={<span>...</span>}
            breakClassName="break-me"
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={onPageClick}
            containerClassName="pagination"
            subContainerClassName="pages pagination"
            activeClassName="active"
            forcePage={page}
        />
    );
}

const propTypes = {
    onPageClick: PropTypes.func,
    pageCount: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
};

const defaultProps = {
    onPageClick() {},
};

ReactPagination.propTypes = propTypes;
ReactPagination.defaultProps = defaultProps;

export default ReactPagination;
