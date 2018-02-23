import React from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';

export default class Chart extends React.Component {

  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this.refs.chart))
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: [
          ['data1', 30, 100, 400, 150, 250],
          ['data2', 50, 20, 10, 40, 15, 25],
          ['data3', 30, 400, 150, 250],
          ['data4', 50, 20, 15, 25]
        ]
      }
    });
  }

  render() {
    return (
      <div ref="chart"></div>
    );
  }
}