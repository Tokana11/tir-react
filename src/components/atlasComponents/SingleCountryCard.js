import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class SingleCountryCard extends Component {

    render() {
        const {
            country_flag, country_name,
            dialing_code, latitude, longitude
        } = this.props.data

        return (
            < div className='col-sm-4 col-md-3 col-lg-3' >
                <Card >
                    <CardImg top width="100%" src={country_flag} alt="Card image cap" />
                    <CardBody>
                        <CardTitle><h5>{country_name}</h5></CardTitle>
                        <CardText>
                            Dailing code: {dialing_code} <br />
                            Latitude: {latitude} <br />
                            Longitude: {longitude}
                        </CardText>
                    </CardBody>
                </Card>
                <br />
            </div >
        );
    }
}
export default SingleCountryCard;