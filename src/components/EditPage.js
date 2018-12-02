import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense } from "../actions/expenses";

const EditPage = (props) => {
    const expenseToEdit = props.expenses.find((expense) => {
        return expense.id === props.match.params.id
    })
    return (
        <div>
            <ExpenseForm 
                expenseToEdit={expenseToEdit} 
                onSubmit={(expenseToEdit) => {
                    props.dispatch(editExpense(props.match.params.id, expenseToEdit));
                    props.history.push("/");
                }}
            />
        </div>
    );
};

const mapStateToProps = (state) => ({
    expenses: state.expenses
})

export default connect(mapStateToProps)(EditPage);