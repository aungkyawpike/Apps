import React from 'react'
import classNames from 'classnames'
import GameType from './GameType'

export default class SingleBet extends React.Component {

	constructor(props) {
		super();
		console.log('SingleBet initialized')
	}
	render() {
		return (
				// SingleBet
				<div className="fancybox-wrap modal-dialog bet-dialog blue fancybox-desktop fancybox-type-inline fancybox-opened" tabIndex={-1} style={{width: 1003, height: 'auto', position: 'absolute', top: 0, left: 0, opacity: 1, overflow: 'visible'}}>
					<div className="fancybox-skin" style={{padding: 0, width: 'auto', height: 'auto'}}>
						<div className="fancybox-outer">
						<div className="fancybox-inner" style={{overflow: 'auto', width: 997, height: 668}}>
							<div id="bet-modal" className="blue" style={{display: 'block'}}>
							<div className="modal-inner" style={{display: 'block'}}>
								<div className="modal-header">
								<h4 className="modal-title bodoni"><img src="./images/royal-never-give-up-150x150.png" />S5全球总决赛 H2k Gaming <span>VS </span>SK Telecom Team1<img src="./images/energy-peace-maker-150x150.png" /></h4>
								</div>
								<div className="modal-body">
								<form className="form-horizontal">
									<div className="form-group">
									<div className="dialog-content">
										<div className="row">
										<div className="col-xs-4 normal-img"><img src="./images/left-coin.png" /></div>
										<div className="col-xs-4 text-center">
											<table className="table">
											<tbody>
												<tr>
												<td>盘口：</td>
												<td className="bodoni">Game 1 Win</td>
												</tr>
												<tr>
												<td>队伍：</td>
												<td className="bodoni"><img src="./images/right-coin.png" />H2k Gaming</td>
												</tr>
												<tr>
												<td>赔率：</td>
												<td className="bodoni"><span className="odd">1 <span className="odd-circle" /><span className="odd-text">赔</span>1.2345</span></td>
												</tr>
											</tbody>
											</table>
										</div>
										<div className="col-xs-4 normal-img"><img src="./images/right-coin.png" /></div>
										</div>
										<hr />
										<div className="row normal-img">
										<div className="col-xs-3 col-xs-push-3"><img src="./images/bet-bet.png" />下注时间：2016/08/10</div>
										<div className="col-xs-3 col-xs-push-3"><img src="./images/bet-flag.png" />比赛日期：2016/08/12</div>
										</div>
										<div className="row">
										<div className="col-xs-8 col-xs-push-2">
											<div className="long-pill">
											<div className="long-pill-inner">
												下注金额：$
												<input id="bet-amount" type="text" defaultValue={0} /><span className="sub">下注上限：$20000</span>
											</div>
											</div>
										</div>
										</div>
										<div className="row">
										<div className="col-xs-8 col-xs-push-2">
											<ul className="coins">
											<li><a data-plus={20} href="#"><img src="./images/blue-coin-20.png" /></a></li>
											<li><a data-plus={50} href="#"><img src="./images/blue-coin-50.png" /></a></li>
											<li><a data-plus={100} href="#"><img src="./images/blue-coin-100.png" /></a></li>
											<li><a data-plus={200} href="#"><img src="./images/blue-coin-200.png" /></a></li>
											<li><a data-plus={500} href="#"><img src="./images/blue-coin-500.png" /></a></li>
											</ul>
										</div>
										</div>
										<div className="row">
										<div className="col-xs-8 col-xs-push-2 text-center">
											<h3>预期获利</h3>
										</div>
										<div className="col-xs-8 col-xs-push-2 text-center"> <span className="gold bodoni">$16000</span></div>
										</div>
										<div className="row text-center"><a href="#" className="submit-bet"><img src="./images/blue-placebet-empty.jpg" /><span>确认下注</span></a></div>
									</div>
									</div>
								</form>
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
