import React from 'react';

const NewsSingle = ({item}) => (
	<div className="col s4">
		<div className="card">
			<div className="card-image">
				<img src={item.urlToImage} alt={item.title} />
				<span className="cart-title">{item.source.name}</span>
			</div>
			<div className="cart-content">
				<b>{item.title}</b>
			</div>
			<div className="cart-action">
				<a href={item.url} target="_blank" style={{color: "gray"}}>Full article</a>
			</div>
		</div>
	</div>
);

export default NewsSingle;