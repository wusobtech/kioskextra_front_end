import React, { Component } from 'react'

export default class wishlist extends Component {
    render() {
        return (
            <div>
              <div className="ps-panel--sidebar" id="cart-mobile">
                <div className="ps-panel__header">
                  <h3>Shopping Cart</h3>
                </div>
                <div className="navigation__content">
                  <div className="ps-cart--mobile">
                    <div className="ps-cart__content">
                      <div className="ps-product--cart-mobile">
                        <div className="ps-product__thumbnail"><a href="#"><img src="img/products/clothing/7.jpg" alt="" /></a></div>
                        <div className="ps-product__content"><a className="ps-product__remove" href="#"><i className="icon-cross" /></a><a href="product-default.html">MVMTH Classical Leather Watch In Black</a>
                          <p><strong>Sold by:</strong> YOUNG SHOP</p><small>1 x $59.99</small>
                        </div>
                      </div>
                    </div>
                    <div className="ps-cart__footer">
                      <h3>Sub Total:<strong>$59.99</strong></h3>
                      <figure><a className="ps-btn" href="shopping-cart.html">View Cart</a><a className="ps-btn" href="checkout.html">Checkout</a></figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-panel--sidebar" id="navigation-mobile">
                <div className="ps-panel__header">
                  <h3>Categories</h3>
                </div>
                <div className="ps-panel__content">
                  <ul className="menu--mobile">
                    <li className="current-menu-item "><a href="#">Hot Promotions</a>
                    </li>
                    <li className="current-menu-item menu-item-has-children has-mega-menu"><a href="#">Consumer Electronic</a><span className="sub-toggle" />
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
                    <li className="current-menu-item "><a href="#">Clothing &amp; Apparel</a>
                    </li>
                    <li className="current-menu-item "><a href="#">Home, Garden &amp; Kitchen</a>
                    </li>
                    <li className="current-menu-item "><a href="#">Health &amp; Beauty</a>
                    </li>
                    <li className="current-menu-item "><a href="#">Yewelry &amp; Watches</a>
                    </li>
                    <li className="current-menu-item menu-item-has-children has-mega-menu"><a href="#">Computer &amp; Technology</a><span className="sub-toggle" />
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
                    <li className="current-menu-item "><a href="#">Babies &amp; Moms</a>
                    </li>
                    <li className="current-menu-item "><a href="#">Sport &amp; Outdoor</a>
                    </li>
                    <li className="current-menu-item "><a href="#">Phones &amp; Accessories</a>
                    </li>
                    <li className="current-menu-item "><a href="#">Books &amp; Office</a>
                    </li>
                    <li className="current-menu-item "><a href="#">Cars &amp; Motocycles</a>
                    </li>
                    <li className="current-menu-item "><a href="#">Home Improments</a>
                    </li>
                    <li className="current-menu-item "><a href="#">Vouchers &amp; Services</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navigation--list">
                <div className="navigation__content"><a className="navigation__item ps-toggle--sidebar" href="#menu-mobile"><i className="icon-menu" /><span> Menu</span></a><a className="navigation__item ps-toggle--sidebar" href="#navigation-mobile"><i className="icon-list4" /><span> Categories</span></a><a className="navigation__item ps-toggle--sidebar" href="#search-sidebar"><i className="icon-magnifier" /><span> Search</span></a><a className="navigation__item ps-toggle--sidebar" href="#cart-mobile"><i className="icon-bag2" /><span> Cart</span></a></div>
              </div>
              <div className="ps-panel--sidebar" id="search-sidebar">
                <div className="ps-panel__header">
                  <form className="ps-form--search-mobile" action="http://nouthemes.net/html/martfury/index.html" method="get">
                    <div className="form-group--nest">
                      <input className="form-control" type="text" placeholder="Search something..." />
                      <button><i className="icon-magnifier" /></button>
                    </div>
                  </form>
                </div>
                <div className="navigation__content" />
              </div>
              <div className="ps-panel--sidebar" id="menu-mobile">
                <div className="ps-panel__header">
                  <h3>Menu</h3>
                </div>
                <div className="ps-panel__content">
                  <ul className="menu--mobile">
                    <li className="menu-item-has-children"><a href="index.html">Home</a><span className="sub-toggle" />
                      <ul className="sub-menu">
                        <li className="current-menu-item "><a href="index.html">Marketplace Full Width</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-2.html">Home Auto Parts</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-10.html">Home Technology</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-9.html">Home Organic</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-3.html">Home Marketplace V1</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-4.html">Home Marketplace V2</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-5.html">Home Marketplace V3</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-6.html">Home Marketplace V4</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-7.html">Home Electronic</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-8.html">Home Furniture</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-kids.html">Home Kids</a>
                        </li>
                        <li className="current-menu-item "><a href="homepage-photo-and-video.html">Home photo and picture</a>
                        </li>
                        <li className="current-menu-item "><a href="home-medical.html">Home Medical</a>
                        </li>
                      </ul>
                    </li>
                    <li className="menu-item-has-children has-mega-menu"><a href="shop-default.html">Shop</a><span className="sub-toggle" />
                      <div className="mega-menu">
                        <div className="mega-menu__column">
                          <h4>Catalog Pages<span className="sub-toggle" /></h4>
                          <ul className="mega-menu__list">
                            <li className="current-menu-item "><a href="shop-default.html">Shop Default</a>
                            </li>
                            <li className="current-menu-item "><a href="shop-default.html">Shop Fullwidth</a>
                            </li>
                            <li className="current-menu-item "><a href="shop-categories.html">Shop Categories</a>
                            </li>
                            <li className="current-menu-item "><a href="shop-sidebar.html">Shop Sidebar</a>
                            </li>
                            <li className="current-menu-item "><a href="shop-sidebar-without-banner.html">Shop Without Banner</a>
                            </li>
                            <li className="current-menu-item "><a href="shop-carousel.html">Shop Carousel</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-menu__column">
                          <h4>Product Layout<span className="sub-toggle" /></h4>
                          <ul className="mega-menu__list">
                            <li className="current-menu-item "><a href="product-default.html">Default</a>
                            </li>
                            <li className="current-menu-item "><a href="product-extend.html">Extended</a>
                            </li>
                            <li className="current-menu-item "><a href="product-full-content.html">Full Content</a>
                            </li>
                            <li className="current-menu-item "><a href="product-box.html">Boxed</a>
                            </li>
                            <li className="current-menu-item "><a href="product-sidebar.html">Sidebar</a>
                            </li>
                            <li className="current-menu-item "><a href="product-default.html">Fullwidth</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-menu__column">
                          <h4>Product Types<span className="sub-toggle" /></h4>
                          <ul className="mega-menu__list">
                            <li className="current-menu-item "><a href="product-default.html">Simple</a>
                            </li>
                            <li className="current-menu-item "><a href="product-default.html">Color Swatches</a>
                            </li>
                            <li className="current-menu-item "><a href="product-image-swatches.html">Images Swatches</a>
                            </li>
                            <li className="current-menu-item "><a href="product-countdown.html">Countdown</a>
                            </li>
                            <li className="current-menu-item "><a href="product-multi-vendor.html">Multi-Vendor</a>
                            </li>
                            <li className="current-menu-item "><a href="product-instagram.html">Instagram</a>
                            </li>
                            <li className="current-menu-item "><a href="product-affiliate.html">Affiliate</a>
                            </li>
                            <li className="current-menu-item "><a href="product-on-sale.html">On sale</a>
                            </li>
                            <li className="current-menu-item "><a href="product-video.html">Video Featured</a>
                            </li>
                            <li className="current-menu-item "><a href="product-groupped.html">Grouped</a>
                            </li>
                            <li className="current-menu-item "><a href="product-out-stock.html">Out Of Stock</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-menu__column">
                          <h4>Woo Pages<span className="sub-toggle" /></h4>
                          <ul className="mega-menu__list">
                            <li className="current-menu-item "><a href="shopping-cart.html">Shopping Cart</a>
                            </li>
                            <li className="current-menu-item "><a href="checkout.html">Checkout</a>
                            </li>
                            <li className="current-menu-item "><a href="whishlist.html">Whishlist</a>
                            </li>
                            <li className="current-menu-item "><a href="compare.html">Compare</a>
                            </li>
                            <li className="current-menu-item "><a href="order-tracking.html">Order Tracking</a>
                            </li>
                            <li className="current-menu-item "><a href="my-account.html">My Account</a>
                            </li>
                            <li className="current-menu-item "><a href="checkout-2.html">Checkout 2</a>
                            </li>
                            <li className="current-menu-item "><a href="shipping.html">Shipping</a>
                            </li>
                            <li className="current-menu-item "><a href="payment.html">Payment</a>
                            </li>
                            <li className="current-menu-item "><a href="payment-success.html">Payment Success</a>
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
                            <li className="current-menu-item "><a href="about-us.html">About Us</a>
                            </li>
                            <li className="current-menu-item "><a href="contact-us.html">Contact</a>
                            </li>
                            <li className="current-menu-item "><a href="faqs.html">Faqs</a>
                            </li>
                            <li className="current-menu-item "><a href="comming-soon.html">Comming Soon</a>
                            </li>
                            <li className="current-menu-item "><a href="404-page.html">404 Page</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-menu__column">
                          <h4>Vendor Pages<span className="sub-toggle" /></h4>
                          <ul className="mega-menu__list">
                            <li className="current-menu-item "><a href="become-a-vendor.html">Become a Vendor</a>
                            </li>
                            <li className="current-menu-item "><a href="vendor-store.html">Vendor Store</a>
                            </li>
                            <li className="current-menu-item "><a href="vendor-dashboard-free.html">Vendor Dashboard Free</a>
                            </li>
                            <li className="current-menu-item "><a href="vendor-dashboard-pro.html">Vendor Dashboard Pro</a>
                            </li>
                            <li className="current-menu-item "><a href="store-list.html">Store List</a>
                            </li>
                            <li className="current-menu-item "><a href="store-list.html">Store List 2</a>
                            </li>
                            <li className="current-menu-item "><a href="store-detail.html">Store Detail</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-menu__column">
                          <h4>Account Pages<span className="sub-toggle" /></h4>
                          <ul className="mega-menu__list">
                            <li className="current-menu-item "><a href="user-information.html">User Information</a>
                            </li>
                            <li className="current-menu-item "><a href="addresses.html">Addresses</a>
                            </li>
                            <li className="current-menu-item "><a href="invoices.html">Invoices</a>
                            </li>
                            <li className="current-menu-item "><a href="invoice-detail.html">Invoice Detail</a>
                            </li>
                            <li className="current-menu-item "><a href="notifications.html">Notifications</a>
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
                            <li className="current-menu-item "><a href="blog-grid.html">Grid</a>
                            </li>
                            <li className="current-menu-item "><a href="blog-list.html">Listing</a>
                            </li>
                            <li className="current-menu-item "><a href="blog-small-thumb.html">Small Thumb</a>
                            </li>
                            <li className="current-menu-item "><a href="blog-left-sidebar.html">Left Sidebar</a>
                            </li>
                            <li className="current-menu-item "><a href="blog-right-sidebar.html">Right Sidebar</a>
                            </li>
                          </ul>
                        </div>
                        <div className="mega-menu__column">
                          <h4>Single Blog<span className="sub-toggle" /></h4>
                          <ul className="mega-menu__list">
                            <li className="current-menu-item "><a href="blog-detail.html">Single 1</a>
                            </li>
                            <li className="current-menu-item "><a href="blog-detail-2.html">Single 2</a>
                            </li>
                            <li className="current-menu-item "><a href="blog-detail-3.html">Single 3</a>
                            </li>
                            <li className="current-menu-item "><a href="blog-detail-4.html">Single 4</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ps-page--simple">
                <div className="ps-breadcrumb">
                  <div className="container">
                    <ul className="breadcrumb">
                      <li><a href="index.html">Home</a></li>
                      <li><a href="shop-default.html">Shop</a></li>
                      <li>Whishlist</li>
                    </ul>
                  </div>
                </div>
                <div className="ps-section--shopping ps-whishlist">
                  <div className="container">
                    <div className="ps-section__header">
                      <h1>Wishlist</h1>
                    </div>
                    <div className="ps-section__content">
                      <div className="table-responsive">
                        <table className="table ps-table--whishlist">
                          <thead>
                            <tr>
                              <th />
                              <th>Product name</th>
                              <th>Unit Price</th>
                              <th>Stock Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><a href="#"><i className="icon-cross" /></a></td>
                              <td>
                                <div className="ps-product--cart">
                                  <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/1.jpg" alt="" /></a></div>
                                  <div className="ps-product__content"><a href="product-default.html">Marshall Kilburn Wireless Bluetooth Speaker, Black (A4819189)</a></div>
                                </div>
                              </td>
                              <td className="price">$205.00</td>
                              <td><span className="ps-tag ps-tag--in-stock">In-stock</span></td>
                              <td><a className="ps-btn" href="#">Add to cart</a></td>
                            </tr>
                            <tr>
                              <td><a href="#"><i className="icon-cross" /></a></td>
                              <td>
                                <div className="ps-product--cart">
                                  <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/clothing/2.jpg" alt="" /></a></div>
                                  <div className="ps-product__content"><a href="product-default.html">Unero Military Classical Backpack</a></div>
                                </div>
                              </td>
                              <td className="price">$108.00</td>
                              <td><span className="ps-tag ps-tag--in-stock">In-stock</span></td>
                              <td><a className="ps-btn" href="#">Add to cart</a></td>
                            </tr>
                            <tr>
                              <td><a href="#"><i className="icon-cross" /></a></td>
                              <td>
                                <div className="ps-product--cart">
                                  <div className="ps-product__thumbnail"><a href="product-default.html"><img src="img/products/electronic/15.jpg" alt="" /></a></div>
                                  <div className="ps-product__content"><a href="product-default.html">XtremepowerUS Stainless Steel Tumble Cloths Dryer</a></div>
                                </div>
                              </td>
                              <td className="price">$508.00</td>
                              <td><span className="ps-tag ps-tag--out-stock">Out-stock</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ps-newsletter">
                <div className="container">
                  <form className="ps-form--newsletter" action="http://nouthemes.net/html/martfury/do_action" method="post">
                    <div className="row">
                      <div className="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-form__left">
                          <h3>Newsletter</h3>
                          <p>Subcribe to get information about products and coupons</p>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <div className="ps-form__right">
                          <div className="form-group--nest">
                            <input className="form-control" type="email" placeholder="Email address" />
                            <button className="ps-btn">Subscribe</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div id="back2top"><i className="pe-7s-angle-up" /></div>
              <div className="ps-site-overlay" />
              <div id="loader-wrapper">
                <div className="loader-section section-left" />
                <div className="loader-section section-right" />
              </div>
              <div className="ps-search" id="site-search"><a className="ps-btn--close" href="#" />
                <div className="ps-search__content">
                  <form className="ps-form--primary-search" action="http://nouthemes.net/html/martfury/do_action" method="post">
                    <input className="form-control" type="text" placeholder="Search for..." />
                    <button><i className="aroma-magnifying-glass" /></button>
                  </form>
                </div>
              </div>
              <div className="modal fade" id="product-quickview" tabIndex={-1} role="dialog" aria-labelledby="product-quickview" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content"><span className="modal-close" data-dismiss="modal"><i className="icon-cross2" /></span>
                    <article className="ps-product--detail ps-product--fullwidth ps-product--quickview">
                      <div className="ps-product__header">
                        <div className="ps-product__thumbnail" data-vertical="false">
                          <div className="ps-product__images" data-arrow="true">
                            <div className="item"><img src="img/products/detail/fullwidth/1.jpg" alt="" /></div>
                            <div className="item"><img src="img/products/detail/fullwidth/2.jpg" alt="" /></div>
                            <div className="item"><img src="img/products/detail/fullwidth/3.jpg" alt="" /></div>
                          </div>
                        </div>
                        <div className="ps-product__info">
                          <h1>Marshall Kilburn Portable Wireless Speaker</h1>
                          <div className="ps-product__meta">
                            <p>Brand:<a href="shop-default.html">Sony</a></p>
                            <div className="ps-product__rating">
                              <select className="ps-rating" data-read-only="true">
                                <option value={1}>1</option>
                                <option value={1}>2</option>
                                <option value={1}>3</option>
                                <option value={1}>4</option>
                                <option value={2}>5</option>
                              </select><span>(1 review)</span>
                            </div>
                          </div>
                          <h4 className="ps-product__price">$36.78 – $56.99</h4>
                          <div className="ps-product__desc">
                            <p>Sold By:<a href="shop-default.html"><strong> Go Pro</strong></a></p>
                            <ul className="ps-list--dot">
                              <li> Unrestrained and portable active stereo speaker</li>
                              <li> Free from the confines of wires and chords</li>
                              <li> 20 hours of portable capabilities</li>
                              <li> Double-ended Coil Cord with 3.5mm Stereo Plugs Included</li>
                              <li> 3/4″ Dome Tweeters: 2X and 4″ Woofer: 1X</li>
                            </ul>
                          </div>
                          <div className="ps-product__shopping"><a className="ps-btn ps-btn--black" href="#">Add to cart</a><a className="ps-btn" href="#">Buy Now</a>
                            <div className="ps-product__actions"><a href="#"><i className="icon-heart" /></a><a href="#"><i className="icon-chart-bars" /></a></div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              {/* custom scripts*/}
            </div>
          );
    }
}
