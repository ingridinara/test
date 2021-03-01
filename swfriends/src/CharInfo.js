import React, { Component } from 'react';

//8 create this component
// open and close could have been 1 function, its a choice
export default class CharInfo extends Component {
  constructor(props) {
    super(props);
    //expanded refers to open the info
    this.state = {
      expanded: false,
    };
    this.open = this.open.bind(this);
    this.close = this.close.bind(this);
  }

  open() {
    this.setState({ expanded: !this.state.expanded });
  }

  close() {
    this.setState({ expanded: !this.state.expanded });
  }
  render() {
    const info = this.props.CharInfo;
    if (!this.state.expanded) {
      return <button onClick={this.open}>Show Info</button>;
    }
    return (
      <div>
        <button onClick={this.close}>Hide Info</button>
        <ul>
          <li>
            <h2>Gender: {info.gender}</h2>
          </li>
        </ul>
        <ul>
          <li>
            <h2>Birth date: {info.birth_year}</h2>
          </li>
        </ul>
        <ul>
          <li>
            <h2>Hair Color: {info.hair_color}</h2>
          </li>
        </ul>
      </div>
    );
    return <div></div>;
  }
}
