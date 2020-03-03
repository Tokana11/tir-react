import React, { Component } from "react";
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { LinkContainer } from "react-router-bootstrap";
class Sidemenu extends Component {

    render() {
        return (
            <SideNav>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="trucks">

                    <LinkContainer to='/trucks'>
                        <NavItem>
                            <NavIcon>
                                <i className="fa fa-fw fa-truck" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Trucks
                            </NavText>
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to='/trailers'>
                        <NavItem>
                            <NavIcon>
                                <i className="fa fa-fw fa-trello" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Trailers
                            </NavText>
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to='/courses'>
                        <NavItem >
                            <NavIcon>
                                <i className="fa fa-fw fa-road" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                Courses
                            </NavText>
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to='/drivers'>
                        <NavItem >
                            <NavIcon>
                                <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />
                            </NavIcon>

                            <NavText>
                                Drivers
                            </NavText>
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to='expenses'>
                        <NavItem >
                            <NavIcon>
                                <i className="fa fa-fw fa fa-euro" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Expenses
                            </NavText>
                        </NavItem>
                    </LinkContainer>

                    <LinkContainer to='/atlas'>
                        <NavItem>
                            <NavIcon >
                                <i className="fa fa-fw fa fa-globe" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Atlas
                            </NavText>
                        </NavItem>
                    </LinkContainer>


                </SideNav.Nav>
            </SideNav>

        );


    }
}
export default Sidemenu;