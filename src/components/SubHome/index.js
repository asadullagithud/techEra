import {Link} from 'react-router-dom'
import './index.css'

const Navbar = props => {
  const {Details} = props
  const {name, id, imageUrl} = Details
  return (
    <Link to={`/products/${id}`}>
      <li>
        <h1>{name}</h1>
        <img src={imageUrl} alt={name} />
      </li>
    </Link>
  )
}
export default Navbar
