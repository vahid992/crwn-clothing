import './checkout.styles.scss';
import {connect} from 'react-redux';
import CheckoutItem from '../../comonents/checkout-item/checkout-item.component';
import {createStructuredSelector} from 'reselect';
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector';

const CheckoutPage = ({cartItems,total}) => (

<div className='checkout-page'>
    <div className='checkout-header'>
        <div className='header-block'>
            <span>Product</span>
        </div>

        <div className='header-block'>
            <span>Descrition</span>
        </div>

        <div className='header-block'>
            <span>Quantity</span>
        </div>

        <div className='header-block'>
            <span>Price</span>
        </div>

        <div className='header-block'>
            <span>Remove</span>
        </div>

    </div>

    {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
    ))}
    <div className="total">
        <span>TOTAL: ${total}</span>
    </div>
</div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
});

export default connect(mapStateToProps) (CheckoutPage);