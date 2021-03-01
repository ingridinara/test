import axios from 'axios';
import React, { Component } from 'react';
import List from './List'; //5
export default class App extends Component {
  constructor(props) {
    //1
    super(props);
    this.state = {
      people: [],
    };
    this.getPeople = this.getPeople.bind(this);
  }

  getPeople() {
    //1
    return axios.get('http://swapi.dev/api/people').then((response) => {
      console.log(response.data.results);
      this.setState({ people: response.data.results });
    });
  }

  componentDidMount() {
    //2
    this.getPeople();
  }
  render() {
    const { people } = this.state; //2 and 3 bellow
    return (
      <div>
        <List people={people} />
      </div>
    );
  }
}
