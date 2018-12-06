import React, { Component } from "react";
import { Card, Icon, } from "antd";
// Avatar, Modal, Button,

import "../../scss/App.scss";

const { Meta } = Card; //This is for the antD "card" title and game info
class GameList
  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };


  render() {


    return (
      <div>

        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', margin: '20px' }}>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            hoverable>
            <Meta title="GAME NAME/TITLE"
              description="Game description" />
          </Card>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
            <Meta title="GAME NAME/TITLE"
              description="Game description" />
          </Card>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
            <Meta title="GAME NAME/TITLE"
              description="Game description" />
          </Card>
          <Card
            style={{ width: 300 }}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
            actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}>
            <Meta title="GAME NAME/TITLE"
              description="Game description" />
          </Card>


          {/* <Card title="Card title">Card content</Card> */}
        </div>
      </div>
    );
  }
}

export default GameList;
