import React, { Component }  from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

export class Menuo extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.enhavo
    this.lingvoj = props.lingvoj
  }

  langOptions = () =>
    Object.entries(this.lingvoj).map(kodo_obj =>
      <option value={kodo_obj[0]}>{this.lingvoj[kodo_obj[0]].nomo.fontlingve}</option>
    )

  render = () => <Navbar expand="md" bg="dark">
  <Navbar.Brand href="/">
    <img src="assets/img/stelo.png" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title={ this.enhavo.fasado['Lecionoj']} id="basic-nav-dropdown">
            <LinkContainer to="/01"><NavDropdown.Item> 1. {this.enhavo.lecionoj[ 0].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/02"><NavDropdown.Item> 2. {this.enhavo.lecionoj[ 1].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/03"><NavDropdown.Item> 3. {this.enhavo.lecionoj[ 2].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/04"><NavDropdown.Item> 4. {this.enhavo.lecionoj[ 3].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/05"><NavDropdown.Item> 5. {this.enhavo.lecionoj[ 4].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/06"><NavDropdown.Item> 6. {this.enhavo.lecionoj[ 5].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/07"><NavDropdown.Item> 7. {this.enhavo.lecionoj[ 6].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/08"><NavDropdown.Item> 8. {this.enhavo.lecionoj[ 7].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/09"><NavDropdown.Item> 9. {this.enhavo.lecionoj[ 8].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/10"><NavDropdown.Item>10. {this.enhavo.lecionoj[ 9].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/11"><NavDropdown.Item>11. {this.enhavo.lecionoj[10].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/12"><NavDropdown.Item>12. {this.enhavo.lecionoj[11].teksto.titolo_string}</NavDropdown.Item></LinkContainer>
        </NavDropdown>

        <NavDropdown title={ this.enhavo.fasado['Aldono']} id="basic-nav-dropdown">
            <NavDropdown.Item href="/tabelvortoj">{this.enhavo.fasado['Tabelvortoj']}</NavDropdown.Item>
            <NavDropdown.Item href="/prepozicio">{this.enhavo.fasado['Prepozicioj']}</NavDropdown.Item>
            <NavDropdown.Item href="/konjunkcioj">{this.enhavo.fasado['Konjunkcioj']}</NavDropdown.Item>
            <NavDropdown.Item href="/afiksoj">{this.enhavo.fasado['Afiksoj']}</NavDropdown.Item>
            <NavDropdown.Item href="/diversajxoj">{this.enhavo.fasado['Diversaĵoj']}</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Form.Control as="select">
          { this.langOptions() }
        </Form.Control>
      </Form>
    </Navbar.Collapse>
  </Navbar>
}

export class Footer extends Component {
  constructor(props) {
      super(props);
  }
  render = () => <footer className="container">
    <hr className="featurette-divider" style={{marginBottom: 30 + "px"}}/>
    <div className="float-left" style={{marginBottom: 30 + "px"}}>
      <a href="https://github.com/Esperanto/kurso-zagreba-metodo#permesiloj">
          <img id="cc" src="assets/img/cc.png" alt="Creative commons"/>
      </a>
      Surbaze de la <a href="https://eo.wikipedia.org/wiki/Zagreba_metodo">Zagreba metodo</a>,
      <LinkContainer to="/auxtoroj"><a>Aŭtoroj</a></LinkContainer>, 
      <a href="https://github.com/Esperanto/kurso-zagreba-metodo/tree/master/enhavo/tradukenda">Aldonu lingvon</a>,
      <a href="https://jaehnig.org/#contact">Kontakto</a>
    </div>
  </footer>
}
