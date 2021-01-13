import { React, Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return (
            <div>
                <header className="header header--1" data-sticky="true">
                    <div className="header__top">
                        <div className="ps-container">
                            <div className="header__left">
                            <div className="menu--product-categories">
                                <div className="menu__toggle"><i className="icon-menu" /><span> Shop by Department</span></div>
                                <div className="menu__content">
                                <ul className="menu--dropdown">
                                    <li><a href="#"><i className="icon-star" /> Hot Promotions</a>
                                    </li>
                                    <li className="menu-item-has-children has-mega-menu"><a href="#"><i className="icon-laundry" /> Consumer Electronic</a>
                                    <div className="mega-menu">
                                        <div className="mega-menu__column">
                                        <h4>Electronic<span className="sub-toggle" /></h4>
                                        <ul className="mega-menu__list">
                                            <li><a href="#">Home Audio &amp; Theathers</a>
                                            </li>
                                            <li><a href="#">TV &amp; Videos</a>
                                            </li>
                                            <li><a href="#">Camera, Photos &amp; Videos</a>
                                            </li>
                                            <li><a href="#">Cellphones &amp; Accessories</a>
                                            </li>
                                            <li><a href="#">Headphones</a>
                                            </li>
                                            <li><a href="#">Videosgames</a>
                                            </li>
                                            <li><a href="#">Wireless Speakers</a>
                                            </li>
                                            <li><a href="#">Office Electronic</a>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="mega-menu__column">
                                        <h4>Accessories &amp; Parts<span className="sub-toggle" /></h4>
                                        <ul className="mega-menu__list">
                                            <li><a href="#">Digital Cables</a>
                                            </li>
                                            <li><a href="#">Audio &amp; Video Cables</a>
                                            </li>
                                            <li><a href="#">Batteries</a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </li>
                                    <li><a href="#"><i className="icon-shirt" /> Clothing &amp; Apparel</a>
                                    </li>
                                    <li><a href="#"><i className="icon-lampshade" /> Home, Garden &amp; Kitchen</a>
                                    </li>
                                    <li><a href="#"><i className="icon-heart-pulse" /> Health &amp; Beauty</a>
                                    </li>
                                    <li><a href="#"><i className="icon-diamond2" /> Yewelry &amp; Watches</a>
                                    </li>
                                    <li className="menu-item-has-children has-mega-menu"><a href="#"><i className="icon-desktop" /> Computer &amp; Technology</a>
                                    <div className="mega-menu">
                                        <div className="mega-menu__column">
                                        <h4>Computer &amp; Technologies<span className="sub-toggle" /></h4>
                                        <ul className="mega-menu__list">
                                            <li><a href="#">Computer &amp; Tablets</a>
                                            </li>
                                            <li><a href="#">Laptop</a>
                                            </li>
                                            <li><a href="#">Monitors</a>
                                            </li>
                                            <li><a href="#">Networking</a>
                                            </li>
                                            <li><a href="#">Drive &amp; Storages</a>
                                            </li>
                                            <li><a href="#">Computer Components</a>
                                            </li>
                                            <li><a href="#">Security &amp; Protection</a>
                                            </li>
                                            <li><a href="#">Gaming Laptop</a>
                                            </li>
                                            <li><a href="#">Accessories</a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </li>
                                    <li><a href="#"><i className="icon-baby-bottle" /> Babies &amp; Moms</a>
                                    </li>
                                    <li><a href="#"><i className="icon-baseball" /> Sport &amp; Outdoor</a>
                                    </li>
                                    <li><a href="#"><i className="icon-smartphone" /> Phones &amp; Accessories</a>
                                    </li>
                                    <li><a href="#"><i className="icon-book2" /> Books &amp; Office</a>
                                    </li>
                                    <li><a href="#"><i className="icon-car-siren" /> Cars &amp; Motocycles</a>
                                    </li>
                                    <li><a href="#"><i className="icon-wrench" /> Home Improments</a>
                                    </li>
                                    <li><a href="#"><i className="icon-tag" /> Vouchers &amp; Services</a>
                                    </li>
                                </ul>
                                </div>
                            </div><a className="ps-logo" href="/"><img src="https://res.cloudinary.com/wusobtech-com/image/upload/c_scale,h_32,w_156/v1606737957/pngs/kioskxtra_logo_lk1bfx.png" alt="" /></a>
                            </div>
                            <div className="header__center">
                            <form className="ps-form--quick-search" action="/" method="get">
                                <div className="form-group--icon"><i className="icon-chevron-down" />
                                <select className="form-control">
                                    <option value={0} selected="selected">All</option>
                                    <option className="level-0" value="babies-moms">Babies &amp; Moms</option>
                                    <option className="level-0" value="books-office">Books &amp; Office</option>
                                    <option className="level-0" value="cars-motocycles">Cars &amp; Motocycles</option>
                                    <option className="level-0" value="clothing-apparel">Clothing &amp; Apparel</option>
                                    <option className="level-1" value="accessories-clothing-apparel">&nbsp;&nbsp;&nbsp;Accessories</option>
                                    <option className="level-1" value="bags">&nbsp;&nbsp;&nbsp;Bags</option>
                                    <option className="level-1" value="kids-fashion">&nbsp;&nbsp;&nbsp;Kid’s Fashion</option>
                                    <option className="level-1" value="mens">&nbsp;&nbsp;&nbsp;Mens</option>
                                    <option className="level-1" value="shoes">&nbsp;&nbsp;&nbsp;Shoes</option>
                                    <option className="level-1" value="sunglasses">&nbsp;&nbsp;&nbsp;Sunglasses</option>
                                    <option className="level-1" value="womens">&nbsp;&nbsp;&nbsp;Womens</option>
                                    <option className="level-0" value="computers-technologies">Computers &amp; Technologies</option>
                                    <option className="level-1" value="desktop-pc">&nbsp;&nbsp;&nbsp;Desktop PC</option>
                                    <option className="level-1" value="laptop">&nbsp;&nbsp;&nbsp;Laptop</option>
                                    <option className="level-1" value="smartphones">&nbsp;&nbsp;&nbsp;Smartphones</option>
                                    <option className="level-0" value="consumer-electrics">Consumer Electrics</option>
                                    <option className="level-1" value="air-conditioners">&nbsp;&nbsp;&nbsp;Air Conditioners</option>
                                    <option className="level-2" value="accessories">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Accessories</option>
                                    <option className="level-2" value="type-hanging-cell">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type Hanging Cell</option>
                                    <option className="level-2" value="type-hanging-wall">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type Hanging Wall</option>
                                    <option className="level-1" value="audios-theaters">&nbsp;&nbsp;&nbsp;Audios &amp; Theaters</option>
                                    <option className="level-2" value="headphone">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Headphone</option>
                                    <option className="level-2" value="home-theater-system">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home Theater System</option>
                                    <option className="level-2" value="speakers">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Speakers</option>
                                    <option className="level-1" value="car-electronics">&nbsp;&nbsp;&nbsp;Car Electronics</option>
                                    <option className="level-2" value="audio-video">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Audio &amp; Video</option>
                                    <option className="level-2" value="car-security">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Car Security</option>
                                    <option className="level-2" value="radar-detector">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Radar Detector</option>
                                    <option className="level-2" value="vehicle-gps">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vehicle GPS</option>
                                    <option className="level-1" value="office-electronics">&nbsp;&nbsp;&nbsp;Office Electronics</option>
                                    <option className="level-2" value="printers">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Printers</option>
                                    <option className="level-2" value="projectors">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Projectors</option>
                                    <option className="level-2" value="scanners">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Scanners</option>
                                    <option className="level-2" value="store-business">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Store &amp; Business</option>
                                    <option className="level-1" value="refrigerators">&nbsp;&nbsp;&nbsp;Refrigerators</option>
                                    <option className="level-1" value="tv-televisions">&nbsp;&nbsp;&nbsp;TV Televisions</option>
                                    <option className="level-2" value="4k-ultra-hd-tvs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4K Ultra HD TVs</option>
                                    <option className="level-2" value="led-tvs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LED TVs</option>
                                    <option className="level-2" value="oled-tvs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OLED TVs</option>
                                    <option className="level-1" value="washing-machines">&nbsp;&nbsp;&nbsp;Washing Machines</option>
                                    <option className="level-2" value="type-drying-clothes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type Drying Clothes</option>
                                    <option className="level-2" value="type-horizontal">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type Horizontal</option>
                                    <option className="level-2" value="type-vertical">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Type Vertical</option>
                                    <option className="level-0" value="garden-kitchen">Garden &amp; Kitchen</option>
                                    <option className="level-1" value="cookware">&nbsp;&nbsp;&nbsp;Cookware</option>
                                    <option className="level-1" value="decoration">&nbsp;&nbsp;&nbsp;Decoration</option>
                                    <option className="level-1" value="furniture">&nbsp;&nbsp;&nbsp;Furniture</option>
                                    <option className="level-1" value="garden-tools">&nbsp;&nbsp;&nbsp;Garden Tools</option>
                                    <option className="level-1" value="home-improvement">&nbsp;&nbsp;&nbsp;Home Improvement</option>
                                    <option className="level-1" value="powers-and-hand-tools">&nbsp;&nbsp;&nbsp;Powers And Hand Tools</option>
                                    <option className="level-1" value="utensil-gadget">&nbsp;&nbsp;&nbsp;Utensil &amp; Gadget</option>
                                    <option className="level-0" value="health-beauty">Health &amp; Beauty</option>
                                    <option className="level-1" value="equipments">&nbsp;&nbsp;&nbsp;Equipments</option>
                                    <option className="level-1" value="hair-care">&nbsp;&nbsp;&nbsp;Hair Care</option>
                                    <option className="level-1" value="perfumer">&nbsp;&nbsp;&nbsp;Perfumer</option>
                                    <option className="level-1" value="skin-care">&nbsp;&nbsp;&nbsp;Skin Care</option>
                                    <option className="level-0" value="jewelry-watches">Jewelry &amp; Watches</option>
                                    <option className="level-1" value="gemstone-jewelry">&nbsp;&nbsp;&nbsp;Gemstone Jewelry</option>
                                    <option className="level-1" value="mens-watches">&nbsp;&nbsp;&nbsp;Men’s Watches</option>
                                    <option className="level-1" value="womens-watches">&nbsp;&nbsp;&nbsp;Women’s Watches</option>
                                    <option className="level-0" value="phones-accessories">Phones &amp; Accessories</option>
                                    <option className="level-1" value="iphone-8">&nbsp;&nbsp;&nbsp;Iphone 8</option>
                                    <option className="level-1" value="iphone-x">&nbsp;&nbsp;&nbsp;Iphone X</option>
                                    <option className="level-1" value="sam-sung-note-8">&nbsp;&nbsp;&nbsp;Sam Sung Note 8</option>
                                    <option className="level-1" value="sam-sung-s8">&nbsp;&nbsp;&nbsp;Sam Sung S8</option>
                                    <option className="level-0" value="sport-outdoor">Sport &amp; Outdoor</option>
                                    <option className="level-1" value="freezer-burn">&nbsp;&nbsp;&nbsp;Freezer Burn</option>
                                    <option className="level-1" value="fridge-cooler">&nbsp;&nbsp;&nbsp;Fridge Cooler</option>
                                    <option className="level-1" value="wine-cabinets">&nbsp;&nbsp;&nbsp;Wine Cabinets</option>
                                </select>
                                </div>
                                <input className="form-control" type="text" placeholder="I'm shopping for..." id="input-search" />
                                <button>Search</button>
                                <div className="ps-panel--search-result">
                                <div className="ps-panel__content">
                                    <div className="ps-product ps-product--wide ps-product--search-result">
                                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/arrivals/1.jpg" alt="" /></a></div>
                                    <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Apple iPhone Retina 6s Plus 32GB</a>
                                        <div className="ps-product__rating">
                                        <select className="ps-rating" data-read-only="true">
                                            <option value={1}>1</option>
                                            <option value={1}>2</option>
                                            <option value={1}>3</option>
                                            <option value={1}>4</option>
                                            <option value={2}>5</option>
                                        </select><span />
                                        </div>
                                        <p className="ps-product__price">$990.50</p>
                                    </div>
                                    </div>
                                    <div className="ps-product ps-product--wide ps-product--search-result">
                                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/arrivals/1.jpg" alt="" /></a></div>
                                    <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Apple iPhone Retina 6s Plus 64GB</a>
                                        <div className="ps-product__rating">
                                        <select className="ps-rating" data-read-only="true">
                                            <option value={1}>1</option>
                                            <option value={1}>2</option>
                                            <option value={1}>3</option>
                                            <option value={1}>4</option>
                                            <option value={2}>5</option>
                                        </select><span />
                                        </div>
                                        <p className="ps-product__price">$1120.50</p>
                                    </div>
                                    </div>
                                    <div className="ps-product ps-product--wide ps-product--search-result">
                                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/arrivals/1.jpg" alt="" /></a></div>
                                    <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Apple iPhone Retina 6s Plus 128GB</a>
                                        <div className="ps-product__rating">
                                        <select className="ps-rating" data-read-only="true">
                                            <option value={1}>1</option>
                                            <option value={1}>2</option>
                                            <option value={1}>3</option>
                                            <option value={1}>4</option>
                                            <option value={2}>5</option>
                                        </select><span />
                                        </div>
                                        <p className="ps-product__price">$1220.50</p>
                                    </div>
                                    </div>
                                    <div className="ps-product ps-product--wide ps-product--search-result">
                                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/arrivals/2.jpg" alt="" /></a></div>
                                    <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Marshall Kilburn Portable Wireless Speaker</a>
                                        <div className="ps-product__rating">
                                        <select className="ps-rating" data-read-only="true">
                                            <option value={1}>1</option>
                                            <option value={1}>2</option>
                                            <option value={1}>3</option>
                                            <option value={1}>4</option>
                                            <option value={2}>5</option>
                                        </select><span>01</span>
                                        </div>
                                        <p className="ps-product__price">$36.78 – $56.99</p>
                                    </div>
                                    </div>
                                    <div className="ps-product ps-product--wide ps-product--search-result">
                                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/arrivals/3.jpg" alt="" /></a></div>
                                    <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Herschel Leather Duffle Bag In Brown Color</a>
                                        <div className="ps-product__rating">
                                        <select className="ps-rating" data-read-only="true">
                                            <option value={1}>1</option>
                                            <option value={1}>2</option>
                                            <option value={1}>3</option>
                                            <option value={1}>4</option>
                                            <option value={2}>5</option>
                                        </select><span>02</span>
                                        </div>
                                        <p className="ps-product__price">$125.30</p>
                                    </div>
                                    </div>
                                    <div className="ps-product ps-product--wide ps-product--search-result">
                                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/arrivals/4.jpg" alt="" /></a></div>
                                    <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Xbox One Wireless Controller Black Color</a>
                                        <div className="ps-product__rating">
                                        <select className="ps-rating" data-read-only="true">
                                            <option value={1}>1</option>
                                            <option value={1}>2</option>
                                            <option value={1}>3</option>
                                            <option value={1}>4</option>
                                            <option value={2}>5</option>
                                        </select><span>02</span>
                                        </div>
                                        <p className="ps-product__price">$55.30</p>
                                    </div>
                                    </div>
                                    <div className="ps-product ps-product--wide ps-product--search-result">
                                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/arrivals/5.jpg" alt="" /></a></div>
                                    <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Grand Slam Indoor Of Show Jumping Novel</a>
                                        <div className="ps-product__rating">
                                        <select className="ps-rating" data-read-only="true">
                                            <option value={1}>1</option>
                                            <option value={1}>2</option>
                                            <option value={1}>3</option>
                                            <option value={1}>4</option>
                                            <option value={2}>5</option>
                                        </select><span>02</span>
                                        </div>
                                        <p className="ps-product__price sale">$41.27 <del>$52.99 </del></p>
                                    </div>
                                    </div>
                                    <div className="ps-product ps-product--wide ps-product--search-result">
                                    <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/arrivals/6.jpg" alt="" /></a></div>
                                    <div className="ps-product__content"><a className="ps-product__title" href="product-default.html">Sound Intone I65 Earphone White Version</a>
                                        <div className="ps-product__rating">
                                        <select className="ps-rating" data-read-only="true">
                                            <option value={1}>1</option>
                                            <option value={1}>2</option>
                                            <option value={1}>3</option>
                                            <option value={1}>4</option>
                                            <option value={2}>5</option>
                                        </select><span>01</span>
                                        </div>
                                        <p className="ps-product__price sale">$41.27 <del>$62.39 </del></p>
                                    </div>
                                    </div>
                                </div>
                                <div className="ps-panel__footer text-center"><a href="shop-default.html">See all results</a></div>
                                </div>
                            </form>
                            </div>
                            <div className="header__right">
                            <div className="header__actions"><a className="header__extra" href="/wishlist"><i className="icon-heart" /><span><i>0</i></span></a>
                                <div className="ps-cart--mini"><a className="header__extra" href="/cart"><i className="icon-cart" /><span><i>0</i></span></a>
                                <div className="ps-cart__content">
                                    <div className="ps-cart__items">
                                    <div className="ps-product--cart-mobile">
                                        <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/7.jpg" alt="" /></a></div>
                                        <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" /></a><a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                                        <p><strong>Sold by:</strong>  YOUNG SHOP</p><small>1 x $59.99</small>
                                        </div>
                                    </div>
                                    <div className="ps-product--cart-mobile">
                                        <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/5.jpg" alt="" /></a></div>
                                        <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" /></a><a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                                        <p><strong>Sold by:</strong>  YOUNG SHOP</p><small>1 x $59.99</small>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="ps-cart__footer">
                                    <h3>Sub Total:<strong>$59.99</strong></h3>
                                    <figure><a className="ps-btn" href="/cart">View Cart</a><a className="ps-btn" href="checkout.html">Checkout</a></figure>
                                    </div>
                                </div>
                                </div>
                                <div className="ps-block--user-header">
                                <div className="ps-block__left"><i className="icon-user" /></div>
                                <div className="ps-block__right"><a href="/login">Login</a><a href="/register">Register</a></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <nav className="navigation">
                        <div className="ps-container">
                            <div className="navigation__left">
                            <div className="menu--product-categories">
                                <div className="menu__toggle"><i className="icon-menu" /><span> Shop by Department</span></div>
                                <div className="menu__content">
                                <ul className="menu--dropdown">
                                    <li><a href="#"><i className="icon-star" /> Hot Promotions</a>
                                    </li>
                                    <li className="menu-item-has-children has-mega-menu"><a href="#"><i className="icon-laundry" /> Consumer Electronic</a>
                                    <div className="mega-menu">
                                        <div className="mega-menu__column">
                                        <h4>Electronic<span className="sub-toggle" /></h4>
                                        <ul className="mega-menu__list">
                                            <li><a href="#">Home Audio &amp; Theathers</a>
                                            </li>
                                            <li><a href="#">TV &amp; Videos</a>
                                            </li>
                                            <li><a href="#">Camera, Photos &amp; Videos</a>
                                            </li>
                                            <li><a href="#">Cellphones &amp; Accessories</a>
                                            </li>
                                            <li><a href="#">Headphones</a>
                                            </li>
                                            <li><a href="#">Videosgames</a>
                                            </li>
                                            <li><a href="#">Wireless Speakers</a>
                                            </li>
                                            <li><a href="#">Office Electronic</a>
                                            </li>
                                        </ul>
                                        </div>
                                        <div className="mega-menu__column">
                                        <h4>Accessories &amp; Parts<span className="sub-toggle" /></h4>
                                        <ul className="mega-menu__list">
                                            <li><a href="#">Digital Cables</a>
                                            </li>
                                            <li><a href="#">Audio &amp; Video Cables</a>
                                            </li>
                                            <li><a href="#">Batteries</a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </li>
                                    <li><a href="#"><i className="icon-shirt" /> Clothing &amp; Apparel</a>
                                    </li>
                                    <li><a href="#"><i className="icon-lampshade" /> Home, Garden &amp; Kitchen</a>
                                    </li>
                                    <li><a href="#"><i className="icon-heart-pulse" /> Health &amp; Beauty</a>
                                    </li>
                                    <li><a href="#"><i className="icon-diamond2" /> Yewelry &amp; Watches</a>
                                    </li>
                                    <li className="menu-item-has-children has-mega-menu"><a href="#"><i className="icon-desktop" /> Computer &amp; Technology</a>
                                    <div className="mega-menu">
                                        <div className="mega-menu__column">
                                        <h4>Computer &amp; Technologies<span className="sub-toggle" /></h4>
                                        <ul className="mega-menu__list">
                                            <li><a href="#">Computer &amp; Tablets</a>
                                            </li>
                                            <li><a href="#">Laptop</a>
                                            </li>
                                            <li><a href="#">Monitors</a>
                                            </li>
                                            <li><a href="#">Networking</a>
                                            </li>
                                            <li><a href="#">Drive &amp; Storages</a>
                                            </li>
                                            <li><a href="#">Computer Components</a>
                                            </li>
                                            <li><a href="#">Security &amp; Protection</a>
                                            </li>
                                            <li><a href="#">Gaming Laptop</a>
                                            </li>
                                            <li><a href="#">Accessories</a>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </li>
                                    <li><a href="#"><i className="icon-baby-bottle" /> Babies &amp; Moms</a>
                                    </li>
                                    <li><a href="#"><i className="icon-baseball" /> Sport &amp; Outdoor</a>
                                    </li>
                                    <li><a href="#"><i className="icon-smartphone" /> Phones &amp; Accessories</a>
                                    </li>
                                    <li><a href="#"><i className="icon-book2" /> Books &amp; Office</a>
                                    </li>
                                    <li><a href="#"><i className="icon-car-siren" /> Cars &amp; Motocycles</a>
                                    </li>
                                    <li><a href="#"><i className="icon-wrench" /> Home Improments</a>
                                    </li>
                                    <li><a href="#"><i className="icon-tag" /> Vouchers &amp; Services</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            </div>
                            <div className="navigation__right">
                            <ul className="menu">
                                <li className="current-menu-item menu-item-has-children"><a href="index.html">Home</a><span className="sub-toggle" />
                                <ul className="sub-menu">
                                    <li><a href="index.html">Marketplace Full Width</a>
                                    </li>
                                    <li><a href="homepage-2.html">Home Auto Parts</a>
                                    </li>
                                    <li><a href="homepage-10.html">Home Technology</a>
                                    </li>
                                    <li><a href="homepage-9.html">Home Organic</a>
                                    </li>
                                    <li><a href="homepage-3.html">Home Marketplace V1</a>
                                    </li>
                                    <li><a href="homepage-4.html">Home Marketplace V2</a>
                                    </li>
                                    <li><a href="homepage-5.html">Home Marketplace V3</a>
                                    </li>
                                    <li><a href="homepage-6.html">Home Marketplace V4</a>
                                    </li>
                                    <li><a href="homepage-7.html">Home Electronic</a>
                                    </li>
                                    <li><a href="homepage-8.html">Home Furniture</a>
                                    </li>
                                    <li><a href="homepage-kids.html">Home Kids</a>
                                    </li>
                                    <li><a href="homepage-photo-and-video.html">Home photo and picture</a>
                                    </li>
                                    <li><a href="home-medical.html">Home Medical</a>
                                    </li>
                                </ul>
                                </li>
                                <li className="menu-item-has-children has-mega-menu"><a href="shop-default.html">Shop</a><span className="sub-toggle" />
                                <div className="mega-menu">
                                    <div className="mega-menu__column">
                                    <h4>Catalog Pages<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li><a href="shop-default.html">Shop Default</a>
                                        </li>
                                        <li><a href="shop-default.html">Shop Fullwidth</a>
                                        </li>
                                        <li><a href="shop-categories.html">Shop Categories</a>
                                        </li>
                                        <li><a href="shop-sidebar.html">Shop Sidebar</a>
                                        </li>
                                        <li><a href="shop-sidebar-without-banner.html">Shop Without Banner</a>
                                        </li>
                                        <li><a href="shop-carousel.html">Shop Carousel</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                    <h4>Product Layout<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li><a href="product-default.html">Default</a>
                                        </li>
                                        <li><a href="product-extend.html">Extended</a>
                                        </li>
                                        <li><a href="product-full-content.html">Full Content</a>
                                        </li>
                                        <li><a href="product-box.html">Boxed</a>
                                        </li>
                                        <li><a href="product-sidebar.html">Sidebar</a>
                                        </li>
                                        <li><a href="product-default.html">Fullwidth</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                    <h4>Product Types<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li><a href="product-default.html">Simple</a>
                                        </li>
                                        <li><a href="product-default.html">Color Swatches</a>
                                        </li>
                                        <li><a href="product-image-swatches.html">Images Swatches</a>
                                        </li>
                                        <li><a href="product-countdown.html">Countdown</a>
                                        </li>
                                        <li><a href="product-multi-vendor.html">Multi-Vendor</a>
                                        </li>
                                        <li><a href="product-instagram.html">Instagram</a>
                                        </li>
                                        <li><a href="product-affiliate.html">Affiliate</a>
                                        </li>
                                        <li><a href="product-on-sale.html">On sale</a>
                                        </li>
                                        <li><a href="product-video.html">Video Featured</a>
                                        </li>
                                        <li><a href="product-groupped.html">Grouped</a>
                                        </li>
                                        <li><a href="product-out-stock.html">Out Of Stock</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                    <h4>Woo Pages<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li><a href="shopping-cart.html">Shopping Cart</a>
                                        </li>
                                        <li><a href="checkout.html">Checkout</a>
                                        </li>
                                        <li><a href="whishlist.html">Whishlist</a>
                                        </li>
                                        <li><a href="compare.html">Compare</a>
                                        </li>
                                        <li><a href="order-tracking.html">Order Tracking</a>
                                        </li>
                                        <li><a href="my-account.html">My Account</a>
                                        </li>
                                        <li><a href="checkout-2.html">Checkout 2</a>
                                        </li>
                                        <li><a href="shipping.html">Shipping</a>
                                        </li>
                                        <li><a href="payment.html">Payment</a>
                                        </li>
                                        <li><a href="payment-success.html">Payment Success</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </li>
                                <li className="menu-item-has-children has-mega-menu"><a href="#">Pages</a><span className="sub-toggle" />
                                <div className="mega-menu">
                                    <div className="mega-menu__column">
                                    <h4>Basic Page<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li><a href="about-us.html">About Us</a>
                                        </li>
                                        <li><a href="contact-us.html">Contact</a>
                                        </li>
                                        <li><a href="faqs.html">Faqs</a>
                                        </li>
                                        <li><a href="comming-soon.html">Comming Soon</a>
                                        </li>
                                        <li><a href="404-page.html">404 Page</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                    <h4>Vendor Pages<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li><a href="become-a-vendor.html">Become a Vendor</a>
                                        </li>
                                        <li><a href="vendor-store.html">Vendor Store</a>
                                        </li>
                                        <li><a href="vendor-dashboard-free.html">Vendor Dashboard Free</a>
                                        </li>
                                        <li><a href="vendor-dashboard-pro.html">Vendor Dashboard Pro</a>
                                        </li>
                                        <li><a href="store-list.html">Store List</a>
                                        </li>
                                        <li><a href="store-list.html">Store List 2</a>
                                        </li>
                                        <li><a href="store-detail.html">Store Detail</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                    <h4>Account Pages<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li><a href="user-information.html">User Information</a>
                                        </li>
                                        <li><a href="addresses.html">Addresses</a>
                                        </li>
                                        <li><a href="invoices.html">Invoices</a>
                                        </li>
                                        <li><a href="invoice-detail.html">Invoice Detail</a>
                                        </li>
                                        <li><a href="notifications.html">Notifications</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </li>
                                <li className="menu-item-has-children has-mega-menu"><a href="#">Blogs</a><span className="sub-toggle" />
                                <div className="mega-menu">
                                    <div className="mega-menu__column">
                                    <h4>Blog Layout<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li><a href="blog-grid.html">Grid</a>
                                        </li>
                                        <li><a href="blog-list.html">Listing</a>
                                        </li>
                                        <li><a href="blog-small-thumb.html">Small Thumb</a>
                                        </li>
                                        <li><a href="blog-left-sidebar.html">Left Sidebar</a>
                                        </li>
                                        <li><a href="blog-right-sidebar.html">Right Sidebar</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                    <h4>Single Blog<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li><a href="blog-detail.html">Single 1</a>
                                        </li>
                                        <li><a href="blog-detail-2.html">Single 2</a>
                                        </li>
                                        <li><a href="blog-detail-3.html">Single 3</a>
                                        </li>
                                        <li><a href="blog-detail-4.html">Single 4</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </li>
                            </ul>
                            <ul className="navigation__extra">
                                <li><a href="/vendor_register">Sell on KioskExtra</a></li>
                                <li><a href="#">Tract your order</a></li>
                                <li>
                                <div className="">
                                    <a href="#"><img src="img/flag/en.png" alt="" />English</a>
                                </div>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </header>

                <header className="header header--mobile" data-sticky="true">
                    <div className="header__top">
                    <div className="header__left">
                        <p>Welcome to KioskExtra Online Shopping Store !</p>
                    </div>
                    <div className="header__right">
                        <ul className="navigation__extra">
                            <li><a href="#">Sell on KioskExtra</a></li>
                            <li><a href="#">Tract your order</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="navigation--mobile">
                    <div className="navigation__left"><a className="ps-logo" href="/"><img src="https://res.cloudinary.com/wusobtech-com/image/upload/c_scale,h_32,w_156/v1606737957/pngs/kioskxtra_logo_lk1bfx.png" alt="" /></a></div>
                    <div className="navigation__right">
                        <div className="header__actions">
                        <div className="ps-cart--mini"><a className="header__extra" href="/cart"><i className="icon-bag2" /><span><i>0</i></span></a>
                            <div className="ps-cart__content">
                            <div className="ps-cart__items">
                                <div className="ps-product--cart-mobile">
                                <div className="ps-product__thumbnail"><a href="#"><img src="assets/img/products/clothing/7.jpg" alt="" /></a></div>
                                <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" /></a><a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                                    <p><strong>Sold by:</strong>  YOUNG SHOP</p><small>1 x $59.99</small>
                                </div>
                                </div>
                                <div className="ps-product--cart-mobile">
                                <div className="ps-product__thumbnail"><a href="#"><img src="assets/img/products/clothing/5.jpg" alt="" /></a></div>
                                <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" /></a><a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
                                    <p><strong>Sold by:</strong>  YOUNG SHOP</p><small>1 x $59.99</small>
                                </div>
                                </div>
                            </div>
                            <div className="ps-cart__footer">
                                <h3>Sub Total:<strong>$59.99</strong></h3>
                                <figure><a className="ps-btn" href="/cart">View Cart</a><a className="ps-btn" href="checkout.html">Checkout</a></figure>
                            </div>
                            </div>
                        </div>
                        <div className="ps-block--user-header">
                            <div className="ps-block__left"><i className="icon-user" /></div>
                            <div className="ps-block__left"><a href="/login">Login</a>/<a href="/register">Register</a></div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="ps-search--mobile">
                    <form className="ps-form--search-mobile" action="index.html" method="get">
                        <div className="form-group--nest">
                        <input className="form-control" type="text" placeholder="Search something..." />
                        <button><i className="icon-magnifier" /></button>
                        </div>
                    </form>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;