import React from 'react'
import classNames from 'classnames'
import GameType from './GameType'

export default class ComboBet extends React.Component {

	constructor(props) {
		super();
		console.log('ComboBet initialized')
	}
	render() {
		return (
		// ComboBet
		<div className="fancybox-wrap modal-dialog bet-dialog blue fancybox-desktop fancybox-type-inline fancybox-opened" tabIndex={-1} style={{width: 956, height: 'auto', position: 'absolute', top: 0, left: 0, opacity: 1, overflow: 'visible'}}>
			<div className="fancybox-skin" style={{padding: 0, width: 'auto', height: 'auto'}}>
				<div className="fancybox-outer">
					<div className="fancybox-inner" style={{overflow: 'auto', width: 950, height: 814}}>
						<div id="pass-modal" className="blue" style={{display: 'block'}}>
							<div className="modal-inner" style={{display: 'block'}}>
								<div className="modal-header">
									<h4 className="modal-title">您的过关</h4>
								</div>
								<div className="modal-body">
									<div className="row">
										<div className="col-xs-12">
											<ul className="row follow-up">
												<li>
													<div className="col-xs-7 left">
														<span className="odd-circle" />
														<span className="odd-text">1</span>
														<img src="./images/lpl.png" className="league-logo" />英雄联盟 LPL春季赛 Snake.Q VS EDG
														<p className="side-note">队伍：
														<img src="./images/royal-never-give-up-150x150.png" />盘口： H2K   比赛日期：2016 / 09 /24
														</p>
													</div>
													<div className="col-xs-3 right text-right">
														<img src="./images/royal-never-give-up-150x150.png" />H2K VS EDG<img src="./images/royal-never-give-up-150x150.png" />
														<div className="show-odd">
															<span className="odd">1 <span className="odd-circle" />
																<span className="odd-text">赔</span>1.2345</span>
														</div>
													</div>
													<div className="col-xs-2 pass-action">
														<span className="bet-check">已添加
															<label className>
																<img src="./images/blue-border.png" id="ic_imageCheckInput_0" className="imageCheck" role="checkbox" aria-checked="false" aria-controls="imageCheckInput_0" tabIndex={0} style={{cursor: 'pointer'}} />
																<input type="checkbox" id="imageCheckInput_0" style={{display: 'none'}} />
															</label>
														</span><a className="dark-btn">删除</a>
													</div>
												</li>
												<li>
													<div className="col-xs-7 left">
														<span className="odd-circle" />
														<span className="odd-text">2</span>
														<img src="./images/lpl.png" className="league-logo" />英雄联盟 LPL春季赛 Snake.Q VS EDG
														<p className="side-note">队伍：
														<img src="./images/royal-never-give-up-150x150.png" />盘口： H2K   比赛日期：2016 / 09 /24
														</p>
													</div>
													<div className="col-xs-3 right text-right">
														<img src="./images/royal-never-give-up-150x150.png" />H2K VS EDG<img src="./images/royal-never-give-up-150x150.png" />
														<div className="show-odd">
															<span className="odd">1 <span className="odd-circle" />
																<span className="odd-text">赔</span>1.2345</span>
														</div>
													</div>
													<div className="col-xs-2 pass-action">
														<span className="bet-check">已添加
															<label className>
																<img src="./images/blue-border.png" id="ic_imageCheckInput_1" className="imageCheck" role="checkbox" aria-checked="false" aria-controls="imageCheckInput_1" tabIndex={0} style={{cursor: 'pointer'}} />
																<input type="checkbox" id="imageCheckInput_1" style={{display: 'none'}} />
															</label>
														</span><a className="dark-btn">删除</a>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="row">
										<div className="col-xs-8 col-xs-push-2 expect-odd text-center">总赔率：<span className="bodoni">
												<span className="odd">1 <span className="odd-circle" />
													<span className="odd-text">赔</span>1.2345</span>
											</span>
										</div>
									</div>
									<div className="row">
										<div className="col-xs-8 col-xs-push-2">
											<div className="long-pill">
												<div className="long-pill-inner">下注金额：$
													<input id="bet-amount" type="text" defaultValue={0} />
													<span className="sub">下注上限：$20000</span>
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
										<div className="col-xs-8 col-xs-push-2 text-center">
											<span className="gold bodoni">$16000</span>
										</div>
									</div>
									<div className="row text-center">
										<a href="#" className="submit-pass">
											<img src="./images/yellow-check.jpg" />
											<span>确认下注</span>
										</a>
									</div>
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