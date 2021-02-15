import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { UserStyle } from './styles';
import { ProgressButton } from '../../../common/components';
import UserTable from './UserTable';

class UserPage extends Component {
    state = {
        isComfirmDialogShowing: false,
        user: null,
        page: 1,
        newStatus: '',
        rolesValue: [],
        isFormDialogShowing: false,
        isUserProfilesFormDialogShowing: false,
        isOpenFilterPanel: false,
        isDesktop: true,
        isShowPanelDesktop: false,
    };

    componentDidMount() {}

    showUserFormDialog = user => {};

    closeUserFormDialog = () => {};

    showUserProfilesFormDialog = user => {};

    closeUserProfilesFormDialog = () => {};

    onClickView = () => {};

    initPropsFilter = formValue => {};

    onPageClick = data => {};

    onFilterApplied = filterPayload => {};

    onChangeSelectStatus = (e, user) => {};

    onCloseDialogChangeStatus = () => {};

    onConfirmChangeStatus = () => {};

    onClickFilter = () => {};

    onCloseFilterPanel = () => {};

    toggleFilter = () => {};

    render() {
        const { classes } = this.props;
        const { page } = this.state;
        const users = [
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh 1', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh 2', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
            { username: 'Binh', displayName: 'Binh', createdAt: '44' },
        ];

        return (
            <div className="page page-content">
                <div className="flex height-100">
                    <div className={classNames(classes.grid, classes.tableContainer)}>
                        <div className={classes.titleContainer}>
                            <div className="inline-flex">ff</div>
                            <ProgressButton
                                label="Add new"
                                onClick={() => this.showUserFormDialog()}
                                progress={false}
                                className={classes.addBtn}
                            />
                        </div>
                        <UserTable
                            values={users}
                            isLoading={false}
                            page={page}
                            onUserDetailClicked={this.showUserProfilesFormDialog}
                            onUserDetailUpdated={this.showUserFormDialog}
                            onUserStatusChanged={this.onChangeSelectStatus}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

UserPage.propTypes = {
    users: PropTypes.array,
    roles: PropTypes.array,
    isLoading: PropTypes.bool,
    isSubmitting: PropTypes.bool,
    count: PropTypes.number,
};

UserPage.defaultProps = {
    users: [],
    roles: null,
    isLoading: false,
    isSubmitting: false,
    count: 0,
};

export default withStyles(UserStyle)(UserPage);
