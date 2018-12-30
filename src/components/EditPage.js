import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "../actions/expenses";

class EditPage extends React.Component {
    onSubmit = (expenseToEdit) => {
        this.props.startEditExpense(this.props.match.params.id, expenseToEdit);
        this.props.history.push("/");
    }

    onDeleteExpense = () => {
        this.props.startRemoveExpense(this.props.match.params.id);
        this.props.history.push("/");
    }

    render(){
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">編輯明細</h1>
                    </div>
                </div>

                <div className="content-container">
                    <ExpenseForm 
                        expenseToEdit={this.props.expenseToEdit} 
                        onSubmit={this.onSubmit}
                        onDeleteExpense={this.onDeleteExpense}
                    />

                </div>
            </div>
        )
        
    };
};

const mapStateToProps = (state, props) => ({
    expenseToEdit: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch) => ({
    startEditExpense: (id, updates) => {
        dispatch(startEditExpense(id, updates));
    },

    startRemoveExpense: (id) => {
        dispatch(startRemoveExpense(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);