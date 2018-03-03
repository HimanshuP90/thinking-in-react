import React from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';

class Sidenews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=72405ce7c4e743e9ad8b105b330c6fe2`;

    axios.get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles
        })
      })
      .catch((error) => console.log(error));
  }

  renderItems() {
      return this.state.sidenews.map((item) => {
        return <SingleSide key={item.url} item={item} />
      });
  }

  render(){
    return(
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

export default Sidenews;