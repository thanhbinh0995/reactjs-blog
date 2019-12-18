import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { homeStyle } from '../../assets/jss';
import { LoadingComponent, DefaultButton } from '../../common/components';
import { Header } from '../common';
import ListWhiskies from './ListWhiskies';

class WhiskyPage extends React.Component {
    constructor(props) {
        super(props);
        console.log('whisky page');
    }

    componentDidMount() {
        const { fetchWhiskies } = this.props;
        fetchWhiskies();
    }

    onPageClick = data => {
        const { fetchWhiskies } = this.props;
        const page = data.selected + 1;
        this.setState({ page }, () => {
            fetchWhiskies();
        });
    };

    render() {
        const { whiskies, inProgress, t } = this.props;
        return (
            <div>
                <Header
                    component="Home"
                    title="Clean Blog"
                    subheading="A Blog Theme by Start Bootstrap"
                />
                <h3 className="text-center pt-5">{t('Welcome to React Translation')}</h3>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {inProgress || !whiskies ? (
                                <LoadingComponent />
                            ) : (
                                <ListWhiskies whiskies={whiskies} />
                            )}
                            <div className="clearfix">
                                <DefaultButton>Order Posts</DefaultButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

WhiskyPage.propTypes = {
    whiskies: PropTypes.array,
    inProgress: PropTypes.bool,
    fetchWhiskies: PropTypes.func.isRequired,
};

WhiskyPage.defaultProps = {
    whiskies: [],
    inProgress: false,
};

export default withStyles(homeStyle)(withNamespaces('translations')(WhiskyPage));
