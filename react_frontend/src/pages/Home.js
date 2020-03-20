import React, { Component }  from 'react';
import {Popover, OverlayTrigger, Tooltip, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import {updateCourseProgess, isCourseStarted, getCourseProgess } from './Progreso'
const ReactMarkdown = require('react-markdown')

class Home extends Component{
  constructor(props){
    super(props);
    this.enhavo = props.state
  }

  progress_lekcio = function(courses, lekcio) {
    return [1,2,3,4,5,6,7,8,9,10,11,12].map(index =>
      <LinkContainer to={courses[lekcio+index].link}>
      <OverlayTrigger overlay={
          <Popover id="popover-contained">
            <Popover.Title as="h3">{lekcio+index}</Popover.Title>
            <Popover.Content>
                Enhavo:
                <ul>
                  <li>25 novajn vortojn</li>
                </ul>
            </Popover.Content>
          </Popover>
      }>
      <div className="col-2 col-md-1 courseSquare" style={{backgroundColor: courses[lekcio+index].finished ? "#00aa00" : "#555555"}}>
        <a href={courses[lekcio+index].link} style={{ display:"block", width:"100%", height:"100%"}}></a>
      </div>
      </OverlayTrigger>
      </LinkContainer>
    )
  }

  progress_lekcioj = function(courses, lekcio) {
      return (
          <div className="row">
            <div className="row col-2 justify-content-end" style={{margin: "auto"}}>
              <small style={{color: "#767676"}}>{lekcio}</small>
            </div>
            <div className="col-10 justify-content-center">
              <div className="row">
                {this.progress_lekcio(courses, lekcio)}
              </div>
            </div>
          </div>
      )
  }

  progress = function(){
    let courses = getCourseProgess();
    return ["Teksto", "Gramatiko", "Vortoj", "Trufrazo", "Frazformado"].map(lekcio =>
      this.progress_lekcioj(courses, lekcio)
    )
  }

  render = function() {
      if(isCourseStarted())
          return (
             <div dir={ this.enhavo.tekstodirekto }>
            	  <h1>{this.enhavo.fasado['Esperanto en 12 tagoj']}</h1>
            	  <h3>{this.enhavo.fasado['La plej rapida kurso por la bazoj']}</h3>
                <ReactMarkdown source={ this.enhavo.enkonduko } />
            	  <LinkContainer to="/01">
                    <Button>{ this.enhavo.fasado['Ek'] }</Button>
                </LinkContainer>
            </div>
          )
        var enkonduku_sen_get_started = this.enhavo.enkonduko.split("\n")
        enkonduku_sen_get_started.pop();
        enkonduku_sen_get_started.pop();
        enkonduku_sen_get_started = enkonduku_sen_get_started.join("\n");
        return (
          <div dir={ this.enhavo.tekstodirekto }>
          <div>
              <h1>{this.enhavo.fasado['Esperanto en 12 tagoj']}</h1>
              <h3>{this.enhavo.fasado['La plej rapida kurso por la bazoj']}</h3>
              <ReactMarkdown source={ enkonduku_sen_get_started } />
          </div>
          <div dir={ this.enhavo.tekstodirekto }>
            <div>
              <p className="row col-12"><h1>Bone revidu vin!</h1></p>
              <p className="row col-12"><h3>Jen kie vi jam sukcesis:</h3></p>
            </div>
              <div className="row col-12 justify-content-end" style={{display: "block"}}>
                <div className="row">
                    <div className="col-2 justify-content-end" style={{margin: "auto"}}>
                      <small style={{color: "#767676"}}>Lekcio</small>
                    </div>
                    <div className="col-10" style={{textAlign:"center", color: "#767676"}}>
                      <div className="row">
                          <div className="col-2 col-md-1"><small>1</small></div>
                          <div className="col-2 col-md-1"><small>2</small></div>
                          <div className="col-2 col-md-1"><small>3</small></div>
                          <div className="col-2 col-md-1"><small>4</small></div>
                          <div className="col-2 col-md-1"><small>5</small></div>
                          <div className="col-2 col-md-1"><small>6</small></div>
                          <div className="col-2 col-md-1"><small>7</small></div>
                          <div className="col-2 col-md-1"><small>8</small></div>
                          <div className="col-2 col-md-1"><small>9</small></div>
                          <div className="col-2 col-md-1"><small>10</small></div>
                          <div className="col-2 col-md-1"><small>11</small></div>
                          <div className="col-2 col-md-1"><small>12</small></div>
                      </div>
                    </div>
                </div>
                {this.progress()}
              </div>
              <div className="row col-12 mt-3">
                  <p>Via progreso estas savita en via retumilo. Neniaj datumoj de via lernado estas sendita al la servilo. Daŭrigu ĉi tie:</p>
              </div>
              <div className="row col-12 justify-content-center">
                  <div className="row justify-content-center" style={{display: "flex"}}>
                  <LinkContainer to="/01">
                      <Button>Daŭrigu</Button>
                  </LinkContainer>
                  </div>
              </div>
          </div>
          </div>
        )
  }

  componentDidMount() {
      document.title = this.enhavo.fasado['Lerni Esperanton'] + " | " + this.enhavo.fasado['Esperanto en 12 tagoj']
  }
}

export default Home;
