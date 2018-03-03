import React from 'react';
import News from './News/News';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news1: {
				type:'top-headlines',
				query: 'country=in'
			},
			news2: {
				type:'everything',
				query: 'domains=techcrunch.com'
			}
		}
	}
  render(){
    return(
      <div className="App">
        <header className="App-header">
        </header>
        <News news={this.state.news1} />
        <News news={this.state.news2} />
      </div>
    )
  }
}


export default App;