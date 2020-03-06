import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import logo from '../../assets/images/toon-truck.png'
import axios from 'axios'
class SingleTruckCard extends Component {

    
    handleClick(id){
        axios({
            "method": "DELETE",
            "url": "http://localhost:8080/deleteTruck/" + id
        })
            .finally(() => {
                this.props.delete(id);
            })
            
        
    };

    render() {
        const {
            truckId, truckRegNumber,
            manufacturer, engineType
        } = this.props.data;

        return (
            < div className='col-sm-4 col-md-3 col-lg-3' >
                <Card >
                    <CardImg top width="100%" src={logo} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>
                            <h5>
                                {truckRegNumber}
                            </h5>
                        </CardTitle>
                        <CardText>
                            Manufacturer: {manufacturer} <br />
                            Engine Type: {engineType}
                        </CardText>
                        <Button color='danger' onClick={() =>{
                            return this.handleClick(truckId);
                        }}> Remove </Button>
                    </CardBody>
                </Card>
                <br />
            </div >
        );
    }

}
export default SingleTruckCard;