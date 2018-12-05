import React, {Component} from 'react';
import './../scss/App.scss';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class SideDrawer extends Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '80vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
            <Icon type="home" />
              <span>HOME</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="user" />
              <span>USER HOME</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="plus" />
              <span>CREATE GAME</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="setting" />
              <span>SETTINGS</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="logout" />
              <span>LOGOUT</span>
            </Menu.Item>

            
          </Menu>
        </Sider>
        
      </Layout>
    );
  }
}