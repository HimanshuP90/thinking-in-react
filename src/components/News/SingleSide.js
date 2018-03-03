import React from 'react';

const SingleSide = ({item}) => (
	<div>
		<div className="divider">
		</div>
		<a href={item.url} target="_blank">
			<div className="section">
			<div className="cart-content">
				<img style={{color: 'cyan'}} src={item.urlToImage} alt={item.title} />
				<p>{item.title}</p>
			</div>
			</div>
		</a>
	</div>
);

export default SingleSide;