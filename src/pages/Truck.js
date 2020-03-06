import React, { Component } from "react";
import SingleTruckCard from "../components/truckComponents/SingleTruckCard";
import {
    Container,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input,
    Spinner,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Label,
    Table
} from 'reactstrap';
import axios from 'axios'
import TruckTableRow from "../components/truckComponents/TruckTableRow";

class Truck extends Component {

    state = {
        cards: [],
        query: '',
        loading: true,
        cardView: 'row',
        tableView: 'd-none',
        modalIsOpen: false,
        regNumQuery: '',
        manufacturerQuery: '',
        enginTypeQuery: ''
    }

    componentDidMount() {
        axios({
            "method": "GET",
            "url": "http://localhost:8080/getAllTrucks",
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
    };

    addTruck = () => {
        axios({
            "method": "POST",
            "url": "http://localhost:8080/addTruck",
            "params": {
                "manufacturer": this.state.manufacturerQuery,
                "truckRegNumber": this.state.regNumQuery,
                "engineType": this.state.enginTypeQuery
            }
        })
            .finally((response) => {

                this.setState({
                    loading: false,
                    cards: [...this.state.cards, response.data]
                })
            })

            .catch((error) => {
                this.setState({
                    loading: false,
                });
            });
        this.toggleModal();
        this.componentDidMount();

    };

    delete = (id) => {
        this.setState(prevState => ({
            cards: prevState.cards.filter(el => el.truckId !== id)

        }));
    };

    toggleModal = () => this.setState(({ modalIsOpen }) => ({ modalIsOpen: !modalIsOpen }));


    render() {
        return (
            <>
                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        toggle={this.toggleModal}
                        className={''}>
                        <ModalHeader toggle={this.toggleModal}>Add new truck</ModalHeader>
                        <ModalBody>
                            <Label>Regiser Number:</Label>
                            <Input
                                type="textarea"
                                placeholder="Register Number..."
                                onChange={e => this.setState({
                                    regNumQuery: e.target.value
                                })}
                            />
                            <Label>Manufacturer:</Label>
                            <Input
                                type="textarea"
                                placeholder="Manufacturer..."
                                onChange={e => this.setState({
                                    manufacturerQuery: e.target.value
                                })}
                            />
                            <Label>Engine type:</Label>
                            <Input
                                type="textarea"
                                placeholder="Engine type..."
                                onChange={e => this.setState({
                                    enginTypeQuery: e.target.value
                                })} />
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="success"
                                onClick={() => this.addTruck()}>Save
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>

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

                    <Container className='mb-3'>
                        <Button color='success' onClick={this.toggleModal} >
                            Add +  <i className='fa fa-truck'></i>
                        </Button>{' '}
                        <Button onClick={e => this.setState({     
                            tableView:'d-flex',
                            cardView:'d-none'
                        })}>
                            <i className='fa fa-list'></i>
                        </Button> {' '}

                        <Button
                            onClick={e => this.setState({
                                cardView:'row',
                                tableView: 'd-none'
                            })}>
                            <i className='fa fa-th-large'></i>
                        </Button>
                    </Container>

                    {
                        this.state.loading && <Spinner
                            style={{
                                position: "fixed",
                                top: "50%",
                                left: "50%",
                                width: '3rem',
                                height: '3rem'
                            }} />
                    }

                    <Container className={this.state.cardView}>
                        {
                            this.state.cards
                                .filter(({ truckRegNumber }) => truckRegNumber.toLowerCase().search(this.state.query.toLocaleLowerCase()) !== -1)
                                .map(data => <SingleTruckCard data={data} key={data.truckId} delete={this.delete} />)
                        }
                    </Container>

                    <Container className={this.state.tableView}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Registere Number</th>
                                    <th>Manufacturer</th>
                                    <th>Engine Type</th>
                                    <th>  </th>
                                </tr>
                            </thead>

                            {this.state.cards
                                .filter(({ truckRegNumber }) => truckRegNumber.toLowerCase().search(this.state.query.toLocaleLowerCase()) !== -1)
                                .map(data => <TruckTableRow data={data} key={data.truckId} delete={this.delete} />)
                            }
                        </Table>

                    </Container>
                </Container>

            </>
        );
    }

}

export default Truck;