import React, { Component } from 'react';
import { Carousel, Layout, Menu, Breadcrumb, Affix } from 'antd';
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
                        </Menu>
                    </Header>
                </Affix>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Carousel autoplay>
                            <div><img src='https://vignette.wikia.nocookie.net/fantendo/images/4/4f/DededeSmash3.png/revision/latest?cb=20180212213706' alt="It's a penguin!" /></div>
                            <div><img src='https://www.smashbros.com/wiiu-3ds/sp/images/character/little_mac/main.png' alt="It's a penguin!" /></div>
                            <div><img src='https://vignette.wikia.nocookie.net/zelda/images/2/2c/Link_%28Super_Smash_Bros._Melee%29.png/revision/latest?cb=20100126010707' alt="It's a penguin!" /></div>
                            <div><img src='https://pre00.deviantart.net/ba9b/th/pre/i/2016/145/8/0/sbb4_leo_corrin_alt__by_4ourside-da3sqrb.png' alt="It's a penguin!"/>
                            </div>
                        </Carousel>
                    </div>
                    <div className='homeContent'>
                        <div className='column-a'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi sit cupiditate perferendis officia, expedita aperiam recusandae placeat voluptas ipsam quas totam. Perspiciatis sed totam ducimus molestias debitis neque ipsum.
                        Quasi necessitatibus excepturi voluptatum ipsum voluptas, officia animi voluptatem ducimus eum reiciendis veritatis sapiente voluptatibus tempore dolorum assumenda? Soluta, dolorum ratione. Impedit earum corporis labore, debitis voluptates soluta quasi autem.
                        Unde iste aliquid eius necessitatibus nesciunt, provident hic impedit magnam similique quia molestias recusandae sint eligendi nostrum consequatur odit deleniti repellat delectus suscipit alias perspiciatis cumque excepturi. Saepe, temporibus esse.</p><br/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quas minima fugiat hic cupiditate consequuntur iste aperiam corporis dolorem! Fugit laborum adipisci eos at nihil dolores consectetur exercitationem voluptatibus ratione.
                        Laudantium nisi aperiam quisquam natus hic harum molestias illo dolore error quia sequi culpa, explicabo iste corporis odio iusto suscipit reiciendis impedit officia? A sint quis nihil repellendus velit quas.
                        Quas voluptates optio, eveniet nisi explicabo exercitationem error? Libero illum adipisci necessitatibus. Numquam neque aliquid illo ratione similique nobis fugiat magni beatae tempora maxime provident, ad, vitae quis nulla in!</p>
                        </div>
                        <div className='column-b'>
                        <p>Doloremque deserunt non iure magni libero ducimus veniam laudantium, nam consectetur saepe similique eius dolor porro vitae nesciunt aperiam labore accusamus explicabo, enim animi repellendus distinctio eveniet in. Eius, officiis.
                        Molestiae explicabo aperiam architecto, voluptates saepe rerum. Excepturi inventore tenetur distinctio atque ad earum aperiam. Autem, esse earum! Doloribus corrupti excepturi soluta, tenetur modi praesentium quidem eum incidunt nisi? Vitae.
                        Enim dolor quos dolorum numquam non nostrum. Facilis laborum vel blanditiis distinctio reiciendis numquam doloremque eum consequuntur.</p><br/>
                        <p>Mollitia pariatur tenetur nemo magnam, molestias, aliquid praesentium ut dolore hic ipsa impedit?
                        Illo hic consectetur aspernatur dicta porro. Doloremque aspernatur, saepe explicabo ducimus ullam accusamus, unde aut reiciendis ipsa in dolorum? Doloremque facilis commodi alias asperiores repellat! Necessitatibus voluptatem debitis esse nesciunt!
                        Fuga quaerat temporibus labore eos sapiente voluptas ducimus velit? Dicta at neque nulla illo harum minus, praesentium expedita molestias ad ducimus blanditiis eum obcaecati eligendi ea fugiat ipsam impedit eveniet.</p><br/>
                        <p>Commodi repellat nisi dolorum. Pariatur placeat molestiae debitis natus accusamus perspiciatis necessitatibus reprehenderit inventore rerum, deserunt minima odio fugit illum ipsum expedita atque cum distinctio impedit quidem eveniet voluptates sapiente.
                        Culpa cum eum beatae blanditiis tempora molestiae dicta repudiandae possimus eveniet, illum, obcaecati dolor! Expedita est, necessitatibus suscipit recusandae voluptatum, harum aliquid sapiente vero repellat commodi ad vitae veritatis reiciendis.</p>
                        </div>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    T3MLMGAMF ©2018 Created by Gamf
                </Footer>
            </Layout>
        )

    }

}


export default Home;