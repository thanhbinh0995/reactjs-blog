import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TestPage from '../_pages/test';

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
const mapStateToProps = state => ({
    ...state.articles,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TestPage);
