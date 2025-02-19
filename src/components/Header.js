import { React, Component} from 'react';
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return (
            <div>
                <header className="header header--market-place-3" data-sticky="true">
                    <div className="header__top">
                    <div className="container">
                        <div className="header__left">
                        <div className="menu--product-categories">
                            <div className="menu__toggle"><i className="icon-menu" /><span> Shop by Department</span></div>
                            <div className="menu__content">
                            <ul className="menu--dropdown">
                                <li className="current-menu-item "><a href="#"><i className="icon-star" /> Hot Promotions</a>
                                </li>
                                <li className="current-menu-item menu-item-has-children has-mega-menu"><a href="#"><i className="icon-laundry" /> Consumer Electronic</a>
                                <div className="mega-menu">
                                    <div className="mega-menu__column">
                                    <h4>Electronic<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="#">Home Audio &amp; Theathers</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">TV &amp; Videos</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Camera, Photos &amp; Videos</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Cellphones &amp; Accessories</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Headphones</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Videosgames</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Wireless Speakers</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Office Electronic</a>
                                        </li>
                                    </ul>
                                    </div>
                                    <div className="mega-menu__column">
                                    <h4>Accessories &amp; Parts<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="#">Digital Cables</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Audio &amp; Video Cables</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Batteries</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-shirt" /> Clothing &amp; Apparel</a>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-lampshade" /> Home, Garden &amp; Kitchen</a>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-heart-pulse" /> Health &amp; Beauty</a>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-diamond2" /> Yewelry &amp; Watches</a>
                                </li>
                                <li className="current-menu-item menu-item-has-children has-mega-menu"><a href="#"><i className="icon-desktop" /> Computer &amp; Technology</a>
                                <div className="mega-menu">
                                    <div className="mega-menu__column">
                                    <h4>Computer &amp; Technologies<span className="sub-toggle" /></h4>
                                    <ul className="mega-menu__list">
                                        <li className="current-menu-item "><a href="#">Computer &amp; Tablets</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Laptop</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Monitors</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Networking</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Drive &amp; Storages</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Computer Components</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Security &amp; Protection</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Gaming Laptop</a>
                                        </li>
                                        <li className="current-menu-item "><a href="#">Accessories</a>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-baby-bottle" /> Babies &amp; Moms</a>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-baseball" /> Sport &amp; Outdoor</a>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-smartphone" /> Phones &amp; Accessories</a>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-book2" /> Books &amp; Office</a>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-car-siren" /> Cars &amp; Motocycles</a>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-wrench" /> Home Improments</a>
                                </li>
                                <li className="current-menu-item "><a href="#"><i className="icon-tag" /> Vouchers &amp; Services</a>
                                </li>
                            </ul>
                            </div>
                        </div><a className="ps-logo" href="/"><img src="https://res.cloudinary.com/wusobtech-com/image/upload/c_scale,h_32,w_156/v1606737957/pngs/kioskxtra_logo_lk1bfx.png" alt="" /></a>
                        </div>
                        <div className="header__center">
                        <form className="ps-form--quick-search" action="index.html" method="get">
                            <div className="form-group--icon"><i className="icon-chevron-down" />
                            <select className="form-control">
                                <option value={1}>All</option>
                                <option value={1}>Bags</option>
                                <option value={1}>Shoes</option>
                                <option value={1}>Men</option>
                                <option value={1}>Women</option>
                                <option value={1}>Sunglasses</option>
                            </select>
                            </div>
                            <input className="form-control" type="text" placeholder="I'm shopping for..." />
                            <button>Search</button>
                        </form>
                        </div>
                        <div className="header__right">
                        <div className="header__actions"><Link to="/wishlist" className="header__extra"><i className="icon-heart" /><span><i>0</i></span></Link>
                            <div className="ps-cart--mini"><Link to="/cart" className="header__extra"><i className="icon-bag2" /><span><i>0</i></span></Link>
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
                                <figure><a className="ps-btn" href="shopping-cart.html">View Cart</a><a className="ps-btn" href="checkout.html">Checkout</a></figure>
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
                    <div className="container">
                        <div className="navigation__left">
                        <div className="menu--product-categories">
                            <div className="menu__toggle active"><i className="icon-menu" /><span> Shop by Department</span></div>
                            <div className="menu__content" />
                        </div>
                        </div>
                        <div className="navigation__right">
                        <ul className="menu menu--recent-view">
                            <li className="menu-item-has-children"><a href="#">Your Recently Viewed</a>
                            <div className="navigation__recent-products">
                                <div className="ps-carousel--nav owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed={5000} data-owl-gap={30} data-owl-nav="true" data-owl-dots="false" data-owl-item={8} data-owl-item-xs={3} data-owl-item-sm={4} data-owl-item-md={5} data-owl-item-lg={6} data-owl-duration={1000} data-owl-mousedrag="on"><a href="#"><img src="assets/img/products/technology/1.jpg" alt="" /></a><a href="#"><img src="assets/img/products/technology/2.jpg" alt="" /></a><a href="#"><img src="assets/img/products/technology/3.jpg" alt="" /></a><a href="#"><img src="assets/img/products/technology/4.jpg" alt="" /></a><a href="#"><img src="assets/img/products/technology/5.jpg" alt="" /></a><a href="#"><img src="assets/img/products/technology/6.jpg" alt="" /></a><a href="#"><img src="assets/img/products/technology/7.jpg" alt="" /></a><a href="#"><img src="assets/img/products/technology/8.jpg" alt="" /></a></div>
                                <p><a href="shop-default.html">See all your recently viewed items</a></p>
                            </div>
                            </li>
                        </ul>
                        <ul className="navigation__extra">
                            <li><Link to="/vendor_register">Sell on Martfury</Link></li>
                            <li><Link to="/Order_tracking">Track your order</Link></li>
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
                        <div className="ps-cart--mini"><a className="header__extra" href="#"><i className="icon-bag2" /><span><i>0</i></span></a>
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
                                <figure><a className="ps-btn" href="shopping-cart.html">View Cart</a><a className="ps-btn" href="checkout.html">Checkout</a></figure>
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