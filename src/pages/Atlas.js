import React, { Component } from "react";
import SingleCountryCard from "../components/atlasComponents/SingleCountryCard";
import { InputGroup, InputGroupText, InputGroupAddon, Input, Spinner } from 'reactstrap';
import axios from 'axios'
import { Container } from "reactstrap";

class Atlas extends Component {

    state = {
        cards: [],
        query: '',
        loading: true
    }

    componentDidMount() {
        axios({
            "method": "GET",
            "url": "https://salnazi-country-codes-v1.p.rapidapi.com/api.php",
            "headers": {
                "x-rapidapi-host": "salnazi-country-codes-v1.p.rapidapi.com",
                "x-rapidapi-key": "0a72b49b5bmshfaa05683c43acb6p1e9ee5jsnfb132ea47e44"
            },
            "params": {
                "apiKey": "8923sa7aAS7s",
                "secret": "us7uS78sj"
            }
        })
            .then((response) => {
                this.setState({
                    loading: false,
                    cards: response.data
                })

            })
            .catch((error) => {
                this.setState({
                    loading: false
                });
            })
    }

    render() {
        return (
            <Container className='mt-3'>
                <Container>
                    <InputGroup className='mb-2'>
                        <InputGroupAddon addonType="append">
                            <InputGroupText>Search...</InputGroupText>
                        </InputGroupAddon>
                        <Input
                            type='text'
                            value={this.state.query}
                            onChange={e => this.setState({
                                query: e.target.value
                            })} />

                    </InputGroup>
                </Container>
                {
                    this.state.loading && <Spinner 
                    style={{ 
                    position: "fixed", 
                    top: "50%", 
                    left: "50%",
                    width: '3rem', height: '3rem' }} />
                }
                <Container className='row'>
                    {
                        this.state.cards
                            .filter(({ country_name }) => country_name.toLowerCase().search(this.state.query.toLocaleLowerCase()) !== -1)
                            .map(data => <SingleCountryCard data={data} /> )
                    }
                   
                </Container>
            </Container>

        );
    }

}
export default Atlas;