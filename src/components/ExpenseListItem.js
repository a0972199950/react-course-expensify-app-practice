import React from "react";
import { Link } from "react-router-dom";


const ExpenseListItem = ({ expense }) => {
    return (
        <div>
            <Link to={`edit/${expense.id}`}>
                <h3>{expense.description}</h3>
            </Link>
            
            <p>amount:{expense.amount} / date:{expense.createdAt.format("YYYY/MM/DD")}</p>
        </div>
    );
};

export default ExpenseListItem;