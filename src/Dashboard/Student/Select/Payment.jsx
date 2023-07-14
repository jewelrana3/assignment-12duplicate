import React from 'react';
import CheckOutForm from './CheckOutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import useSelect from '../../../hooks/useSelect';

// todo:publish key provide
const stripePromise = loadStripe(import.meta.env.VITE_Gateway_PK)
const Payment = () => {
    const [cart] = useSelect();
    const total = cart.reduce((sum,item) => sum + item.amount,0)
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='text-center'>
            <h2 className='text-2xl font-bold'>Payment </h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;