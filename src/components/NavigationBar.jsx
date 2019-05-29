import React from 'react';
import styled from 'styled-components';
import {
    MDBCollapse,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarToggler,
    MDBNavItem,
    MDBNavLink
} from 'mdbreact'

const Styles = styled.div`
  .navbar {
    background: url(images/back.png);
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #111;

    &:hover {
      color: #006C6D;
    }
  }
`;

export class NavigationBar extends React.Component {
    state = {
        isOpen: false
    };

    toggleCollapse = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render() {
        return <Styles>
            <MDBNavbar expand="lg" light>
                <div className="sign">
                    <img src="images/smaller_sign.png"/>
                </div>
                <MDBNavbarBrand href="/">ArtGuide</MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.toggleCollapse}/>
                <MDBCollapse isOpen={this.state.isOpen} navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <MDBNavLink to="/">Ростов-на-Дону</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/">Санкт-Петербург</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/">Москва</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBNavLink to="/">Поддержать проект</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        </Styles>
    }

}