/**
 * Created by lilei on 2016/10/28.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;
import './HomeView.scss'
class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collapsed: false
    }
  }

  componentDidMount() {
  }

  onCollapse = (collapsed) => {
    this.setState({collapsed});
  }

  render() {
    return (
      <div id="home">
        <Layout className="layout">
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
          >
            <div className="logo"/>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1">
                <Icon type="user"/>
                <span className="nav-text">项目 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera"/>
                <span className="nav-text">项目 2</span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload"/>
                <span className="nav-text">nav 3</span>
              </Menu.Item>
              <Menu.Item key="4">
                <Icon type="user"/>
                <span className="nav-text">nav 4</span>
              </Menu.Item>
              <Menu.Item key="5">
                <Icon type="heart-o"/>
                <span className="nav-text">nav 5</span>
              </Menu.Item>
              <Menu.Item key="6">
                <Icon type="team"/>
                <span className="nav-text">nav 6</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}/>
            <Content style={{ margin: '0 16px' }}>
              <Breadcrumb style={{ margin: '12px 0' }}>
                <Breadcrumb.Item>项目1</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ padding: 24, background: '#fff'}}>
                {this.props.children}
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
              Post Design ©2016 Created by **
            </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default connect()(HomeView)
