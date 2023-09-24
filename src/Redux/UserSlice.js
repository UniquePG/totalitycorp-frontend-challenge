import {  createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";


const initialState = {
    userData: {}
}


const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        SignupForm: (state, action)=> {
            console.log("signup slice: ", action);
            const user = action.payload 
            state.userData = user;
            localStorage.setItem("firstname", user.firstname)
            localStorage.setItem("lastname", user.lastname)
            localStorage.setItem("email", user.email)
            localStorage.setItem("phone", user.phone)
            localStorage.setItem("password", user.password)
            localStorage.setItem("image", user.previewImg)
            toast.success("user data saved in localstorage successfully")
        },
        LoginForm : (state, action)=> {
            const islogin = action.payload;
            console.log("login reducer ", islogin);
            state.userData = {...state.userData, isLoggedIn: islogin}

            localStorage.setItem("isLoggedIn", islogin)

            toast.success("Logged in successfully!")
        },
        LogoutUser: (state) => {
            state.userData = {}
            localStorage.clear();
        }
    }

})

export const { SignupForm, LoginForm, LogoutUser } = UserSlice.actions;
export default UserSlice.reducer;