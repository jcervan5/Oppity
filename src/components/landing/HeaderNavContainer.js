import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import AuthBtn from './auth';



export const HeaderNavContainer = ({apiCallsInProgress}) => {
    return (
        <nav className="navbar navbar-toggleable-sm bg-info navbar-inverse">
            <div className="container">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#mainNav">
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="mainNav">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" id="ys" exact activeClassName="active" to="/"><h3>Yaffa's Savory</h3></NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/quotes" ><h5>Quotes</h5></NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/event"><h5>Events</h5></NavLink>
                        <AuthBtn />
                    </div>
                </div>
            </div>
        </nav>


    );
};




HeaderNavContainer.propTypes = {
    apiCallsInProgress: PropTypes.number.isRequired
};



const mapStateToProps = state => ({
    apiCallsInProgress: state.apiReducer.apiCallsInProgress
});



export default connect(mapStateToProps)(HeaderNavContainer);
