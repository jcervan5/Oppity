import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';



const quotesReducer = (state = initialState.quotesReducer, action) => {
    switch(action.type) {
        case ActionType.GET_QUOTES_RESPONSE: {
            // '...' spread operator clones the state
            // lodash Object assign simply clones action.quotes into a new array.
            // The return object is a copy of state and overwrites the state.quotes with a fresh clone of action.quotes
            return {
                ...state,
                quotes: _.assign(action.quotes)
            };
        }


        default: { return state; }
    }
};



export default quotesReducer;
