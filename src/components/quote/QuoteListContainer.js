import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import toastr from 'toastr';
import * as quoteAction from '../../action/QuoteAction';
import QuoteList from './QuoteList';



export class QuoteListContainer extends React.Component {

    constructor() {
        super();

        this.state = {selectedQuoteId: undefined};

        this.handleAddQuote = this.handleAddQuote.bind(this);
        this.handleEditQuote = this.handleEditQuote.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleRowSelect = this.handleRowSelect.bind(this);
    }


    componentDidMount() {
        this.props.action.getQuotesAction()
            .catch(error => {
                toastr.error(error);
            });
    }



    handleAddQuote() {
        this.props.history.push('/quote');
    }



    handleEditQuote() {
        const selectedQuoteId = this.state.selectedQuoteId;

        if (selectedQuoteId) {
            this.setState({selectedQuoteId: undefined});
            this.props.history.push(`/quote/${selectedQuoteId}`);
        }
    }



    handleDelete() {
        const selectedQuoteId = this.state.selectedQuoteId;

        if (selectedQuoteId) {
            this.setState({selectedQuoteId: undefined});
            this.props.action.deleteQuoteAction(selectedQuoteId)
                .catch(error => {
                    toastr.error(error);
                });
        }
    }



    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({selectedQuoteId: row.id});
        }
    }



    render() {
        const { quotes } = this.props;

        if (!quotes) {
            return (
                <div>Loading...</div>
            );
        }

        return (
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col">
                        <h1>Quotes</h1>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col">
                        <div className="btn-group" role="group">
                            <button
                                type="button"
                                className="btn btn-outline-primary"
                                onClick={this.handleAddQuote}
                            >
                                <i className="fa fa-plus" aria-hidden="true"/> New
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline-warning ml-2"
                                onClick={this.handleEditQuote}
                            >
                                <i className="fa fa-pencil" aria-hidden="true"/> Edit
                            </button>

                            <button
                                type="button"
                                className="btn btn-outline-success ml-2"
                                onClick={this.handleDelete}
                            >
                                <i className="fa fa-trash-o" aria-hidden="true" onClick={this.handleDelete}/> Delete
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <QuoteList quotes={quotes} handleRowSelect={this.handleRowSelect}/>
                    </div>
                </div>
            </div>
        );
    }
}



const mapStateToProps = state => ({
    quotes: state.quotesReducer.quotes
});



const mapDispatchToProps = dispatch => ({
    action: bindActionCreators(quoteAction, dispatch)

});



QuoteListContainer.propTypes = {
    quotes: PropTypes.array,
    action: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};



export default connect(mapStateToProps, mapDispatchToProps)(QuoteListContainer);
