import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const PUBLISHABLE_stripekey =
    "pk_test_51IeMUWJGf7fXr1M7XVX5D81rPOz3s02wdux2Dw3TXIeUhLXOkgJdWSEIxIHeA0ruWgZddte083bfmfFAdzOykKek00QobmeD0j";

    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }
  return (
      <StripeCheckout
      label = "Pay Now"
      name = 'CRWN Clothing Ltd. '
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description = {`Your Total is $ ${price}`}
      amount ={priceForStripe}
      panelLabel = "Pay Now"
      token ={onToken}
      stripeKey={PUBLISHABLE_stripekey}
      />
  );
};

export default StripeButton;
