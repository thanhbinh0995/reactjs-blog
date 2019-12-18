import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import Nav from './pages/common/Nav';
import Footer from './pages/common/Footer';
import Routes from './routes';

class AppPage extends Component {
    state = {};

    render() {
        return (
            <div className="app-container">
                <Nav />
                <main>
                    <Routes />
                </main>
                <Footer />
            </div>
        );
    }
}

AppPage.propTypes = {};

AppPage.defaultProps = {};

export default withRouter(withNamespaces('translations')(AppPage));
