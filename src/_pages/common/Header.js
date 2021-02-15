import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../../../public/image/contact-bg.jpg';
import About from '../../../public/image/about-bg.jpg';
import Home from '../../../public/image/home-bg.jpg';

class Header extends React.Component {
    state = {};

    render() {
        let bg;
        const { component, title, subheading } = this.props;
        switch (component) {
            case 'Home':
                bg = Home;
                break;
            case 'About':
                bg = About;
                break;
            case 'Contact':
                bg = Contact;
                break;
            default:
                bg = Home;
                break;
        }
        return (
            <header className="masthead" style={{ backgroundImage: `url(${bg})` }}>
                <div className="overlay" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="page-heading">
                                <h1>{title}</h1>
                                <span className="subheading">{subheading}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

Header.propTypes = {
    component: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
};

export default Header;
