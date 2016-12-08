import React from 'react'
import ReactDOM from "react-dom"
import Categories from '../components/Categories'

export default class Home extends React.Component {

	constructor(){
		super()

		this.state = {
				items : []
		};
	}

	render() {

		return(

<div>
	<Categories/>
	<div style={{height:50}}></div>
	{/*start-wrap*/}
	{/*start-header*/}
	<div className="header">
		<div className="top-header">
			<div className="wrap">
				<div className="top-header-left">
					<ul>
						<li><a className="cart" href="#"><span id="clickme"> </span></a></li>
						{/*start-cart-bag*/}
						<div id="cart">Your Cart is Empty <span>(0)</span></div>
						{/*start-cart-bag*/}
						<li><a className="info" href="#"><span> </span></a></li>
					</ul>
				</div>
				<div className="top-header-center">
					<div className="top-header-center-alert-left">
						<h3>FREE DELIVERY</h3>
					</div>
					<div className="top-header-center-alert-right">
						<div className="vticker">
							<ul>
								<li>Applies to orders of $50 or more. <label>Returns are always free.</label></li>
							</ul>
						</div>
					</div>
					<div className="clear"> </div>
				</div>
				<div className="top-header-right">
					<ul>
						<li><a href="login.html">Login</a><span> </span></li>
						<li><a href="register.html">Join</a></li>
					</ul>
				</div>
				<div className="clear"> </div>
			</div>
		</div>
		{/*start-mid-head*/}
		<div className="mid-header">
			<div className="wrap">
				<div className="mid-grid-left">
					<form>
						<input type="text" placeholder="What Are You Looking for?" />
					</form>
				</div>
				<div className="mid-grid-right">
					<a className="logo" href="index.html"><span> </span></a>
				</div>
				<div className="clear"> </div>
			</div>
		</div>
		{/*End-mid-head*/}
		{/*start-bottom-header*/}

		<div className="header-bottom">
			<div className="wrap">
				{/* start header menu */}
				<ul className="megamenu skyblue">
					<li className="grid"><a className="color2" href="#">MEN</a>
						<div className="megapanel">
							<div className="row">
								<div className="col1">
									<div className="h_nav">
										<h4>popular</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">login</a></li>
										</ul>
									</div>
									<div className="h_nav">
										<h4 className="top">man</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="#">accessories</a></li>
											<li><a href="#">kids</a></li>
											<li><a href="#">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>style zone</h4>
										<ul>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">brands</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>style zone</h4>
										<ul>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">brands</a></li>
										</ul>
									</div>
								</div>
								<div className="col1 men">
									<div className="men-pic">
										<img src="images/men.png" title="" />
									</div>
								</div>
							</div>
						</div>
					</li>
					<li className="active grid"><a className="color4" href="#">women</a>
						<div className="megapanel">
							<div className="row">
								<div className="col1">
									<div className="h_nav">
										<h4>shop</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">brands</a></li>
										</ul>
									</div>
									<div className="h_nav">
										<h4>help</h4>
										<ul>
											<li><a href="products.html">trends</a></li>
											<li><a href="products.html">sale</a></li>
											<li><a href="products.html">style videos</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>my company</h4>
										<ul>
											<li><a href="products.html">trends</a></li>
											<li><a href="products.html">sale</a></li>
											<li><a href="products.html">style videos</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>account</h4>
										<ul>
											<li><a href="products.html">login</a></li>
											<li><a href="products.html">create an account</a></li>
											<li><a href="products.html">create wishlist</a></li>
											<li><a href="products.html">my shopping bag</a></li>
											<li><a href="products.html">brands</a></li>
											<li><a href="products.html">create wishlist</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>my company</h4>
										<ul>
											<li><a href="products.html">trends</a></li>
											<li><a href="products.html">sale</a></li>
											<li><a href="products.html">style videos</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>popular</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1 women">
									<div className="women-pic">
										<img src="images/women.png" title="" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col2"></div>
								<div className="col1"></div>
								<div className="col1"></div>
								<div className="col1"></div>
								<div className="col1"></div>
							</div>
						</div>
					</li>
					<li><a className="color5" href="#">KIDS</a>
						<div className="megapanel">
							<div className="row">
								<div className="col1">
									<div className="h_nav">
										<h4>popular</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">login</a></li>
										</ul>
									</div>
									<div className="h_nav">
										<h4 className="top">man</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>style zone</h4>
										<ul>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">brands</a></li>
										</ul>
									</div>
								</div>
								<div className="col1 kids">
									<div className="kids-pic">
										<img src="images/kids1.png" title="" />
									</div>
								</div>
								<div className="col1"></div>
								<div className="col1"></div>
								<div className="col1"></div>
								<div className="col1"></div>
							</div>
						</div>
					</li>
					<li><a className="color6" href="#">SPORTS</a>
						<div className="megapanel">
							<div className="row">
								<div className="col1">
									<div className="h_nav">
										<h4>shop</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">brands</a></li>
										</ul>
									</div>
									<div className="h_nav">
										<h4 className="top">my company</h4>
										<ul>
											<li><a href="products.html">trends</a></li>
											<li><a href="products.html">sale</a></li>
											<li><a href="products.html">style videos</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>man</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>help</h4>
										<ul>
											<li><a href="products.html">trends</a></li>
											<li><a href="products.html">sale</a></li>
											<li><a href="products.html">style videos</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1 sports">
									<div className="sports-pic">
										<img src="images/sport.png" title="" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col2"></div>
								<div className="col1"></div>
								<div className="col1"></div>
								<div className="col1"></div>
								<div className="col1"></div>
							</div>
						</div>
					</li>
					<li><a className="color7" href="#">NIKE SPORTSWEAR</a>
						<div className="megapanel">
							<div className="row">
								<div className="col1">
									<div className="h_nav">
										<h4>shop</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">brands</a></li>
										</ul>
									</div>
									<div className="h_nav">
										<h4>my company</h4>
										<ul>
											<li><a href="products.html">trends</a></li>
											<li><a href="products.html">sale</a></li>
											<li><a href="products.html">style videos</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>help</h4>
										<ul>
											<li><a href="products.html">trends</a></li>
											<li><a href="products.html">sale</a></li>
											<li><a href="products.html">style videos</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>my company</h4>
										<ul>
											<li><a href="products.html">trends</a></li>
											<li><a href="products.html">sale</a></li>
											<li><a href="products.html">style videos</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>account</h4>
										<ul>
											<li><a href="products.html">login</a></li>
											<li><a href="products.html">create an account</a></li>
											<li><a href="products.html">create wishlist</a></li>
											<li><a href="products.html">my shopping bag</a></li>
											<li><a href="products.html">brands</a></li>
											<li><a href="products.html">create wishlist</a></li>
										</ul>
									</div>
								</div>
								<div className="col1 nike">
									<div className="nike-pic">
										<img src="images/nike.png" title="" />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col2"></div>
								<div className="col1"></div>
								<div className="col1"></div>
								<div className="col1"></div>
								<div className="col1"></div>
							</div>
						</div>
					</li>
					<li><a className="color8" href="#">NIKEiD</a>
						<div className="megapanel">
							<div className="row">
								<div className="col1">
									<div className="h_nav">
										<h4>style zone</h4>
										<ul>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">women</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">brands</a></li>
										</ul>
									</div>
								</div>
								<div className="col1">
									<div className="h_nav">
										<h4>popular</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">men</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">login</a></li>
										</ul>
									</div>
									<div className="h_nav">
										<h4 className="top">man</h4>
										<ul>
											<li><a href="products.html">new arrivals</a></li>
											<li><a href="products.html">accessories</a></li>
											<li><a href="products.html">kids</a></li>
											<li><a href="products.html">style videos</a></li>
										</ul>
									</div>
									<div className="col1"></div>
									<div className="col1"></div>
									<div className="col1"></div>
									<div className="col1"></div>
								</div>
							</div>
						</div>
					</li>
				</ul>

			</div>
		</div>
	</div>
	{/*End-bottom-header*/}
	{/*End-header*/}
	{/*start-image-slider*/}
	<div className="img-slider">
		<div className="wrap">
			<ul id="jquery-demo">
				<li>
					<a href="#slide1">
						<img src="images/slide-1.jpg" alt="" />
					</a>
					<div className="slider-detils">
						<h3>MENS FOOT BALL <label>BOOTS</label></h3>
						<span>Stay true to your team all day, every day, game day.</span>
						<a className="slide-btn" href="details.html"> Shop Now</a>
					</div>
				</li>
				<li>
					<a href="#slide2">
						<img src="images/slide-4.jpg"  alt="" />
					</a>
					<div className="slider-detils">
						<h3>MENS FOOT BALL <label>BOOTS</label></h3>
						<span>Stay true to your team all day, every day, game day.</span>
						<a className="slide-btn" href="details.html"> Shop Now</a>
					</div>
				</li>
				<li>
					<a href="#slide3">
						<img src="images/slide-1.jpg" alt="" />
					</a>
					<div className="slider-detils">
						<h3>MENS FOOT BALL <label>BOOTS</label></h3>
						<span>Stay true to your team all day, every day, game day.</span>
						<a className="slide-btn" href="details.html"> Shop Now</a>
					</div>
				</li>
			</ul>
		</div>
	</div>
	<div className="clear"> </div>
	{/*End-image-slider*/}
	{/*start-price-rage*/}
	<div className="wrap">
		<div className="price-rage">
			<h3>Weekly selection:</h3>
			<div id="slider-range">
			</div>
		</div>
	</div>
	{/*End-price-rage*/}
	{/*start-content*/}
	<div className="content">
		<div className="wrap">
			<div className="content-left">
				<div className="content-left-top-grid">
					<div className="content-left-price-selection">
						<h4>Select Price:</h4>
						<div className="price-selection-tree">
									<span className="col_checkbox">
										<input id="10" className="css-checkbox10" type="checkbox"/>
											<label className="normal"><i for="10" name="demo_lbl_10"  className="css-label10"> </i> 400</label>
									</span>
									<span className="col_checkbox">
										<input id="11" className="css-checkbox11" type="checkbox"/>
											<label className="active1"><i for="11" name="demo_lbl_11"  className="css-label11"> </i>350</label>
									</span>
									<span className="col_checkbox">
										<input id="12" className="css-checkbox12" type="checkbox"/>
											<label className="normal"><i for="12" name="demo_lbl_12"  className="css-label12"> </i> 300</label>
									</span>
									<span className="col_checkbox">
										<input id="13" className="css-checkbox13" type="checkbox"/>
											<label className="normal"><i for="13" name="demo_lbl_13"  className="css-label13"> </i>250</label>
									</span>
									<span className="col_checkbox">
										<input id="14" className="css-checkbox14" type="checkbox"/>
											<label className="normal"><i for="14" name="demo_lbl_14"  className="css-label14"> </i> 200</label>
									</span>
									<span className="col_checkbox">
										<input id="15" className="css-checkbox15" type="checkbox"/>
											<label className="normal"><i for="15" name="demo_lbl_15"  className="css-label15"> </i>150</label>
									</span>
						</div>

					</div>
				</div>
				<div className="content-left-bottom-grid">
					<h4>Boys Football:</h4>
					<div className="content-left-bottom-grids">
						<div className="content-left-bottom-grid1">
							<img src="images/foot-ball.jpg" title="football" />
							<h5><a href="details.html">Nike Strike PL Hi-Vis</a></h5>
							<span> Football</span>
							<label>&#163; 375</label>
						</div>
						<div className="content-left-bottom-grid1">
							<img src="images/jarse.jpg" title="jarse" />
							<h5><a href="details.html">Nike Strike PL Hi-Vis</a></h5>
							<span> Football</span>
							<label>&#163; 375</label>
						</div>
					</div>
				</div>
			</div>
			<div className="content-right">
				<div className="product-grids">
					<div onclick="location.href='details.html';" className="product-grid fade">
						<div className="product-grid-head">
							<ul className="grid-social">
								<li><a className="facebook" href="#"><span> </span></a></li>
								<li><a className="twitter" href="#"><span> </span></a></li>
								<li><a className="googlep" href="#"><span> </span></a></li>
								<div className="clear"> </div>
							</ul>
							<div className="block">
								<div className="starbox small ghosting"> </div> <span> (46)</span>
							</div>
						</div>
						<div className="product-pic">
							<a href="#"><img src="images/product2.jpg" title="product-name" /></a>
							<p>
								<a href="#"><small>Nike</small> HYPERVENOM <small>Phantom</small> FG</a>
								<span>Men's Firm-Ground Football Boot</span>
							</p>
						</div>
						<div className="product-info">
							<div className="product-info-cust">
								<a href="details.html">Details</a>
							</div>
							<div className="product-info-price">
								<a href="details.html">&#163; 380</a>
							</div>
							<div className="clear"> </div>
						</div>
						<div className="more-product-info">
							<span> </span>
						</div>
					</div>
					<div onclick="location.href='details.html';"  className="product-grid fade">
						<div className="product-grid-head">
							<ul className="grid-social">
								<li><a className="facebook" href="#"><span> </span></a></li>
								<li><a className="twitter" href="#"><span> </span></a></li>
								<li><a className="googlep" href="#"><span> </span></a></li>
								<div className="clear"> </div>
							</ul>
							<div className="block">
								<div className="starbox small ghosting"> </div> <span> (46)</span>
							</div>
						</div>
						<div className="product-pic">
							<a href="#"><img src="images/product1.jpg" title="product-name" /></a>
							<p>
								<a href="#"><small>Nike</small> HYPERVENOM <small>Phantom</small> FG</a>
								<span>Men's Firm-Ground Football Boot</span>
							</p>
						</div>
						<div className="product-info">
							<div className="product-info-cust">
								<a href="details.html">Details</a>
							</div>
							<div className="product-info-price">
								<a href="details.html">&#163; 375</a>
							</div>
							<div className="clear"> </div>
						</div>
						<div className="more-product-info">
							<span> </span>
						</div>
					</div>
					<div onclick="location.href='details.html';"  className="product-grid fade last-grid">
						<div className="product-grid-head">
							<ul className="grid-social">
								<li><a className="facebook" href="#"><span> </span></a></li>
								<li><a className="twitter" href="#"><span> </span></a></li>
								<li><a className="googlep" href="#"><span> </span></a></li>
								<div className="clear"> </div>
							</ul>
							<div className="block">
								<div className="starbox small ghosting"> </div> <span> (46)</span>
							</div>
						</div>
						<div className="product-pic">
							<a href="#"><img src="images/product3.jpg" title="product-name" /></a>
							<p>
								<a href="#"><small>Nike</small> HYPERVENOM <small>Phantom</small> FG</a>
								<span>Men's Firm-Ground Football Boot</span>
							</p>
						</div>
						<div className="product-info">
							<div className="product-info-cust">
								<a href="details.html">Details</a>
							</div>
							<div className="product-info-price">
								<a href="details.html">&#163; 350</a>
							</div>
							<div className="clear"> </div>
						</div>
						<div className="more-product-info">
							<span> </span>
						</div>
					</div>
					<div onclick="location.href='details.html';"  className="product-grid fade">
						<div className="product-grid-head">
							<ul className="grid-social">
								<li><a className="facebook" href="#"><span> </span></a></li>
								<li><a className="twitter" href="#"><span> </span></a></li>
								<li><a className="googlep" href="#"><span> </span></a></li>
								<div className="clear"> </div>
							</ul>
							<div className="block">
								<div className="starbox small ghosting"> </div> <span> (46)</span>
							</div>
						</div>
						<div className="product-pic">
							<a href="#"><img src="images/product4.jpg" title="product-name" /></a>
							<p>
								<a href="#"><small>Nike</small> HYPERVENOM <small>Phantom</small> FG</a>
								<span>Men's Firm-Ground Football Boot</span>
							</p>
						</div>
						<div className="product-info">
							<div className="product-info-cust">
								<a href="details.html">Details</a>
							</div>
							<div className="product-info-price">
								<a href="details.html">&#163; 370</a>
							</div>
							<div className="clear"> </div>
						</div>
						<div className="more-product-info">
							<span> </span>
						</div>
					</div>
					<div onclick="location.href='details.html';"  className="product-grid fade">
						<div className="product-grid-head">
							<ul className="grid-social">
								<li><a className="facebook" href="#"><span> </span></a></li>
								<li><a className="twitter" href="#"><span> </span></a></li>
								<li><a className="googlep" href="#"><span> </span></a></li>
								<div className="clear"> </div>
							</ul>
							<div className="block">
								<div className="starbox small ghosting"> </div> <span> (46)</span>
							</div>
						</div>
						<div className="product-pic">
							<a href="#"><img src="images/product5.jpg" title="product-name" /></a>
							<p>
								<a href="#"><small>Nike</small> HYPERVENOM <small>Phantom</small> FG</a>
								<span>Men's Firm-Ground Football Boot</span>
							</p>
						</div>
						<div className="product-info">
							<div className="product-info-cust">
								<a href="details.html">Details</a>
							</div>
							<div className="product-info-price">
								<a href="details.html">&#163; 355</a>
							</div>
							<div className="clear"> </div>
						</div>
						<div className="more-product-info">
							<span> </span>
						</div>
					</div>
					<div onclick="location.href='details.html';"  className="product-grid fade last-grid">
						<div className="product-grid-head">
							<ul className="grid-social">
								<li><a className="facebook" href="#"><span> </span></a></li>
								<li><a className="twitter" href="#"><span> </span></a></li>
								<li><a className="googlep" href="#"><span> </span></a></li>
								<div className="clear"> </div>
							</ul>
							<div className="block">
								<div className="starbox small ghosting"> </div> <span> (46)</span>
							</div>
						</div>
						<div className="product-pic">
							<a href="#"><img src="images/product6.jpg" title="product-name" /></a>
							<p>
								<a href="#"><small>Nike</small> HYPERVENOM <small>Phantom</small> FG</a>
								<span>Men's Firm-Ground Football Boot</span>
							</p>
						</div>
						<div className="product-info">
							<div className="product-info-cust">
								<a href="details.html">Details</a>
							</div>
							<div className="product-info-price">
								<a href="details.html">&#163; 390</a>
							</div>
							<div className="clear"> </div>
						</div>
						<div className="more-product-info">
							<span> </span>
						</div>
					</div>
					<div className="clear"> </div>
				</div>
			</div>
			<div className="clear"> </div>
		</div>
	</div>
	{/*start-bottom-grids*/}
	<div className="bottom-grids">
		<div className="bottom-top-grids">
			<div className="wrap">
				<div className="bottom-top-grid">
					<h4>GET HELP</h4>
					<ul>
						<li><a href="contact.html">Contact us</a></li>
						<li><a href="#">Shopping</a></li>
						<li><a href="#">NIKEiD</a></li>
						<li><a href="#">Nike+</a></li>
					</ul>
				</div>
				<div className="bottom-top-grid">
					<h4>ORDERS</h4>
					<ul>
						<li><a href="#">Payment options</a></li>
						<li><a href="#">Shipping and delivery</a></li>
						<li><a href="#">Returns</a></li>
					</ul>
				</div>
				<div className="bottom-top-grid last-bottom-top-grid">
					<h4>REGISTER</h4>
					<p>Create one account to manage everything you do with Nike, from your shopping preferences to your Nike+ activity.</p>
					<a className="learn-more" href="#">Learn more</a>
				</div>
				<div className="clear"> </div>
			</div>
		</div>
		<div className="bottom-bottom-grids">
			<div className="wrap">
				<div className="bottom-bottom-grid">
					<h6>EMAIL SIGN UP</h6>
					<p>Be the first to know about new products and special offers.</p>
					<a className="learn-more" href="#">Sign up now</a>
				</div>
				<div className="bottom-bottom-grid">
					<h6>GIFT CARDS</h6>
					<p>Give the gift that always fits.</p>
					<a className="learn-more" href="#">View cards</a>
				</div>
				<div className="bottom-bottom-grid last-bottom-bottom-grid">
					<h6>STORES NEAR YOU</h6>
					<p>Locate a Nike retail store or authorized retailer.</p>
					<a className="learn-more" href="#">Search</a>
				</div>
				<div className="clear"> </div>
			</div>
		</div>
	</div>
	{/*End-bottom-grids*/}
	{/*End-content*/}
</div>
		)
	}

}
