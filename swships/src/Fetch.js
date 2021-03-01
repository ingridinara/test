import axios from 'axios';
import React, { Component } from 'react';
import List from './List'; //5
export default class Fetch extends Component {
  constructor(props) {
    //1
    super(props);
    this.state = {
      ships: [],
    };
    this.getShips = this.getShips.bind(this);
  }

  getShips() {
    //1
    return axios.get('https://swapi.dev/api/starships').then((response) => {
      console.log(response.data.results);
      this.setState({ ships: response.data.results });
    });
  }

  componentDidMount() {
    //2
    this.getShips();
  }
  render() {
    const { ships } = this.state; //2 and 3 bellow
    return (
      <div>
        <List ships={ships} />
      </div>
    );
  }
}
