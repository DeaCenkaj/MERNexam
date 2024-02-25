import React from 'react';

const Block = props => {
    const blockStyle = {
        height: "500px",
        width: "30%",
        display: "inline-block",
        overflow: "scroll",
        padding: "5px"
    };

    const headStyle = () => {
        if (props.stat === "Backlog") {
            return {
                backgroundColor: "#61a4fb"
            };
        } else if (props.stat === "In Progress") {
            return {
                backgroundColor: "rgb(243, 226, 127)"
            };
        } else {
            return {
                backgroundColor: "rgb(125, 211, 125)"
            };
        }
    };

    return (
        <div style={blockStyle}>
            <h4 style={headStyle()}>{props.stat}</h4>
            {props.projects.map((project, i) => (
                <div key={i}>
                    {project.status === props.stat && (
                        <div>
                            <h5>{project.title}</h5>
                            <p>Due: <span >{project.dueDate.substr(0, 10)}</span></p>
                            {project.status === "Backlog" ? (
                                <button onClick={(e) => props.onClStatus(project.status, project._id)}> Start Project &rarr; </button>
                            ) : project.status === "In Progress" ? (
                                <button onClick={(e) => props.onClStatus(project.status, project._id)}> Move to Completed &rarr; </button>
                            ) : (
                                <button onClick={(e) => props.onClStatus(project.status, project._id)}> Remove Project &rarr; </button>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Block;
