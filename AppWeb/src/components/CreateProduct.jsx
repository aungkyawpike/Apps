import React from 'react'
import {Form, Select,Input,Radio,Upload,Icon,message,Row,Col,Button} from 'antd'
import { hashHistory } from 'react-router'
import ProductsStore from "../stores/ProductsStore"
import * as actions from '../actions/Actions'
import Category from './Category'
import PlatformsCategoriesStore from "../stores/PlatformsCategoriesStore"
import validate from 'validate.js'
import * as api from "../api/API"
const Dragger = Upload.Dragger
const FormItem = Form.Item;

class CreateProduct extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			condition: 'new',
			title: '',
			description: '',
			priceType: '',
			price: '',
			name: '',
			email: '',
			phone: '',
			address: ''
		}

		this.uploadProps = {
			name: 'files',
			data: {value:1},
			multiple: true,
			listType: "picture-card",
			action: 'http://localhost:3000/api/products/upload/0',
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
			},
		}
	}

	componentDidMount(){
		// To disabled submit button at the beginning.
		this.props.form.validateFields();
	}

	 hasErrors = (fieldsError) => {
		 return Object.keys(fieldsError).some(field => fieldsError[field]);
	}

	handleConditionChange = (value) => {
		this.setState({
			condition : value
		});
	}

	handleTitleChange = (event) =>{
		this.setState({
			title : event.target.value
		});
	}

	handleDescriptionChange = (event) => {
		this.setState({
			description : event.target.value
		});
	}

	handlePriceTypeChange = (value) => {
		this.setState({
			priceType : value
		});
	}

	handlePriceChange = (value) => {
		this.setState({
			price : value
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

	normFile = (e) => {
		console.log('Upload event:', e);
		if (Array.isArray(e)) {
			return e;
		}
		return e && e.fileList;
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.form.validateFields(async (err, formValues) => {
			if (!err) {
				console.log('Received values of form: ', formValues);
				var formData = new FormData();
				for(let key in formValues) {
					formData.append(key, formValues[key]);
				}
				const photos = this.photos.refs.input.files[0];
				formData.set('photos',photos)
				var result = await api.postFormToServer('http://localhost:3000/api/products/0', formData);
				console.log('Received values of server: ', result);
				return;
			}
		});
	}

	render() {
		const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
		const conditionError = isFieldTouched('condition') && getFieldError('condition');
		const titleError = isFieldTouched('title') && getFieldError('title');
		const descriptionError = isFieldTouched('description') && getFieldError('description');
		const priceTypeError = isFieldTouched('priceType') && getFieldError('priceType');
		const priceError = isFieldTouched('price') && getFieldError('price');
		const nameError = isFieldTouched('name') && getFieldError('name');
		const emailError = isFieldTouched('email') && getFieldError('email');
		const phoneError = isFieldTouched('phone') && getFieldError('phone');
		const addressError = isFieldTouched('address') && getFieldError('address');

		return (
				<Form onSubmit={this.handleSubmit}>
					<div>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Images</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<div style={{ marginTop: 16, height: 180 }}>
									<FormItem>
										{getFieldDecorator('files', {
											valuePropName: 'fileList',
											getValueFromEvent: this.normFile,
										})(
											<Upload {...this.uploadProps}>
												<div>
													<Icon type="plus" />
													<div className="ant-upload-text">Upload</div>
												</div>
											</Upload>
										)}
									</FormItem>
								</div>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Condition</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<FormItem validateStatus={conditionError ? 'error' : ''} help={conditionError || ''}>
									{getFieldDecorator('condition', {
										rules: [
											{ required: true, message: 'Please select Condition' }
										],
										initialValue: 'new'
									})(
										<Select style={{ width: '100%' }} onChange={this.handleConditionChange}>
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
								<FormItem validateStatus={titleError ? 'error' : ''} help={titleError || ''}>
									{getFieldDecorator('title', {
										rules: [
											{ required: true, message: 'Please add title' },
										],
									})(
										<Input className={this.state.titleBorderRedCss} onChange={this.handleTitleChange}/>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Description</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<FormItem validateStatus={descriptionError ? 'error' : ''} help={descriptionError || ''}>
									{getFieldDecorator('description', {
										rules: [
											{ required: true, message: 'Please add description' }
										]
									})(
											<Input type="textarea" onChange={this.handleDescriptionChange}/>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Price</div>
							</Col>
							<Col xs={4} sm={4} md={6} lg={6}>
								<FormItem validateStatus={priceTypeError ? 'error' : ''} help={priceTypeError || ''}>
									{getFieldDecorator('priceType', {
										rules: [
											{ required: true, message: 'Please select priceType' }
										],
										initialValue: 'amount'
									})(
										<Select style={{ width: '100%' }} onChange={this.handlePriceTypeChange}>
											<Option value="amount">Amount</Option>
											<Option value="free">Free</Option>
											<Option value="contact">Contact for Price</Option>
											<Option value="swap">Swap/Trade</Option>
										</Select>
									)}
								</FormItem>
							</Col>
							<Col xs={8} sm={8} md={8} lg={6}>
								<FormItem validateStatus={priceError ? 'error' : ''} help={priceError || ''}>
									{getFieldDecorator('price', {
										rules: [
											{ required: true, message: 'Please add price' },
										],
									})(
										<Input addonBefore="$" onChange={this.handlePriceChange}/>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Name</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<FormItem validateStatus={nameError ? 'error' : ''} help={nameError || ''}>
									{getFieldDecorator('name', {
										rules: [
											{ required: true, message: 'Please add name' },
										],
									})(
								<Input onChange={this.handleNameChange}/>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Email</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<FormItem validateStatus={emailError ? 'error' : ''} help={emailError || ''}>
									{getFieldDecorator('email', {
										rules: [
											{ required: true, message: 'Please add email' },
										],
									})(
										<Input onChange={this.handleEmailChange}/>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Phone</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<FormItem validateStatus={phoneError ? 'error' : ''} help={phoneError || ''}>
									{getFieldDecorator('phone', {
										rules: [
											{ required: true, message: 'Please add phone' },
										],
									})(
										<Input onChange={this.handlePhoneChange}/>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}>
								<div>Address</div>
							</Col>
							<Col xs={12} sm={12} md={12} lg={12}>
								<FormItem validateStatus={addressError ? 'error' : ''} help={addressError || ''}>
									{getFieldDecorator('address', {
										rules: [
											{ required: true, message: 'Please add Address' },
										],
									})(
										<Input onChange={this.handleAddressChange}/>
									)}
								</FormItem>
							</Col>
						</Row>
						<Row>
							<Col xs={6} sm={6} md={2} lg={2}></Col>
							<Col xs={6} sm={6} md={12} lg={12}>
								<Button htmlType="submit" disabled={this.hasErrors(getFieldsError())}>Post</Button>
							</Col>
						</Row>
					</div>
				</Form>
		)
	}
}

export default CreateProduct = Form.create()(CreateProduct)
