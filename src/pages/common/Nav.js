import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import LoadingBar from 'react-redux-loading-bar';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { options } from '../../config/options';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    loadingBar: {
        zIndex: theme.zIndex.drawer + 2,
        height: 3,
        backgroundColor: 'red',
        position: 'absolute',
        top: 0,
    },
});

class Nav extends React.Component {
    state = {
        lang: options[0].value,
    };

    changeLanguage = event => {
        const { i18n } = this.props;
        const { value } = event.target;
        this.setState({
            lang: value,
        });
        i18n.changeLanguage(value);
    };

    render() {
        const { lang } = this.state;
        const { classes } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <LoadingBar updateTime={40} className={classes.loadingBar} />
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Start Bootstrap
                    </a>
                    <button
                        className="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menu
                        <i className="fa fa-bars" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/test">
                                    Test
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/whisky">
                                    Whisky
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <form className={classes.root} autoComplete="off">
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="age-simple">Language</InputLabel>
                            <Select
                                value={lang}
                                onChange={this.changeLanguage}
                                inputProps={{
                                    name: 'lang',
                                }}
                            >
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="fr">France</MenuItem>
                                <MenuItem value="de">Spain</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {};
}
export default connect(mapStateToProps)(withNamespaces('translations')(withStyles(styles)(Nav)));
