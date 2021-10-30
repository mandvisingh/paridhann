import sections from "../../helpers/data/directoryData";
import MenuItem from "../menuItem/menuItem";
import './styles.scss';

const Directory = () => (
    <div className="directory-menu">
{sections.map(({title, id, imageUrl, size, linkUrl})=> (
        <MenuItem title={title} id={id} imageUrl={imageUrl} size={size} linkUrl={linkUrl}/>
    ))}
    </div>
)

export default Directory;