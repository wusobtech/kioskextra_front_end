import { React, Component} from 'react';

class SideBar extends Component{
    render(){
        return(
            <div>
                <div class="ps-panel--sidebar" id="cart-mobile">
                    <div class="ps-panel__header">
                        <h3>Shopping Cart</h3>
                    </div>
                    <div class="navigation__content">
                        <div class="ps-cart--mobile">
                        <div class="ps-cart__content">
                            <div class="ps-product--cart-mobile">
                            <div class="ps-product__thumbnail"><a href="#"><img src="assets/img/products/clothing/7.jpg" alt=""></img></a></div>
                            <div class="ps-product__content"><a class="ps-product__remove" href="#"><i class="icon-cross"></i></a><a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                                <p><strong>Sold by:</strong>  YOUNG SHOP</p><small>1 x $59.99</small>
                            </div>
                            </div>
                        </div>
                        <div class="ps-cart__footer">
                            <h3>Sub Total:<strong>$59.99</strong></h3>
                            <figure><a class="ps-btn" href="shopping-cart.html">View Cart</a><a class="ps-btn" href="checkout.html">Checkout</a></figure>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="ps-panel--sidebar" id="navigation-mobile">
                    <div class="ps-panel__header">
                        <h3>Categories</h3>
                    </div>
                    <div class="ps-panel__content">
                                    <ul class="menu--mobile">
                                    <li class="current-menu-item "><a href="#">Hot Promotions</a>
                                    </li>
                                    <li class="current-menu-item menu-item-has-children has-mega-menu"><a href="#">Consumer Electronic</a><span class="sub-toggle"></span>
                                        <div class="mega-menu">
                                        <div class="mega-menu__column">
                                            <h4>Electronic<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="#">Home Audio &amp; Theathers</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">TV &amp; Videos</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Camera, Photos &amp; Videos</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Cellphones &amp; Accessories</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Headphones</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Videosgames</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Wireless Speakers</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Office Electronic</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        <div class="mega-menu__column">
                                            <h4>Accessories &amp; Parts<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="#">Digital Cables</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Audio &amp; Video Cables</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Batteries</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        </div>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Clothing &amp; Apparel</a>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Home, Garden &amp; Kitchen</a>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Health &amp; Beauty</a>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Yewelry &amp; Watches</a>
                                    </li>
                                    <li class="current-menu-item menu-item-has-children has-mega-menu"><a href="#">Computer &amp; Technology</a><span class="sub-toggle"></span>
                                        <div class="mega-menu">
                                        <div class="mega-menu__column">
                                            <h4>Computer &amp; Technologies<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="#">Computer &amp; Tablets</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Laptop</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Monitors</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Networking</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Drive &amp; Storages</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Computer Components</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Security &amp; Protection</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Gaming Laptop</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="#">Accessories</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        </div>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Babies &amp; Moms</a>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Sport &amp; Outdoor</a>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Phones &amp; Accessories</a>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Books &amp; Office</a>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Cars &amp; Motocycles</a>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Home Improments</a>
                                    </li>
                                    <li class="current-menu-item "><a href="#">Vouchers &amp; Services</a>
                                    </li>
                                    </ul>
                    </div>
                    </div>
                    <div class="navigation--list">
                    <div class="navigation__content"><a class="navigation__item ps-toggle--sidebar" href="#menu-mobile"><i class="icon-menu"></i><span> Menu</span></a><a class="navigation__item ps-toggle--sidebar" href="#navigation-mobile"><i class="icon-list4"></i><span> Categories</span></a><a class="navigation__item ps-toggle--sidebar" href="#search-sidebar"><i class="icon-magnifier"></i><span> Search</span></a><a class="navigation__item ps-toggle--sidebar" href="#cart-mobile"><i class="icon-bag2"></i><span> Cart</span></a></div>
                    </div>
                    <div class="ps-panel--sidebar" id="search-sidebar">
                    <div class="ps-panel__header">
                        <form class="ps-form--search-mobile" action="index.html" method="get">
                        <div class="form-group--nest">
                            <input class="form-control" type="text" placeholder="Search something..."></input>
                            <button><i class="icon-magnifier"></i></button>
                        </div>
                        </form>
                    </div>
                    <div class="navigation__content"></div>
                    </div>
                    <div class="ps-panel--sidebar" id="menu-mobile">
                    <div class="ps-panel__header">
                        <h3>Menu</h3>
                    </div>
                    <div class="ps-panel__content">
                                    <ul class="menu--mobile">
                                    <li class="menu-item-has-children"><a href="index.html">Home</a><span class="sub-toggle"></span>
                                                    <ul class="sub-menu">
                                                    <li class="current-menu-item "><a href="index.html">Marketplace Full Width</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-2.html">Home Auto Parts</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-10.html">Home Technology</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-9.html">Home Organic</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-3.html">Home Marketplace V1</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-4.html">Home Marketplace V2</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-5.html">Home Marketplace V3</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-6.html">Home Marketplace V4</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-7.html">Home Electronic</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-8.html">Home Furniture</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-kids.html">Home Kids</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="homepage-photo-and-video.html">Home photo and picture</a>
                                                    </li>
                                                    <li class="current-menu-item "><a href="home-medical.html">Home Medical</a>
                                                    </li>
                                                    </ul>
                                    </li>
                                    <li class="menu-item-has-children has-mega-menu"><a href="shop-default.html">Shop</a><span class="sub-toggle"></span>
                                        <div class="mega-menu">
                                        <div class="mega-menu__column">
                                            <h4>Catalog Pages<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="shop-default.html">Shop Default</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="shop-default.html">Shop Fullwidth</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="shop-categories.html">Shop Categories</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="shop-sidebar.html">Shop Sidebar</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="shop-sidebar-without-banner.html">Shop Without Banner</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="shop-carousel.html">Shop Carousel</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        <div class="mega-menu__column">
                                            <h4>Product Layout<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="product-default.html">Default</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-extend.html">Extended</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-full-content.html">Full Content</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-box.html">Boxed</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-sidebar.html">Sidebar</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-default.html">Fullwidth</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        <div class="mega-menu__column">
                                            <h4>Product Types<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="product-default.html">Simple</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-default.html">Color Swatches</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-image-swatches.html">Images Swatches</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-countdown.html">Countdown</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-multi-vendor.html">Multi-Vendor</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-instagram.html">Instagram</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-affiliate.html">Affiliate</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-on-sale.html">On sale</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-video.html">Video Featured</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-groupped.html">Grouped</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="product-out-stock.html">Out Of Stock</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        <div class="mega-menu__column">
                                            <h4>Woo Pages<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="shopping-cart.html">Shopping Cart</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="checkout.html">Checkout</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="whishlist.html">Whishlist</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="compare.html">Compare</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="order-tracking.html">Order Tracking</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="my-account.html">My Account</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="checkout-2.html">Checkout 2</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="shipping.html">Shipping</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="payment.html">Payment</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="payment-success.html">Payment Success</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        </div>
                                    </li>
                                    <li class="menu-item-has-children has-mega-menu"><a href="#">Pages</a><span class="sub-toggle"></span>
                                        <div class="mega-menu">
                                        <div class="mega-menu__column">
                                            <h4>Basic Page<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="about-us.html">About Us</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="contact-us.html">Contact</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="faqs.html">Faqs</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="comming-soon.html">Comming Soon</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="404-page.html">404 Page</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        <div class="mega-menu__column">
                                            <h4>Vendor Pages<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="become-a-vendor.html">Become a Vendor</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="vendor-store.html">Vendor Store</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="vendor-dashboard-free.html">Vendor Dashboard Free</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="vendor-dashboard-pro.html">Vendor Dashboard Pro</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="store-list.html">Store List</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="store-list.html">Store List 2</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="store-detail.html">Store Detail</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        <div class="mega-menu__column">
                                            <h4>Account Pages<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="user-information.html">User Information</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="addresses.html">Addresses</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="invoices.html">Invoices</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="invoice-detail.html">Invoice Detail</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="notifications.html">Notifications</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        </div>
                                    </li>
                                    <li class="menu-item-has-children has-mega-menu"><a href="#">Blogs</a><span class="sub-toggle"></span>
                                        <div class="mega-menu">
                                        <div class="mega-menu__column">
                                            <h4>Blog Layout<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="blog-grid.html">Grid</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="blog-list.html">Listing</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="blog-small-thumb.html">Small Thumb</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="blog-left-sidebar.html">Left Sidebar</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="blog-right-sidebar.html">Right Sidebar</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        <div class="mega-menu__column">
                                            <h4>Single Blog<span class="sub-toggle"></span></h4>
                                                        <ul class="mega-menu__list">
                                                        <li class="current-menu-item "><a href="blog-detail.html">Single 1</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="blog-detail-2.html">Single 2</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="blog-detail-3.html">Single 3</a>
                                                        </li>
                                                        <li class="current-menu-item "><a href="blog-detail-4.html">Single 4</a>
                                                        </li>
                                                        </ul>
                                        </div>
                                        </div>
                                    </li>
                                    </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar;