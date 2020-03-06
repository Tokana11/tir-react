import React, { Component } from 'react'
import {  Button } from 'reactstrap';
import Axios from 'axios';

class TrucksTableRow extends Component {

    handleClick(id){
        Axios({
            "method": "DELETE",
            "url": "http://localhost:8080/deleteTruck/" + id
        })
            .finally((response) => {
                this.props.delete(id);
            })
            
        
    };
    
    render() {
        const {
            truckId, truckRegNumber,
            manufacturer, engineType
        } = this.props.data;
        return (
           
                <tbody>
                    <tr>
                        <th scope="row">{truckId}</th>
                        <td>{truckRegNumber}</td>
                        <td>{manufacturer}</td>
                        <td>{engineType}</td>
                        <td><Button color='danger' onClick={() =>{
                            return this.handleClick(truckId);
                        }}>Remove</Button></td>
                    </tr>
                </tbody>
        );
    }

}
export default TrucksTableRow;