import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../main.scss';
import React from 'react';
import Match from "../components/Match"
import MatchStore from "../stores/MatchStore"
import * as MatchActions from "../actions/MatchActions"



export default class ParentMatch extends React.Component {

    constructor() {
        super();
        this.state = {
            matches : MatchStore.getAll()
        };
    }

    componentWillMount() {
        MatchStore.on('change',() => {
            this.setState({
                matches : MatchStore.getAll()
            });
        });
    }

    createMatch() {


    }
    
    render() {

        const { matches } = this.state;

        const MatchComponents = matches.map((match) => {
            return <Match key={match.id} {...match}/>
        });

        return (
          <div >
            <button onclick={this.createMatch.bind(this)}> Create </button>
            <h1>Match</h1>
            <ul>{MatchComponents}</ul>
          </div>
        )
    }
}
