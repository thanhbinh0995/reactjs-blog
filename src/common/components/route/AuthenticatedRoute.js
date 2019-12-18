// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { COMMON } from '../../../actions';
// import { PageUrlPath } from '../../../constants';
// import { DivLoadingComponent } from '../loading';

// const mapDispatchToProps = dispatch => ({
//     onRedirectTo: (to, currentPath) => dispatch({ type: COMMON.REDIRECT_TO, to, currentPath }),
// });

// function mapStateToProps(state, ownProps) {
//     return {
//         isAuthenticated: state.common.isAuthenticated,
//         appLoad: state.common.appLoad,
//     };
// }

// const propTypes = {
//     path: PropTypes.string.isRequired,
//     component: PropTypes.func.isRequired,
// };

// const defaultProps = {
//     path: '',
//     component() {
//         return 'Not found';
//     },
// };

// class AuthenticatedRoute extends Component {
//     componentDidUpdate(prevProps) {
//         if (!this.props.isAuthenticated && this.props.appLoad) {
//         }
//     }

//     render() {
//         const { component: Component, isAuthenticated, ...rest } = this.props;
//         document.title = rest.name;

//         if (isAuthenticated) {
//             return <Route {...rest} render={props => <Component {...props} />} />;
//         }
//         return <DivLoadingComponent />;
//     }
// }

// AuthenticatedRoute.propTypes = propTypes;
// AuthenticatedRoute.defaultProps = defaultProps;

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(AuthenticatedRoute);
