import React, { Component }  from 'react';
import Tabs from './Tabs';

class LekcioTeksto extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
  }

  render = () =>
     <Tabs lekcio = "01" state = {this.enhavo} />
}

export default LekcioTeksto;
