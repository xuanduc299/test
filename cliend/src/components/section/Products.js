import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import '../css/Product.scss'
import Carousel from 'react-elastic-carousel'

export class Products extends Component {

    static contextType = DataContext;


    render() {
        const { products, addCart } = this.context;

        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 4 },
        ];

        return (

            <div id="product">
                {/* <div className="container-card"> */}
                <Carousel breakPoints={breakPoints}>
                    {
                        products.map(product => (
                            <div className="card" key={product._id}>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.src} alt="" />
                                </Link>
                                <div className="content">
                                    <h3>
                                        <Link to={`/product/${product._id}`}>{product.title}</Link>
                                    </h3>
                                    <span>${product.price}</span>
                                    <p>{product.description}</p>
                                    <button onClick={() => addCart(product._id)}>Add to cart</button>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
                {/* </div> */}
            </div>

        )
    }
}

export default Products