import React, { Component }  from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

export class Menuo extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.enhavo
    this.lingvoj = props.lingvoj
    this.langUpdate = props.langUpdate
    this.langForm = props.langForm
    this.state = { showLangModal: false }
    this.handleClose = () => this.setState({ showLangModal: false });
    this.handleShow = () => this.setState({ showLangModal: true });
  }

  langOptions = () =>
    Object.entries(this.lingvoj).map(kodo_obj =>
      <option key={kodo_obj[0]} value={kodo_obj[0]}>{this.lingvoj[kodo_obj[0]].nomo.fontlingve}</option>
    )
    
  render = () => <>
  <Navbar expand="md" bg="dark">
  <Navbar.Brand href="/">
    <img src="/assets/img/stelo.png" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
    </Navbar.Brand>
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
            <LinkContainer to="/tabelvortoj"><NavDropdown.Item>{this.enhavo.fasado['Tabelvortoj']}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/prepozicio"><NavDropdown.Item>{this.enhavo.fasado['Prepozicioj']}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/konjunkcioj"><NavDropdown.Item>{this.enhavo.fasado['Konjunkcioj']}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/afiksoj"><NavDropdown.Item>{this.enhavo.fasado['Afiksoj']}</NavDropdown.Item></LinkContainer>
            <LinkContainer to="/diversajxoj"><NavDropdown.Item>{this.enhavo.fasado['Diversaĵoj']}</NavDropdown.Item></LinkContainer>
        </NavDropdown>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
    </Navbar.Collapse>
    <span className="btn btn-light mr-2" onClick={this.handleShow}>
    <svg version="1.1" viewBox="0 0 41 41" height="25px" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(0 -34.45)">
           <path d="m25 67.78c0 1.475 0.9425 2.431 2.48 2.431 1.846-0.0392 3.673-1.211 4.268-1.74 0.5945-0.5303 2.196-2.371 2.903-3.828 0.8943 0.4224 1.318 1.13 1.318 1.913 0 1.694-1.632 2.677-4.237 2.976l1.264 1.749c4.079-0.5342 5.467-2.247 5.467-4.756 0-2.119-1.333-3.406-3.043-3.97 0.03146-0.1554 0.08861-0.3178 0.1207-0.4751l-2.318-0.4128c-0.01541 0.2343-0.06227 0.2774-0.1079 0.5123-0.8327-0.0475-1.758 0.0777-2.056 0.1406 0-0.4237 0.01541-1.554 0.03146-1.961 1.93-0.07832 3.828-0.2343 5.585-0.5014l-0.2042-2.289c-1.804 0.3608-3.546 0.5496-5.256 0.6439 0.04622-0.4558 0.1104-1.744 0.1104-1.744l-2.448-0.1868c-0.0321 0.6279-0.04622 1.366-0.07768 2.008-1.084 0.01541-2.368 0.01541-3.044 0l0.1098 2.212h0.2658c0.644 0 1.696-0.03274 2.638-0.06356 0 0.6112 0.01477 1.929 0.0308 2.526-2.214 0.9238-3.799 2.635-3.799 4.816zm7.374-3.546c-0.33 0.6581-0.7216 1.256-1.161 1.757-0.0642-0.5181-0.09502-1.051-0.1258-1.615 0.1721-0.0308 0.8622-0.1412 1.287-0.1412zm-3.452 0.9104c0.07897 0.8789 0.1733 1.726 0.314 2.494-0.407 0.2042-0.7987 0.33-1.161 0.346-0.7852 0.0315-0.7852-0.47-0.7852-0.6908 6.64e-4 -0.8327 0.644-1.6 1.633-2.149z" stroke-width=".642"/>
            <path d="m17.43 71.46 1.537-4.016 3.468-9.032 1.468-4.017h11.9c1.621 0 3.827 2.291 3.827 4.017v9.032c0 1.725-2.206 4.016-3.827 4.016v1.309c2.831 0 5.135-2.389 5.135-5.325v-9.032c0-2.936-2.303-5.325-5.135-5.325h-12.84l-7.408 19.68h21.02v-1.309c-18.28 6.3e-4 -10.58-4.9e-4 -19.16-4.9e-4z" stroke-width=".4884"/><path d="m17.5 34.64h-12.36c-2.832 0-5.136 2.389-5.136 5.325v9.032c0 2.936 2.304 5.325 5.136 5.325h1.993c9.475 0 13.81 4.89e-4 19.6 4.89e-4 -2.886-6.646-5.978-13.21-9.225-19.68z" stroke-width=".4884"/><path d="m10.69 37.08-5.693 15h3.34l1.177-3.34h5.609l1.134 3.34h3.424l-5.609-15zm-0.3143 9.202 1.954-5.504h0.04153l1.891 5.504z" fill="#fff" stroke-width=".7159"/><g transform="matrix(.001398 0 0 -.001398 .2887 73.27)"><path d="m6115 12310c-629-48-1185-176-1742-401-175-70-520-239-683-333-1151-668-2028-1697-2510-2946-160-417-272-849-340-1323-14-94-4-133 46-177l35-30h3081l38 38c26 26 42 55 54 97 81 285 258 621 461 870 88 108 290 307 399 394 348 275 762 454 1195 518 155 22 479 22 651-1 339-46 637-141 905-289 102-56 242-150 301-201 39-34 39-35 19-54-11-11-254-234-540-497-286-262-537-494-557-516-66-72-57-164 21-216l34-23h2286c2223 0 2287 1 2315 19 15 10 37 32 47 47 18 28 19 92 19 2282 0 2490 5 2291-63 2332-32 20-95 25-129 12-9-4-267-256-573-561l-556-555-52 51c-125 120-378 329-552 454-816 590-1672 904-2705 994-200 18-753 27-905 15z"/><path d="m8463 6460c-40-24-44-31-92-179-129-391-324-706-625-1006-323-323-717-549-1151-660-207-53-339-69-580-69-163 1-245 6-365 23-437 63-815 214-1132 453-43 33-78 61-78 63s249 233 553 513c303 280 563 522 577 536 33 36 36 127 5 168-47 63 139 58-2364 58h-2278l-34-23c-19-12-42-38-51-57-17-33-18-162-18-2267 0-2466-5-2284 63-2331 39-26 104-29 145-8 15 8 272 260 571 559l544 545 156-137c729-641 1477-1035 2351-1236 436-101 807-139 1355-139 408-1 527 7 835 55 810 126 1562 416 2240 864 1213 801 2082 2037 2435 3464 58 234 125 604 125 694 0 50-23 93-63 117-31 20-62 20-1562 20-1497 0-1531 0-1562-20z"/></g>
        </g>
    </svg>
    </span>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  </Navbar>
  <Modal aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showLangModal} onHide={this.handleClose}>
        <Modal.Body>{this.langForm()}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            {this.enhavo.fasado['malantaŭen']}
          </Button>
        </Modal.Footer>
      </Modal>
  </>
}

export class Footer extends Component {
  render = () =>
  <footer className="container">
    <div className="card">
      <div className="card-body card-header">
      <div className="float-left">
        <a href="https://github.com/Esperanto/kurso-zagreba-metodo#permesiloj" style={{marginRight: 20 + "px"}}>
            <img id="cc" src="assets/img/cc.png" alt="Creative commons"/>
        </a>
        Surbaze de la <a href="https://eo.wikipedia.org/wiki/Zagreba_metodo">Zagreba metodo</a>
        <span>, </span>
        <LinkContainer to="/auxtoroj"><a>Aŭtoroj</a></LinkContainer>
        <span>, </span>
        <a href="https://github.com/Esperanto/kurso-zagreba-metodo/tree/master/enhavo/tradukenda">Aldonu lingvon</a>
        <span>, </span>
        <a href="https://jaehnig.org/#contact">Kontakto</a>
      </div>
      </div>
    </div>
  </footer>
}
