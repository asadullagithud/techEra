import './index.css'

const Navbar = props => {
  const {Details} = props
  const {description, name, imageUrl} = Details
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <p>{description}</p>
    </div>
  )
}
export default Navbar
