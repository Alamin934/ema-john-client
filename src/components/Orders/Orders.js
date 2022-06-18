import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            headers: { 'authorization': `Bearar ${localStorage.getItem('idToken')}` }
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>This is order page {orders.length}</h2>
            <ul>
                {orders.map(order => <li
                    key={order._id}
                >{order.name} : {order.email}</li>)}
            </ul>
        </div>
    );
};

export default Orders;