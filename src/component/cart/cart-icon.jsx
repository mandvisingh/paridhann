import { connect } from 'react-redux';
import {ReactComponent as CartBagIcon} from '../../assets/shopping-bag.svg'
import { toggleCartHidden } from '../../redux/cart/cart-action';
import './styles.scss'

const CartIcon = ({toggleCartHidden, numberOfItems})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <CartBagIcon className='shopping-icon'/>
        <span className='item-count'>{numberOfItems}</span>
    </div>
)
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart: {cartItems}}) => ({
    numberOfItems:cartItems.reduce( ( sum, item ) => sum + item.quantity , 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);