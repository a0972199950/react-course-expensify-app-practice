import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseFilters from "./ExpenseFilters";
import ExpensesSummary from "./ExpensesSummary";


const HomePage = () => (
    <div>
        <ExpensesSummary />
        <ExpenseFilters />
        <ExpenseList />
    </div>
)

export default HomePage;