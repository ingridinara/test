import React, { Component } from 'react';
import CharInfo from './CharInfo'; //7

export default class List extends Component {
  render() {
    const people = this.props.people; //4
    return (
      <div>
        {people.map((p) => {
          console.log(p);
          //4 and 6 bellow, return what will be displayed on screen
          // and 7 bellow, create characther info component
          return (
            <div key={p.url}>
              <h1 className="char-name">{p.name}</h1>
              <CharInfo CharInfo={p} />
            </div>
          );
        })}
      </div>
    );
  }
}
