import MenuItem from '../../component/menuItem/menuItem'
import './styles.scss';

const homepage = () => {
return (
<div className="homepage">
<div className="directory-menu">
<MenuItem title={'HATS'} subtitle={'SHOP NOW'}/>
<MenuItem title={'JACKETS'} subtitle={'SHOP NOW'}/>
<MenuItem title={'SNEAKERS'} subtitle={'SHOP NOW'}/>
<MenuItem title={'WOMEN\'S'} subtitle={'SHOP NOW'}/>
<MenuItem title={'MEN\'S'} subtitle={'SHOP NOW'}/>
</div>
</div>
)
}

export default homepage;