import React, { Component } from "react";

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class Sidemenu extends Component {

    render() {
        return (
            <SideNav >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="Trucks">
                    <NavItem eventKey="Trucks">
                        <NavIcon>
                            <i className="fa fa-fw fa-truck" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Trucks
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="trailers">
                        <NavIcon>
                            <i className="fa fa-fw fa-trello" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Trailers
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="courses">
                        <NavIcon>
                            <i className="fa fa-fw fa-road" style={{ fontSize: '1.75em' }} />
                        </NavIcon>

                        <NavText>
                            Courses
                        </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon>
                            <i className="fa fa-fw fa fa-euro" style={{ fontSize: '1.75em' }} />
                        </NavIcon>

                        <NavText>
                            Exchange
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

        );


    }
}
export default Sidemenu;