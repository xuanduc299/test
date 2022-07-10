import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import Colors from './Colors'
import '../css/Detail.scss'
import { Row } from 'reactstrap'

export class Details extends Component {
    static contextType = DataContext;
    state = {
        product: [],
        product_01: []
    }

    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            this.setState({ product: data })
        }
    };

    // getProduct_01 = () => {
    //     if (this.props.match.params.id) {
    //         const res = this.context.products_01;
    //         const data = res.filter(item => {
    //             return item._id === this.props.match.params.id
    //         })
    //         this.setState({ product_01: data })
    //     }
    // };

    // componentDidMount_01() {
    //     this.getProduct_01();
    // }

    componentDidMount() {
        this.getProduct();
    }




    render() {
        const { product } = this.state;
        const { addCart } = this.context;
        return (
            <Row>
                <>
                    {
                        product.map(item => (
                            <div className="details" key={item._id}>
                                <img src={item.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price}</span>
                                    </div>
                                    <Colors colors={item.colors} />
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                        Add to cart
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </>
                {/* <>
                    <h1>asdasd</h1>
                    {
                        product_01.map(item => (
                            <div className="details" key={item._id}>
                                <img src={item.src} alt="" />
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>${item.price}</span>
                                    </div>
                                    <Colors colors={item.colors} />
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <Link to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                        Add to cart
                                    </Link>
                                </div>
                            </div>
                        ))
                    }
                </> */}



            </Row>

        )
    }
}

export default Details