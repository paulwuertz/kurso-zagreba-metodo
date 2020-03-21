import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import Tabs from "./Tabs.js"
const ReactMarkdown = require('react-markdown')

class LekcioGramatiko extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
  }

  componentDidMount() {
    document.title = this.enhavo.fasado['Gramatiko'] + " | " + this.enhavo.fasado['Esperanto en 12 tagoj']
  }

  render = () =>
    <div dir={ this.enhavo.tekstodirekto }>
      <Tabs lekcio = "01" state = {this.enhavo} tab="gramatiko"/>
      <div className="container pt-3 pb-3 mb-2" style={{ borderLeft: "1px solid #dee2e6", borderRight: "1px solid #dee2e6", borderBottom: "1px solid #dee2e6", borderBottomLeftRadius: ".25rem", borderBottomRightRadius: ".25rem" }}>
          <ReactMarkdown source={ this.enhavo["lecionoj"][parseInt(this.lekcio)]["gramatiko"]["teksto"] } />
          <div className="row text-center">
              <div className="col-4"><Button className="float-left" variant="info">{this.enhavo.fasado['malantaŭen']}</Button></div>
              <div className="col-4 text-center"><Button variant="outline-secondary">{this.enhavo.fasado['Komentejo']}</Button></div>
              <div className="col-4"><Button className="float-right" variant="info">{this.enhavo.fasado['antaŭen']}</Button></div>
          </div>
      </div>
    </div>
}

export default LekcioGramatiko;
