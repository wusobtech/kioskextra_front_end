import { React, Component} from 'react';

class Header extends Component{
    render(){
        return (
            <div>
                <header className="header header--market-place-3" data-sticky="true">
                    <div className="header__top">
                        <div className="container">
                            <div className="header__left">
                                <div className="menu--product-categories">
                                    <div className="menu__toggle"><i className="icon-menu"></i><span> Shop by Department</span></div>
                                    <div className="menu__content">
                                        <ul className="menu--dropdown">
                                            <li className="current-menu-item "><a href="#"><i className="icon-star"></i> Hot Promotions</a>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children has-mega-menu"><a href="#"><i className="icon-laundry"></i> Consumer Electronic</a>
                                                <div className="mega-menu">
                                                <div className="mega-menu__column">
                                                    <h4>Electronic<span className="sub-toggle"></span></h4>
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
                                                    <h4>Accessories &amp; Parts<span className="sub-toggle"></span></h4>
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
                                            <li className="current-menu-item "><a href="#"><i className="icon-shirt"></i> Clothing &amp; Apparel</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#"><i className="icon-lampshade"></i> Home, Garden &amp; Kitchen</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#"><i className="icon-heart-pulse"></i> Health &amp; Beauty</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#"><i className="icon-diamond2"></i> Yewelry &amp; Watches</a>
                                            </li>
                                            <li className="current-menu-item menu-item-has-children has-mega-menu"><a href="#"><i className="icon-desktop"></i> Computer &amp; Technology</a>
                                                <div className="mega-menu">
                                                <div className="mega-menu__column">
                                                    <h4>Computer &amp; Technologies<span className="sub-toggle"></span></h4>
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
                                            <li className="current-menu-item "><a href="#"><i className="icon-baby-bottle"></i> Babies &amp; Moms</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#"><i className="icon-baseball"></i> Sport &amp; Outdoor</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#"><i className="icon-smartphone"></i> Phones &amp; Accessories</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#"><i className="icon-book2"></i> Books &amp; Office</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#"><i className="icon-car-siren"></i> Cars &amp; Motocycles</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#"><i className="icon-wrench"></i> Home Improments</a>
                                            </li>
                                            <li className="current-menu-item "><a href="#"><i className="icon-tag"></i> Vouchers &amp; Services</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div><a className="ps-logo" href="index.html"><img src="img/logo_light.png" alt=""></img></a>
                            </div>
                            <div className="header__center">
                                <form className="ps-form--quick-search" action="index.html" method="get">
                                    <div className="form-group--icon"><i className="icon-chevron-down"></i>
                                        <select className="form-control">
                                        <option value="1">All</option>
                                        <option value="1">Bags</option>
                                        <option value="1">Shoes</option>
                                        <option value="1">Men</option>
                                        <option value="1">Women</option>
                                        <option value="1">Sunglasses</option>
                                        </select>
                                    </div>
                                    <input className="form-control" type="text" placeholder="I'm shopping for..."></input>
                                    <button>Search</button>
                                </form>
                            </div>
                            <div className="header__right">
                                <div className="header__actions"><a className="header__extra" href="#"><i className="icon-chart-bars"></i><span><i>0</i></span></a><a className="header__extra" href="#"><i className="icon-heart"></i><span><i>0</i></span></a>
                                <div className="ps-cart--mini"><a className="header__extra" href="#"><i className="icon-bag2"></i><span><i>0</i></span></a>
                                    <div className="ps-cart__content">
                                    <div className="ps-cart__items">
                                        <div className="ps-product--cart-mobile">
                                        <div className="ps-product__thumbnail"><a href="#"><img src="/public/assets/img/products/clothing/7.jpg" alt=""></img></a></div>
                                        <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross"></i></a><a href="product-default.html">MVMTH classNameical Leather Watch In Black</a>
                                            <p><strong>Sold by:</strong>  YOUNG SHOP</p><small>1 x $59.99</small>
                                        </div>
                                        </div>
                                        <div className="ps-product--cart-mobile">
                                        <div className="ps-product__thumbnail"><a href="#"><img src="/public/assets/img/products/clothing/5.jpg" alt=""></img></a></div>
                                        <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross"></i></a><a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
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
                                    <div className="ps-block__left"><i className="icon-user"></i></div>
                                    <div className="ps-block__right"><a href="my-account.html">Login</a><a href="my-account.html">Register</a></div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="navigation">
                        <div className="container">
                            <div className="navigation__left">
                                <div className="menu--product-categories">
                                <div className="menu__toggle active"><i className="icon-menu"></i><span> Shop by Department</span></div>
                                <div className="menu__content"></div>
                                </div>
                            </div>
                            <div className="navigation__right">
                                <ul className="menu menu--recent-view">
                                    <li className="menu-item-has-children"><a href="#">Your Recently Viewed</a>
                                        <div className="navigation__recent-products">
                                        <div className="ps-carousel--nav owl-slider" data-owl-auto="true" data-owl-loop="true" data-owl-speed="5000" data-owl-gap="30" data-owl-nav="true" data-owl-dots="false" data-owl-item="8" data-owl-item-xs="3" data-owl-item-sm="4" data-owl-item-md="5" data-owl-item-lg="6" data-owl-duration="1000" data-owl-mousedrag="on"><a href="#"><img src="/public/assets/img/products/technology/1.jpg" alt=""></img></a><a href="#"><img src="/public/assets/img/products/technology/2.jpg" alt=""></img></a><a href="#"><img src="/public/assets/img/products/technology/3.jpg" alt=""></img></a><a href="#"><img src="/public/assets/img/products/technology/4.jpg" alt=""></img></a><a href="#"><img src="/public/assets/img/products/technology/5.jpg" alt=""></img></a><a href="#"><img src="img/products/technology/6.jpg" alt=""></img></a><a href="#"><img src="img/products/technology/7.jpg" alt=""></img></a><a href="#"><img src="img/products/technology/8.jpg" alt=""></img></a>
                                        </div>
                                        <p><a href="shop-default.html">See all your recently viewed items</a></p>
                                        </div>
                                    </li>
                                </ul>
                                <ul className="navigation__extra">
                                <li><a href="#">Sell on Martfury</a></li>
                                <li><a href="#">Tract your order</a></li>
                                <li>
                                    <div className="ps-dropdown"><a href="#">US Dollar</a>
                                        <ul className="ps-dropdown-menu">
                                            <li><a href="#">Us Dollar</a></li>
                                            <li><a href="#">Euro</a></li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="ps-dropdown language"><a href="#"><img src="/public/assets/img/flag/en.png" alt=""></img>English</a>
                                    <ul className="ps-dropdown-menu">
                                        <li><a href="#"><img src="/public/assets/img/flag/germany.png" alt=""></img> Germany</a></li>
                                        <li><a href="#"><img src="/public/assetsimg/flag/fr.png" alt=""> </img>France</a></li>
                                    </ul>
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
                        <p>Welcome to Martfury Online Shopping Store !</p>
                        </div>
                        <div className="header__right">
                        <ul className="navigation__extra">
                            <li><a href="#">Sell on Martfury</a></li>
                            <li><a href="#">Tract your order</a></li>
                            <li>
                            <div className="ps-dropdown"><a href="#">US Dollar</a>
                                <ul className="ps-dropdown-menu">
                                <li><a href="#">Us Dollar</a></li>
                                <li><a href="#">Euro</a></li>
                                </ul>
                            </div>
                            </li>
                            <li>
                            <div className="ps-dropdown language"><a href="#"><img src="img/flag/en.png" alt=""></img>English</a>
                                <ul className="ps-dropdown-menu">
                                <li><a href="#"><img src="/public/assets/img/flag/germany.png" alt=""></img> Germany</a></li>
                                <li><a href="#"><img src="/public/assets/img/flag/fr.png" alt=""></img> France</a></li>
                                </ul>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div className="navigation--mobile">
                        <div className="navigation__left"><a className="ps-logo" href="index.html"><img src="/public//assets/img/logo_light.png" alt=""></img></a></div>
                        <div className="navigation__right">
                        <div className="header__actions">
                            <div className="ps-cart--mini"><a className="header__extra" href="#"><i className="icon-bag2"></i><span><i>0</i></span></a>
                            <div className="ps-cart__content">
                                <div className="ps-cart__items">
                                <div className="ps-product--cart-mobile">
                                    <div className="ps-product__thumbnail"><a href="#"><img src="/public/assets/img/products/clothing/7.jpg" alt=""></img></a></div>
                                    <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross"></i></a><a href="product-default.html">MVMTH classNameical Leather Watch In Black</a>
                                    <p><strong>Sold by:</strong>  YOUNG SHOP</p><small>1 x $59.99</small>
                                    </div>
                                </div>
                                <div className="ps-product--cart-mobile">
                                    <div className="ps-product__thumbnail"><a href="#"><img src="/public/assets/img/products/clothing/5.jpg" alt=""></img></a></div>
                                    <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross"></i></a><a href="product-default.html">Sleeve Linen Blend Caro Pane Shirt</a>
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
                            <div className="ps-block__left"><i className="icon-user"></i></div>
                            <div className="ps-block__right"><a href="my-account.html">Login</a><a href="my-account.html">Register</a></div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="ps-search--mobile">
                        <form className="ps-form--search-mobile" action="index.html" method="get">
                        <div className="form-group--nest">
                            <input className="form-control" type="text" placeholder="Search something..."></input>
                            <button><i className="icon-magnifier"></i></button>
                        </div>
                        </form>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;