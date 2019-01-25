import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import { Link } from "react-router-dom"
import getExpensesTotal from "../selectors/getExpensesTotal";
import getVisibleExpenses from "../selectors/getVisibleExpenses";



const ExpensesSummary = (props) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header__title">嗨，{props.username}。您正在檢視 <span>{props.expensesCount}</span> 筆花費，總共 <span>{numeral(props.expensesTotal).format("$0,0")}</span>元</h1>
            {props.invisibleExpensesCount ? (
                <h3 className="page-header__title">已隱藏 <span>{props.invisibleExpensesCount}</span> 筆花費</h3>
            ) : (
                <h3 className="page-header__title">無隱藏花費</h3>
            )}
            

            <div className="page-header__actions">
                <Link className="button" to="/create">新增花費</Link>
            </div>
        </div>        
    </div>    
)


const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    const totalExpenses = state.expenses.length;

    return {
        expensesCount: visibleExpenses.length,
        invisibleExpensesCount: totalExpenses - visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses),
        username: state.auth.username
    }
    
};


export default connect(mapStateToProps)(ExpensesSummary);