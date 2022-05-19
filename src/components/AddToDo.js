import React, { useEffect, useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from 'sweetalert';
import auth from '../firebase.init';
import Task from './Task';

const AddToDo = () => {
    const [user] = useAuthState(auth)
    const [tasks, setTasks] = useState([])
   const [added,setAdded]=useState(false)
    const email = user?.email

    const handleSubmit = (event) => {
        event.preventDefault()
        const taskName = event.target.taskName.value
        const description = event.target.description.value
        console.log(taskName, description);
        const completed=false
        fetch("http://localhost:5000/usersToDo", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ taskName, description, email,completed })
        })
            .then(res => res.json())
            .then(data => {
                setAdded(true)
                if (data.acknowledged) {
                    swal("Task", "Task added successfully", "success")
                }
                else {
                    swal('Sorry', "task did not added", "error")
                }
            })

       
    }
    useEffect(()=>{
        const getTask = () => {
            fetch(`http://localhost:5000/usersToDo?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setTasks(data)
                setAdded(false)
            })
        }
        getTask()
    },[email,added])
    return (
        <div>
           <div className='d-flex justify-content-center m-4'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control required type="text" placeholder="enter task name" name="taskName" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control required name="description" as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Task
                </Button>
            </Form>
        </div>
        <div className='container row row-cols-md-4 row-cols-1 mx-auto '>
          {
            tasks.map((task)=><Task setAdded={setAdded} task={task} key={task._id}></Task>)
        }   
        </div>
        
        </div>
        


    );
};

export default AddToDo;