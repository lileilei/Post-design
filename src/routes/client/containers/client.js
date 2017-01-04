/**
 * Created by czh on 2016/12/27.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getResult} from '../action/client_action'
import {Row, Col, Input, Select, Button, Icon} from 'antd';
import ParamsForms from '../components/paramsForms'
const Option = Select.Option
import './style.scss'

class client extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getResult()
  }

  handleSubmit(e) {
    var form = this.refs.formComponents
    form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }
      console.log(fieldsValue)
    })
  }

  render() {
    const {cleanList} = this.props.client
    const selectBefore = (
      <Select defaultValue="Http://" style={{ width: 80 }}>
        <Option value="Http://">Http://</Option>
        <Option value="Https://">Https://</Option>
      </Select>
    )
    const selectAfter = (
      <Select defaultValue="GET" style={{ width: 80 }}>
        <Option value="GET">GET</Option>
        <Option value="POST">POST</Option>
      </Select>
    );
    return (
      <div id="client">
        <div>
          <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite"/>
        </div>
        <div className="params">
          <ParamsForms ref="formComponents"/>
        </div>
        <Row>
          <Col span={11}>
            <Input type="textarea" rows={10}/>
          </Col>
          <Col span={11} offset={2}>
            <Input type="textarea" rows={10}/>
          </Col>
        </Row>
        <p>
          <Button onClick={()=>this.handleSubmit()} type="primary">提交</Button>
        </p>
      </div>
    )
  }
}

const mapDispatchtoProps = {
  getResult
}
const mapStateToProps = (state) => {
  return {
    client: state.get('client').toJS()
  }
}
export default connect(mapStateToProps, mapDispatchtoProps)(
  client
)
