import React from 'react'
import {Form, Select,Input,Radio,Upload,Icon,message,Row,Col,Button} from 'antd'
import { hashHistory } from 'react-router'
import ProductsStore from "../stores/ProductsStore"
import * as actions from '../actions/Actions'
import Category from './Category'
import PlatformsCategoriesStore from "../stores/PlatformsCategoriesStore"
import validate from 'validate.js'
const Dragger = Upload.Dragger
const FormItem = Form.Item;

class CreateProduct extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			condition: 'new',
			title: '',
			titleError: '',
			titleBorderRedCss: '',
			description: '',
			price: '',
			name: '',
			email: '',
			phone: '',
			address: ''
		}

		this.uploadProps = {
			name: 'file',
			multiple: true,
			showUploadList: false,
			action: '//jsonplaceholder.typicode.com/posts/',
			onChange(info) {
				const status = info.file.status;
				if (status !== 'uploading') {
					console.log(info.file, info.fileList);
				}
				if (status === 'done') {
					message.success(`${info.file.name} file uploaded successfully.`);
				} else if (status === 'error') {
					message.error(`${info.file.name} file upload failed.`);
				}
			}
		}

	}

	handleConditionChange = (value) => {
		this.setState({
			condition : value
		});
	}

	handleTitleChange = (event) =>{
		var value = event.target.value.trim()
		var errors = validate.single(value, {presence:true, length:{minimum:1}})
		if(!errors){
			this.setState({
				title : value,
				titleError : '',
				titleBorderRedCss : ''
			});
		}
		else{
			this.setState({
				titleError : errors.join(),
				titleBorderRedCss : 'borderRed'
			});
		}
	}

	handleDescriptionChange = (event) => {
		this.setState({
			description : event.target.value
		});
	}

	handlePriceChange = (event) => {
		this.setState({
			price : event.target.value
		});
	}

	handleNameChange = (event) => {
		this.setState({
			name : event.target.value
		});
	}

	handleEmailChange = (event) => {
		this.setState({
			email : event.target.value
		});
	}

	handlePhoneChange = (event) => {
		this.setState({
			phone : event.target.value
		});
	}

	handleAddressChange = (event) => {
		this.setState({
			address : event.target.value
		});
	}

	handleSubmit = () => {

	}

	render() {
		const { getFieldDecorator } = this.props.form;

		return (
				<Form onSubmit={this.handleSubmit}>
					<div>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Condition</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<FormItem>
									{getFieldDecorator('select', {
										rules: [
											{ required: true, message: 'Please select Condition!' },
										],
									})(
										<Select defaultValue="new" style={{ width: '100%' }} onChange={this.handleConditionChange}>
											<Option value="new">New</Option>
											<Option value="old">Old</Option>
										</Select>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Title</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<Input className={this.state.titleBorderRedCss} onChange={this.handleTitleChange}/>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}></Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<div className="red">{this.state.titleError}</div>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Description</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<Input type="textarea" onChange={this.handleDescriptionChange}/>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Images</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<div style={{ marginTop: 16, height: 180 }}>
									<Dragger {...this.uploadProps}>
										<p className="ant-upload-drag-icon">
											<Icon type="inbox" />
										</p>
										<p className="ant-upload-text">Click or drag file to this area to upload</p>
										<p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
									</Dragger>
								</div>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Price</div>
							</Col>
							<Col xs={12} sm={12} md={6} lg={6}>
								<Select defaultValue="amount" style={{ width: '100%' }} onChange={this.handlePriceChange}>
									<Option value="amount">Amount</Option>
									<Option value="free">Free</Option>
									<Option value="contact">Contact for Price</Option>
									<Option value="swap">Swap/Trade</Option>
								</Select>
							</Col>
							<Col xs={12} sm={12} md={12} lg={6}>
								<Input addonBefore="$"/>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Name</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<Input onChange={this.handleNameChange}/>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Email Address</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<Input onChange={this.handleEmailChange}/>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Phone Number</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<Input onChange={this.handlePhoneChange}/>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Address</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<Input onChange={this.handleAddressChange}/>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}></Col>
							<Col xs={6} sm={6} md={12} lg={12}>
								<Button>Post</Button>
								<Button>Preview</Button>
							</Col>
						</Row>
					</div>
				</Form>
		)
	}
}

export default CreateProduct = Form.create()(CreateProduct)
