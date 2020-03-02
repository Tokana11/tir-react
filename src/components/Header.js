import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    Container, UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Badge } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggleIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <Navbar  dark expand="md">
                <Container>
                    <NavLink
                        tag={RRNavLink}
                        className="navbar-brand"
                        exact to="/" title="Home">
                        <i className="fa fa-paper-plane"> TBK </i>
                    </NavLink>
                    <NavbarToggler onClick={this.toggleIsOpen} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav >
                                        <i className="fa fa-bell"></i>
                                        <Badge color='danger'>
                                            1
                                    {/* логика за брояч на нотификации */}
                                        </Badge>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Notification 1
                                    </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Clear
                                    </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                            <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav >
                                        <i className="fa fa-envelope fa-fw"></i>
                                        <Badge color='danger'>
                                            1
                                    {/* логика за брояч на нотификации */}
                                        </Badge>
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                            Message 1
                                    </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                            Clear
                                    </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                            <NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav >
                                        <i className="fa fa-id-card"></i>
                                    </DropdownToggle>
                                    <DropdownMenu right>

                                        <DropdownItem
                                            tag={RRNavLink}
                                            exact to="/profile">
                                            <i className="fa fa-user"></i> Edit profile
                                    </DropdownItem>

                                        <DropdownItem>
                                            <i className="fa fa-cog"> </i> Settings
                                    </DropdownItem>

                                        <DropdownItem>
                                            <i className="fa fa-sign-out"> </i> Sing out
                                    </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;