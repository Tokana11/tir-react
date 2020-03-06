import React, { Component } from 'react'

class CountryTableRow extends Component {

    render() {
        const {
            country_flag, country_name,
            dialing_code, latitude, longitude
        } = this.props.data

        return (
            <tbody>
                <tr>
                    <td> <img height={15} alt={''} src={country_flag} width='15px'/ > </td>
                    <td>{country_name}</td>
                    <td>{dialing_code}</td>
                    <td>{latitude}</td>
                    <td>{longitude}</td>

                </tr>
            </tbody>
        );
    }

}
export default CountryTableRow;