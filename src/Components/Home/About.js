import React, { Component } from 'react';
import { Carousel, Layout, Menu, Affix, Button } from 'antd';
import '../../scss/App.scss';

const { Header, Content, Footer } = Layout;

class About extends Component {
  
    joinGame = () => {
        this.props.history.push('/joingame')
    }

    render() {

        return (
            <Layout className="layout">
                <Affix>
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">{<Login />}</Menu.Item>
                            {/* <Menu.Item key="2"> */}
                                <Button
                                    type="primary"
                                    ghost={true}
                                    onClick={this.joinGame}
                                // background={}
                                // bodyStyle={()}
                                >
                                    Join Game
                </Button>
                            {/* </Menu.Item> */}
                        </Menu>
                    </Header>
                </Affix>
                <Content style={{ padding: '0 50px' }}>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <div style={{ background: '#fff', padding: 24, minHeight: 280, boxShadow: "2px 1px 1px rgba(0, 0, 0, 0.2)", verticalAlign: 'middle'}}>
                        <Carousel  autoplay>
                            <div><img  src='https://cdn.pixabay.com/photo/2013/04/19/01/15/university-105709__340.jpg' alt="classroom" /></div>
                            <div><img src='https://www.lifewire.com/thmb/KBCk0Wz5ZI70_dvF9ZROsxSj3P4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/rear-view-of-teenage-students-raising-hands-in-classroom-525409405-58adb2083df78c345bbc6d2f.jpg' alt="hands raised projector" /></div>
                            <div><img src='http://pianu.com/wp-content/uploads/2017/10/ezgif.com-optimize.gif' alt="It's a penguin!" /></div>
                            <div><img src='https://media.giphy.com/media/ZYrLQoUA8hadW/giphy.gif' alt="School of Rock!" />
                            </div>
                        </Carousel>
                    </div>
                <Footer style={{ textAlign: 'center' }}>
                    T3MLMGAMF ©2018 Created by Gamf
                    <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </Footer>
            </Layout>
        )

    }

}


export default Home;