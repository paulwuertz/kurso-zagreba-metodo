import React, { Component }  from 'react';

class AldonoKonjunkcioj extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
  }

  vortlisto = () =>
    Object.entries(this.enhavo.vortaro).filter(e => e[1].vortspeco === 'konjunkcio').map(radiko =>
        this.tradukajxo(radiko[0])
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
    <div dir={this.enhavo.tekstodirekto}>
      <h3>
        { this.enhavo.fasado['Konjunkcioj']  }
      </h3>
      <ul>
        { this.vortlisto() }
      </ul>
    </div>
}

export default AldonoKonjunkcioj;
