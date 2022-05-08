import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const [user] = useAuthState(auth)

    const onSubmit = data => {
        const url = 'http://localhost:5000/inventory';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        navigate('/inventory')
    };

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center'>Add New Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='m-2' placeholder='Added By' value={user?.email} readOnly {...register("email")} />
                <input className='m-2' placeholder='Item Name' {...register("name")} />
                <input className='m-2' placeholder='Price' type="number" {...register("price")} />
                <input className='m-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='m-2' placeholder='Supplier Name' type="text" {...register("supplier")} />
                <input className='m-2' placeholder='Photo Url' type="text" {...register("img")} />
                <textarea className='m-2' placeholder='Description' {...register("description")} />
                <input className='btn btn-dark' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;