import { firebase, googleAuthProvider, facebookAuthProvider } from "../firebase/firebase";

export const login = (uid, username) => ({
    type: "LOGIN",
    uid,
    username
});


export const startLogin = () => {
    return () => {
        firebase.auth().signInWithRedirect(googleAuthProvider);
    };
};

export const startLoginWithFacebook = () => {
    return () => {
        firebase.auth().signInWithPopup(facebookAuthProvider);
    }
}


export const logout = () => ({
    type: "LOGOUT"
});


export const startLogout = () => {
    return () => {
        firebase.auth().signOut();
    };
};