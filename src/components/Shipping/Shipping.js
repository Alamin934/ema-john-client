import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
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