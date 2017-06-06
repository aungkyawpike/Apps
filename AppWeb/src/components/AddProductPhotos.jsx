import React from 'react'
import {Form, Upload, Row,Col, Icon} from 'antd'
const FormItem = Form.Item

export default class AddProductPhotos extends React.Component {

	constructor(props) {
		super(props)

		this.uploadProps = {
			name: 'files',
			data: this.props.location.state,
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
			}
		}
	}

	render() {
		return (
			<Row>
				<Col xs={6} sm={6} md={2} lg={2}>
					<div>Images</div>
				</Col>
				<Col xs={12} sm={12} md={12} lg={12}>
					<Upload {...this.uploadProps}>
						<div>
							<Icon type="plus" />
							<div className="ant-upload-text">Upload</div>
						</div>
					</Upload>
				</Col>
			</Row>
		)
	}

}
