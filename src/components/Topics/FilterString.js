import React, { Component } from 'react';

export default class FilterString extends Component {
  
  constructor() {
    super();

    this.state = {
      dogbreeds: ['Australian Shepherd', 'Border Collie', 'Coolie', 'Dutch Shepherd', 'English Shepherd', 'Flat-Coated Retriever', 'German Shepherd', 'Himalayan Sheepdog'],
      userInput: '',
      filteredNames: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterNames(userInput) {
    var dogbreeds = this.state.dogbreeds;
    var filteredNames = [];

    for ( var i = 0; i < dogbreeds.length; i++ ) {
      if ( dogbreeds[i].toLowerCase().includes(userInput) ) {
        filteredNames.push(dogbreeds[i]);
      }
    }

    this.setState({ filteredNames: filteredNames });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4> Filter String </h4>
        <span className="puzzleText"> Names: { JSON.stringify(this.state.dogbreeds, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterNames(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterStringRB"> Filtered Names: { JSON.stringify(this.state.filteredNames, null, 10) } </span>
      </div>
    )
  }
}