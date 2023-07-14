import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutForm = () => {

    const stripe = useStripe();
    const elements = useElements();
    const [error,setError] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }

        console.log('card',card)

        const {error,paymentMethod} = await stripe.createPaymentMethod({
          type:'card',
          card
        });

        if(error){
          setError(error.message)
          console.log('error',error)
        }
        else{
          setError('')
          console.log('paymentMethod',paymentMethod)
        }
    }
    return (
      <>
        <form className='w-1/3 m-8 mx-auto' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className="btn btn-primary mr-96 mt-4" type="submit" disabled={!stripe}>
          Pay
        </button>
      
      </form>
      {error && <p className='text-red-400'>{error}</p>}
      </>
    );
};

export default CheckOutForm;