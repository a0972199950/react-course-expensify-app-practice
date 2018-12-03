import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/getVisibleExpenses";

const ExpenseList = (props) => {
    return (
        <div>
            {props.expenses.length === 0 && (
                <p>No expenses exist.</p>
            )}
            {props.expenses.map((expense) => {
                return <ExpenseListItem key={expense.id} expense={expense} />
            })}
        </div>
    )
};


const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});


export default connect(mapStateToProps)(ExpenseList);