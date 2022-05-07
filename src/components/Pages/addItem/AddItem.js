import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddItem = () => {
    return (
        <div className='container my-5'>
            <h1 className='text-center'>Add a new Item</h1>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Item Name</Form.Label>
                    <Form.Control type="text" placeholder="Item Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" placeholder="Price" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" placeholder="Quantity" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Supplier</Form.Label>
                    <Form.Control type="text" placeholder="Supplier" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" placeholder="Photo Url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddItem;