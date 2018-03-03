import React from 'react';

const NewsSingle = ({item}) => (
	<div className="col s6">
		<div className="card">
			<div className="card-image">
				<img src={item.urlToImage} alt={item.title} />
				<span style={{color: "blue"}} className="cart-title">{item.source.name}</span>
			</div>
			<div className="cart-content">
				<b style={{color: "black", fontSize: "20px"}} >{item.title}</b>: &nbsp;{item.description}
			</div>
			<div className="cart-action">
				<a href={item.url} target="_blank" style={{color: "gray"}}>{item.url}</a>
			</div>
		</div>
	</div>
);

export default NewsSingle;