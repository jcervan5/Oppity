import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import QuoteListContainer from './quote/QuoteListContainer'; // eslint-disable-line import/no-named-as-default
import AddOrEditQuoteContainer from './quote/AddOrEditQuoteContainer'; // eslint-disable-line import/no-named-as-default
import Events from './Events';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; // eslint-disable-line import/no-named-as-default



const history = createBrowserHistory();


const App = () => {
    return (
        <div >
            <Router history={history}>
                <div>

                    <HeaderNavContainer />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/quotes" component={QuoteListContainer} />
                        <Route exact path="/quote" component={AddOrEditQuoteContainer} />
                        <Route path="/quote/:id" component={AddOrEditQuoteContainer} />
                        <Route path="/events" component={Events} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;
