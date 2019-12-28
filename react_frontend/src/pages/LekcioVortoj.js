import React, { Component }  from 'react';
import Tabs from './Tabs';

class LekcioVortoj extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
  }

  vortlisto = (vortoj) =>
    Object.entries(vortoj).map(radiko =>
        this.tradukajxo(radiko[1])
    )

  tradukajxo (radiko) {
    var left = "", right= "";
    console.log("vorto:", radiko, typeof radiko)
    if(this.enhavo.vortaro.hasOwnProperty(radiko.toLowerCase()) || this.enhavo.finajxoj.hasOwnProperty(radiko.toLowerCase()))
      left = radiko.toLowerCase()
    else if(this.enhavo.vortaro.hasOwnProperty(radiko))
      left = radiko;
    else
      left = '';

    var tradukajxo = this.enhavo.vortaro[left]['tradukajxo']
    if(typeof tradukajxo === 'string' )
        right = tradukajxo
    else
        right = tradukajxo.join(",")
    return (
      <li>
          <em> {left} </em> – {right}
      </li>
    )
}

  render = () =>
    <div dir="{{enhavo.tekstodirekto}}">
      <Tabs lekcio = "01" state = {this.enhavo} />
      <div id="eksporto">
        <a class="btn btn-outline-dark" role="button" aria-pressed="true" href="eksporto/{{enhavo.lingvo}}.apkg"> Anki APKG</a>
    	</div>

      <h3>
        { this.enhavo.fasado['En la teksto']  }
      </h3>
      <ul>
        { this.vortlisto(this.enhavo.lecionoj[parseInt(this.lekcio)].vortoj.teksto) }
      </ul>

      <h3>
        { this.enhavo.fasado['Pliaj']  }
      </h3>

      <ul>
        { this.vortlisto(this.enhavo.lecionoj[parseInt(this.lekcio)].vortoj.pliaj) }
      </ul>
  </div>
}

export default LekcioVortoj;
