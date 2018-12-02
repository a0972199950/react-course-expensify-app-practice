const expenseReducerDefaultData = [];

// expense reducer
export default (state = expenseReducerDefaultData, action) => {
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