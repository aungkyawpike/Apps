import React from 'react'
import classNames from 'classnames'
import GameType from './GameType'

export default class ComboBetResponse extends React.Component {

	constructor(props) {
		super();
		console.log('ComboBetResponse initialized')
	}
	render() {
		return (
			//ComboBetResponse
		<div className="fancybox-wrap modal-dialog bet-dialog blue fancybox-desktop fancybox-type-inline fancybox-opened" tabIndex={-1} style={{width: 956, height: 'auto', position: 'absolute', top: 77, left: 476, opacity: 1, overflow: 'visible'}}>
			<div className="fancybox-skin" style={{padding: 0, width: 'auto', height: 'auto'}}>
				<div className="fancybox-outer">
					<div className="fancybox-inner" style={{overflow: 'auto', width: 950, height: 746}}>
						<div id="pass-modal" className="blue" style={{display: 'block'}}>
							<div className="success-message">
								<div className="modal-header">
									<h4 className="modal-title">过关成功</h4>
								</div>
								<div className="modal-body">
									<div className="form-group">
										<div className="dialog-content">
											<div className="row"> 
												<div className="col-xs-4 normal-img">
													<img src="./images/left-coin.png" />
												</div>
												<div className="col-xs-4 text-center">
													<table className="table">
														<tbody>
															<tr>
																<td>总下注金额：</td>
																<td className="bodoni">$2600</td>
															</tr>
															<tr>
																<td>总赔率：</td>
																<td className="bodoni">
																	<span className="odd">1 <span className="odd-circle" />
																		<span className="odd-text">赔</span>1.2345</span>
																</td>
															</tr>
															<tr>
																<td>预期获利：</td>
																<td className="bodoni large">$21000</td>
															</tr>
														</tbody>
													</table>
												</div>
												<div className="col-xs-4 normal-img">
													<img src="./images/right-coin.png" />
												</div>
											</div>
										</div>
									</div>
									<div className="row"><hr /></div>
									<div className="row">
										<div className="col-xs-12">
											<ul className="row follow-up">
												<li>
													<div className="col-xs-6 left">
														<span className="odd-circle" />
														<span className="odd-text">1</span>英雄联盟 LPL春季赛 Snake.Q VS EDG
														<p className="side-note">盘口：
															<img src="./images/royal-never-give-up-150x150.png" />H2K   第一局：FB 2016 / 09 /24
														</p>
													</div>
													<div className="col-xs-4 right text-right">
														<img src="./images/royal-never-give-up-150x150.png" />H2K VS EDG<img src="./images/royal-never-give-up-150x150.png" />
														<div className="show-odd">
															<span className="odd">1 <span className="odd-circle" />
																<span className="odd-text">赔</span>1.2345</span>
														</div>
													</div>
													<div className="col-xs-2 pass-action">
														<span className="bet-check">已添加
															<label>
																<img src="./images/blue-border.png" id="ic_imageCheckInput_2" className="imageCheck" role="checkbox" aria-checked="false" aria-controls="imageCheckInput_2" tabIndex={0} style={{cursor: 'pointer'}} />
																<input type="checkbox" id="imageCheckInput_2" style={{display: 'none'}} />
															</label>
														</span><a className="dark-btn">删除</a>
													</div>
												</li>
												<li>
													<div className="col-xs-6 left">
														<span className="odd-circle" />
														<span className="odd-text">2</span>英雄联盟 LPL春季赛 Snake.Q VS EDG
														<p className="side-note">盘口：
															<img src="./images/royal-never-give-up-150x150.png" />H2K   第一局：FB 2016 / 09 /24
														</p>
													</div>
													<div className="col-xs-4 right text-right">
														<img src="./images/royal-never-give-up-150x150.png" />H2K VS EDG<img src="./images/royal-never-give-up-150x150.png" />
														<div className="show-odd">
															<span className="odd">1 <span className="odd-circle" />
															<span className="odd-text">赔</span>1.2345</span>
														</div>
													</div>
													<div className="col-xs-2 pass-action">
														<span className="bet-check">已添加
															<label>
																<img src="./images/blue-border.png" id="ic_imageCheckInput_3" className="imageCheck" role="checkbox" aria-checked="false" aria-controls="imageCheckInput_3" tabIndex={0} style={{cursor: 'pointer'}} />
																<input type="checkbox" id="imageCheckInput_3" style={{display: 'none'}} />
															</label>
														</span><a className="dark-btn">删除</a>
													</div>
												</li>
											</ul>
										</div>
									</div>
									<div className="row text-center">
										<a href="#" className="close-modal">
											<img src="./images/continue.jpg" />
											<span>继续其他竞猜</span>
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