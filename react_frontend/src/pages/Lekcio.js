import React, { Component }  from 'react';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';
import { MediaPlayer } from '@cassette/player';
import '@cassette/player/dist/css/cassette-player.css';
import Tabs from "./Tabs.js"

class LekcioTeksto extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
    this.title = this.enhavo.lecionoj[parseInt(this.lekcio)-1].teksto.titolo_string
    this.vortnumero = 0
    this.traduknumero = 0
  }

  paragrafo = (paragrafo) =>
    Object.entries(paragrafo).filter(e => !!e).map(radiko =>
        this.vorto(radiko[1])
    )
  paragrafoj = (paragrafoj) =>
    Object.entries(paragrafoj).filter(e => !!e).map(paragrafo =>
        <>{ this.paragrafo(paragrafo[1])} <br/><br/> </>
    )

  rows (radikoj) {
    return Object.entries(radikoj).filter(e => !!e).map(radiko =>
        this.tradukajxoRow(radiko)
    )
  }

  tradukajxo (radiko) {
      var left = "", right = "";
      if(this.enhavo.vortaro.hasOwnProperty(radiko.toLowerCase()) || this.enhavo.finajxoj.hasOwnProperty(radiko.toLowerCase()))
        left = radiko.toLowerCase();
      else if(this.enhavo.vortaro.hasOwnProperty(radiko))
        left = radiko;
      else
        left = '';
      //right
      if (left && this.enhavo.vortaro[left]) {
        var tradukajxo = this.enhavo.vortaro[left]['tradukajxo']
        if(typeof tradukajxo === 'string' )
            right = tradukajxo
        else
            right = tradukajxo.join(",")
      }
      return [left, right];
  }

  tradukajxoRow (radiko) {
      var [left, right] = this.tradukajxo(radiko[1]);
      this.traduknumero++;
      return <tr className="align-top" key={left+"-t"+this.traduknumero}><td className="pr-3"><em>{left+" "}</em></td><td>{right}</td></tr>
  }

  vorto = function(vorto) {
    if(vorto == null) return " "
    if(typeof vorto === "string"){ //filters dots, ?, !, ...
        return vorto
    }
    this.vortnumero++;
    return <OverlayTrigger trigger={["click", "hover"]} key={vorto.join("")+"-v"+this.vortnumero} placement="bottom"
        overlay={
        <Popover id={"popover-positioned-" + vorto.join("") }>
          <Popover.Title as="h3">{ this.tradukajxo(vorto.join(""))[1] }</Popover.Title>
          <Popover.Content>
              <table><tbody>{ this.rows(vorto) }</tbody></table>
          </Popover.Content>
       </Popover>
       }>
          <span className="tradukita" variant="secondary">{vorto}</span>
    </OverlayTrigger>
  }

  componentDidMount() {
      document.title = this.lekcio + ". " + this.title + " | " + this.enhavo.fasado['Esperanto en 12 tagoj']
  }

  render = () =>
  <div dir={ this.enhavo.tekstodirekto }>
      <Tabs lekcio="01" state={this.enhavo} tab="home"/>
      <div className="container pt-3 pb-3 mb-2" style={{ borderLeft: "1px solid #dee2e6", borderRight: "1px solid #dee2e6", borderBottom: "1px solid #dee2e6", borderBottomLeftRadius: ".25rem", borderBottomRightRadius: ".25rem" }}>
        <h2 id={"leciono" + this.lekcio}>
          {this.lekcio}. {this.paragrafo(this.enhavo.lecionoj[parseInt(this.lekcio)-1].teksto.titolo)}
        </h2>

        <p className="alert alert-info" role="alert" dir={this.enhavo.tekstodirekto}> {this.enhavo.fasado['Alklaku la vortojn por vidi ilian tradukon.']} </p>

        <div className="container" style={{marginBottom: 1 + "em",}}>
            <MediaPlayer playlist={[{url:"/assets/ogg/"+this.lekcio+".ogg", title: this.title}]}y/>
        </div>

        <div style={{borderLeft: 0.2 + "em solid #4d91b3", paddingLeft: 1 + "em", marginBottom: 1 + "em",}}>
            <br/>
            {this.paragrafoj(this.enhavo.lecionoj[parseInt(this.lekcio)-1].teksto.paragrafoj)}
        </div>

        <div className="row text-center">
            <div className="col-4"></div>
            <div className="col-4 text-center"><Button variant="outline-secondary">{this.enhavo.fasado['Komentejo']}</Button></div>
            <div className="col-4"><Button className="float-right" variant="info">{this.enhavo.fasado['antaŭen']}</Button>{' '}</div>
        </div>
      </div>
    </div>
}

export default LekcioTeksto;
