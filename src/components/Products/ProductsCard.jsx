import './productsCard.css'

export function ProductsCard (props) {
    const {name, description, price, image} = props 
    return (
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center w-100 p-4 my-2 border rounded-pill'>
            <img className='productImg' src={image} alt="imagen de producto"/>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>$ {price}</p>
        </div>        
    )
}
