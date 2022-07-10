import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import Colors from './Colors'
import '../css/Detail.scss'

export class Details_01 extends Component {
    static contextType = DataContext;
    state = {
        product_01: []
    }
    getProduct = () => {
        if (this.props.match.params.id) {
            const res = this.context.products_01;
            const data = res.filter(item => {
                return item._id === this.props.match.params.id
            })
            this.setState({ product_01: data })
        }
    };

    componentDidMount() {
        this.getProduct();
    }

    render() {
        const { product_01 } = this.state;
        const { addCart_01 } = this.context;
        return (
            <>
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
                                <Link to="/cart" className="cart" onClick={() => addCart_01(item._id)}>
                                    Add to cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}

export default Details_01