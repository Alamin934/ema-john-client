import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(order => {
                if (order.insertedId) {
                    alert('Your Order has been placed successfully');
                    reset();
                    clearTheCart();
                }
            })
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="shipping-form">
                <h2>Shipping Address</h2>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input defaultValue="Address" {...register("address")} />
                <input defaultValue="City" {...register("city")} />
                <input defaultValue="Phone" {...register("phone")} />

                <input type="submit" className="btn-regular" />
            </form>
        </div>
    );
};

export default Shipping;