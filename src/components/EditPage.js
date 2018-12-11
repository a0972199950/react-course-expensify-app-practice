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
                <ExpenseForm 
                    expenseToEdit={this.props.expenseToEdit} 
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onDeleteExpense}>DELETE</button>
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