import CustomButton from '../custom-button/customButton';
import './styles.scss';

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return (<div className='collection-item'>
        <div className='image'
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        >
                    </div>
<div className='collection-footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
</div>
<CustomButton inverted  onClick={()=>addItem(item)}>Add to Cart</CustomButton>
    </div>)
}


export default CollectionItem