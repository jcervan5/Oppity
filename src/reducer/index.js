import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import quotesReducer from './quotesReducer';
import selectedQuoteReducer from './selectedQuoteReducer';
import authorReducer from './authorReducer';
import apiReducer from './apiReducer';

export default combineReducers({
    quotesReducer,
    selectedQuoteReducer,
    authorReducer,
    apiReducer,
    form: formReducer
});
