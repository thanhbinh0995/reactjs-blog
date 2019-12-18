import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import NotFoundPage from '../pages/notfound';
import { LoadingComponent } from '../common/components';

const Home = Loadable({
    loader: () => import('../container/HomeContainer'),
    loading: LoadingComponent,
});

const Article = Loadable({
    loader: () => import('../container/ArticleContainer'),
    loading: LoadingComponent,
});

const Whisky = Loadable({
    loader: () => import('../container/WhiskyContainer'),
    loading: LoadingComponent,
});

const Test = Loadable({
    loader: () => import('../container/TestContainer'),
    loading: LoadingComponent,
});

const TopLevelRoutes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/whisky" component={Whisky} />
        <Route exact path="/test" component={Test} />
        <Route path="/article/:id" component={Article} />
        <Route path="*" component={NotFoundPage} />
    </Switch>
);

export default TopLevelRoutes;
