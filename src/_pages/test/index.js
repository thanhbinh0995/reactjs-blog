import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Sortable from 'react-anything-sortable';
import { homeStyle } from '../../assets/jss';
import SortableItem from './SortableItem';
import BasicExample from './BasicExample';
import Example1 from './Example1';
import UserPage from './users/UserPage';

class TestPage extends React.Component {
    state = {};

    handleSort = data => {
        console.log(data);
    };

    render() {
        return (
            <div style={{ marginTop: 79, width: '100vw' }}>
                <UserPage />
            </div>
        );
    }
}

TestPage.propTypes = {};

TestPage.defaultProps = {};

export default withStyles(homeStyle)(TestPage);
