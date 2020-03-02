import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Card, CardImg, CardBody, CardTitle,Input } from 'reactstrap';
import logo from '../../assets/images/trucking-logo.jpg'

class UserAvatar extends Component{

    constructor(props){
        super(props);
        this.state={
            avatar: '',     
        }
    }



    
    render(){
        return(
            <Card>
            <CardImg top width="100%" src={logo} alt="image" />
            <CardBody>
              <CardTitle> HI, {this.props.User.name} ! </CardTitle>
              <Input type="file" name="file" id="inputFile" />
            </CardBody>
          </Card>
        );
    }


}
const mapStateToProps=(state)=>{
    return {
        User:state.User
    }
}
export default connect(mapStateToProps)(UserAvatar);