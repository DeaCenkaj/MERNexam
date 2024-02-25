import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { format } from 'date-fns';
import Form from '../components/Form';

const Add = props => {
    const [myForm, setMyForm] = useState({
        title: "",
        dueDate: "",
        status: "Backlog"
    });
    const [errors, setErrors] = useState({});
    const [titleErr, setTitleErr] = useState("");
    const [dateErr, setDateErr] = useState("");

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value});
        if (e.target.name === "title") {
            if (e.target.value.trim().length === 0) {
                setTitleErr("You must provide a title!");
            } else if (e.target.value.trim().length < 3) {
                setTitleErr("The title must be at least 3 characters long!");
            } else {
                setTitleErr("");
            }
        } else if (e.target.name === "dueDate") {
            const dueDate = format(new Date(e.target.value), 'yyyy-MM-dd'); 
            const today = format(new Date(), 'yyyy-MM-dd');
            if (e.target.value.trim().length === 0) {
                setDateErr("A due date is required for the project!");
            } else if (dueDate < today) { 
                setDateErr("Due date cannot be before today!");
            } else {
                setDateErr("");
            }
        }
    };

    const onSubmitHandler = e =>{
        e.preventDefault();
        axios.post(`http://localhost:8000/api/projects/new`, myForm)
            .then(res => {
                if (res.data.error) {
                    setErrors(res.data.error.errors);
                } else {
                    console.log("New project submitted successfully!");
                   
                }
            })
            .catch(err => console.log("Oops! Something went wrong when adding a new project from the front end!", err));
    };
   
    return (
        <div>
            <h4 >Plan a new Project</h4>
            <Link to="/" className="float-end">Back to Dashboard</Link>
            <br/>
            <Form onSubmitHandler={onSubmitHandler} onChangeHandler={onChangeHandler} myForm={myForm} errors={errors} titleErr={titleErr} dateErr={dateErr}/>
        </div>
    );
};

export default Add;
