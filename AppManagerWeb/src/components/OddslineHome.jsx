import React from 'react';
import classNames from "classnames";
import Criteria from "../stores/CriteriaStore"
import * as Language from "../Util/Language"
import Moment from "moment"
import Countdown from "../components/Countdown"
//import Statistic from "../components/Statistic"
//import Modal from 'react-bootstrap/lib/Modal'
//import Button from 'react-bootstrap/lib/Button'


export default class OddslineHome extends React.Component {
    
    constructor(props){
      super()

      //this.state = {show: false}
      //this.showModal = this.showModal.bind(this)

      //this.setState({show: false});

      this.FTAH = [
        'GameWin',
        'SeriesWin',
        'WinHandicapA-15',
        'WinHandicapB-15',
        'WinHandicapA-25',
        'WinHandicapB-25',
        'FB',
        'FD',
        'FT'
        //counting-done
      ]

      //$(".popup").hide();
      //let OPTIONS = { endDate: '06/03/2018 10:12 AM', prefix: '' }

    }

    //showModal() {
    //  this.setState({show: true});
    //}

    //hideModal() {
    //  this.setState({show: false});
    //}

    render(){

        var classNames = require('classnames');

        var matchDate = new Date(parseInt(this.props.matchParam.MatchDate.substr(6)));
        
        let OPTIONS = { endDate: Moment(matchDate).format('MM/DD/YYYY hh:mm a'), prefix: 'left' }

        return (

                   <div>
                        <div className = { classNames('row') }>
                           <div className = { classNames('col-xs-3') } ><img src={require('../images/team-world-elite.png')} />{this.props.matchParam != null && this.props.matchParam.HomeTeam[Criteria.language]}</div>
                           <div className = { classNames('col-xs-3') } >总胜利比赛 
                              <span className = { classNames('show-odd') } > 1 
                              <span className = { classNames('odd-circle') }></span>
                              <span className={ classNames('odd-text') } > 赔 </span>
                                 {this.FTAH.indexOf(this.props.matchParam.GameTypeCode) > -1 && 
                                  this.props.matchParam.OddsLines[0].FTAH.HomeOddsStr != null &&
                                  this.props.matchParam.OddsLines[0].FTAH.HomeOddsStr}

                                 {this.FTAH.indexOf(this.props.matchParam.GameTypeCode) < 0 && 
                                  this.props.matchParam.OddsLines[0].FT1X2 != null && 
                                  this.props.matchParam.OddsLines[0].FT1X2.HomeOddsStr}
                              </span>
                           </div>
                           <div className = { classNames('col-xs-3 action-top action') } >
                              <a className = { classNames('btn','bet-countdown') } >
                                 <Countdown options={OPTIONS} />
                              </a>
                           </div>
                           <div className ={ classNames('col-xs-3','text-center')}>
                              <a href="http://lol.esportsmatrix.com/zh-CN/embed/predict/3284" target="_blank" className ={classNames('show-chart')} >
                                <img src={require('../images/statistic.jpg')}  />
                              </a>
                           {/*<Button bsStyle="primary" onClick={this.showModal}>
                                  Launch demo modal
                                </Button>*/}
                           </div>
                        </div>
                           {/*
                          <Modal
                          {...this.props}
                          show= {this.state.show}
                          onHide= {this.hideModal}
                          dialogClassName="custom-modal"
                          >
                          <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <h4>Wrapped Text</h4>
                            <p>Test Load Modal.</p>
                             <iframe src="http://lol.esportsmatrix.com/zh-CN/embed/predict/3284"></iframe> 
                          </Modal.Body>
                          <Modal.Footer>
                            <Button onClick={this.hideModal}>Close</Button>
                          </Modal.Footer>
                        </Modal>*/}


                    </div>
                )
    }
} 

