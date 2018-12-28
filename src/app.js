import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import ConfigureStore from "./store/ConfigureStore";
import { Provider } from "react-redux";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";
import { startSetExpenses } from "./actions/expenses";
import LoadingPage from "./components/LoadingPage";

// normalize.css是一長串某人寫好的，用來初始化所有瀏覽器預設樣式設定的css
import "normalize.css/normalize.css";

// 下方的import並非js code，而是scss code，
// 初始設定下webpack看不懂scss，他會認為這不是js而拋出error，
// 但藉由安裝node-scss, scss-loader並設定至webpack.config.js後，
// webpack就知道要用scss-loader把scss轉換成css後加進HTML的<style>裡
import "./styles/styles.scss";


const store = ConfigureStore();

// provide a higher-ordered component to connect redux and react
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById("app"));
        hasRendered = true;
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById("app"));



firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log("log in");
        store.dispatch(login(user.uid));

        store.dispatch(startSetExpenses()).then(() => {
            renderApp();
        });
        


    } else{
        console.log("log out");
        store.dispatch(logout());

        renderApp();

    }
});






