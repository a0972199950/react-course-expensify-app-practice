import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

const CreatePage = (props) => (
    <div>
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">新增花費</h1>
            </div>
        </div>

        <div className="content-container">
            <ExpenseForm onSubmit={(expenseToAdd) => {
                props.dispatch(startAddExpense(expenseToAdd));
                props.history.push("/");
            }}/>
        </div>
        
    </div>
);

export default connect()(CreatePage);