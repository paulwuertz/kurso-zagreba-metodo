import React, { Component }  from 'react';

class Auxtoroj extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lingvoj = props.lingvoj
    this.lingvo = props.lingvo
  }

  auxtoroj = () =>
    Object.entries(this.lingvoj[this.lingvo]['aŭtoroj']).map(auxtoro =>
        this.auxtoro(auxtoro[1])
    )

  auxtoro(auxtoro){
      if (auxtoro.github)
        return <li><a href="https://github.com/{auxtoro.github}">{auxtoro.nomo}</a></li>
      else
        return <li>{auxtoro.nomo}</li>
  }

  componentDidMount() {
      document.title = 'Aŭtoroj' + " | " + this.enhavo.fasado['Esperanto en 12 tagoj']
  }

  render = () =>
    <div>
        <h2>Aŭtoroj</h2>
        <h3>Enhavo</h3>
        <p>La aŭtoroj de la <em><a href="https://eo.wikipedia.org/wiki/Zagreba_metodo">Zagreba metodo</a></em> estas:</p>
        <ul>
          <li><a href="https://eo.wikipedia.org/wiki/Zlatko_Ti%C5%A1ljar">Zlatko Tišljar</a></li>
          <li><a href="https://eo.wikipedia.org/wiki/Spomenka_%C5%A0timec">Spomenka Štimec</a></li>
          <li>Ivica Špoljarec</li>
          <li><a href="https://eo.wikipedia.org/wiki/Roger_Imbert">Roger Imbert</a></li>
        </ul>
        <h3>Retejo</h3>
        <p>La retejon programis:</p>
        <ul>
          <li><a href="https://github.com/georgjaehnig/">Georg Jähnig</a></li>
        </ul>
        <h3>Voĉlego</h3>
        <p>La tekstojn voĉlegis:</p>
        <ul>
          <li><a href="https://github.com/EmilioCid/">Emilio Cid</a></li>
        </ul>
        <h3>Ciferecigo de la {this.lingvoj[this.lingvo].nomo.esperante}</h3>
        <p>La ciferecigon de la {this.lingvoj[this.lingvo].nomo.esperante} versio faris:</p>
        <ul>
            {this.auxtoroj()}
        </ul>
    </div>
}

export default Auxtoroj;
