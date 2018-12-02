import uuid  from "uuid";

// addExpense
export const addExpense = ({
    description = "",
    note = "",
    amount = 0,
    createdAt = 0
} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }    
});

// editExpense
export const editExpense = (id = undefined, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

// removeExpense
export const removeExpense = (id = undefined) => ({
    type: "REMOVE_EXPENSE",
    id
});