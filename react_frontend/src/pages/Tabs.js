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

  isActive(name) {
      return (this.tab === name) ? 'active' : '';
  }

//<div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
//<a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Project Tab 1</a>
//<a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Project Tab 2</a>


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
    //<a class="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#pop1" role="tab" aria-controls="pop1" aria-selected="true">Popular Cars</a>
    //<a class="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#pop2" role="tab" aria-controls="pop2" aria-selected="false">Upcoming</a>
    //<a class="nav-item nav-link" id="pop3-tab" data-toggle="tab" href="#pop3" role="tab" aria-controls="pop3" aria-selected="false">Newly Launched</a>
    /*
    <div class="col-md-12 text-center">
    <Nav fill className="project-tab" variant="tabs" defaultActiveKey="/home" >
      <div class="nav nav-tabs nav-fill nav-justified" id="nav-tab" role="tablist">
      <Nav.Item>
        <LinkContainer className="nav-item nav-link" to={"/" + this.lekcio }><Nav.Link>{ this.enhavo['fasado']['Teksto'] }</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer className="nav-item nav-link" to={"/" + this.lekcio }><Nav.Link>{ this.enhavo['fasado']['Novaj vortoj'] }</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer className="nav-item nav-link" to={"/" + this.lekcio + "/gramatiko"}><Nav.Link>{ this.enhavo['fasado']['Gramatiko'] }</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer className="nav-item nav-link" to={"/" + this.lekcio }><Nav.Link>{ this.enhavo['fasado']['Novaj vortoj'] + " 2"}</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer className="nav-item nav-link" to={"/" + this.lekcio + "/ekzercoj"}><Nav.Link>{ this.enhavo['fasado']['Ekzerco 1'] }</Nav.Link></LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer className="nav-item nav-link" to={"/" + this.lekcio + "/ekzercoj"}><Nav.Link>{ this.enhavo['fasado']['Ekzerco 2'] }</Nav.Link></LinkContainer>
      </Nav.Item>
      </div>
    </Nav>
    </div>
    */
  render = () => <div className="mb-3">{this.tabs()}</div>
}

export default Tabs;
