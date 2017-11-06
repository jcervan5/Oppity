import React, { PropTypes } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom'



const getCaret = direction => {
    if (direction === 'asc') {
        return (
            <span> <i className="fa fa-sort-asc" aria-hidden="true"/></span>
        );
    }

    if (direction === 'desc') {
        return (
            <span> <i className="fa fa-sort-desc" aria-hidden="true"/></span>
        );
    }

    return (
        <span> <i className="fa fa-sort" aria-hidden="true" /></span>
    );
};



const titleFormatter = (cell, row) => {
  return <Link to={'/edit/' + row.id}>{cell}</Link>
};



class QuoteList extends React.Component {

    constructor(props) {
        super(props);

        this.options = {
            sortIndicator: true,
            noDataText: 'No data'
        };

        this.selectRowProp = {
            mode: 'radio',
            bgColor: '#c1f291',
            onSelect: props.handleRowSelect,
            clickToSelect: true,
            hideSelectColumn: true
        };
    }



    render() {
      console.log(this.props.quotes);

        return (
            <BootstrapTable data={this.props.quotes}  selectRow={this.selectRowProp}  options={this.options} bordered={false} striped hover condensed>
                <TableHeaderColumn dataField="id" isKey hidden>Id</TableHeaderColumn>

                <TableHeaderColumn
                    dataField="title"
                    dataFormat={titleFormatter}
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Title
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="date"
                    dataSort={true}
                    caretRender={getCaret}
                    columnTitle
                >
                    Date
                </TableHeaderColumn>

                <TableHeaderColumn
                    dataField="status"
                    dataSort={true}
                    caretRender={getCaret}
                    filter={{type: 'TextFilter', delay: 0 }}
                    columnTitle
                >
                    Status
                </TableHeaderColumn>
            </BootstrapTable>
        );
    }

}



QuoteList.propTypes = {
    quotes: PropTypes.array.isRequired,
    handleRowSelect: PropTypes.func.isRequired
};



export default QuoteList;
