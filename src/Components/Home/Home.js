import React, { Component } from 'react';
import { Carousel } from 'antd';
import Login from './login';
import NewUser from './NewUser';
import '../../scss/App.scss';



class Home extends Component {

    render() {

        return (

            <div>
                <h1>HOME</h1>
                <nav className='lhNav'>
                    <Login />
                    <NewUser />
                </nav>
                <h1>Carousel - Wheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee!!!!!!!</h1>
                <Carousel autoplay>
                    <div><img src='https://onelittleproject.com/wp-content/uploads/2017/01/penguin-craft.jpg' alt="It's a penguin!" /></div>
                    <div><img src='https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/sn-penguins_3.jpg?itok=rvjLuG8R' alt="It's a penguin!" /></div>
                    <div><img src='http://themepack.me/i/c/749x468/media/g/502/emperor-penguin-theme-1.jpg' alt="It's a penguin!" /></div>
                    <div><img src='https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/images/sn-penguins_3.jpg?itok=rvjLuG8R' alt="It's a penguin!" /></div>
                </Carousel>
            </div>
        )

    }

}


export default Home;