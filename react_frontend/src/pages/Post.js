import React, { Component }  from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
const ReactMarkdown = require('react-markdown')

class Post extends Component {

  constructor(props){
    super(props);
    this.enhavo = props.state
  }

  componentDidMount() {
    document.title = "Post la kurso | " + this.enhavo.fasado['Esperanto en 12 tagoj']
  }

  render = () =>
    <div dir={ this.enhavo.tekstodirekto }>
      <h2> Post la kurso </h2>
      <div>
        <ReactMarkdown source={ this.enhavo.post } />
      </div>
    </div>
}

export default Post;
