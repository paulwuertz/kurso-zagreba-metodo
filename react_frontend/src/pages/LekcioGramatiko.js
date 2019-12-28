import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
import Tabs from './Tabs';
const ReactMarkdown = require('react-markdown')

class LekcioGramatiko extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
  }

  render = () => <div dir={ this.enhavo.tekstodirekto }>
      <Tabs lekcio = "01" state = {this.enhavo} />
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
