import React, { Component }  from 'react';
import { MediaPlayer } from '@cassette/player';
import '@cassette/player/dist/css/cassette-player.css';
import Tabs from "./Tabs.js"

class LekcioTeksto extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
  }

  paragrafo = (paragrafo) =>
      Object.entries(paragrafo).filter(e => !!e).map(radiko =>
        this.vorto(radiko[1])
      )
  paragrafoj = (paragrafoj) =>
    Object.entries(paragrafoj).filter(e => !!e).map(paragrafo =>
        this.paragrafo(paragrafo[1])
    )

  rows (radikoj) {
    return Object.entries(radikoj).filter(e => !!e).map(radiko =>
        this.tradukajxo(radiko)
      )
  }

  tradukajxo (radiko) {
    if(radiko == null) return " "
    var left = "", right= "";
    console.log("vorto:", radiko, typeof radiko)
    radiko = radiko.join("")
    if(this.enhavo.vortaro.hasOwnProperty(radiko.toLowerCase()) || this.enhavo.finajxoj.hasOwnProperty(radiko.toLowerCase()))
      left = radiko.toLowerCase()
    else if(this.enhavo.vortaro.hasOwnProperty(radiko))
      left = radiko;
    else
      left = '';

    if (this.enhavo.vortaro[left]) {
      var tradukajxo = this.enhavo.vortaro[left]['tradukajxo']
      console.log("vorto fin:", radiko, typeof radiko)
      if(typeof tradukajxo === 'string' )
          right = tradukajxo
      else
          right = tradukajxo.join(",")
    }
    return (
      <tr>
        <td><em> {left} </em></td><td> –</td><td> {right}</td>
      </tr>
    )
  }

  vorto = function(vorto) {
    if(vorto == null) return " "
    console.log("v no tab", vorto)
    if(typeof vorto === "string"){
      return vorto
    } else {
      return <a href="javascript:" data-toggle="popover" title={this.tradukajxo(vorto)} data-content={"<table>"+this.rows(vorto)+"</table>"}>{ vorto.join("") }</a>
    }
  }

  componentDidMount() {
      let title = this.enhavo.lecionoj[parseInt(this.lekcio)-1].teksto.titolo.map(radiko => !radiko ? " " : radiko.join("") ).join("")
      document.title = this.lekcio + ". " + title + " | " + this.enhavo.fasado['Esperanto en 12 tagoj']
  }

  render = () =>
  <div dir={ this.enhavo.tekstodirekto }>
  <Tabs lekcio = "01" state = {this.enhavo} tab="home"/>
    <h2 id={"leciono" + this.lekcio}>
      {this.lekcio}. {this.paragrafo(this.enhavo.lecionoj[parseInt(this.lekcio)-1].teksto.titolo)}
    </h2>

    <p className="alert alert-info" role="alert" dir={this.enhavo.tekstodirekto}> {this.enhavo.fasado['Alklaku la vortojn por vidi ilian tradukon.']} </p>

    <div className="container" style={{marginBottom: 1 + "em",}}>
        <MediaPlayer playlist={[{url:"/assets/ogg/"+this.lekcio+".ogg"}]}y/>
    </div>

    <div style={{borderLeft: 0.2 + "em solid #4d91b3", paddingLeft: 1 + "em", marginBottom: 1 + "em",}}>
        {this.paragrafoj(this.enhavo.lecionoj[parseInt(this.lekcio)-1].teksto.paragrafoj)}
    </div>

    </div>
}

export default LekcioTeksto;
