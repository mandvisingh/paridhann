import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selector';
import CartItem from '../cart-item/cartItem';
import CustomButton from '../custom-button/customButton';
import './styles.scss';

const CartDropdown = ({cartItems}) => (
<div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems && cartItems.length ? cartItems.map(item => <CartItem key={item.id} item={item}/>) : null}
    </div>
    <CustomButton>Go to Checkout</CustomButton>
</div>
)

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown)