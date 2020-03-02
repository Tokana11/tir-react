import React, { Component } from "react";
import { Container } from 'reactstrap';
import UserInfo from '../components/UserComponents/UserInfo'
import UserAvatar from "../components/UserComponents/UserAvatar";

class Profile extends Component {

  render() {

    return (
      <Container className='mt-5 d-flex justify-content-center'>
        <Container>
          <UserAvatar/>
        </Container>
        <Container>
          <UserInfo/>
        </Container>
      </Container>
    );
  }

}
export default Profile;