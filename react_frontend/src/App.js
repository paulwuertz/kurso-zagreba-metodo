import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

import Home from './pages/Home';
import LekcioTeksto from './pages/Lekcio';
import LekcioGramatiko from './pages/LekcioGramatiko';
import LekcioVortoj from './pages/LekcioVortoj';
import {Menuo, Footer} from './pages/Menuo';

import AldonoTabelvortoj from './pages/AldonoTabelvortoj';
import AldonoPrepozicioj from './pages/AldonoPrepozicioj';
import AldonoKonjunkcioj from './pages/AldonoKonjunkcioj';
import AldonoAfiksoj from './pages/AldonoAfiksoj';
import AldonoDiversajxoj from './pages/AldonoDiversajxoj';
import Duo from './pages/duo';
import Post from './pages/Post';
import Auxtoroj from './pages/Auxtoroj';

export default class App extends Component {

  constructor(props){
    super(props);
    var lang = localStorage.getItem("lang");
    this.lingvoj = require("./data/lingvoj.json");
    this.state = {
      lingvo: lang,
      enhavo: JSON.parse(localStorage.getItem(lang)) || []
    }
    this.langHandler = this.langUpdate.bind(this);
  }

  langUpdate = function(event) {
      let lang = event.currentTarget.id || event.target.value;
      var xhttp = new XMLHttpRequest();
      var app = this;
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
             // ajax request is succesful
             app.setState({
                 enhavo: JSON.parse(xhttp.responseText),
                 lingvo: lang
             })
             localStorage.setItem("lang", lang)
             localStorage.setItem(lang, xhttp.responseText)
             window.location.reload(true)
          }
      };
      xhttp.open("GET", "/data/data_"+ lang +".json", true);
      xhttp.send();
  }

  langForm = function() {
      return (
        <div className="container-md">
          <div className="row mt-3">
            <div className="col-sm-12 text-left">
              <div class="jumbotron">
                <h1>Learn Esperanto</h1>
                <div>
                  {(Object.entries(this.lingvoj).map(kodo_obj =>
                    <span key={kodo_obj[0]} onClick={this.langUpdate} class="btn btn-light lelekto" id={kodo_obj[0]} title={kodo_obj[0]}>
                        {this.lingvoj[kodo_obj[0]].nomo.fontlingve}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
  }

  render  = function(){
    if (!this.state.lingvo) {
      return(
        <div className="App">
          <div>
            <Navbar expand="md" bg="dark">
              <Navbar.Brand href="/">
                <img src="/assets/img/stelo.png" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
              </Navbar.Brand>
            </Navbar>
            {this.langForm}
          </div>
          <footer className="container">
            <div className="card">
              <div className="card-body card-header">
              <div className="float-left">
                <a href="https://github.com/Esperanto/kurso-zagreba-metodo#permesiloj" style={{marginRight: 20 + "px"}}>
                    <img id="cc" src="assets/img/cc.png" alt="Creative commons"/>
                </a>
                Surbaze de la <a href="https://eo.wikipedia.org/wiki/Zagreba_metodo">Zagreba metodo</a>
                <span>, </span>
                <a href="https://github.com/Esperanto/kurso-zagreba-metodo/tree/master/enhavo/tradukenda">Aldonu lingvon</a>
                <span>, </span>
                <a href="https://jaehnig.org/#contact">Kontakto</a>
              </div>
              </div>
            </div>
          </footer>
      </div>
      );
    }
    return (
      <div className="App">
        <Router basename="">
        <div>
        <Menuo enhavo={this.state.enhavo} langForm={this.langForm} lingvoj={this.lingvoj} langUpdate={this.langHandler} />
        <div className="container-md">
          <div className="row mt-3">
            <div className="col-sm-12 text-left">
                <Switch>
                  <Route path="/01/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "01" state = {this.state.enhavo} />} />
                  <Route path="/01/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "01" state = {this.state.enhavo} />} />
                  <Route path="/01/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "01" state = {this.state.enhavo} />} />
                  <Route path="/01/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "01" state = {this.state.enhavo} />} />
                  <Route path="/01/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "01" state = {this.state.enhavo} />} />
                  <Route path="/01/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "01" state = {this.state.enhavo} />} />
                  <Route path="/01/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "01" state = {this.state.enhavo} />} />
                  <Route path="/01" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "01" state = {this.state.enhavo} />} />
                  <Route path="/02/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "02" state = {this.state.enhavo} />} />
                  <Route path="/02/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "02" state = {this.state.enhavo} />} />
                  <Route path="/02/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "02" state = {this.state.enhavo} />} />
                  <Route path="/02/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "02" state = {this.state.enhavo} />} />
                  <Route path="/02/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "02" state = {this.state.enhavo} />} />
                  <Route path="/02/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "02" state = {this.state.enhavo} />} />
                  <Route path="/02/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "02" state = {this.state.enhavo} />} />
                  <Route path="/02" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "02" state = {this.state.enhavo} />} />
                  <Route path="/03/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "03" state = {this.state.enhavo} />} />
                  <Route path="/03/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "03" state = {this.state.enhavo} />} />
                  <Route path="/03/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "03" state = {this.state.enhavo} />} />
                  <Route path="/03/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "03" state = {this.state.enhavo} />} />
                  <Route path="/03/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "03" state = {this.state.enhavo} />} />
                  <Route path="/03/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "03" state = {this.state.enhavo} />} />
                  <Route path="/03/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "03" state = {this.state.enhavo} />} />
                  <Route path="/03" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "03" state = {this.state.enhavo} />} />
                  <Route path="/04/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "04" state = {this.state.enhavo} />} />
                  <Route path="/04/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "04" state = {this.state.enhavo} />} />
                  <Route path="/04/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "04" state = {this.state.enhavo} />} />
                  <Route path="/04/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "04" state = {this.state.enhavo} />} />
                  <Route path="/04/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "04" state = {this.state.enhavo} />} />
                  <Route path="/04/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "04" state = {this.state.enhavo} />} />
                  <Route path="/04/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "04" state = {this.state.enhavo} />} />
                  <Route path="/04" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "04" state = {this.state.enhavo} />} />
                  <Route path="/05/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "05" state = {this.state.enhavo} />} />
                  <Route path="/05/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "05" state = {this.state.enhavo} />} />
                  <Route path="/05/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "05" state = {this.state.enhavo} />} />
                  <Route path="/05/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "05" state = {this.state.enhavo} />} />
                  <Route path="/05/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "05" state = {this.state.enhavo} />} />
                  <Route path="/05/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "05" state = {this.state.enhavo} />} />
                  <Route path="/05/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "05" state = {this.state.enhavo} />} />
                  <Route path="/05" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "05" state = {this.state.enhavo} />} />
                  <Route path="/06/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "06" state = {this.state.enhavo} />} />
                  <Route path="/06/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "06" state = {this.state.enhavo} />} />
                  <Route path="/06/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "06" state = {this.state.enhavo} />} />
                  <Route path="/06/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "06" state = {this.state.enhavo} />} />
                  <Route path="/06/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "06" state = {this.state.enhavo} />} />
                  <Route path="/06/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "06" state = {this.state.enhavo} />} />
                  <Route path="/06/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "06" state = {this.state.enhavo} />} />
                  <Route path="/06" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "06" state = {this.state.enhavo} />} />
                  <Route path="/07/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "07" state = {this.state.enhavo} />} />
                  <Route path="/07/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "07" state = {this.state.enhavo} />} />
                  <Route path="/07/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "07" state = {this.state.enhavo} />} />
                  <Route path="/07/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "07" state = {this.state.enhavo} />} />
                  <Route path="/07/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "07" state = {this.state.enhavo} />} />
                  <Route path="/07/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "07" state = {this.state.enhavo} />} />
                  <Route path="/07/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "07" state = {this.state.enhavo} />} />
                  <Route path="/07" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "07" state = {this.state.enhavo} />} />
                  <Route path="/08/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "08" state = {this.state.enhavo} />} />
                  <Route path="/08/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "08" state = {this.state.enhavo} />} />
                  <Route path="/08/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "08" state = {this.state.enhavo} />} />
                  <Route path="/08/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "08" state = {this.state.enhavo} />} />
                  <Route path="/08/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "08" state = {this.state.enhavo} />} />
                  <Route path="/08/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "08" state = {this.state.enhavo} />} />
                  <Route path="/08/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "08" state = {this.state.enhavo} />} />
                  <Route path="/08" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "08" state = {this.state.enhavo} />} />
                  <Route path="/09/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "09" state = {this.state.enhavo} />} />
                  <Route path="/09/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "09" state = {this.state.enhavo} />} />
                  <Route path="/09/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "09" state = {this.state.enhavo} />} />
                  <Route path="/09/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "09" state = {this.state.enhavo} />} />
                  <Route path="/09/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "09" state = {this.state.enhavo} />} />
                  <Route path="/09/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "09" state = {this.state.enhavo} />} />
                  <Route path="/09/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "09" state = {this.state.enhavo} />} />
                  <Route path="/09" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "09" state = {this.state.enhavo} />} />
                  <Route path="/10/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "10" state = {this.state.enhavo} />} />
                  <Route path="/10/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "10" state = {this.state.enhavo} />} />
                  <Route path="/10/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "10" state = {this.state.enhavo} />} />
                  <Route path="/10/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "10" state = {this.state.enhavo} />} />
                  <Route path="/10/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "10" state = {this.state.enhavo} />} />
                  <Route path="/10/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "10" state = {this.state.enhavo} />} />
                  <Route path="/10/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "10" state = {this.state.enhavo}/> } />
                  <Route path="/10" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "10" state = {this.state.enhavo}/> } />
                  <Route path="/11/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "11" state = {this.state.enhavo} />} />
                  <Route path="/11/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "11" state = {this.state.enhavo} />} />
                  <Route path="/11/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "11" state = {this.state.enhavo} />} />
                  <Route path="/11/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "11" state = {this.state.enhavo} />} />
                  <Route path="/11/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "11" state = {this.state.enhavo} />} />
                  <Route path="/11/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "11" state = {this.state.enhavo} />} />
                  <Route path="/11/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "11" state = {this.state.enhavo}/> } />
                  <Route path="/11" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "11" state = {this.state.enhavo}/> } />
                  <Route path="/12/vortoj"    render={ (routeProps) => <LekcioVortoj langUpdate={this.langHandler} lekcio = "12" state = {this.state.enhavo} />} />
                  <Route path="/12/gramatiko" render={ (routeProps) => <LekcioGramatiko langUpdate={this.langHandler} lekcio = "12" state = {this.state.enhavo} />} />
                  <Route path="/12/ekzerco1"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "12" state = {this.state.enhavo} />} />
                  <Route path="/12/ekzerco2"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "12" state = {this.state.enhavo} />} />
                  <Route path="/12/ekzerco3"  render={ (routeProps) => <LekcioTeksto langUpdate={this.langHandler} lekcio = "12" state = {this.state.enhavo} />} />
                  <Route path="/12/vortoj2"  render={ (routeProps) =>  <LekcioVortoj langUpdate={this.langHandler} lekcio = "12" state = {this.state.enhavo} />} />
                  <Route path="/12/teksto" render={ (routeProps) =>    <LekcioTeksto langUpdate={this.langHandler} lekcio = "12" state = {this.state.enhavo}/> } />
                  <Route path="/12" render={ (routeProps) =>           <LekcioTeksto langUpdate={this.langHandler} lekcio = "12" state = {this.state.enhavo}/> } />
                  <Route path="/tabelvortoj/" render={ (routeProps) => <AldonoTabelvortoj langUpdate={this.langHandler} state = {this.state.enhavo}/> }/>
                  <Route path="/prepozicio/" render={ (routeProps) =>  <AldonoPrepozicioj langUpdate={this.langHandler} state = {this.state.enhavo}/> }/>
                  <Route path="/konjunkcioj/" render={ (routeProps) => <AldonoKonjunkcioj langUpdate={this.langHandler} state = {this.state.enhavo}/> }/>
                  <Route path="/afiksoj/" render={ (routeProps) =>     <AldonoAfiksoj langUpdate={this.langHandler} state = {this.state.enhavo}/> }/>
                  <Route path="/diversajxoj/" render={ (routeProps) => <AldonoDiversajxoj langUpdate={this.langHandler} state = {this.state.enhavo}/> }/>
                  <Route path="/auxtoroj/" render={ (routeProps) =>    <Auxtoroj langUpdate={this.langHandler} lingvo = {this.state.lingvo} lingvoj = {this.lingvoj} state = {this.state.enhavo}/> }/>
                  <Route path="/duo/"   render={ (routeProps) => <Duo state = {this.state.enhavo} lingvo = {this.state.lingvo} lingvoj = {this.lingvoj}/> }/>
                  <Route path="/post/"   render={ (routeProps) => <Post state = {this.state.enhavo} /> }/>
                  <Route path="/"   render={ (routeProps) => <Home state = {this.state.enhavo} /> }/>
                </Switch>
              </div>
          </div>
        </div>
        </div>
        <Footer state = {this.state.enhavo} lingvo = {this.state.lingvo}/>
      </Router>
    </div>
  );
  }
}
