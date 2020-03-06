import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'

class UserInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: 'user',
            email: 'user@gmail.com',
            password: '',
            repPassword: ''
        };
    }

    // componentDidMount(){
    //     this.setState({
    //         userName: '',
    //         email: '',
    //         password: '',
    //         repPassword: ''
    //     });
    // }
 
    handleChange=(event)=> {
        const value = event.target.value;   
        this.setState({
            ...this.state,
            [event.target.name]: value
        })
      }

    checkPassMatch=(event)=>{
        if(this.state.password !== this.state.repPassword){
            alert("Password missmatch");
        }
        else{
            this.handleClick(event)
        }
    }


    handleClick=(event)=> {
        // alert(
        //     'New name: ' + this.state.userName + '; ' +
        //     'New email: ' + this.state.email + '; ' +
        //     'New password: ' + this.state.password);
        // event.preventDefault();
        this.props.setName(this.state.userName)
    }


    
    

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="name">User name: </Label>
                    <Input
                        type="text"
                        name="userName"
                        placeholder={this.state.userName}
                        onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="email">Email: </Label>
                    <Input
                        type="email"
                        name="email"
                        placeholder={this.state.email}
                        onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Password: </Label>
                    <Input
                        type="password"
                        name="password"
                        placeholder={this.state.password}
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="password">Repeat password: </Label>
                    <Input
                        type="password"
                        name="repPassword"
                        onChange={this.handleChange}
                    />
                </FormGroup>

                <Button
                    onClick={this.checkPassMatch}>Save Changes</Button>
            </Form>
        );
    }

}
const mapActinsToProps=(dispatch)=>{
    return {
        setName:(name)=>dispatch({
            type:'SET_NAME',
            payload:name
        })
    }
}
export default connect(undefined,mapActinsToProps)(UserInfo);