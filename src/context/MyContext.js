import React, { createContext,Component } from "react";
import {authAxios, publicAxios} from "./http-common"
export const MyContext = createContext();


// Define the base URL
// const Axios = axios.create({
// //    baseURL: 'http://localhost:8000/api',
//     baseURL: 'http://localhost:81/holybeforumapi/holybeforumapi/public/api',
// });

class MyContextProvider extends Component{
    constructor(){
        super();
        this.isLoggedIn();
    }

    // Root State
    state = {
        showLogin:true,
        isAuth:false,
        theUser: {}
    }

    // Toggle between Login & Signup page
    toggleNav = () => {
        const showLogin = !this.state.showLogin;
        this.setState({
            ...this.state,
            showLogin
        })
    }

    // On Click the Log out button
    logoutUser = () => {
        localStorage.removeItem('token');
        this.setState({
            ...this.state,
            isAuth:false
        })
    }

    registerUser = async (user) => {

        // Sending the user registration request
        const register = await publicAxios.post('register',{
            username:user.username,
            email:user.email,
            password:user.password,
        });

        return register.data;
    }


    loginUser = async (user) => {

        // Sending the user Login request
        const login = await publicAxios.post('login',{
            username:user.username,
            password:user.password
        });
        return login.data;

    }


    // Checking user logged in or not
    isLoggedIn = async () => {
        const loginToken = localStorage.getItem('loginToken');

        // If inside the local-storage has the JWT token
        if(loginToken){

            //Adding JWT token to axios default header
            publicAxios.defaults.headers.common['Authorization'] = 'Bearer '+loginToken;

            // Fetching the user information
            const {data} = await publicAxios.get('currentuser');

            // If user information is successfully received
            if(data.message === "success" && data.user){
                this.setState({
                    ...this.state,
                    isAuth:true,
                    theUser:data.user
                });
            }

        }
    }


    render(){
        const contextValue = {
            rootState:this.state,
            toggleNav:this.toggleNav,
            isLoggedIn:this.isLoggedIn,
            registerUser:this.registerUser,
            loginUser:this.loginUser,
            logoutUser:this.logoutUser,

        }
        return(
            <MyContext.Provider value={contextValue}>
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default MyContextProvider;
