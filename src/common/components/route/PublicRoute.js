// import React, { Component } from 'react';
// import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// // import { PageUrlPath } from '../../../constants';
// import { DivLoadingComponent } from '../loading';
// import { COMMON } from '../../../actions';
// // import { checkAuthenticated } from '../../../helpers';

// const mapDispatchToProps = dispatch => {
//     return {
//         onRedirectTo: to => {
//             return dispatch({ type: COMMON.REDIRECT_TO, to });
//         },
//     };
// };

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
//     component: function() {
//         return 'Not found';
//     },
// };

// class PublicRoute extends Component {
//     state = { isAuthenticated: false };

//     componentWillMount() {
//         const auth = checkAuthenticated();
//         if (auth.oauthToken) {
//             this.setState({
//                 isAuthenticated: true,
//             });
//             this.props.onRedirectTo(PageUrlPath.PRODUCT.path);
//         }
//     }

//     render() {
//         const { component, ...rest } = this.props;
//         const { isAuthenticated } = this.state;
//         document.title = rest.name;

//         return isAuthenticated ? (
//             <DivLoadingComponent />
//         ) : (
//             <Route
//                 {...rest}
//                 render={routeProps => {
//                     const finalProps = {
//                         routeProps,
//                         ...rest,
//                     };
//                     return React.createElement(component, finalProps);
//                 }}
//             />
//         );
//     }
// }

// PublicRoute.propTypes = propTypes;
// PublicRoute.defaultProps = defaultProps;

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(PublicRoute);
