/**
 * Created by czh on 2016/12/27.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getResult} from '../action/client_action'
import {Row, Col, Card, Select, Input, Icon} from 'antd';
import ParamsForms from '../components/paramsForms'
const Option = Select.Option
import './style.scss'

class client extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //获取项目列表
    // this.props.getResult()
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
    return (
      <div id="client">
        <Row>
          <Col span="4">
            <Card className="request" title="接口列表" style={{ width: '100%',minHeight: 500 }}>
              <ul className="reqLinkList">
                <li className="active">server/getList.do</li>
                <li>server/getList.do</li>
                <li>server/getList.do</li>
                <li>server/getList.do</li>
                <li>server/getList.do</li>
              </ul>
            </Card>
          </Col>
          <Col span="19">
            <Card className="response" title="返回结果" style={{ width: '100%',minHeight: 500 }}>
              <p className="resultInfo">
                <ul>
                  <li><Icon className="ok" type="check-circle"/><span className="resheader">Status：</span><span
                    className="Text">200</span></li>
                  <li><Icon className="error" type="close-circle"/><span className="resheader">StatusText：</span><span className="Text">OK</span></li>
                </ul>
              </p>
              <Input className="jsonText" type="textarea" rows={16}/>
            </Card>
          </Col>
        </Row>
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
