import React from 'react';
import NewsSingle from './NewsSingle';

class News extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news: [],
		};
	}

	componentDidMount() {
		const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=72405ce7c4e743e9ad8b105b330c6fe2`;
		
		fetch(url).then((response) => {
			return response.json();
		})
		.then((data) => {
			this.setState({
				news: data.articles
			})
		})
		.catch((error) => console.log(error));

	}

	renderItems() {
			return this.state.news.map((item) => {
				return <NewsSingle key={item.url} item={item} />
			});
	}

	render(){
		return(
			<div className="row">
				{this.renderItems()}
			</div>
		);
	}
}

export default News;