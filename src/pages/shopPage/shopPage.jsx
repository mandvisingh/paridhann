import CollectionPreview from "../../component/preview-collection/previewCollection";
import SHOP_DATA from "../../helpers/data/shopData";

const ShopPage=()=>{
    return (<div className="shop-page">
        {
            SHOP_DATA.map(({id, ...props}) => (
<CollectionPreview key = {id} {...props}/>           ))
        }
    </div>)
}

export default ShopPage;