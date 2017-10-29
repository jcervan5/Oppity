import * as ActionType from '../action/ActionType';
import initialState from './initialState';


const contactReducer = (state = initialState.contactReducer, action) => {
    switch(action.type) {
        case ActionType.GET_CONTACTS_RESPONSE:
            return {...state, contacts: Object.assign([], action.contacts)};

        default: return state;
    }
};


export default contactReducer;
