import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import { homeStyle } from '../../assets/jss';
import { LoadingComponent, DefaultButton } from '../../common/components';
import { Header } from '../common';
import ListArticles from './ListArticles';

// const LoadingComponent = React.lazy(() =>
//     import('../../common/components/loading/LoadingComponent')
// );

class HomePage extends React.Component {
    state = {
        page: 1,
    };

    componentWillMount() {
        const { loadArticles } = this.props;
        loadArticles();
    }

    onPageClick = data => {
        const { loadArticles } = this.props;
        const page = data.selected + 1;
        this.setState({ page }, () => {
            loadArticles();
        });
    };

    render() {
        const { page } = this.state;

        const { articles, inProgress, t } = this.props;
        // let pageCount = 0;
        // if (count) {
        //     pageCount = Math.ceil(count / NUMBER_RECORD_LIMIT);
        // }
        return (
            <div>
                <Header
                    component="Home"
                    title="Clean Blog"
                    subheading="A Blog Theme by Start Bootstrap"
                />
                <h3 className="text-center pt-5">{t('Welcome to React Translation')}</h3>
                <p>{page}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            {inProgress || !articles ? (
                                <LoadingComponent />
                            ) : (
                                <ListArticles articles={articles} />
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

HomePage.propTypes = {
    articles: PropTypes.array,
    inProgress: PropTypes.bool,
    loadArticles: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
    articles: [],
    inProgress: false,
};

export default withStyles(homeStyle)(withNamespaces('translations')(HomePage));
