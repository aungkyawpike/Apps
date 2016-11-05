import React from 'react'
import classNames from 'classnames'
import GameType from './GameType'

export default class SingleBetResponse extends React.Component {

	constructor(props) {
		super();
		console.log('SingleBetResponse initialized')
	}
	render() {
		return (
		//BetPlacementResponse
		<div className="fancybox-wrap modal-dialog bet-dialog blue fancybox-desktop fancybox-type-inline fancybox-opened" tabIndex={-1} style={{width: 1003, height: 'auto', position: 'absolute', top: 179, left: 453, opacity: 1, overflow: 'visible'}}>
			<div className="fancybox-skin" style={{padding: 0, width: 'auto', height: 'auto'}}>
			  <div className="fancybox-outer">
				<div className="fancybox-inner" style={{overflow: 'auto', width: 997, height: 615}}>
					<div id="bet-modal" className="blue" style={{display: 'block'}}>

					<div className="success-message">
						<div className="modal-header">
							<h4 className="modal-title">下注成功</h4>
						</div>
					  <div className="modal-body">
						<div className="form-group">
						  <div className="dialog-content">
							<div className="row">
							  <div className="col-xs-4 normal-img"><img src="./images/left-coin.png" /></div>
							  <div className="col-xs-4 text-center">
								<table className="table">
								  <tbody>
									<tr>
									  <td>总下注金额：</td>
									  <td className="bodoni">$2600</td>
									</tr>
									<tr>
									  <td>总赔率：</td>
									  <td className="bodoni"><span className="odd">1 <span className="odd-circle" /><span className="odd-text">赔</span>1.2345</span></td>
									</tr>
									<tr>
									  <td>预期获利：</td>
									  <td className="bodoni large">$21000</td>
									</tr>
								  </tbody>
								</table>
							  </div>
							  <div className="col-xs-4 normal-img"><img src="./images/right-coin.png" /></div>
							</div>
						  </div>
						</div>
						<div className="row">
						  <hr />
						</div>
						<div className="row">
						  <table className="table border">
							<tbody>
							  <tr>
								<td>联赛：LPL春季赛 </td>
								<td className="bodoni"><span className="odd">1 <span className="odd-circle" /><span className="odd-text">赔</span>1.2345</span></td>
							  </tr>
							  <tr>
								<td>比赛：<img src="./images/royal-never-give-up-150x150.png" />H2K VS<img src="./images/royal-never-give-up-150x150.png" />EDG</td>
								<td>下注日期：2016 / 09 /24</td>
							  </tr>
							  <tr>
								<td>盘口：<img src="./images/royal-never-give-up-150x150.png" />H2K<br /><span className="space">Game1FB</span></td>
								<td>比赛日期：2016 / 09 /24</td>
							  </tr>
							</tbody>
						  </table>
						</div>
						<div className="row text-center"><a href="#" className="close-modal done"><img src="./images/blue-placebet-empty.jpg" /><span>继续下注</span></a></div>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
				<img src="./images/blue-left-top.png" className="top-left" />
				<img src="./images/blue-right-top.png" className="top-right" />
				<img src="./images/blue-left-bottom.png" className="bottom-left" />
				<img src="./images/blue-right-bottom.png" className="bottom-right" />
				<a title="Close" className="fancybox-item fancybox-close" href="javascript:;" />
			</div>
		</div> 
				);
	}
}