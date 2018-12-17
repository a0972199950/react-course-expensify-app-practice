import database from "../firebase/firebase";

// action for adding expense to redux state
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense   
});


// add expense to firebase
export const startAddExpense = ({ description = "", amount = 0, createdAt = 0, note = "" } = {}) => {
    const expense = { description, amount, createdAt, note };

    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
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
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};


// initialize expenses to redux state
export const setExpenses = (expenses) => ({
    type: "SET_EXPENSES",
    expenses
});


// fatch expenses from firebase
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;

        return database.ref(`users/${uid}/expenses`).once("value").then((snapshot) => {
            const expensesArray = [];

            snapshot.forEach((childSnapshot) => {
                expensesArray.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
    
            dispatch(setExpenses(expensesArray));
        });
    }
    
}


