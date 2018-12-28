import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";
import moment from "moment";


const ExpenseListItem = ({ expense }) => {
    return (
        <Link className="list-item" to={`edit/${expense.id}`}>
            <div>
                <h3 className="list-item__title">{expense.description}</h3>
                <span className="list-item__sub-title">{moment(expense.createdAt).format("YYYY/MM/DD")}</span>
            </div>

            <div className="list-item__data">
                <h3 className="list-item__data">{numeral(expense.amount).format("$0,0")}</h3>
            </div>
            
        </Link>

    );
};

export default ExpenseListItem;