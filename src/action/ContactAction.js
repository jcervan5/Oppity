import * as ActionType from './ActionType';
import ContactApi from '../api/ContactApi';
import { ApiCallBeginAction } from './ApiAction';


export const getContactsResponse = contacts => ({
    type: ActionType.GET_CONTACTS_RESPONSE,
    contacts
});



export function getContactsAction() {
    return dispatch => {

        dispatch(ApiCallBeginAction());

        return ContactApi.getAllContacts()
            .then(contacts => {
                dispatch(getContactsResponse(contacts));
            }).catch(error => {
                throw error;
            });
    };
}
