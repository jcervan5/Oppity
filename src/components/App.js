import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotFound from './common/PageNotFound';
import Home from './landing/Home';
import QuoteListContainer from './quote/QuoteListContainer';
import AddOrEditQuoteContainer from './quote/AddOrEditQuoteContainer';
import EditQuote from './quote/editQuote';
import Events from './event';
import createBrowserHistory from 'history/createBrowserHistory';
import HeaderNavContainer from './landing/HeaderNavContainer'; 


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
                        <Route path="/event" component={Events} />
                        <Route path="/edit" component={EditQuote} />
                        <Route component={PageNotFound} />
                    </Switch>

                </div>

            </Router>
        </div>
    );
};


export default App;
