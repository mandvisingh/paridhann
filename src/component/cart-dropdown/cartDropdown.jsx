import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart-selector';
import CartItem from '../cart-item/cartItem';
import CustomButton from '../custom-button/customButton';
import './styles.scss';

const CartDropdown = ({cartItems}) => (
<div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems && cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item}/>) : <span className='empty-message'>Your cart is empty</span>}
    </div>
<Link to='/checkout'>  <CustomButton>Go to Checkout</CustomButton> </Link>  
</div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown)