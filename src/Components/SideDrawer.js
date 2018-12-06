import React, {Component} from 'react';
import './../scss/App.scss';
// import GameWizard from './User/GameWizard';
import { Link, withRouter } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import Axios from 'axios';
import {logout} from '../ducks/reducer';
import {connect} from 'react-redux';

const { Sider } = Layout;
// const SubMenu = Menu.SubMenu;

class SideDrawer extends Component {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  handleLogout = () => {
    Axios.delete('/auth/logout')
    .then( () => {
      this.props.logout()
      this.props.history.push('/')
    })
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
            <Link to='/'><Icon type="home" />
              <span>HOME</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to='/userhome'><Icon type="user" />
              <span>USER HOME</span></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="plus" />
              <button style={{backgroundColor: "transparent", border: "0px", paddingLeft: '0'}} > <Icon type="logout" />
              <span>CREATE GAME</span></button>
            </Menu.Item>
            {/* <Menu.Item key="4">
              <Icon type="setting" />
              <span>SETTINGS</span>
            </Menu.Item> */}
            <Menu.Item key="5" >
             <button style={{backgroundColor: "transparent", border: "0px", paddingLeft: '0'}} onClick={this.handleLogout}> <Icon type="logout" />
              <span>LOGOUT</span></button>
            </Menu.Item>           
          </Menu>
        </Sider>
        
      </Layout>
    );
  }
}


function mapStateToProps(state) {
  return {
      state
  }
}

export default withRouter(connect(mapStateToProps,{logout})(SideDrawer))
