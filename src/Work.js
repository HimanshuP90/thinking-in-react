//Raziur Rahman, 2018
import React from 'react';
import axios from 'axios';
import './App.css';


const URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/'

const Leaderboard = (props)=>{
  if(props.data.length > 0){
  
    props.data.sort((x,y)=>
      y[props.mode]-x[props.mode])
    return (
      <div>
        <table className="u-full-width">
            <thead>
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Name</th>
                <th className="btn"
                  onClick={()=>props.setMode("recent")}
                  >
                  Recent
                  <span dangerouslySetInnerHTML={
                  {__html: props.mode=="recent"?" &darr;":""}}>
                  </span>
                </th>
                <th className="btn"
                  onClick={()=>props.setMode("alltime")}
                  >
                  All time
                  <span dangerouslySetInnerHTML={
                  {__html: props.mode=="alltime"?" &darr;":""}}>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {props.data.map((item,index)=>{
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>
                     <img src={item.img} className="avatar" />
                    </td>
                    <td>
                      <a href={"http://www.freecodecamp.org/" + item.username}
                        target="_blank"
                        >
                      {item.username}</a>
                    </td>
                    <td>{item.recent}</td>
                    <td>{item.alltime}</td>
                  </tr>                
                )
              })}
            </tbody>
        </table>
      </div>
  )}
  else {
    return null
  }
}

const Spinner = (props)=>{
  if(props.loading){
    return (
      <div className="spinner center">
        <div className="cp-spinner cp-heart"></div>
        <br/><br/>
        <p>Loading...</p>
      </div>
    )
  }
  else return null
} 

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loading: false,
      data: [],
      mode: 'alltime' // recent, alltime
    }
    this.setMode = this.setMode.bind(this)
    this.getData = this.getData.bind(this)
  }
  getData(){
    this.setState({
      loading: true,
      data: []
    })
        
    axios.get(URL + this.state.mode)
      .then(response => {
        this.setState({
          loading: false,
          data: response.data
        })
    })
  }
  setMode(mode){
    this.setState({
      mode: mode,
      data: []
    })
    this.getData()
  }
  componentDidMount(){
    this.getData()
  }
  render(){
    return (
      <div className="app center">
        <h4>FCC Camper Leader Board</h4>
        <p>A list of freeCodeCamp campers ranked by brownie points.  </p>
        
        <Leaderboard
          data={this.state.data}
          mode={this.state.mode}
          setMode = {() => this.setMode(this.state.mode)}
          />
        
        <Spinner loading={this.state.loading}/>
      </div>
    )
  }
}

export default App;
