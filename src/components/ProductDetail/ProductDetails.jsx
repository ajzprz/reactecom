import React from 'react'

const ProductDetails = (props) => {
  return (        
<section className="product">
	<div className="product__photo">
		<div className="photo-container">
			<div className="photo-main">
				<div className="controls">
					<i className="material-icons">&#8635;</i>
					<i className="material-icons">&#x2661;</i>
				</div>
				<img src={props.product.image} alt="green apple slice"/>
			</div>
			<div className="photo-album">
				<ul>
					<li><img src={props.product.image} alt="green apple"/></li>
					<li><img src={props.product.image} alt="green apple"/></li>
					<li><img src={props.product.image} alt="green apple"/></li>
					<li><img src={props.product.image} alt="green apple"/></li>
				</ul>
			</div>
		</div>
	</div>
	<div className="product__info">
		<div className="title">
			<h1>{props.product.title}</h1>
			<span>Category: {props.product.category} </span>
		</div>
		<div className="price">
			 <span>R$ {props.product.price}</span>
		</div>
		<div className="variant">
			<h3>SELECT A COLOR</h3>
			<ul>
				<li><img src={props.product.image} alt="green apple"/></li>
				<li><img src={props.product.image} alt="green apple"/></li>
				<li><img src={props.product.image} alt="green apple"/></li>
				<li><img src={props.product.image} alt="green apple"/></li>
			</ul>
		</div>
		<div className="description">
			<h3>Description</h3>
			<ul>
				<li>{props.product.description}</li>
			</ul>
		</div>
		<button className="buy--btn">ADD TO CART</button>
	</div>
    </section>

  )
}

export default ProductDetails