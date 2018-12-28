import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import { Link } from "react-router-dom"
import getExpensesTotal from "../selectors/getExpensesTotal";
import getVisibleExpenses from "../selectors/getVisibleExpenses";



const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">Viewing <span>{props.expensesCount}</span> expenses totalling <span>{numeral(props.expensesTotal).format("$0,0")}</span></h1>
        
            <div className="page-header__actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>        
    </div>    
)


const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }
    
};


export default connect(mapStateToProps)(ExpensesSummary);