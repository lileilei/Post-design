import React from 'react'
import {Link} from 'react-router'
import {Icon} from 'antd'
import './style.scss'
export const Header = () => (
  <div id="header">
    <Link to='/post-design/client' activeClassName='active'>客户端</Link>
    <Link to='/post-design/server' activeClassName='active'>服务端</Link>
    <span className="logoArea">
        LOGO
    </span>
  </div>
)

export default Header
