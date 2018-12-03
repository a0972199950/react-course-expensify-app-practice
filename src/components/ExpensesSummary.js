import React from "react";
import getExpensesTotal from "../selectors/getExpensesTotal";
import getVisibleExpenses from "../selectors/getVisibleExpenses";
import { connect } from "react-redux";
import numeral from "numeral";


const ExpensesSummary = (props) => (
    <div>
        <h1>Viewing {props.expensesCount} expenses totalling {numeral(props.expensesTotal).format("$0,0")}</h1>
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