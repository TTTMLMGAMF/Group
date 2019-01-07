import React, { Component } from 'react';
import { Layout, Menu, Affix, Button } from 'antd';
import Login from './login';
import '../../scss/App.scss';
import TeachToolsLogo from './../../scss/images/game_logo.png';

const { Header, Content, Footer } = Layout;

class Home extends Component {

    joinGame = () => {
        this.props.history.push('/joingame')
    }

    render() {

        return (
            <Layout className="layout">
                <Affix>
                    <Header>
                        <div>
                            <div className="logo" >
                                <img style={{ height: '55px', padding: '5px', margin: '5px 15px 0 5px', position: 'absolute', top: '0', left: '0' }} src={TeachToolsLogo} alt='logo' />
                            </div>
                            <Menu
                                theme="dark"
                                mode="horizontal"
                                defaultSelectedKeys={['2']}
                                style={{ width: '100%', lineHeight: '60px'}}
                            >
                                {/* <Menu.Item style={{ marginLeft: '35px', color: 'white' }} key="1">{<Login />}</Menu.Item> */}
                                <div className='homeBtnContainer'>
                                    <button 
                                        className='loginBtnHome'
                                        type="primary"
                                        ghost={true}
                                        > {<Login />}</button>
                                    {/* <Menu.Item key="2"> */}
                                    <Button
                                        className='joinBtnHome'
                                        type="primary"
                                        ghost={true}
                                        onClick={this.joinGame}
                                        // background={}
                                        // bodyStyle={()}
                                        >
                                        JOIN GAME
                                        </Button>
                                    {/* </Menu.Item> */}
                                </div>
                            </Menu>
                        </div>
                    </Header>
                </Affix>
                <Content style={{ padding: '0 0px' }}>
                    <div className='logoBackground'>
                        <div className='logoBack'>
                            <img id='logoBig' src={TeachToolsLogo} alt='Logo-background' />
                        </div>
                        
                    </div>
                    <div className='homeContent'>
                        <div className='column-a'>
                            <h3>TEACH TOOLS ALLOWS YOU TO:</h3><br />
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
                            <h3>TESTIMONIALS</h3><br />
                            <p>"I would cut down every cherry tree for the chance to take a whack at Teaching Tools!" -George Washington</p><br />
                            <p>"I hate all the orphans in the whole world, but even I want them to play the games from Teaching Tools." -Steven Esqueleto</p><br />
                            <p>"When my pipe broke, I didn't know what to do. But now, with Teaching Tools, all the children are following me again!" -Pied Piper</p><br />
                            <p>"This one's for the children" -New Kids on the Block</p><br />
                            <p>"Teaching Tools taught me that I believe the children are our future" - Whitney Houston</p>
                        </div>
                    </div>
                </Content>
                <Footer className='homeFooter'>
                    T3MLMGAMF ©2018 Created by Gamf
                    <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
                </Footer>
            </Layout>
        )

    }

}


export default Home;