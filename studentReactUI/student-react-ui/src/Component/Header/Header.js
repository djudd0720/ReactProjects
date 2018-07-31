import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Header extends Component {
    state = {
        email: '',
        password: '',
        loginError:false
    }
    signInSubmitHandler = (event) => {
        //TODO add logic for API call to check if the user is valid or not
        event.preventDefault();// hides the query string from being displayed on the browser
        const userSignIn = {
            email:this.state.email,
            password:this.state.password
        }
        axios.post('http://localhost:8080/sign-in',userSignIn)
        .then( res => {
            this.props.submitHandler(true);
            this.setState({loginError:false})
        }).catch(res => {
            this.props.submitHandler(false);
            this.setState({loginError:true})
        })
       
    }

    signInChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState(
            {
                [name]: value
            }
        );
    }
    render() {
        let errorMessage  ='';
        if(this.state.loginError){
            errorMessage = "username or password is invalid";
        }
        let links = (
            <React.Fragment>
                <li className="nav-item active">
                    {/* <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a> */}
                    <Link className="nav-link" to="/">Home</Link>

                </li>
                <li className="nav-item">
                    {/* <a className="nav-link" href="about-us">About</a> */}
                    <Link className="nav-link" to="/about-us">About</Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/sign-up">Sign Up</Link>
                </li>

            </React.Fragment>
        );

        if (this.props.isUserLoggedIn) {
            links = (
                <React.Fragment>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>

                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="about-us">About</a> */}
                        <Link className="nav-link" to="/about-us">About</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/sign-out">Sign out</Link>
                    </li>
                </React.Fragment>
            );
        }
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Student Portal</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            {links}
                        </ul>
                        {/* add input fields for the user to sign in */}
                        <form onSubmit={this.signInSubmitHandler} className="form-inline mt-2 mt-md-0" >
                            <div className="form-group">
                                <input onChange={this.signInChangeHandler} value={this.state.email} name="email" placeholder="Email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <input name="password" onChange={this.signInChangeHandler} value={this.state.password} type="password" placeholder="Password" className="form-control" />
                            </div>
                            <button type="submit" className="btn btn-success">Sign in</button>
                            {errorMessage}

                        </form>

                        {/* <form classNameName="form-inline mt-2 mt-md-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>  
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
                    </div>

                </nav>
            </div>
        );
    }
}

export default Header;