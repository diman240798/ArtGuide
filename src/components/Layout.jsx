import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
  <div style={{"background": "url(images/Site2.png)"}}>
    <Container>
      {props.children}
    </Container>
  </div>
)
