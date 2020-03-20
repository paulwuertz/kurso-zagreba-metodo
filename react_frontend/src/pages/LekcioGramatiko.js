import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
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
      <div>
        <ReactMarkdown source={ this.enhavo["lecionoj"][parseInt(this.lekcio)]["gramatiko"]["teksto"] } />

        <LinkContainer to="/01">
        <Button>{ this.enhavo.fasado['Ek'] }</Button>
        </LinkContainer>

        <LinkContainer to="/01">
        <Button>{ this.enhavo.fasado['Ek'] }</Button>
        </LinkContainer>
      </div>
    </div>
}

export default LekcioGramatiko;
