import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from "../actions/filters";
import { DateRangePicker } from "react-dates";

class ExpenseFilters extends React.Component{
    state = {
        calendarFocused: null
    }

    onTextChange = (event) => {
        const text = event.target.value;        
        this.props.dispatch(setTextFilter(text));
    }

    onSortByChange = (event) => {
        const sortBy = event.target.value;

        if(sortBy === "date"){
            this.props.dispatch(sortByDate());
        } else if(sortBy === "amount"){
            this.props.dispatch(sortByAmount());
        }
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({
            calendarFocused
        }))
    }

    render(){
        return (
            <div>
                <input 
                    type="text" 
                    placeholder="search" 
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />

                <select 
                    defaultValue={this.props.filters.sortBy}
                    onChange={this.onSortByChange}
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>

                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />

            </div>
        )
        
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseFilters);