import moment from "moment";

// get visible expenses
export default (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter(({description, createdAt}) => {
        const textMatch = description.includes(text);
        const startDateMatch = !startDate || moment(createdAt).isSameOrAfter(startDate, "date");
        const endDateMatch = !endDate || moment(createdAt).isSameOrBefore(endDate, "date");

        return textMatch && startDateMatch && endDateMatch;

    }).sort((a, b) => {
        switch(sortBy){
            case "amount":
                return (a.amount < b.amount) ? 1 : (a.amount > b.amount) ? -1 : 0;

            case "date":
                return (a.createdAt < b.createdAt) ? 1 : (a.createdAt > b.createdAt) ? -1 : 0;

            default:
                return 0;
        }
    })
}