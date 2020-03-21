import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import Tabs from "./Tabs.js"

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

  componentDidMount() {
      document.title = this.enhavo.fasado['Novaj vortoj'] + " | " + this.enhavo.fasado['Esperanto en 12 tagoj']
  }

  render = () =>
    <div dir={ this.enhavo.tekstodirekto }>
      <Tabs lekcio = "01" state = {this.enhavo} tab="vortoj"/>
      <div className="container pt-3 pb-3 mb-2" style={{ borderLeft: "1px solid #dee2e6", borderRight: "1px solid #dee2e6", borderBottom: "1px solid #dee2e6", borderBottomLeftRadius: ".25rem", borderBottomRightRadius: ".25rem" }}>
          <div id="eksporto">
            <a className="btn btn-outline-dark" role="button" aria-pressed="true" href="eksporto/{this.enhavo.lingvo}.apkg"> Anki APKG</a>
        	</div>

          <h3> { this.enhavo.fasado['En la teksto']  } </h3>
          <ul> { this.vortlisto(this.enhavo.lecionoj[parseInt(this.lekcio)].vortoj.teksto) } </ul>

          <h3> { this.enhavo.fasado['Pliaj']  } </h3>
          <ul> { this.vortlisto(this.enhavo.lecionoj[parseInt(this.lekcio)].vortoj.pliaj) } </ul>
          <div className="row text-center">
              <div className="col-4"><Button className="float-left" variant="info">{this.enhavo.fasado['malantaŭen']}</Button></div>
              <div className="col-4 text-center"><Button variant="outline-secondary">{this.enhavo.fasado['Komentejo']}</Button></div>
              <div className="col-4"><Button className="float-right" variant="info">{this.enhavo.fasado['antaŭen']}</Button></div>
          </div>
      </div>
  </div>
}

export default LekcioVortoj;
