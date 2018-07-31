
import React, { Component } from 'react';
import Header from '../Header/Header';
import SignUp from '../Sign-up/SignUp';
import {Router, Route, Switch,Redirect} from 'react-router-dom';
import AboutUs from '../AboutUs/AboutUs';
import Home from '../Home/Home';
class Layout extends Component {
    state = {
        isUserLoggedIn: false,
    }
    //Change variable name  from event to isValidUser
    signInSubmitHandler = (isValidUser) => {
        this.setState(
            {
                isUserLoggedIn:isValidUser,
                loggedInStudentDetails:{}
            }
        );
    }
    render() {
        // if(isValidUser){
        //     console.log("redirect");
        //     <Redirect to="/home" />
        // }
        let routes = (
            <React.Fragment>
               <Route exact path="/about-us" component={AboutUs} />
                <Route exact path="/sign-up" component={SignUp} />
                <Route exact path="/" component={SignUp} />
            </React.Fragment>
        );
        if(this.state.isUserLoggedIn){
            routes = (
                <React.Fragment>
                   <Route exact path="/about-us" component={AboutUs} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/" component={Home} />
                </React.Fragment>
            );
        }

        return (
            <React.Fragment>
               
                <Header isUserLoggedIn={this.state.isUserLoggedIn} submitHandler={this.signInSubmitHandler} />

               {routes}
              
              </React.Fragment>

        );
    }
}

export default Layout;