import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../main.scss';
import React from 'react';


export default class Match extends React.Component {

    constructor(props) {
        super();
    }

    render(){
        return (
                    <div className={styles.blue }>
                        <h1>Match id : {this.props.id} </h1>
                        <h1>League Name :  {this.props.leagueName} </h1>
                        <h1>teamA : {this.props.teamA} </h1>
                        <h1>teamB :{this.props.teamB} </h1>
                    </div>   
                )
    }

}
