import React, { Component } from 'react';
import { Carousel, Layout, Menu, Affix, Button } from 'antd';
import Login from './login';
import '../../scss/App.scss';

const { Header, Content, Footer } = Layout;

class Home extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         switch: false
    //     }
    // }

    // handleModalSwitch = () => {
    //     this.state.switch === true ? 
    //     this.setState({switch: false}) : this.setState({switch: true})
    // }
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
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Carousel autoplay>
                            <div><img src='https://cdn.pixabay.com/photo/2013/04/19/01/15/university-105709__340.jpg' alt="classroom" /></div>
                            <div><img src='https://www.lifewire.com/thmb/KBCk0Wz5ZI70_dvF9ZROsxSj3P4=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/rear-view-of-teenage-students-raising-hands-in-classroom-525409405-58adb2083df78c345bbc6d2f.jpg' alt="hands raised projector" /></div>
                            <div><img src='http://pianu.com/wp-content/uploads/2017/10/ezgif.com-optimize.gif' alt="It's a penguin!" /></div>
                            <div><img src='https://media.giphy.com/media/ZYrLQoUA8hadW/giphy.gif' alt="School of Rock!" />
                            </div>
                        </Carousel>
                    </div>
                    <div className='homeContent'>
                        <div className='column-a'>
                            <p>Teaching Tools To Make Learning More Gooder And More Funner is the teaching aid you have been searching for.
                                </p><br />
                            <p>
                                Teaching Tools allows you to:
                            </p><br />
                            <ul className='home-bullets'>
                                <li>Create custom games</li><br />
                                <li>Make learning more gooder</li><br />
                                <li>Make learning more funner</li><br />
                                <li>Create your own teams</li><br />
                                <li>Organize your classroom</li><br />
                                <li>Keep Jason and Becky from exchaning notes</li><br />
                            </ul>
                        </div>
                        <div className='column-b'>
                            <h2>Testimonials</h2><br />
                            <p>"I would cut down every cherry tree for the chance to take a whack at Teaching Tools!" -George Washington</p><br />
                            <p>"I hate all the orphans in the whole world, but even I want them to play the games from Teaching Tools." -Steven Esqueleto</p><br />
                            <p>"When my pipe broke, I didn't know what to do. But now, with Teaching Tools, all the children are following me again!" -Pied Piper</p><br />
                            <p>"This one's for the children" -New Kids on the Block</p><br />
                            <p>"Teaching Tools taught me that I believe the children are our future" - Whitney Houston</p>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    T3MLMGAMF ©2018 Created by Gamf
                    <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </Footer>
            </Layout>
        )

    }

}


export default Home;