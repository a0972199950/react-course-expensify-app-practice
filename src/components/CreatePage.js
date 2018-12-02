import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

const CreatePage = (props) => (
    <div>
        <ExpenseForm onSubmit={(expenseToAdd) => {
            props.dispatch(addExpense(expenseToAdd));
            props.history.push("/");
        }}/>
    </div>
);

export default connect()(CreatePage);