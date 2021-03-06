import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'
const HomeScreen = () => {
    return (
        <div>
            <h1> Latest Products</h1>
            <Row>
                { products.map( product => (
                    <Col key = {product._id} sm = {12} md = {6} lg = {4} xL = {3}> 
                    <h3>
                        <Product product = {product}/>
                    </h3>
                    </Col>
                ))

                }
            </Row>
        </div>
    )
}

export default HomeScreen
