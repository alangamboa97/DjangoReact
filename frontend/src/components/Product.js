import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({product}) => {
    return (
        <Card className = 'my-3 p-3 rounded'>
            <a href =  {`/product/${product._id}`}>
                
            </a>
        </Card>
    )
}

export default Product
