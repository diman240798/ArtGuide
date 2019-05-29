import React from 'react';
import {MDBContainer} from 'mdbreact'

export const Layout = (props) => (
    <div style={{"padding": "20px"}}>
        <MDBContainer>
            {props.children}
        </MDBContainer>
    </div>
)
