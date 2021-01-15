import { React, Component } from "react";
import { methodsHelper } from "../app/helpers/HelperIndex";
import HomeRepository from "../app/repository/HomeRepository";
import DealsOfDay from "../components/includes/DealsOfDay";
const homeRepository = new HomeRepository();
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productCategories: null,
            sliderProducts: null
        };
    }

    componentDidMount() {
        this.loadCategories();
        this.loadSliderProducts();
    }

    loadCategories() {
        let cats = homeRepository.fetchProductCategories();
        cats.then((response) => {
            this.setState({
                productCategories: response.data,
            });
        });
    }

    loadSliderProducts() {
        let cats = homeRepository.fetchSliderProducts();
        cats.then((response) => {
            this.setState({
                sliderProducts: response.data.products,
            });
        });
    }

    categories = () => {
        if (this.state.productCategories != null) {
            if (this.state.productCategories.categories.length > 0) {
                let categories = [];
                this.state.productCategories.categories.map((category, index) => {
                    categories.push(
                        <li className="current-menu-item">
                            <a href="link" key={index}>
                                <i className="icon-star" />
                                {category.name}
                            </a>
                        </li>
                    );
                });
                return categories;
            }
        }
    };

    homeBanner() {
        let slides = this.state.sliderProducts;
        console.log(slides);
        if (!methodsHelper.empty(slides)) {
            let slideOne = [];
            let slideTwo = [];
            for (let i = 1; i < 4; i++) {
                let product = slides[i];
                slideOne.push(
                    <a href="link">
                        <img src={product.display_image} alt={product.name} />
                    </a>
                );
            }
            for (let i = 4; i < (slides.length - 3); i++) {
                let product = slides[i];
                slideTwo.push(
                    <a href="link" className={i === 6 ? 'wide' : ''}>
                        <img src={product.display_image} alt={product.name} />
                    </a>
                );
            }
            return <div className="ps-home-banner">
                <div className="container">
                    <div className="ps-section__left">
                        <ul className="menu--dropdown">{this.categories()}</ul>
                    </div>
                    <div className="ps-section__center">
                        <div
                            className="ps-carousel--dots owl-slider"
                            data-owl-auto="true"
                            data-owl-loop="true"
                            data-owl-speed={5000}
                            data-owl-gap={0}
                            data-owl-nav="false"
                            data-owl-dots="true"
                            data-owl-item={1}
                            data-owl-item-xs={1}
                            data-owl-item-sm={1}
                            data-owl-item-md={1}
                            data-owl-item-lg={1}
                            data-owl-duration={1000}
                            data-owl-mousedrag="on"
                        >
                            <a href="#">
                                <img src="assets/img/slider/home-5/1.jpg" alt="" />
                            </a>
                            <a href="#">
                                <img src="assets/img/slider/home-5/2.jpg" alt="" />
                            </a>
                            <a href="#">
                                <img src="assets/img/slider/home-5/3.jpg" alt="" />
                            </a>
                        </div>
                        <a href="#">
                            <img src="assets/img/slider/home-5/promotion-6.jpg" alt="" />
                        </a>
                    </div>
                    <div className="ps-section__right">
                        <a href="#">
                            <img src="assets/img/slider/home-5/promotion-1.jpg" alt="" />
                        </a>
                        <a href="#">
                            <img src="assets/img/slider/home-5/promotion-2.jpg" alt="" />
                        </a>
                        <a className="wide" href="#">
                            <img src="assets/img/slider/home-5/promotion-3.jpg" alt="" />
                        </a>
                        <a href="#">
                            <img src="assets/img/slider/home-5/promotion-4.jpg" alt="" />
                        </a>
                        <a href="#">
                            <img src="assets/img/slider/home-5/promotion-5.jpg" alt="" />
                        </a>
                    </div>


                </div>
            </div>
        }
    }

    render() {
        return (
            <div>
                <div id="homepage-5">
                    {/* {this.homeBanner()} */}
                    <DealsOfDay />
                    <div className="ps-search-trending">
                        <div className="container">
                            <div className="ps-section__header">
                                <h3>
                                    Search Trending<span>Updated at 9:00AM</span>
                                </h3>
                            </div>
                            <div className="ps-section__content">
                                <div className="ps-block--categories-tabs ps-tab-root">
                                    <div className="ps-block__header">
                                        <div
                                            className="ps-carousel--nav ps-tab-list owl-slider"
                                            data-owl-auto="false"
                                            data-owl-speed={1000}
                                            data-owl-gap={0}
                                            data-owl-nav="true"
                                            data-owl-dots="true"
                                            data-owl-item={8}
                                            data-owl-item-xs={3}
                                            data-owl-item-sm={4}
                                            data-owl-item-md={6}
                                            data-owl-item-lg={6}
                                            data-owl-duration={500}
                                            data-owl-mousedrag="on"
                                        >
                                            <a className="active" href="#tab-1">
                                                <i className="icon-star" />
                                                <span>Hot Trending</span>
                                            </a>
                                            <a href="#tab-2">
                                                <i className="icon-smartphone" />
                                                <span>Cell Phones</span>
                                            </a>
                                            <a href="#tab-3">
                                                <i className="icon-desktop" />
                                                <span>Computers</span>
                                            </a>
                                            <a href="#tab-4">
                                                <i className="icon-lampshade" />
                                                <span>Furnitures</span>
                                            </a>
                                            <a href="#tab-5">
                                                <i className="icon-shirt" />
                                                <span>T-Shirts</span>
                                            </a>
                                            <a href="#tab-6">
                                                <i className="icon-baby-bottle" />
                                                <span>Baby &amp; Mom</span>
                                            </a>
                                            <a href="#tab-7">
                                                <i className="icon-baseball" />
                                                <span>Sports</span>
                                            </a>
                                            <a href="#tab-8">
                                                <i className="icon-book2" />
                                                <span>Book &amp; Office</span>
                                            </a>
                                            <a href="#tab-9">
                                                <i className="icon-car-siren" />
                                                <span>Cars</span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="ps-tabs">
                                        <div className="ps-tabs">
                                            <div className="ps-tab active" id="tab-1">
                                                <div className="ps-block__item">
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/1.jpg"
                                                            alt="#television"
                                                        />
                                                        <span>#television</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/2.jpg"
                                                            alt="#camera"
                                                        />
                                                        <span>#camera</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/3.jpg"
                                                            alt="#watch"
                                                        />
                                                        <span>#watch</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/4.jpg"
                                                            alt="#chair"
                                                        />
                                                        <span>#chair</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/5.jpg"
                                                            alt="#sneaker"
                                                        />
                                                        <span>#sneaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/6.jpg"
                                                            alt="#xbox"
                                                        />
                                                        <span>#xbox</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/7.jpg"
                                                            alt="#gopro"
                                                        />
                                                        <span>#gopro</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/8.jpg"
                                                            alt="#lipstick"
                                                        />
                                                        <span>#lipstick</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/9.jpg"
                                                            alt="#phone"
                                                        />
                                                        <span>#phone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/10.jpg"
                                                            alt="#laptop"
                                                        />
                                                        <span>#laptop</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/11.jpg"
                                                            alt="#speaker"
                                                        />
                                                        <span>#speaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/12.jpg"
                                                            alt="#book"
                                                        />
                                                        <span>#book</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/13.jpg"
                                                            alt="#blender"
                                                        />
                                                        <span>#blender</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/14.jpg"
                                                            alt="#bag"
                                                        />
                                                        <span>#bag</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/15.jpg"
                                                            alt="#smartphone"
                                                        />
                                                        <span>#smartphone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/16.jpg"
                                                            alt="#camping"
                                                        />
                                                        <span>#camping</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ps-tab" id="tab-2">
                                                <div className="ps-block__item">
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/3.jpg"
                                                            alt="#watch"
                                                        />
                                                        <span>#watch</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/4.jpg"
                                                            alt="#chair"
                                                        />
                                                        <span>#chair</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/5.jpg"
                                                            alt="#sneaker"
                                                        />
                                                        <span>#sneaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/6.jpg"
                                                            alt="#xbox"
                                                        />
                                                        <span>#xbox</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/7.jpg"
                                                            alt="#gopro"
                                                        />
                                                        <span>#gopro</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/8.jpg"
                                                            alt="#lipstick"
                                                        />
                                                        <span>#lipstick</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/9.jpg"
                                                            alt="#phone"
                                                        />
                                                        <span>#phone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/10.jpg"
                                                            alt="#laptop"
                                                        />
                                                        <span>#laptop</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/11.jpg"
                                                            alt="#speaker"
                                                        />
                                                        <span>#speaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/12.jpg"
                                                            alt="#book"
                                                        />
                                                        <span>#book</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/13.jpg"
                                                            alt="#blender"
                                                        />
                                                        <span>#blender</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/14.jpg"
                                                            alt="#bag"
                                                        />
                                                        <span>#bag</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/15.jpg"
                                                            alt="#smartphone"
                                                        />
                                                        <span>#smartphone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/16.jpg"
                                                            alt="#camping"
                                                        />
                                                        <span>#camping</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ps-tab" id="tab-3">
                                                <div className="ps-block__item">
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/4.jpg"
                                                            alt="#chair"
                                                        />
                                                        <span>#chair</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/5.jpg"
                                                            alt="#sneaker"
                                                        />
                                                        <span>#sneaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/6.jpg"
                                                            alt="#xbox"
                                                        />
                                                        <span>#xbox</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/7.jpg"
                                                            alt="#gopro"
                                                        />
                                                        <span>#gopro</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/8.jpg"
                                                            alt="#lipstick"
                                                        />
                                                        <span>#lipstick</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/9.jpg"
                                                            alt="#phone"
                                                        />
                                                        <span>#phone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/10.jpg"
                                                            alt="#laptop"
                                                        />
                                                        <span>#laptop</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/11.jpg"
                                                            alt="#speaker"
                                                        />
                                                        <span>#speaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/12.jpg"
                                                            alt="#book"
                                                        />
                                                        <span>#book</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/13.jpg"
                                                            alt="#blender"
                                                        />
                                                        <span>#blender</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/14.jpg"
                                                            alt="#bag"
                                                        />
                                                        <span>#bag</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/15.jpg"
                                                            alt="#smartphone"
                                                        />
                                                        <span>#smartphone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/16.jpg"
                                                            alt="#camping"
                                                        />
                                                        <span>#camping</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ps-tab" id="tab-4">
                                                <div className="ps-block__item">
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/5.jpg"
                                                            alt="#sneaker"
                                                        />
                                                        <span>#sneaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/6.jpg"
                                                            alt="#xbox"
                                                        />
                                                        <span>#xbox</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/7.jpg"
                                                            alt="#gopro"
                                                        />
                                                        <span>#gopro</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/8.jpg"
                                                            alt="#lipstick"
                                                        />
                                                        <span>#lipstick</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/9.jpg"
                                                            alt="#phone"
                                                        />
                                                        <span>#phone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/10.jpg"
                                                            alt="#laptop"
                                                        />
                                                        <span>#laptop</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/11.jpg"
                                                            alt="#speaker"
                                                        />
                                                        <span>#speaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/12.jpg"
                                                            alt="#book"
                                                        />
                                                        <span>#book</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/13.jpg"
                                                            alt="#blender"
                                                        />
                                                        <span>#blender</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/14.jpg"
                                                            alt="#bag"
                                                        />
                                                        <span>#bag</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/15.jpg"
                                                            alt="#smartphone"
                                                        />
                                                        <span>#smartphone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/16.jpg"
                                                            alt="#camping"
                                                        />
                                                        <span>#camping</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ps-tab" id="tab-5">
                                                <div className="ps-block__item">
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/6.jpg"
                                                            alt="#xbox"
                                                        />
                                                        <span>#xbox</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/7.jpg"
                                                            alt="#gopro"
                                                        />
                                                        <span>#gopro</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/8.jpg"
                                                            alt="#lipstick"
                                                        />
                                                        <span>#lipstick</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/9.jpg"
                                                            alt="#phone"
                                                        />
                                                        <span>#phone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/10.jpg"
                                                            alt="#laptop"
                                                        />
                                                        <span>#laptop</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/11.jpg"
                                                            alt="#speaker"
                                                        />
                                                        <span>#speaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/12.jpg"
                                                            alt="#book"
                                                        />
                                                        <span>#book</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/13.jpg"
                                                            alt="#blender"
                                                        />
                                                        <span>#blender</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/14.jpg"
                                                            alt="#bag"
                                                        />
                                                        <span>#bag</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/15.jpg"
                                                            alt="#smartphone"
                                                        />
                                                        <span>#smartphone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/16.jpg"
                                                            alt="#camping"
                                                        />
                                                        <span>#camping</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ps-tab" id="tab-6">
                                                <div className="ps-block__item">
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/7.jpg"
                                                            alt="#gopro"
                                                        />
                                                        <span>#gopro</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/8.jpg"
                                                            alt="#lipstick"
                                                        />
                                                        <span>#lipstick</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/9.jpg"
                                                            alt="#phone"
                                                        />
                                                        <span>#phone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/10.jpg"
                                                            alt="#laptop"
                                                        />
                                                        <span>#laptop</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/11.jpg"
                                                            alt="#speaker"
                                                        />
                                                        <span>#speaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/12.jpg"
                                                            alt="#book"
                                                        />
                                                        <span>#book</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/13.jpg"
                                                            alt="#blender"
                                                        />
                                                        <span>#blender</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/14.jpg"
                                                            alt="#bag"
                                                        />
                                                        <span>#bag</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/15.jpg"
                                                            alt="#smartphone"
                                                        />
                                                        <span>#smartphone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/16.jpg"
                                                            alt="#camping"
                                                        />
                                                        <span>#camping</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ps-tab" id="tab-7">
                                                <div className="ps-block__item">
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/8.jpg"
                                                            alt="#lipstick"
                                                        />
                                                        <span>#lipstick</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/9.jpg"
                                                            alt="#phone"
                                                        />
                                                        <span>#phone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/10.jpg"
                                                            alt="#laptop"
                                                        />
                                                        <span>#laptop</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/11.jpg"
                                                            alt="#speaker"
                                                        />
                                                        <span>#speaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/12.jpg"
                                                            alt="#book"
                                                        />
                                                        <span>#book</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/13.jpg"
                                                            alt="#blender"
                                                        />
                                                        <span>#blender</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/14.jpg"
                                                            alt="#bag"
                                                        />
                                                        <span>#bag</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/15.jpg"
                                                            alt="#smartphone"
                                                        />
                                                        <span>#smartphone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/16.jpg"
                                                            alt="#camping"
                                                        />
                                                        <span>#camping</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="ps-tab" id="tab-7">
                                                <div className="ps-block__item">
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/9.jpg"
                                                            alt="#phone"
                                                        />
                                                        <span>#phone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/10.jpg"
                                                            alt="#laptop"
                                                        />
                                                        <span>#laptop</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/11.jpg"
                                                            alt="#speaker"
                                                        />
                                                        <span>#speaker</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/12.jpg"
                                                            alt="#book"
                                                        />
                                                        <span>#book</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/13.jpg"
                                                            alt="#blender"
                                                        />
                                                        <span>#blender</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/14.jpg"
                                                            alt="#bag"
                                                        />
                                                        <span>#bag</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/15.jpg"
                                                            alt="#smartphone"
                                                        />
                                                        <span>#smartphone</span>
                                                    </a>
                                                    <a href="shop-default.html">
                                                        <img
                                                            src="assets/img/categories/home-5/16.jpg"
                                                            alt="#camping"
                                                        />
                                                        <span>#camping</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ps-product-box">
                        <div className="container">
                            <div className="ps-home-promotions">
                                <a href="#">
                                    <img src="assets/img/promotions/home-5/simple.jpg" alt="" />
                                </a>
                            </div>
                            <div className="ps-block--product-box">
                                <div className="ps-block__header">
                                    <h3>
                                        <i className="icon-laundry" /> Consumer Electronic
                  </h3>
                                    <ul>
                                        <li>
                                            <a href="shop-default.html">TV Televisions</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Air Conditioner</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Washing Machine</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Refrigerator</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Refrigerator</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Microwave</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ps-block__content">
                                    <div className="ps-block__left">
                                        <div
                                            className="ps-carousel--nav-inside owl-slider"
                                            data-owl-auto="true"
                                            data-owl-loop="true"
                                            data-owl-speed={5000}
                                            data-owl-gap={0}
                                            data-owl-nav="true"
                                            data-owl-dots="true"
                                            data-owl-item={1}
                                            data-owl-item-xs={1}
                                            data-owl-item-sm={1}
                                            data-owl-item-md={1}
                                            data-owl-item-lg={1}
                                            data-owl-duration={1000}
                                            data-owl-mousedrag="on"
                                        >
                                            <a href="shop-default.html">
                                                <img
                                                    src="assets/img/promotions/home-5/electronic-1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="shop-default.html">
                                                <img
                                                    src="assets/img/promotions/home-5/electronic-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="ps-block__products ps-tab-root">
                                            <ul className="ps-tab-list">
                                                <li className="current">
                                                    <a href="#product-box-1">New Arrivals</a>
                                                </li>
                                                <li>
                                                    <a href="#product-box-2">Best Seller</a>
                                                </li>
                                                <li>
                                                    <a href="#product-box-3">Sale</a>
                                                </li>
                                            </ul>
                                            <div className="ps-tabs">
                                                <div className="ps-tab active" id="product-box-1">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-16%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Go Pro
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Marshall Kilburn Portable Wireless
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $567.99 <del>$670.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Marshall Kilburn Portable Wireless
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $567.99 <del>$670.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Xbox One Wireless Controller Black Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Xbox One Wireless Controller Black Color
                                    </a>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-25%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sound Intone I65 Earphone White Version
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>02</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sound Intone I65 Earphone White Version
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Samsung Gear VR Virtual Reality Headset
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Samsung Gear VR Virtual Reality Headset
                                    </a>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-tab" id="product-box-2">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-25%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sound Intone I65 Earphone White Version
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>02</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sound Intone I65 Earphone White Version
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Samsung Gear VR Virtual Reality Headset
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Samsung Gear VR Virtual Reality Headset
                                    </a>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/5.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Samsung UHD TV 24inch
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Samsung UHD TV 24inch
                                    </a>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/6.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Store
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            EPSION Plaster Printer
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$92.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            EPSION Plaster Printer
                                    </a>
                                                                        <p className="ps-product__price">$92.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-tab" id="product-box-3">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Xbox One Wireless Controller Black Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Xbox One Wireless Controller Black Color
                                    </a>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-25%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sound Intone I65 Earphone White Version
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>02</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sound Intone I65 Earphone White Version
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Samsung Gear VR Virtual Reality Headset
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Samsung Gear VR Virtual Reality Headset
                                    </a>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/electronic/5.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Samsung UHD TV 24inch
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Samsung UHD TV 24inch
                                    </a>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-block__right">
                                        <figure>
                                            <figcaption>Recommended For You</figcaption>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img
                                                            src="assets/img/products/electronic/1.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Marshall Kilburn Portable Wireless
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
                                                    <p className="ps-product__price sale">
                                                        $567.99 <del>$670.00 </del>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img
                                                            src="assets/img/products/electronic/2.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Xbox One Wireless Controller Black Color
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
                                                    <p className="ps-product__price">$101.99</p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img
                                                            src="assets/img/products/electronic/3.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Sound Intone I65 Earphone White Version
                          </a>
                                                    <div className="ps-product__rating">
                                                        <select className="ps-rating" data-read-only="true">
                                                            <option value={1}>1</option>
                                                            <option value={1}>2</option>
                                                            <option value={1}>3</option>
                                                            <option value={1}>4</option>
                                                            <option value={2}>5</option>
                                                        </select>
                                                        <span>02</span>
                                                    </div>
                                                    <p className="ps-product__price sale">
                                                        $42.00 <del>$60.00 </del>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img
                                                            src="assets/img/products/electronic/4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Samsung Gear VR Virtual Reality Headset
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
                                                    <p className="ps-product__price">$320.00</p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img
                                                            src="assets/img/products/electronic/5.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Samsung UHD TV 24inch
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
                                                    <p className="ps-product__price">$85.00</p>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-block--product-box">
                                <div className="ps-block__header">
                                    <h3>
                                        <i className="icon-shirt" /> Clothing &amp; Appreal
                  </h3>
                                    <ul>
                                        <li>
                                            <a href="shop-default.html">Women</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Men</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Girl</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Boy</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Baby</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Accessories</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ps-block__content">
                                    <div className="ps-block__left">
                                        <div
                                            className="ps-carousel--nav-inside owl-slider"
                                            data-owl-auto="true"
                                            data-owl-loop="true"
                                            data-owl-speed={5000}
                                            data-owl-gap={0}
                                            data-owl-nav="true"
                                            data-owl-dots="true"
                                            data-owl-item={1}
                                            data-owl-item-xs={1}
                                            data-owl-item-sm={1}
                                            data-owl-item-md={1}
                                            data-owl-item-lg={1}
                                            data-owl-duration={1000}
                                            data-owl-mousedrag="on"
                                        >
                                            <a href="shop-default.html">
                                                <img
                                                    src="assets/img/promotions/home-5/clothing-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="shop-default.html">
                                                <img
                                                    src="assets/img/promotions/home-5/clothing-1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="ps-block__products ps-tab-root">
                                            <ul className="ps-tab-list">
                                                <li className="current">
                                                    <a href="#product-box-1">New Arrivals</a>
                                                </li>
                                                <li>
                                                    <a href="#product-box-2">Best Seller</a>
                                                </li>
                                                <li>
                                                    <a href="#product-box-3">Sale</a>
                                                </li>
                                            </ul>
                                            <div className="ps-tabs">
                                                <div className="ps-tab active" id="product-box-1">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-16%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Herschel Leather Duffle Bag In Brown Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $567.99 <del>$670.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Herschel Leather Duffle Bag In Brown Color
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $567.99 <del>$670.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Unero Military Classical Backpack
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Unero Military Classical Backpack
                                    </a>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-25%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Rayban Rounded Sunglass Brown Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>02</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Rayban Rounded Sunglass Brown Color
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sleeve Linen Blend Caro Pane Shirt
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sleeve Linen Blend Caro Pane Shirt
                                    </a>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-tab" id="product-box-2">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-25%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Rayban Rounded Sunglass Brown Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>02</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Rayban Rounded Sunglass Brown Color
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sleeve Linen Blend Caro Pane Shirt
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sleeve Linen Blend Caro Pane Shirt
                                    </a>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/5.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Men’s Sports Runnning Swim Board Shorts
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Men’s Sports Runnning Swim Board Shorts
                                    </a>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/6.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Store
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Paul’s Smith Sneaker InWhite Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$92.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Paul’s Smith Sneaker InWhite Color
                                    </a>
                                                                        <p className="ps-product__price">$92.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-tab" id="product-box-3">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Unero Military Classical Backpack
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Unero Military Classical Backpack
                                    </a>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-25%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Rayban Rounded Sunglass Brown Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>02</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Rayban Rounded Sunglass Brown Color
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sleeve Linen Blend Caro Pane Shirt
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Sleeve Linen Blend Caro Pane Shirt
                                    </a>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/clothing/5.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Men’s Sports Runnning Swim Board Shorts
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Men’s Sports Runnning Swim Board Shorts
                                    </a>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-block__right">
                                        <figure>
                                            <figcaption>Recommended For You</figcaption>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img
                                                            src="assets/img/products/clothing/1.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Herschel Leather Duffle Bag In Brown Color
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
                                                    <p className="ps-product__price sale">
                                                        $567.99 <del>$670.00 </del>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img
                                                            src="assets/img/products/clothing/2.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Unero Military Classical Backpack
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
                                                    <p className="ps-product__price">$101.99</p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img
                                                            src="assets/img/products/clothing/3.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Rayban Rounded Sunglass Brown Color
                          </a>
                                                    <div className="ps-product__rating">
                                                        <select className="ps-rating" data-read-only="true">
                                                            <option value={1}>1</option>
                                                            <option value={1}>2</option>
                                                            <option value={1}>3</option>
                                                            <option value={1}>4</option>
                                                            <option value={2}>5</option>
                                                        </select>
                                                        <span>02</span>
                                                    </div>
                                                    <p className="ps-product__price sale">
                                                        $42.00 <del>$60.00 </del>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img
                                                            src="assets/img/products/clothing/4.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Sleeve Linen Blend Caro Pane Shirt
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
                                                    <p className="ps-product__price">$320.00</p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img
                                                            src="assets/img/products/clothing/5.jpg"
                                                            alt=""
                                                        />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Men’s Sports Runnning Swim Board Shorts
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
                                                    <p className="ps-product__price">$85.00</p>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div className="ps-block--product-box">
                                <div className="ps-block__header">
                                    <h3>
                                        <i className="icon-shirt" /> Home, Garden &amp; Kitchen
                  </h3>
                                    <ul>
                                        <li>
                                            <a href="shop-default.html">Furniture</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Home Decor</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Cookware</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Utensil &amp; Gadget</a>
                                        </li>
                                        <li>
                                            <a href="shop-default.html">Garden Tools</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="ps-block__content">
                                    <div className="ps-block__left">
                                        <div
                                            className="ps-carousel--nav-inside owl-slider"
                                            data-owl-auto="true"
                                            data-owl-loop="true"
                                            data-owl-speed={5000}
                                            data-owl-gap={0}
                                            data-owl-nav="true"
                                            data-owl-dots="true"
                                            data-owl-item={1}
                                            data-owl-item-xs={1}
                                            data-owl-item-sm={1}
                                            data-owl-item-md={1}
                                            data-owl-item-lg={1}
                                            data-owl-duration={1000}
                                            data-owl-mousedrag="on"
                                        >
                                            <a href="shop-default.html">
                                                <img
                                                    src="assets/img/promotions/home-5/kitchen-2.jpg"
                                                    alt=""
                                                />
                                            </a>
                                            <a href="shop-default.html">
                                                <img
                                                    src="assets/img/promotions/home-5/kitchen-1.jpg"
                                                    alt=""
                                                />
                                            </a>
                                        </div>
                                        <div className="ps-block__products ps-tab-root">
                                            <ul className="ps-tab-list">
                                                <li className="current">
                                                    <a href="#product-box-1">New Arrivals</a>
                                                </li>
                                                <li>
                                                    <a href="#product-box-2">Best Seller</a>
                                                </li>
                                                <li>
                                                    <a href="#product-box-3">Sale</a>
                                                </li>
                                            </ul>
                                            <div className="ps-tabs">
                                                <div className="ps-tab active" id="product-box-1">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/1.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-16%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Korea Long Sofa Fabric In Blue Navy Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $567.99 <del>$670.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Korea Long Sofa Fabric In Blue Navy Color
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $567.99 <del>$670.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Aroma Rice Cooker
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Aroma Rice Cooker
                                    </a>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-25%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Simple Plastice Chair In White Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>02</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Simple Plastice Chair In White Color
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Korea Fabric Chair In Brown Colorr
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Korea Fabric Chair In Brown Colorr
                                    </a>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-tab" id="product-box-2">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-25%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Simple Plastice Chair In White Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>02</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Simple Plastice Chair In White Color
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Korea Fabric Chair In Brown Colorr
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Korea Fabric Chair In Brown Colorr
                                    </a>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/5.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Set 14-Piece Knife From KichiKit
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Set 14-Piece Knife From KichiKit
                                    </a>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/6.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Store
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Magic Bullet NutriBullet Pro 900 Series
                                                                            Blender
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$92.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Magic Bullet NutriBullet Pro 900 Series
                                                                            Blender
                                    </a>
                                                                        <p className="ps-product__price">$92.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="ps-tab" id="product-box-3">
                                                    <div className="row">
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/2.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Aroma Rice Cooker
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Aroma Rice Cooker
                                    </a>
                                                                        <p className="ps-product__price">$101.99</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/3.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge">-25%</div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Young Shop
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Simple Plastice Chair In White Color
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>02</span>
                                                                        </div>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Simple Plastice Chair In White Color
                                    </a>
                                                                        <p className="ps-product__price sale">
                                                                            $42.00 <del>$60.00 </del>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/4.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Korea Fabric Chair In Brown Colorr
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Korea Fabric Chair In Brown Colorr
                                    </a>
                                                                        <p className="ps-product__price">$320.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-6 ">
                                                            <div className="ps-product">
                                                                <div className="ps-product__thumbnail">
                                                                    <a href="product-default.html">
                                                                        <img
                                                                            src="assets/img/products/home/5.jpg"
                                                                            alt=""
                                                                        />
                                                                    </a>
                                                                    <div className="ps-product__badge out-stock">
                                                                        Out Of Stock
                                  </div>
                                                                    <ul className="ps-product__actions">
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-toggle="tooltip"
                                                                                data-placement="top"
                                                                                title="Add To Cart"
                                                                            >
                                                                                <i className="icon-bag2" />
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a
                                                                                href="#"
                                                                                data-placement="top"
                                                                                title="Quick View"
                                                                                data-toggle="modal"
                                                                                data-target="#product-quickview"
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
                                                                    <a className="ps-product__vendor" href="#">
                                                                        Global Office
                                  </a>
                                                                    <div className="ps-product__content">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Set 14-Piece Knife From KichiKit
                                    </a>
                                                                        <div className="ps-product__rating">
                                                                            <select
                                                                                className="ps-rating"
                                                                                data-read-only="true"
                                                                            >
                                                                                <option value={1}>1</option>
                                                                                <option value={1}>2</option>
                                                                                <option value={1}>3</option>
                                                                                <option value={1}>4</option>
                                                                                <option value={2}>5</option>
                                                                            </select>
                                                                            <span>01</span>
                                                                        </div>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                    <div className="ps-product__content hover">
                                                                        <a
                                                                            className="ps-product__title"
                                                                            href="product-default.html"
                                                                        >
                                                                            Set 14-Piece Knife From KichiKit
                                    </a>
                                                                        <p className="ps-product__price">$85.00</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ps-block__right">
                                        <figure>
                                            <figcaption>Recommended For You</figcaption>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img src="assets/img/products/home/1.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Korea Long Sofa Fabric In Blue Navy Color
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
                                                    <p className="ps-product__price sale">
                                                        $567.99 <del>$670.00 </del>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img src="assets/img/products/home/2.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Aroma Rice Cooker
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
                                                    <p className="ps-product__price">$101.99</p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img src="assets/img/products/home/3.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Simple Plastice Chair In White Color
                          </a>
                                                    <div className="ps-product__rating">
                                                        <select className="ps-rating" data-read-only="true">
                                                            <option value={1}>1</option>
                                                            <option value={1}>2</option>
                                                            <option value={1}>3</option>
                                                            <option value={1}>4</option>
                                                            <option value={2}>5</option>
                                                        </select>
                                                        <span>02</span>
                                                    </div>
                                                    <p className="ps-product__price sale">
                                                        $42.00 <del>$60.00 </del>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img src="assets/img/products/home/4.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Korea Fabric Chair In Brown Colorr
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
                                                    <p className="ps-product__price">$320.00</p>
                                                </div>
                                            </div>
                                            <div className="ps-product--horizontal">
                                                <div className="ps-product__thumbnail">
                                                    <a href="product-default.html">
                                                        <img src="assets/img/products/home/5.jpg" alt="" />
                                                    </a>
                                                </div>
                                                <div className="ps-product__content">
                                                    <a
                                                        className="ps-product__title"
                                                        href="product-default.html"
                                                    >
                                                        Set 14-Piece Knife From KichiKit
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
                                                    <p className="ps-product__price">$85.00</p>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
