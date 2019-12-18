import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { HeaderTableRow, MaterialTable, MaterialTableHolder } from '../../../common/components';
import UserTableBody from './UserTableBody';

const styles = () => ({
    avatar: {
        width: '100%',
    },
    selectStatus: {
        minWidth: 132,
    },
    fixedHeader: {
        position: 'sticky',
        top: 0,
        zIndex: 10,
    },
});

const columns = [
    {
        id: 'createdAt',
        numeric: false,
        hasSort: true,
        label: 'Created at',
        size: 'ex-medium-size',
    },
    {
        id: 'username',
        numeric: true,
        hasSort: true,
        label: 'Username',
        size: 'ex-large-size',
    },
    {
        id: 'displayName',
        numeric: true,
        hasSort: true,
        label: 'Display name',
        size: 'medium-size',
    },
    {
        id: 'avatarUrl',
        numeric: true,
        hasSort: true,
        label: 'Avatar',
        size: 'medium-size',
    },
    {
        id: 'role',
        hasSort: false,
        label: 'Role',
        size: 'medium-size',
    },
    {
        id: 'status',
        numeric: true,
        hasSort: true,
        label: 'Status',
        size: 'medium-size',
    },
    {
        id: 'action',
        numeric: true,
        hasSort: false,
        label: 'Action',
        size: 'medium-size',
    },
];

class UserTable extends Component {
    state = {
        order: 'desc',
        orderBy: 'createdAt',
    };

    onRequestSort = (_, newOrderBy) => {
        const { orderBy, order } = this.state;
        const newOrder = orderBy === newOrderBy && order === 'desc' ? 'asc' : 'desc';
        this.setState({ order: newOrder, orderBy: newOrderBy });
    };

    render() {
        const { order, orderBy } = this.state;
        const {
            onUserStatusChanged,
            onUserDetailClicked,
            onUserDetailUpdated,
            values,
            classes,
        } = this.props;
        console.log('values', values);

        return (
            <div className="table-list">
                <Scrollbars autoHide className="flex-1">
                    <MaterialTable>
                        <TableHead className={classes.fixedHeader}>
                            <HeaderTableRow
                                columns={columns}
                                order={order}
                                orderBy={orderBy}
                                onRequestSort={this.onRequestSort}
                            />
                        </TableHead>
                        <TableBody>
                            <UserTableBody
                                classes={classes}
                                order={order}
                                orderBy={orderBy}
                                values={values}
                                onUserStatusChanged={onUserStatusChanged}
                                onUserDetailClicked={onUserDetailClicked}
                                onUserDetailUpdated={onUserDetailUpdated}
                            />
                        </TableBody>
                    </MaterialTable>
                </Scrollbars>
            </div>
        );
    }
}

UserTable.propTypes = {
    values: PropTypes.array,
    onUserStatusChanged: PropTypes.func,
    onUserDetailClicked: PropTypes.func,
    onUserDetailUpdated: PropTypes.func,
};

UserTable.defaultProps = {};

export default withStyles(styles)(UserTable);
