import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWhiskies } from '../action-creators';
import WhiskyPage from '../_pages/whisky';

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            fetchWhiskies,
        },
        dispatch
    );

const mapStateToProps = state => ({
    ...state.whiskies,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WhiskyPage);
