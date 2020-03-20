import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
import Auxtoroj from './pages/Auxtoroj';

export default class App extends Component {

  constructor(props){
    super(props);
    this.lingvo = "de";
    this.lingvoj = require("./data/lingvoj.json");
    this.enhavo = require("./data/data_de.json");
    //this.multlingva_enhavo["de"];
  }

  render  = () =>
    <div className="App">
      <Router basename="">
      <div>
      <Menuo enhavo = {this.enhavo} lingvoj = {this.lingvoj}/>
      <div className="container-md">
        <div className="row mt-3">
          <div className="col-sm-12 text-left">
              <Switch>
                <Route path="/01/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "01" state = {this.enhavo} />} />
                <Route path="/01/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "01" state = {this.enhavo} />} />
                <Route path="/01/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "01" state = {this.enhavo} />} />
                <Route path="/01/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "01" state = {this.enhavo} />} />
                <Route path="/01/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "01" state = {this.enhavo} />} />
                <Route path="/01/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "01" state = {this.enhavo} />} />
                <Route path="/01/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "01" state = {this.enhavo} />} />
                <Route path="/01" render={ (routeProps) => <LekcioTeksto lekcio = "01" state = {this.enhavo} />} />
                <Route path="/02/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "02" state = {this.enhavo} />} />
                <Route path="/02/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "02" state = {this.enhavo} />} />
                <Route path="/02/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "02" state = {this.enhavo} />} />
                <Route path="/02/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "02" state = {this.enhavo} />} />
                <Route path="/02/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "02" state = {this.enhavo} />} />
                <Route path="/02/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "02" state = {this.enhavo} />} />
                <Route path="/02/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "02" state = {this.enhavo} />} />
                <Route path="/02" render={ (routeProps) => <LekcioTeksto lekcio = "02" state = {this.enhavo} />} />
                <Route path="/03/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "03" state = {this.enhavo} />} />
                <Route path="/03/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "03" state = {this.enhavo} />} />
                <Route path="/03/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "03" state = {this.enhavo} />} />
                <Route path="/03/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "03" state = {this.enhavo} />} />
                <Route path="/03/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "03" state = {this.enhavo} />} />
                <Route path="/03/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "03" state = {this.enhavo} />} />
                <Route path="/03/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "03" state = {this.enhavo} />} />
                <Route path="/03" render={ (routeProps) => <LekcioTeksto lekcio = "03" state = {this.enhavo} />} />
                <Route path="/04/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "04" state = {this.enhavo} />} />
                <Route path="/04/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "04" state = {this.enhavo} />} />
                <Route path="/04/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "04" state = {this.enhavo} />} />
                <Route path="/04/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "04" state = {this.enhavo} />} />
                <Route path="/04/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "04" state = {this.enhavo} />} />
                <Route path="/04/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "04" state = {this.enhavo} />} />
                <Route path="/04/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "04" state = {this.enhavo} />} />
                <Route path="/04" render={ (routeProps) => <LekcioTeksto lekcio = "04" state = {this.enhavo} />} />
                <Route path="/05/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "05" state = {this.enhavo} />} />
                <Route path="/05/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "05" state = {this.enhavo} />} />
                <Route path="/05/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "05" state = {this.enhavo} />} />
                <Route path="/05/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "05" state = {this.enhavo} />} />
                <Route path="/05/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "05" state = {this.enhavo} />} />
                <Route path="/05/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "05" state = {this.enhavo} />} />
                <Route path="/05/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "05" state = {this.enhavo} />} />
                <Route path="/05" render={ (routeProps) => <LekcioTeksto lekcio = "05" state = {this.enhavo} />} />
                <Route path="/06/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "06" state = {this.enhavo} />} />
                <Route path="/06/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "06" state = {this.enhavo} />} />
                <Route path="/06/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "06" state = {this.enhavo} />} />
                <Route path="/06/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "06" state = {this.enhavo} />} />
                <Route path="/06/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "06" state = {this.enhavo} />} />
                <Route path="/06/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "06" state = {this.enhavo} />} />
                <Route path="/06/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "06" state = {this.enhavo} />} />
                <Route path="/06" render={ (routeProps) => <LekcioTeksto lekcio = "06" state = {this.enhavo} />} />
                <Route path="/07/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "07" state = {this.enhavo} />} />
                <Route path="/07/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "07" state = {this.enhavo} />} />
                <Route path="/07/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "07" state = {this.enhavo} />} />
                <Route path="/07/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "07" state = {this.enhavo} />} />
                <Route path="/07/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "07" state = {this.enhavo} />} />
                <Route path="/07/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "07" state = {this.enhavo} />} />
                <Route path="/07/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "07" state = {this.enhavo} />} />
                <Route path="/07" render={ (routeProps) => <LekcioTeksto lekcio = "07" state = {this.enhavo} />} />
                <Route path="/08/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "08" state = {this.enhavo} />} />
                <Route path="/08/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "08" state = {this.enhavo} />} />
                <Route path="/08/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "08" state = {this.enhavo} />} />
                <Route path="/08/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "08" state = {this.enhavo} />} />
                <Route path="/08/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "08" state = {this.enhavo} />} />
                <Route path="/08/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "08" state = {this.enhavo} />} />
                <Route path="/08/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "08" state = {this.enhavo} />} />
                <Route path="/08" render={ (routeProps) => <LekcioTeksto lekcio = "08" state = {this.enhavo} />} />
                <Route path="/09/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "09" state = {this.enhavo} />} />
                <Route path="/09/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "09" state = {this.enhavo} />} />
                <Route path="/09/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "09" state = {this.enhavo} />} />
                <Route path="/09/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "09" state = {this.enhavo} />} />
                <Route path="/09/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "09" state = {this.enhavo} />} />
                <Route path="/09/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "09" state = {this.enhavo} />} />
                <Route path="/09/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "09" state = {this.enhavo} />} />
                <Route path="/09" render={ (routeProps) => <LekcioTeksto lekcio = "09" state = {this.enhavo} />} />
                <Route path="/10/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "10" state = {this.enhavo} />} />
                <Route path="/10/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "10" state = {this.enhavo} />} />
                <Route path="/10/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "10" state = {this.enhavo} />} />
                <Route path="/10/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "10" state = {this.enhavo} />} />
                <Route path="/10/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "10" state = {this.enhavo} />} />
                <Route path="/10/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "10" state = {this.enhavo} />} />
                <Route path="/10/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "10" state = {this.enhavo}/> } />
                <Route path="/10" render={ (routeProps) => <LekcioTeksto lekcio = "10" state = {this.enhavo}/> } />
                <Route path="/11/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "11" state = {this.enhavo} />} />
                <Route path="/11/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "11" state = {this.enhavo} />} />
                <Route path="/11/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "11" state = {this.enhavo} />} />
                <Route path="/11/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "11" state = {this.enhavo} />} />
                <Route path="/11/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "11" state = {this.enhavo} />} />
                <Route path="/11/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "11" state = {this.enhavo} />} />
                <Route path="/11/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "11" state = {this.enhavo}/> } />
                <Route path="/11" render={ (routeProps) => <LekcioTeksto lekcio = "11" state = {this.enhavo}/> } />
                <Route path="/12/vortoj"    render={ (routeProps) => <LekcioVortoj lekcio = "12" state = {this.enhavo} />} />
                <Route path="/12/gramatiko" render={ (routeProps) => <LekcioGramatiko lekcio = "12" state = {this.enhavo} />} />
                <Route path="/12/ekzerco1"  render={ (routeProps) => <LekcioTeksto lekcio = "12" state = {this.enhavo} />} />
                <Route path="/12/ekzerco2"  render={ (routeProps) => <LekcioTeksto lekcio = "12" state = {this.enhavo} />} />
                <Route path="/12/ekzerco3"  render={ (routeProps) => <LekcioTeksto lekcio = "12" state = {this.enhavo} />} />
                <Route path="/12/vortoj2"  render={ (routeProps) => <LekcioVortoj lekcio = "12" state = {this.enhavo} />} />
                <Route path="/12/teksto" render={ (routeProps) => <LekcioTeksto lekcio = "12" state = {this.enhavo}/> } />
                <Route path="/12" render={ (routeProps) => <LekcioTeksto lekcio = "12" state = {this.enhavo}/> } />
                <Route path="/tabelvortoj/"   render={ (routeProps) => <AldonoTabelvortoj state = {this.enhavo}/> }/>
                <Route path="/prepozicio/"   render={ (routeProps) => <AldonoPrepozicioj state = {this.enhavo}/> }/>
                <Route path="/konjunkcioj/"   render={ (routeProps) => <AldonoKonjunkcioj state = {this.enhavo}/> }/>
                <Route path="/afiksoj/"   render={ (routeProps) => <AldonoAfiksoj state = {this.enhavo}/> }/>
                <Route path="/diversajxoj/"   render={ (routeProps) => <AldonoDiversajxoj state = {this.enhavo}/> }/>
                <Route path="/auxtoroj/"   render={ (routeProps) => <Auxtoroj lingvo = {this.lingvo} lingvoj = {this.lingvoj} state = {this.enhavo}/> }/>
                <Route path="/duo/"   render={ (routeProps) => <Duo state = {this.enhavo} lingvo = {this.lingvo} lingvoj = {this.lingvoj}/> }/>
                <Route path="/"   render={ (routeProps) => <Home state = {this.enhavo}/> }/>
              </Switch>
            </div>
        </div>
      </div>
      </div>
      <Footer state = {this.enhavo} lingvo = {this.lingvo}/>
    </Router>
  </div>
}
