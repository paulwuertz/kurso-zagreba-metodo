import React, { Component }  from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class Tabs extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
  }

  tabs = () =>
    <Nav fill variant="tabs" defaultActiveKey="/home" >
      <Nav.Item>
        <LinkContainer to={"/" + this.lekcio }><Nav.Link>{ this.enhavo['fasado']['Teksto'] }</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to={"/" + this.lekcio + "/gramatiko"}><Nav.Link>{ this.enhavo['fasado']['Gramatiko'] }</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to={"/" + this.lekcio + "/ekzercoj"}><Nav.Link>{ this.enhavo['fasado']['Ekzerco 1'] }</Nav.Link></LinkContainer>
      </Nav.Item>
    </Nav>

  render = () => <div className="mb-3">{this.tabs()}</div>
}

export default Tabs;
