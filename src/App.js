import React, {Component} from 'react';

export default class App extends Component {
    
    state = {
        astronauts: []
    }
    componentDidMount() {
        fetch ('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => data.people.map(person => this.setState({
            astronauts: [...this.state.astronauts, person.name]
        })    
        ))
    }

    render() {
        return (
            <div>
                {this.state.astronauts.map(astronaut => <h1>{astronaut}</h1>)}
            </div>
        )
    }
}
