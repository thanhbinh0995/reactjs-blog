import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TestPage from '../pages/test';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
const mapStateToProps = state => {
    return {
        ...state.articles,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestPage);
