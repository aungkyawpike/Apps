import DateBetween from '../Util/DateBetween'
import React, { Component, PropTypes } from 'react'
import classNames from "classnames";
import {Link} from "react-router"

/**
 * Count down module
 * A simple count down component.
**/
export default class CountdownDetail extends Component {

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
    let remaining = DateBetween(startDate, endDate, true)
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
                <div className={classNames("days")}>{this.state != null && this.state.remaining != null && this.state.remaining[0]}<div className={classNames("unit")}>天</div></div>
                <div className={classNames("hours")}>{this.state != null && this.state.remaining != null && this.state.remaining[1]}<div className={classNames("unit")}>小时</div></div>
                <div className={classNames("minutes")}>{this.state != null && this.state.remaining != null && this.state.remaining[2]}<div className={classNames("unit")}>分</div></div>
                <div className={classNames("seconds")}>{this.state != null && this.state.remaining != null && this.state.remaining[3]}<div className={classNames("unit")}>秒</div></div>
             </div>
          }
          {this.state.remaining == -1 && <div className={classNames('counting-done')}><Link to={"ESportGame/" + this.props.LeagueId}>Live Stream</Link></div>  }
        </div>

    )
    
  }
}
