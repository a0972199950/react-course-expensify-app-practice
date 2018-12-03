import React from "react";
import { Link } from "react-router-dom";
import numeral from "numeral";


const ExpenseListItem = ({ expense }) => {
    return (
        <div>
            <Link to={`edit/${expense.id}`}>
                <h3>{expense.description}</h3>
            </Link>
            
            <p>amount:{numeral(expense.amount).format("$0,0")} / date:{expense.createdAt.format("YYYY/MM/DD")}</p>
        </div>
    );
};

export default ExpenseListItem;