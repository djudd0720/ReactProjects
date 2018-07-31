import React, { Component } from 'react';
 import {Redirect} from 'react-router-dom';
 import axios from 'axios';
 
class SignUp extends Component {

    state = {
        firstName:'',
        lastName:'',
        age:'',
        email:'',
        password:'',
        telephone:''
    }
    signUpChangeHandler = (event) => {
        //Will give the data the user enters eg 'example@email.com'
        const value = event.target.value;
        //will give us the name of that html input field eg 'email'
        const name = event.target.name;

        this.setState({
            // this will give us email:example@email.com in our state
            [name]:value
        })
    }
    signUpSubmitHandler = (event) => {
        //TODO add logic for API call to check save the user
        event.preventDefault();// hides the query string from being displayed on the browser
        const student = {
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            age:this.state.age,
            email:this.state.email,
            password:this.state.password,
            telephone:this.state.telephone
        }
        axios.post('http://localhost:8080/submitStudentDetails',student)
        .then(function (response){
            console.log("user created we should add redirect here to thank you page")
        })
    }
    render() {
        let redirect = null;
        if(this.props.isLoggedInUser){
        redirect = (<Redirect to="/home" /> );
        }
        return (
            <React.Fragment>
            {redirect}
            <form onSubmit={this.signUpSubmitHandler} className="container">
                <div className="form-row">
                <div className="form-group col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.firstName} name="firstName" className="form-control" id="firstName" placeholder="First Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.lastName} name="lastName" className="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="age">Age</label>
                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.age} name="age" className="form-control" id="age" placeholder="Age" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="telephone">Cell</label>
                        <input type="text" onChange={this.signUpChangeHandler} value={this.state.telephone} name="telephone" className="form-control" id="telephone" placeholder="Cell" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" onChange={this.signUpChangeHandler} value={this.state.email} name="email" className="form-control" id="inputEmail4" placeholder="Emai" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input type="password" onChange={this.signUpChangeHandler} value={this.state.password} name="password" className="form-control" id="inputPassword4" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                </div>
         
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option >Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip" />
                    </div>
                </div>
                <div className="form-group">
                </div>
                <button type="submit" className="btn btn-primary">Sign up</button>
            </form>

             </React.Fragment>
        );
    }
}

export default SignUp;