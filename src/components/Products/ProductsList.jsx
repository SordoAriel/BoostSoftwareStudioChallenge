import { ProductsCard } from './ProductsCard'

export function ProductsList({products}) {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center w-100'>
            {products.map((p) => (
                <ProductsCard key={p.name} {...p} />
            ))}            
        </div>
    )
}