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
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input 
                            className="text-input"
                            type="text" 
                            placeholder="搜尋" 
                            value={this.props.filters.text}
                            onChange={this.onTextChange}
                        />
                    </div>

                    <div className="input-group__item">
                        <select 
                            className="select"
                            defaultValue={this.props.filters.sortBy}
                            onChange={this.onSortByChange}
                        >
                            <option value="date">按日期先後排序</option>
                            <option value="amount">按費用多寡排序</option>
                        </select>
                    </div>

                    <div className="input-group__item">
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
                    
                </div>

            </div>
        )
        
    }
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

export default connect(mapStateToProps)(ExpenseFilters);