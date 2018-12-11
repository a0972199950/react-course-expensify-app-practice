import database from "../firebase/firebase";

// action for adding expense to redux state
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense   
});


// add expense to firebase
export const startAddExpense = ({ description = "", amount = 0, createdAt = 0, note = "" } = {}) => {
    const expense = { description, amount, createdAt, note };

    return (dispatch) => {
        database.ref("expenses").push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};


// action for removing expense to redux state
export const removeExpense = (id = undefined) => ({
    type: "REMOVE_EXPENSE",
    id
});


// remove expense from firebase
export const startRemoveExpense = (id = undefined) => {
    return (dispatch) => {
        database.ref("expenses/" + id).remove().then(() => {
            dispatch(removeExpense(id));
        });
    };
};


// action for editting expense to redux state
export const editExpense = (id = undefined, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});


// edit expense from firebase
export const startEditExpense = (id, updates) => {
    return (dispatch) => {
        database.ref("expenses/" + id).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};


