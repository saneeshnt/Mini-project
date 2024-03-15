import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import './ProductsPage.css'

function ProductsPage({ products }) {
    return (
        <>
            <div className='productspage'>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}

            </div>

        </>
    )
}

export default ProductsPage