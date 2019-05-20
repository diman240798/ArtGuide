import React from 'react';
import { Container } from 'react-bootstrap';

export const Layout = (props) => (
  <div style={{"padding": "20px"}}>
    <Container>
      {props.children}
    </Container>
  </div>
)
