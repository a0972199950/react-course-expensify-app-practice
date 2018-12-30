import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpenses from "../selectors/getVisibleExpenses";

const ExpenseList = (props) => {
    return (
        <div className="list">
            <div className="content-container">

                <div className="list-header">
                    <div className="show-for-desktop">明細</div>
                    <div className="show-for-desktop">金額</div>
                    <div className="show-for-mobile">明細</div>
                </div>

                <div>                    
                    {props.expenses.length === 0 && (
                        <div className="list-item list-item--message">
                            <span>選取條件內沒有任何花費</span>
                        </div>
                    )}
                    {props.expenses.map((expense) => {
                        return <ExpenseListItem key={expense.id} expense={expense} />
                    })}
                </div>

            </div>
        </div>
    )
};


const mapStateToProps = (state) => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});


export default connect(mapStateToProps)(ExpenseList);