import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as quoteAction from '../../action/QuoteAction';
import * as contactAction from '../../action/ContactAction';
import QuoteForm from './QuoteForm'; // eslint-disable-line import/no-named-as-default
import { contactsFormattedForDropdown } from '../../selectors/selectors'; // eslint-disable-line import/no-named-as-default


export class AddOrEditQuoteContainer extends React.Component {


    constructor() {
        super();
        this.handleSave = this.handleSave.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }



    componentDidMount() {
        this.props.action.getQuoteAction(this.props.match.params.id)
            .catch(error => {
                toastr.error(error);
            });

        this.props.action.getContactsAction()
            .catch(error => {
                toastr.error(error);
            });
    }



    handleSave(values) {
        const quote = {
            id: values.id,
            title: values.title,
            date: values.date,
            status: values.status
        };

        this.props.action.saveQuoteAction(quote)
            .then(() => {
                toastr.success('Quote saved');
                this.props.history.push('/quotes');
            }).catch(error => {
                toastr.error(error);
            });
    }



    handleCancel(event) {
        event.preventDefault();
        this.props.history.replace('/quotes');
    }



    render() {
        const { initialValues } = this.props;
        const heading = initialValues && initialValues.id ? 'Edit' : 'Add';

        return (
            <div className="container">
                <QuoteForm
                    heading={heading}
                    contacts={this.props.contacts}
                    handleSave={this.handleSave}
                    handleCancel={this.handleCancel}
                    initialValues={this.props.initialValues}
                />
            </div>
        );
    }
}



const mapStateToProps = (state, ownProps) => {
    const quoteId = ownProps.match.params.id; //from the path '/quote/:id'

    if (quoteId && state.selectedQuoteReducer.quote && quoteId === state.selectedQuoteReducer.quote.id) {
        return {
            initialValues: state.selectedQuoteReducer.quote,
            contacts: contactsFormattedForDropdown(state.contactReducer.contacts)
        };
    } else {
        return {
            contacts: contactsFormattedForDropdown(state.contactReducer.contacts)
        };
    }
};



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators({ ...contactAction, ...quoteAction }, dispatch)
});



AddOrEditQuoteContainer.propTypes = {
    action: PropTypes.object.isRequired,
    history: PropTypes.object,
    contacts: PropTypes.array,
    initialValues: PropTypes.object,
    match: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(AddOrEditQuoteContainer);
