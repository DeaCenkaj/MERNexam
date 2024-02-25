import React from 'react';

const Form = props => {
    return (
        <div >
            <form onSubmit={props.onSubmitHandler}>
                <div >
                    <label>Project:</label>
                    <input type="text" name="title" id="title"  onChange={props.onChangeHandler} />
                    {
                        props.titleErr.length > 0 ? <small >{props.titleErr}</small> : props.errors.title ? <small >{props.errors.title.message}</small> : ""
                    }
                </div>
                <div>
                    <label>Due Date:</label>
                    <input type="date" name="dueDate" id="dueDate"  onChange={props.onChangeHandler} />
                    {
                        props.dateErr.length > 0 ? <small >{props.dateErr}</small> : props.errors.dueDate ? <small className="text-danger">{props.errors.dueDate.message}</small> : ""
                    }
                    {props.dateErrBeforeToday && <small >Due date cannot be before today!</small>}
                </div>
                <div >
                    <input type="submit" value="Plan Project" />
                </div>
            </form>
        </div>
    );
}

export default Form;
