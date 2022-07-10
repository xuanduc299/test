import React, { Component } from 'react'
import video2 from '../svg/video-sneaker-01.mp4'
import video3 from '../svg/video-sneaker-02.mp4'
import Carousel from 'react-elastic-carousel'
import { Link } from 'react-router-dom'
import { DataContext } from '../Context'
import { Row } from 'reactstrap'
import '../css/Product.scss'
import img7 from '../svg/whathot-02.jpg'
import img8 from '../svg/whathot-03.jpg'
import img9 from '../svg/whathot-04.jpg'

export class Home extends Component {

    static contextType = DataContext;

    render() {
        const { products, products_01, addCart, addCart_01 } = this.context;

        function handleShowhide_01() {
            document.getElementById("product_01").style.display = "flex"
            document.getElementById("product_02").style.display = "none"
            document.getElementById("product_03").style.display = "none"
        }

        function handleShowhide_02() {
            document.getElementById("product_01").style.display = "none"
            document.getElementById("product_02").style.display = "flex"
            document.getElementById("product_03").style.display = "none"

        }

        function handleShowhide_03() {
            document.getElementById("product_01").style.display = "none"
            document.getElementById("product_02").style.display = "none"
            document.getElementById("product_03").style.display = "flex"
        }


        const breakPoints = [
            { width: 1, itemsToShow: 1 },
            { width: 550, itemsToShow: 2 },
            { width: 768, itemsToShow: 3 },
            { width: 1200, itemsToShow: 4 },
        ];
        return (
            <Row>
                <div id="home">
                    <video id="video-3"
                        src={video3}
                        autoPlay={"autoplay"}
                        preLoad="auto"
                        muted
                        loop
                    > something</video>
                </div>
                <div id="col-1">
                    <div className="col-title-product">
                        <h1>STILL INTERESTED?</h1>
                    </div>
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
                </div>


                <div id="whathot">
                    <div className="wth_text">
                        <h1>WHAT'S HOT</h1>
                        <p>Hot stuff, don't miss it !</p>
                    </div>
                    <div className="wth_container">
                        <div className="wth_row">
                            <div className="col_wth_6">
                                <div className="img_wth_6">
                                    <img src={img7} alt="" />
                                </div>
                                <div className="title_col">
                                    <h3>4DFWD X PARLEY. TAKE ACTION FOR OUR OCEANS.</h3>
                                    <p>Đừng chỉ nói suôn. Hãy thực hiện.</p>

                                </div>
                                <p className="btn_buy"><Link to={`#`}>BUY NOW</Link></p>
                            </div>
                            <div className="col_wth_6">
                                <div className="img_wth_6">
                                    <img src={img8} alt="" />
                                </div>
                                <div className="title_col">
                                    <h3>ADISTAR CS</h3>
                                    <p>Chuẩn bị, sẵn sàng, xuất phát. Chậm mà chắc.</p>

                                </div>
                                <p className="btn_buy"><Link to={`#`}>BUY NOW</Link></p>
                            </div>
                            <div className="col_wth_6">
                                <div className="img_wth_6">
                                    <img src={img9} alt="" />
                                </div>
                                <div className="title_col">
                                    <h3>MY RETROPY</h3>
                                    <p>I am free to choose who I am.​</p>
                                </div>
                                <p className="btn_buy"><Link to={`#`}>SHOP NOW</Link></p>
                            </div>
                        </div>
                    </div>
                </div>



                <div id="col-2">
                    <div className="col-title-product">
                        <h1>
                            NEW ARRIVALS
                        </h1>
                    </div>
                    <div id="product">
                        {
                            products_01.map(product_01 => (
                                <div className="card" key={product_01._id}>
                                    <Link to={`/product/${product_01._id}`}>
                                        <img src={product_01.src} alt="" />
                                    </Link>
                                    <div className="content">
                                        <h3>
                                            <Link to={`/product/${product_01._id}`}>{product_01.title}</Link>
                                        </h3>
                                        <span>${product_01.price}</span>
                                        <p>{product_01.description}</p>
                                        <button onClick={() => addCart_01(product_01._id)}>Add to cart</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div id="col-3">
                    <div className="card-3 card-length-3">
                        <Link>
                            <div className="row-card-3-left row-img">

                                <video
                                    src={video2}
                                    autoPlay={"autoplay"}
                                    preLoad="auto"
                                    loop
                                > something</video>
                            </div>

                            <div className="row-text">
                                <h3>A NEW GENERATION</h3>
                                <p>Náo nhiệt và táo bạo nhưng luôn cởi mở — đôi giày sáng tạo cho chính bạn.</p>
                                <p className="btn_buy"><Link to={`#`}>SHOP NOW</Link></p>
                            </div>
                        </Link>

                    </div>

                    <div className="card-3 card-length-3">
                        <Link>
                            <div className="row-card-3-right row-img">

                            </div>

                            <div className="row-text">
                                <h3>A NEW GENERATION</h3>
                                <p>Náo nhiệt và táo bạo nhưng luôn cởi mở — đôi giày sáng tạo cho chính bạn.</p>
                                <p className="btn_buy"><Link to={`#`}>SHOP NOW</Link></p>
                            </div>
                        </Link>

                    </div>
                </div>


                <div id="col-4">
                    <div className="col-text">
                        <ul>
                            <li onClick={() => handleShowhide_01()}>Women</li>
                            <li onClick={() => handleShowhide_02()}>Men</li>
                            <li onClick={() => handleShowhide_03()}>Kids</li>
                        </ul>
                    </div>

                    <div id="product_01">
                        {
                            products_01.map(product_01 => (
                                <div className="card" key={product_01._id}>
                                    <Link to={`/product/${product_01._id}`}>
                                        <img src={product_01.src} alt="" />
                                    </Link>
                                    <div className="content">
                                        <h3>
                                            <Link to={`/product/${product_01._id}`}>{product_01.title}</Link>
                                        </h3>
                                        <span>${product_01.price}</span>
                                        <p>{product_01.description}</p>
                                        <button onClick={() => addCart_01(product_01._id)}>Add to cart</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div id="product_02">
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
                    </div>
                    <div id="product_03">
                        {
                            products_01.map(product_01 => (
                                <div className="card" key={product_01._id}>
                                    <Link to={`/product/${product_01._id}`}>
                                        <img src={product_01.src} alt="" />
                                    </Link>
                                    <div className="content">
                                        <h3>
                                            <Link to={`/product/${product_01._id}`}>{product_01.title}</Link>
                                        </h3>
                                        <span>${product_01.price}</span>
                                        <p>{product_01.description}</p>
                                        <button onClick={() => addCart_01(product_01._id)}>Add to cart</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Row>


        )
    }
}




export default Home
