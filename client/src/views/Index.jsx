import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import Block from '../components/Block';

const Index = props => {
    const [projectList, setProjectList] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/projects`)
            .then(res => setProjectList(res.data.project))
            .catch(err => console.log("Something went wrong while trying to extract all the projects to the front end!", err));
    }, [reload]);

    const onClickStatus = (st, idx) => {
        if(st === "Backlog"){
            updateTheOneProject(idx, "In Progress");
        } else if(st === "In Progress"){
            updateTheOneProject(idx, "Completed");
        } else {
            deleteProject(idx);
        }
    };
    
    const updateTheOneProject = (idx, updatedStatus) => {
        axios.put(`http://localhost:8000/api/projects/update/${idx}`, {status: updatedStatus})
            .then(res => {
                setReload(!reload);
            })
            .catch(err => console.log("Oops! Something went wrong while trying to update the project status!", err));
    };

    const deleteProject = idx => {
        axios.delete(`http://localhost:8000/api/projects/delete/${idx}`)
            .then(res => {
                setReload(!reload);
            })
            .catch(err => console.log("Something went wrong when trying to delete the project!", err));
    };

    return(
        <div className="container">
            <div className="logbook col">
                <Block stat={"Backlog"} projects={projectList} onClStatus={onClickStatus} />
                <Block stat={"In Progress"} projects={projectList} onClStatus={onClickStatus} />
                <Block stat={"Completed"} projects={projectList} onClStatus={onClickStatus} />
            </div>
            <Link to="/projects/new" className="text-white text-decoration-none btn btn-primary float-start ms-5 mb-3">Add a new Project!</Link>
        </div>
    );    
};

export default Index;
