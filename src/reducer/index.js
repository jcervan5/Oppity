import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import quotesReducer from './quotesReducer';
import selectedQuoteReducer from './selectedQuoteReducer';
import contactReducer from './contactReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    quotesReducer,
    selectedQuoteReducer,
    contactReducer,
    apiReducer,
    form: formReducer
});
