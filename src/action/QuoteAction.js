import * as ActionType from './ActionType';
import QuoteApi from '../api/QuoteApi';
import { ApiCallBeginAction, ApiCallErrorAction } from './ApiAction';



export const getQuotesResponse = quotes => ({
    type: ActionType.GET_QUOTES_RESPONSE,
    quotes
});



export function getQuotesAction() {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return QuoteApi.getAllQuotes()
            .then(quotes => {
                dispatch(getQuotesResponse(quotes));
            }).catch(error => {
                throw error;
            });
    };
}



export const addNewQuoteResponse = () => ({
    type: ActionType.ADD_NEW_QUOTE_RESPONSE
});



export const updateExistingQuoteResponse = () => ({
    type: ActionType.UPDATE_EXISTING_QUOTE_RESPONSE
});



export function saveQuoteAction(quoteBeingAddedOrEdited) {
    return function (dispatch) {

        dispatch(ApiCallBeginAction());

        //if nameId exists, it means that the quote is being edited, therefore update it.
        //if nameId doesn't exist, it must therefore be new quote that is being added, therefore add it
        return QuoteApi.saveQuote(quoteBeingAddedOrEdited)
            .then(() => {
                if (quoteBeingAddedOrEdited.id) {
                    dispatch(updateExistingQuoteResponse());
                } else {
                    dispatch(addNewQuoteResponse());
                }
            }).then(() => {
                dispatch(getQuotesAction());
            }).catch(error => {
                dispatch(ApiCallErrorAction());
                throw (error);
            });
    };
}



export const getQuoteResponse = quoteFound => ({
    type: ActionType.GET_QUOTE_RESPONSE,
    quote: quoteFound
});



export function getQuoteAction(quoteId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return QuoteApi.getQuote(quoteId)
            .then(quote => {
                dispatch(getQuoteResponse(quote));
            }).catch(error => {
                throw error;
            });
    };
}



export const deleteQuoteResponse = () => ({
    type: ActionType.DELETE_QUOTE_RESPONSE
});



export function deleteQuoteAction(quoteId) {
    return (dispatch) => {

        dispatch(ApiCallBeginAction());

        return QuoteApi.deleteQuote(quoteId)
            .then(() => {
                dispatch(deleteQuoteResponse());
            }).then(() => {
                dispatch(getQuotesAction());
            }).catch(error => {
                throw error;
            });
    };
}
