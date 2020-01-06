import React, { Component }  from 'react';
import Tabs from './Tabs';

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
  <div>
    <h2 id={"leciono" + this.lekcio}>
      {this.lekcio}. {this.paragrafo(this.enhavo.lecionoj[parseInt(this.lekcio)-1].teksto.titolo)}
    </h2>

    <Tabs lekcio = "01" state = {this.enhavo} />

    <p className="alert alert-info" role="alert" dir={this.enhavo.tekstodirekto}> {this.enhavo.fasado['Alklaku la vortojn por vidi ilian tradukon.']} </p>

    <div className="container" style={{marginBottom: 1 + "em",}}>
    <div className="row">
      <div id="jquery_jplayer_1" className="col-sm-auto jp-jplayer"></div>
      <div id="jp_container_1" className="col-sm-auto jp-audio" role="application" aria-label="media player">
        <div className="jp-type-single">
          <div className="jp-gui jp-interface">
            <div className="jp-controls">
              <button className="jp-play" tabIndex="0">play</button>
              <button className="jp-stop" tabIndex="0">stop</button>
            </div>
            <div className="jp-progress">
              <div className="jp-seek-bar">
                <div className="jp-play-bar"></div>
              </div>
            </div>
            <div className="jp-volume-controls">
              <button className="jp-mute" tabIndex="0">mute</button>
              <button className="jp-volume-max" tabIndex="0">max volume</button>
              <div className="jp-volume-bar">
                <div className="jp-volume-bar-value"></div>
              </div>
            </div>
            <div className="jp-time-holder">
              <div className="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
              <div className="jp-duration" role="timer" aria-label="duration">&nbsp;</div>
              <div className="jp-toggles">
                <button className="jp-repeat" tabIndex="0">repeat</button>
              </div>
            </div>
          </div>
          <div className="jp-no-solution">
            <span>Update Required</span>
            To play the media you will need to either update your browser to a recent version or update your <a href="http://get.adobe.com/flashplayer/" rel="noopener noreferrer" target="_blank">Flash plugin</a>.
          </div>
        </div>
      </div>
    </div>
    </div>

    <div style={{borderLeft: 0.2 + "em solid #4d91b3", paddingLeft: 1 + "em", marginBottom: 1 + "em",}}>
        {this.paragrafoj(this.enhavo.lecionoj[parseInt(this.lekcio)-1].teksto.paragrafoj)}
    </div>

    </div>
}

export default LekcioTeksto;
