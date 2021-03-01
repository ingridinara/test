import React, { Component } from 'react';
import CharInfo from './CharInfo'; //7

export default class List extends Component {
  render() {
    const ships = this.props.ships; //4
    return (
      <div>
        <h1>SPACECRAFTS LIST</h1>
        {ships.map((s) => {
          console.log(s);
          //4 and 6 bellow, return what will be displayed on screen
          // and 7 bellow, create characther info component
          return (
            <div key={s.url}>
              <h1 className="char-name">{s.name}</h1>
              <CharInfo CharInfo={s} />
            </div>
          );
        })}
      </div>
    );
  }
}
