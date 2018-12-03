import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { editExpense, removeExpense } from "../actions/expenses";

class EditPage extends React.Component {
    onSubmit = (expenseToEdit) => {
        this.props.editExpense(this.props.match.params.id, expenseToEdit);
        this.props.history.push("/");
    }

    onDeleteExpense = () => {
        this.props.removeExpense(this.props.match.params.id);
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
    editExpense: (id, updates) => {
        dispatch(editExpense(id, updates));
    },

    removeExpense: (id) => {
        dispatch(removeExpense(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);