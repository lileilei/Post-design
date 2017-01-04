/**
 * Created by czh on 2016/11/16.
 */
import React, {Component, PropTypes} from 'react'
import {Row, Col, Form, Input, Icon} from 'antd';
import '../style/style.scss';
const FormItem = Form.Item;


class params extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Row>
          <Col span={5}>
            <FormItem>
              {getFieldDecorator('key0', {initialValue: ''})(
                <Input placeholder="key"/>
              )}
            </FormItem>
          </Col>
          <Col span={5} offset={1}>
            <FormItem>
              {getFieldDecorator('value0', {initialValue: ''})(
                <Input placeholder="value"/>
              )}
            </FormItem>
          </Col>
          <Col span={3}>
            <span className="icon-button"><Icon type="close"/></span>
          </Col>
        </Row>
      </Form>
    )
  }
}
export default Form.create({})(params)


