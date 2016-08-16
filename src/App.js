import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SortedList from './SortedList';
import Todo from './Todo';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 2, name: 'B'},
                {id: 3, name: 'Q'},
                {id: 4, name: 'C'},
                {id: 1, name: 'A'},
                {id: 5, name: 'F'}
            ]
        };
        this.sort = this.sort.bind(this);
    }

    sort(array) {
        return array.sort(({name:name1}, {name:name2}) => name1.localeCompare(name2));
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <h1>Sorted List</h1>
                <SortedList data={this.state.todos} sort={this.sort}>
                    <Todo></Todo>
                </SortedList>
            </div>
        );
    }
}

export default App;
