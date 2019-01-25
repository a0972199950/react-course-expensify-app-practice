import React from "react";
import { connect } from "react-redux";
import { startLogin, startLoginWithFacebook } from "../actions/auth";


const LoginPage = (props) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p className="box-layout__subtitle">記帳也可以很簡單</p>

            <button className="button-login button-login--google" onClick={() => {
                props.startLogin();
            }}>
                <img src="/images/sign-in-with-google.png" alt=""/>
            </button>

            <button className="button-login" onClick={() => {
                props.startLoginWithFacebook();
            }}>
                <img src="/images/sign-in-with-facebook.png" alt=""/>
            </button>
        </div>
        
    </div>
);


const mapDispatchToProps = (dispatch) => ({
    startLogin: () => { 
        dispatch(startLogin()); 
    },

    startLoginWithFacebook: () => {
        dispatch(startLoginWithFacebook());
    }
});


export default connect(undefined, mapDispatchToProps)(LoginPage);