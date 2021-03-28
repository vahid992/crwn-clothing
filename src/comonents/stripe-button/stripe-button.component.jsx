import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_6VJtirOkYecJVEpvvvGoR2tF00ZVDRgKQX';
    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    };
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${priceForStripe}`}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
