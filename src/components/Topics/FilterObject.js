import React, {Component} from 'react'

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            employees: [
                {
                  name: 'Jimmy Joe',
                  title: 'Hack0r',
                  age: 12,
                },
                {
                  name: 'Jeremy Schrader',
                  age: 24,
                  hairColor: 'brown'
                },
                {
                  name: 'Carly Armstrong',
                  title: 'CEO',
                }
              ],
            userInput: '',
            filtered: []
        }
    }

    handleChange(val){
        this.setState({ userInput: val });                
    }

    filterArr(prop){
        console.log("clicked");
        var employees = this.state.employees; 
        var filtered = [];
        for (var i = 0; i < employees.length; i++){
            if (employees[i].hasOwnProperty(prop) ) {
                filtered.push(employees[i]);
            }
            console.log(employees);
        }
        this.setState({filtered: filtered});
    }


    

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText"> Original {JSON.stringify(this.state.employees, null, 10) } </span>
                <input className="inputLine"
                    onChange={e => this.handleChange(e.target.value)}
                />
                <button className="confirmationButton"
                    onClick={ () => this.filterArr(this.state.userInput)}>
                    Filter
                </button>
                <span className="resultsBox FilterObjectRB"> Filtered Array: {JSON.stringify(this.state.filtered) } </span>
            </div>
        )
    }
}

export default FilterObject
