import {createStore, combineReducers} from "redux";
import uuid from "uuid";

// addExpense
const addExpense = ({
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
const editExpense = (id = undefined, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

// removeExpense
const removeExpense = (id = undefined) => ({
    type: "REMOVE_EXPENSE",
    id
});

// setTextFilter
const setTextFilter = (text = "") => ({
    type: "SET_TEXT_FILTER",
    text
});

// sortByAmount
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT"
});

// sortByDate
const sortByDate = () => ({
    type: "SORT_BY_DATE"
});

// setStartDate
const setStartDate = (startDate = undefined) => ({
    type: "SET_START_DATE",
    startDate
});

// setEndDate
const setEndDate = (endDate = undefined) => ({
    type: "SET_END_DATE",
    endDate
});


// default data
const expenseReducerDefaultData = [];
const filterReducerDefaultData = {
    text: "rent",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
};


// expense reducer
const expenseReducer = (state = expenseReducerDefaultData, action) => {
    switch(action.type){
        case "ADD_EXPENSE":
            return [
                ...state,
                action.expense
            ];

        case "EDIT_EXPENSE":
            return state.map((expense) => {
                return (expense.id !== action.id) ? expense : {
                    ...expense, 
                    ...action.updates
                };
            });

        case "REMOVE_EXPENSE":
            return state.filter((expense) => {
                return expense.id !== action.id;
            });

        default:
            return state;
    };
};

// filter reducer
const filterReducer = (state = filterReducerDefaultData, action) => {
    switch(action.type){
        case "SET_TEXT_FILTER":
            return {
                ...state,
                text: action.text
            };

        case "SORT_BY_AMOUNT":
            return {
                ...state,
                sortBy: "amount"
            };

        case "SORT_BY_DATE":
            return {
                ...state,
                sortBy: "date"
            };

        case "SET_START_DATE":
            return {
                ...state,
                startDate: action.startDate
            };

        case "SET_END_DATE":
            return {
                ...state,
                endDate: action.endDate
            };

        default:
            return state;
    };
};


// combined reducer
const store = createStore(combineReducers({
    expenses: expenseReducer,
    filter: filterReducer
}));


// get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(({description, createdAt}) => {
        const textMatch = description.includes(text);
        const startDateMatch = !startDate || createdAt >= startDate;
        const endDateMatch = !endDate || createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch;

    }).sort((a, b) => {
        switch(sortBy){
            case "amount":
                return (a.amount < b.amount) ? -1 : (a.amount > b.amount) ? 1 : 0;

            case "date":
                return (a.createdAt < b.createdAt) ? -1 : (a.createdAt > b.createdAt) ? 1 : 0;

            default:
                return 0;
        }
    })
}

// subscribe
store.subscribe(() => {
    const expenses = store.getState().expenses;
    const filter = store.getState().filter;
    console.log(getVisibleExpenses(expenses, filter));
});


// addExpense
const expense1 = store.dispatch(addExpense({
    description: "phone",
    note: "My new phone",
    amount: 10999,
    createdAt: 500
}));

const expense2 = store.dispatch(addExpense({
    description: "dinner",
    note: "Dinner today",
    amount: 150,
    createdAt: 900
}));

const expense3 = store.dispatch(addExpense({
    description: "dinner",
    note: "Dinner tomorrow",
    amount: 200,
    createdAt: 1000
}));

const expense4 = store.dispatch(addExpense({
    description: "dinner",
    note: "Dinner yesterday",
    amount: 900,
    createdAt: -50
}));

const expense5 = store.dispatch(addExpense({
    description: "pc",
    note: "lg gram 15z980",
    amount: 43900,
    createdAt: 300
}));

// editExpense
// store.dispatch(editExpense(expense1.expense.id, {
//     description: "honer NOTE10",
//     amount: 12500
// }));

// removeExpense
// store.dispatch(removeExpense(expense2.expense.id));

// setTextFilter
store.dispatch(setTextFilter(""));

// sortByAmount
// store.dispatch(sortByAmount());

// sortByDate
store.dispatch(sortByDate());

// setStartDate
// store.dispatch(setStartDate(-1000));

// setEndDate
// store.dispatch(setEndDate(910));


const demoState = {
    expenses: [
        {
        id: "dskjfddsadf",
        description: "November Rent",
        note: "This was ths final payment for that address",
        amount: 15000,
        createdAt: 0
        }
    ],

    filters: {
        text: "rent",
        sortBy: "amount", // date or amount
        startDate: undefined,
        endDate: undefined
    }    
};