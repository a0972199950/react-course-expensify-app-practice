import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { SingleDatePicker } from "react-dates";
import 'react-dates/lib/css/_datepicker.css';


class ExpenseForm extends React.Component{
    state = {
        description: this.props.expenseToEdit ? this.props.expenseToEdit.description : "",
        amount: this.props.expenseToEdit ? this.props.expenseToEdit.amount : "",
        createdAt: this.props.expenseToEdit ? this.props.expenseToEdit.createdAt : moment(),
        note: this.props.expenseToEdit ? this.props.expenseToEdit.note : "",
        error: "",
        calendarFocused: false
    }

    onDescriptionChange = (event) => {
        const description = event.target.value;
        this.setState(() => ({
            description
        }));
    }

    onAmountChange = (event) => {
        const amount = event.target.value;
        if(amount.match(/^\d*(\.{0,0})?$/)){
            this.setState(() => ({
                amount
            }))
        }
    }

    onDateChange = (createdAt) => {
        this.setState(() => ({
            createdAt
        }))
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({
            calendarFocused: focused
        }))
    }

    onNoteChange = (event) => {
        const note = event.target.value;
        this.setState(() => ({
            note
        }))
    }

    onSubmit = (event) => {
        // 阻止表單提交
        event.preventDefault();

        // 解構物件
        const {description, amount, createdAt, note} = this.state;

        // 檢查必填資料
        if(!description || !amount){
            this.setState(() => ({
                error: "Pleace fill out description and amount"
            }));
        } else{
            this.setState(() => ({
                error: ""
            }));

            // dispatch表單
            this.props.onSubmit({
                description,
                amount,
                createdAt,
                note
            });
        }        
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="description" 
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />

                    <input 
                        type="text" 
                        placeholder="amount" 
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />

                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <textarea 
                        placeholder="note"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>

                    <button>{this.props.expenseToEdit ? "Edit Expense" : "Add Expense"}</button>

                </form>
            </div>
        );        
    }
}

export default connect()(ExpenseForm);