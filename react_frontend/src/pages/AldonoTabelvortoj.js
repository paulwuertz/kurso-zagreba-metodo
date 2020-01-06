import React, { Component }  from 'react';

class AldonoTabelvortoj extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
    this.lekcio = props.lekcio
  }

  tradukajxo (left) {
    var right= "";
    var tradukajxo = this.enhavo.vortaro[left]['tradukajxo']
    console.log(left, tradukajxo)
    if(typeof tradukajxo === 'string' )
        right = tradukajxo
    else
        right = tradukajxo.join(", ")
    return right
  }

  col = (komenca, fina) =>
    <td>
      <em>{ (komenca + fina).replace("-", "").replace("-", "") }</em> –<br/>
      {this.tradukajxo((komenca + fina).replace("-", "").replace("-", ""))}
    </td>

  colIter(finajxo){
    return Object.entries(['ki-', 'ti-', 'i-', 'ĉi-', 'neni-']).map(komenca =>
        this.col(komenca[1], finajxo)
      )
  }

  row(finajxo){
    return (
    <tr>
      <th>
        <em>{finajxo}</em>
        <br/>
        {this.tradukajxo(finajxo)}
      </th>
      {this.colIter(finajxo)}
    </tr>
    )
  }

  korelativoj(){
    return Object.entries(['-o', '-u', '-am', '-a', '-e', '-el', '-om', '-al', '-es']).map(finajxo =>
        this.row(finajxo[1])
      )
  }

  componentDidMount() {
      document.title = this.enhavo.fasado['Tabelvortoj'] + " | " + this.enhavo.fasado['Esperanto en 12 tagoj']
  }

  render = () => <div dir={ this.enhavo.tekstodirekto }>
      <div>
        <h2>
        	{ this.enhavo.fasado['Tabelvortoj'] }
        </h2>

        <table className="table">
          <thead>
            <tr>
        			<th>&nbsp;</th>
        			    <th> <em>ki-</em> <br/>   {this.tradukajxo("ki-")} </th>
                  <th> <em>ti-</em> <br/>   {this.tradukajxo("ti-")} </th>
                  <th> <em>i-</em> <br/>    {this.tradukajxo("i-")} </th>
                  <th> <em>ĉi-</em> <br/>   {this.tradukajxo("ĉi-")} </th>
                  <th> <em>neni-</em> <br/> {this.tradukajxo("neni-")} </th>
            </tr>
          </thead>
          <tbody>
            {this.korelativoj()}
          </tbody>
        </table>
      </div>
    </div>
}

export default AldonoTabelvortoj;
