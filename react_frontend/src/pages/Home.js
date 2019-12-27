import React from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap'
const ReactMarkdown = require('react-markdown')

function Home(enhavo){
  return (
     <div dir={ enhavo.state.tekstodirekto }>

        
	  <h1>{enhavo.state.fasado['Esperanto en 12 tagoj']}</h1>
	  <h3>{enhavo.state.fasado['La plej rapida kurso por la bazoj']}</h3>

      <ReactMarkdown source={ enhavo.state.enkonduko } />
	  
	  <LinkContainer to="/01">
        <Button>{ enhavo.state.fasado['Ek'] }</Button>
      </LinkContainer>

	</div>
  )
}

export default Home;
