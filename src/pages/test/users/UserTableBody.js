import PropTypes from 'prop-types';
import React from 'react';
import { MaterialTableBody, MaterialTableRow } from '../../../common/components';
import { getSorting, stableSort } from '../../../helpers';

function UserTableBody(props) {
    const { values, order, orderBy } = props;
    console.log('fd', values);

    return stableSort(values, getSorting(order, orderBy)).map((item, index) => {
        return (
            <MaterialTableRow key={index} odd={index % 2 !== 0}>
                <MaterialTableBody data={item.createdAt} size="ex-medium-size" />
                <MaterialTableBody data={item.username} align="left" size="ex-large-size" />
                <MaterialTableBody data={item.displayName} align="left" size="medium-size" />
                <MaterialTableBody data="avatar" size="medium-size" />
                <MaterialTableBody data="Test Role" align="left" size="medium-size" />
                <MaterialTableBody data="Test" size="medium-size" />
                <MaterialTableBody data="Crud" size="medium-size" />
            </MaterialTableRow>
        );
    });
}

UserTableBody.propTypes = {
    classes: PropTypes.object,
    order: PropTypes.string,
    orderBy: PropTypes.string,
    values: PropTypes.array,
};

UserTableBody.defaultProps = {};

export default UserTableBody;
