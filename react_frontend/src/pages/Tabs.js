import React, { Component }  from 'react';
import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

class Tabs extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
    this.tab = props.tab
  }

  tabs = () =>
    <Nav fill variant="tabs" className="nav-justified" defaultActiveKey={this.tab} activeKey={this.tab}>
      <Nav.Item>
      <LinkContainer to={"/" + this.lekcio + "/teksto" }>
      <Nav.Link eventKey="home">{ this.enhavo['fasado']['Teksto'] }</Nav.Link>
      </LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to={"/" + this.lekcio + "/vortoj" }>
          <Nav.Link eventKey="vortoj">{ this.enhavo['fasado']['Novaj vortoj'] }</Nav.Link>
      </LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to={"/" + this.lekcio + "/gramatiko"}>
          <Nav.Link eventKey="gramatiko">{ this.enhavo['fasado']['Gramatiko'] }</Nav.Link>
      </LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to={"/" + this.lekcio + "/vortoj2" }>
          <Nav.Link eventKey="vortoj2">{ this.enhavo['fasado']['Novaj vortoj'] + " 2"}</Nav.Link>
      </LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to={"/" + this.lekcio + "/ekzercoj"}>
          <Nav.Link eventKey="ekzercoj">{ this.enhavo['fasado']['Ekzerco 1'] }</Nav.Link>
      </LinkContainer>
      </Nav.Item>
      <Nav.Item>
      <LinkContainer to={"/" + this.lekcio + "/ekzercoj2"}>
          <Nav.Link eventKey="ekzercoj2">{ this.enhavo['fasado']['Ekzerco 2'] }</Nav.Link>
      </LinkContainer>
      </Nav.Item>
    </Nav>

  render = () => <div>{this.tabs()}</div>
}

export default Tabs;
