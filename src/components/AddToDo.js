import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';

const AddToDo = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const taskName = event.target.taskName.value
        const description = event.target.description.value
        console.log(taskName, description);
    }
    return (
        <div className='d-flex justify-content-center m-4'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control type="text" placeholder="enter task name" name="taskName" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control name="description" as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Task
                </Button>
            </Form>
        </div>


    );
};

export default AddToDo;