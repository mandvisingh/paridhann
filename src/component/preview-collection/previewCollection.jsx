import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart-action';
import CollectionItem from '../collection-item/collection-item';
import './styles.scss';

const CollectionPreview = ({title, items, addItem}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
{
 items.filter((item,idx)=> idx < 4).map((item)=> (
     <CollectionItem key={item.id} item={item} addItem={addItem}/>
 ))   
}
        </div>
    </div>
)


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItemToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionPreview);