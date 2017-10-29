import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';


const selectedQuoteReducer = (state = initialState.selectedQuoteReducer, action) => {
    switch(action.type) {

        case ActionType.GET_QUOTE_RESPONSE: {
            return {
                ...state,
                quote: _.assign(action.quote)
            };
        }


        default: { return state; }
    }
};


export default selectedQuoteReducer;
