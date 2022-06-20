import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    let navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`, {
            headers: { 'authorization': `Bearar ${localStorage.getItem('idToken')}` }
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
                else if (res.status === 401) {
                    navigate('/login');
                }
            })
            .then(data => setOrders(data))
    }, [user.email, navigate]);

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