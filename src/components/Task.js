import React from 'react';
import swal from 'sweetalert';

const Task = ({ task ,setAdded}) => {
    const { taskName, description, _id,completed } = task
    const handleComplete = () => {
        fetch(`http://localhost:5000/usersToDo/${_id}`, {
            method: "put",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ completed: true })
        })
            .then(res => res.json())
            .then(data =>{ console.log(data)
                swal(`${taskName} completed`,'successfully completed',"success")
            setAdded(true)
            })

    }
    const handleDelete=()=>{
        fetch(`http://localhost:5000/usersToDo/${_id}`,{
            method:"delete"
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.deletedCount >= 1) {
                setAdded(true)
                swal("Deleted","Successfully deleted","success")
            }
            console.log(data)})
    }
    return (
        <div>
            <div className='shadow p-4'>
                <h2 className={`${completed ? "text-decoration-line-through":''}`}>{taskName}</h2>
                <p className={`${completed ? "text-decoration-line-through":''}`}>{description}</p>
                <button className={`btn btn-outline-primary `} 
                disabled={completed ? true:false }
                onClick={handleComplete}>Complete</button>
                <button className='btn btn-outline-warning' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    );
};

export default Task;