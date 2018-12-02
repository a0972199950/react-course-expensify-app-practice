import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import ConfigureStore from "./store/ConfigureStore";
import { addExpense } from "./actions/expenses";
import { Provider } from "react-redux";
import moment from "moment";

// normalize.css是一長串某人寫好的，用來初始化所有瀏覽器預設樣式設定的css
import "normalize.css/normalize.css";

// 下方的import並非js code，而是scss code，
// 初始設定下webpack看不懂scss，他會認為這不是js而拋出error，
// 但藉由安裝node-scss, scss-loader並設定至webpack.config.js後，
// webpack就知道要用scss-loader把scss轉換成css後加進HTML的<style>裡
import "./styles/styles.scss";


const store = ConfigureStore();

// addExpense
const expense1 = store.dispatch(addExpense({
    description: "phone",
    note: "My new phone",
    amount: 10999,
    createdAt: moment(500)
}));

const expense2 = store.dispatch(addExpense({
    description: "dinner",
    note: "Dinner today",
    amount: 150,
    createdAt: moment(900)
}));

const expense3 = store.dispatch(addExpense({
    description: "dinner",
    note: "Dinner tomorrow",
    amount: 200,
    createdAt: moment(1000)
}));

const expense4 = store.dispatch(addExpense({
    description: "dinner",
    note: "Dinner yesterday",
    amount: 900,
    createdAt: moment(-50)
}));

const expense5 = store.dispatch(addExpense({
    description: "pc",
    note: "lg gram 15z980",
    amount: 43900,
    createdAt: moment(300)
}));




// provide a higher-ordered component to connect redux and react
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(jsx, document.getElementById("app"));

