import React, { Component }  from 'react';

class AldonoDiversajxoj extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
  }

  vortlisto = (tipo) =>
    Object.entries(this.enhavo.vortaro).filter(e => e[1].vortspeco === tipo).map(radiko =>
        this.tradukajxo(radiko[0])
    )
  vortlisto_unfiltered = (listo) =>
      listo.map(radiko =>
          this.tradukajxo(radiko)
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

  componentDidMount() {
      document.title = this.enhavo.fasado['Diversaĵoj'] + " | " + this.enhavo.fasado['Esperanto en 12 tagoj']
  }

  render = () =>
    <div dir={this.enhavo.tekstodirekto}>
      <h2>
      	{this.enhavo.fasado['Diversaĵoj']}
      </h2>

      <h3>
      	{this.enhavo.fasado['Gravaj esprimoj']}
      </h3>
      <ul>
        { this.vortlisto('grava esprimo') }
      </ul>

      <h3>
      	{this.enhavo.fasado['Koloroj']}
      </h3>
      <ul>
        { this.vortlisto('koloro') }
      </ul>

      <h3>
      	{this.enhavo.fasado['Ciferoj']}
      </h3>
      <ul>
        { this.vortlisto_unfiltered(this.enhavo.ordoj.cifero) }
      </ul>

      <h3>
      	{this.enhavo.fasado['Tagoj de semajno']}
      </h3>
      <ul>
        { this.vortlisto_unfiltered(this.enhavo.ordoj.tago_en_la_semajno) }
      </ul>

      <h3>
      	{this.enhavo.fasado['Monatoj']}
      </h3>
      <ul>
        { this.vortlisto_unfiltered(this.enhavo.ordoj.monato) }
      </ul>

      <h3>
      	{this.enhavo.fasado['Sezonoj']}
      </h3>
      <ul>
        { this.vortlisto_unfiltered(this.enhavo.ordoj.sezono) }
      </ul>
    </div>
}

export default AldonoDiversajxoj;
