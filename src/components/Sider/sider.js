import React from 'react';
import {Link} from 'dva/router';
import {connect} from 'dva';

import styles from './sider.css';
import logo from '../../../public/logo.png';

import {Button, Menu} from 'antd';
const SubMenu = Menu.SubMenu;
const rootSubmenuKeys = ['sub1', 'sub2'];
class Sider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        openKeys: ['sub1', 'sub2']
    }
  }

  _onOpenChange(openKeys) {
      console.log(openKeys);
      return;
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (<div>
        <div className={styles.logo}><img src={logo} alt=""/></div>
      <div>
        <Menu mode="inline" openKeys={this.state.openKeys} onOpenChange={this._onOpenChange.bind(this)} style={{
            width: 220
          }}>
          <SubMenu key="sub1" title={<span>第一模块</span>}>
            <Menu.Item key="1"><Link to='/'>欢迎页</Link></Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" title={<span>第二模块</span>}>
            <Menu.Item key="5"><Link to='/first'>第一页</Link></Menu.Item>
            <Menu.Item key="6"><Link to='/second'>第二页</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    </div>)
  }
}
export default connect()(Sider);
