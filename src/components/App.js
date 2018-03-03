import React from 'react';
import News from './News/News';
import Sidenews from './News/Sidenews';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			news1: {
				type:'top-headlines',
				query: 'country=in&category=politics'
			},
			news2: {
				type:'everything',
				query: 'domains=techcrunch.com&language=en'
			},
      news3: {
        type: "everything",
        query: 'domains=comicbookmovie.com&language=en'
      }
		}
	}
  render(){
    return(
      <div className="container-fluid">
      	<div className="navbar-fixed">
      		<nav>
      			<div className="nav-wrapper red lighten" style={{textAlign: "center"}}>
      				<a href="/" className="bran-logo center"><b>News using(https://newsapi.org/)</b></a>
      			</div>
      		</nav>
      	</div>
      	<div className="row">
      		<div className="col s8">
        		<News news={this.state.news1} />
        		<News news={this.state.news2} />
      		</div>
      		<div className="col s4">
      			<Sidenews news={this.state.news3}/>
      		</div>
      	</div>
      </div>
    )
  }
}


export default App;	