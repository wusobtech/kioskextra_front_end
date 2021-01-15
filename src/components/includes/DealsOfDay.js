import { Component } from "react";
import { methodsHelper } from "../../app/helpers/HelperIndex";
import { ProductModel } from "../../app/models/ProductModel";
import HomeRepository from "../../app/repository/HomeRepository";
const homeRepository = new HomeRepository();

export default class DealsOfDay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: ["" , "", "", "", ""],
        };
    }

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts(queries = {}) {
        let products = homeRepository.fetchProducts(queries);
        products.then((response) => {
            console.log(response.data.products);
            this.setState({
                products: response.data.products,
            });
        });
    }

    render() {
        return <div className="ps-deal-of-day">
            <div className="container">
                <div className="ps-section__header">
                    <div className="ps-block--countdown-deal">
                        <div className="ps-block__left">
                            <h3>Deal of the day</h3>
                        </div>
                        <div className="ps-block__right">
                            <figure>
                                <figcaption>End in:</figcaption>
                                <ul
                                    className="ps-countdown"
                                    data-time="July 21, 2021 15:37:25"
                                >
                                    <li>
                                        <span className="days" />
                                    </li>
                                    <li>
                                        <span className="hours" />
                                    </li>
                                    <li>
                                        <span className="minutes" />
                                    </li>
                                    <li>
                                        <span className="seconds" />
                                    </li>
                                </ul>
                            </figure>
                        </div>
                    </div>
                    <a href="shop-default.html">View all</a>
                </div>
                <div className="ps-section__content">
                    <div
                        className="ps-carousel--nav owl-slider"
                        data-owl-auto="true"
                        data-owl-loop="true"
                        data-owl-speed={1000}
                        data-owl-gap={30}
                        data-owl-nav="false"
                        data-owl-dots="true"
                        data-owl-item={5}
                        data-owl-item-xs={2}
                        data-owl-item-sm={3}
                        data-owl-item-md={4}
                        data-owl-item-lg={4}
                        data-owl-item-xl={5}
                        data-owl-duration={1000}
                        data-owl-mousedrag="on"
                    >
                        {this.state.products.map((product, index) => (
                            this.singleProduct(product)
                        ))}
                        {/* {this.singleProduct("product 2")} */}
                    </div>
                </div>
            </div>
        </div>

    }













    singleProduct(product) {
        product = methodsHelper.default(product , new ProductModel({}));
        return <div className="ps-product ps-product--inner">
            <div className="ps-product__thumbnail">
                <a href="product-default.html">
                    <img src="assets/img/products/home/1.jpg" alt="" />
                </a>
                <div className="ps-product__badge">-16%</div>
                <ul className="ps-product__actions">
                    <li>
                        <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Read More"
                        >
                            <i className="icon-bag2" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Quick View"
                        >
                            <i className="icon-eye" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Add to Whishlist"
                        >
                            <i className="icon-heart" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Compare"
                        >
                            <i className="icon-chart-bars" />
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ps-product__container">
                <p className="ps-product__price sale">
                    {/* {product.price} <del>$670.00 </del> */}
                    <small>18% off</small>
                </p>
                <div className="ps-product__content">
                    <a
                        className="ps-product__title"
                        href="product-default.html"
                    >
                        {product.name}
                    </a>
                    <div className="ps-product__rating">
                        <select className="ps-rating" data-read-only="true">
                            <option value={1}>1</option>
                            <option value={1}>2</option>
                            <option value={1}>3</option>
                            <option value={1}>4</option>
                            <option value={2}>5</option>
                        </select>
                        <span>01</span>
                    </div>
                    <div
                        className="ps-product__progress-bar ps-progress"
                        data-value={63}
                    >
                        <div className="ps-progress__value">
                            <span />
                        </div>
                        <p>Sold:3</p>
                    </div>
                </div>
            </div>
        </div>
    }

}
