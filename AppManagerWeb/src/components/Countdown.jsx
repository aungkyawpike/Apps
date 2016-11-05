import DateBetween from '../Util/DateBetween'
import React, { Component, PropTypes } from 'react'
import classNames from "classnames";
import {Link} from "react-router"

/**
 * Count down module
 * A simple count down component.
**/
export default class Countdown extends Component {

  constructor (props) {
    super(props)
    this.state = { remaining: null }
  }

  componentDidMount() {
    this.tick()
    this.interval = setInterval(this.tick.bind(this), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  tick() {
    let startDate = new Date()
    let endDate = new Date(this.props.options.endDate)
    let remaining = DateBetween(startDate, endDate)
    this.setState({remaining: remaining })
  }

  render() {

    if(this.state.remaining == -1)
      console.log(this.state.remaining)

    return (

        <div>
          {
            this.state.remaining != -1 && 
            <div className={classNames('counting')}>
               <span className="date"> {this.state.remaining}</span>
               <span className="prefix"> {this.props.options.prefix}</span>
             </div>
          }
          {this.state.remaining == -1 && <div className={classNames('counting-done')}><Link to={"ESportGame/" + this.props.LeagueId}>Live Stream</Link></div>  }
        </div>

    )
    
  }
}
