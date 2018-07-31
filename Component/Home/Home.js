import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

    state = {
        students: []
    }
    componentDidMount() {
        axios.get('http://localhost:8080/findAllStudent')
            .then(response => {
                const students = response.data;
                this.setState({ students: students });
            })
    }
    render() {
        let studentsDisplay = (
            this.state.students.map( (student, index) =>  
            <div  key={index} className="card" style= { {width: '18rem'} }>
                <div className="card-header">
                   {student.firstName} {student.lastName}
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{student.email}</li>
                    <li className="list-group-item">{student.telephone}</li>
                    <li className="list-group-item">{student.age}</li>
                </ul>
            </div>

        ));
        return (
            <div>
                {
                    studentsDisplay     
                }
            </div>
        );
    }
}

export default Home;