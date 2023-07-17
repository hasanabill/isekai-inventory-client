import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';

const ItemDetails = () => {

    const { itemId } = useParams()

    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://isekai-inventory.vercel.app/inventory/${itemId}`
        const getData = async () => {
            const { data } = await axios.get(url)
            setItem(data)
        }
        getData();
    }, [item]);

    const handleUpdateStock = newQuantity => {

        const updated = { quantity: newQuantity }
        const url = `https://isekai-inventory.vercel.app/item/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updated)
        })
    }

    const handleAddToStock = event => {
        event.preventDefault();
        const quantity = parseInt(event.target.quantity.value);
        const previousQuantity = parseInt(item.quantity)
        const newQuantity = quantity + previousQuantity;
        handleUpdateStock(newQuantity)
        toast('Restocked')
        event.target.reset();
    }

    const handleDeliverd = () => {
        const previousQuantity = parseInt(item.quantity);
        const newQuantity = previousQuantity - 1;

        handleUpdateStock(newQuantity)

    }

    return (
        <div className='container my-5'>
            <div className='row container align-items-center'>
                <div className='col-12 col-md-6'>
                    <img src={item.img} height='500px' alt="" />
                </div>
                <div className='col-12 col-md-6'>
                    <h2 className='py-3'>{item.name}</h2>
                    <h3 className='py-3'>Price: ${item.price}</h3>
                    <h3 className='py-3'>Quantity: {item.quantity}</h3>
                    <h4 className='py-3'>Details: {item.description}</h4>
                    <button className='btn btn-dark' onClick={handleDeliverd}>Delivered</button>
                </div>
            </div>
            <Form onSubmit={handleAddToStock} className='w-50 mx-auto my-5'>
                <Form.Group className="mb-3">
                    <Form.Label>Restock the Item</Form.Label>
                    <Form.Control type="number" name='quantity' placeholder="Enter quantity" />
                </Form.Group>
                <Button variant="dark" type="submit">
                    Add to Stock
                </Button>
            </Form>
        </div>
    );
};

export default ItemDetails;