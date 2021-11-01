import CustomButton from '../custom-button/customButton';
import './styles.scss';

const CartDropdown = () => (
<div className='cart-dropdown'>
    <div className='cart-items'></div>
    <CustomButton>Go to Checkout</CustomButton>
</div>
)
export default CartDropdown