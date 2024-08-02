import { ProductsList } from '../Products/ProductsList'
import { products } from '../../utils/mockedProducts'

export function Products () {
    return <div className='p-4'>
        <h1>Productos</h1>
        <ProductsList products={products} />
    </div>
}
