import React from 'react';
import { Row, Col, Button, InputGroup,InputGroupAddon , InputGroupText, Input, Card, CardBody, CardTitle, Badge } from 'reactstrap';
const render = function () {
    let medicines;
    medicines = this.state.medicines.map(m => {
        return (
            <Col key={m.id} xs='12' sm='6' md='4'>
                <div className="image-flip" ontouchstart="this.classList.toggle('hover');">
                    <div className="mainflip">
                        <div className="frontside">
                            <Card>
                                <CardBody className="text-center">
                                    <p><img className="img-fluid" src={"images/" + ((m.id % 7) + 1) + ".png"} alt="Medicine" /></p>
                                    <CardTitle><Badge color="warning" >#{m.id}</Badge></CardTitle>
                                    <CardTitle>{m.name}</CardTitle>
                                    <p className="card-text">{m.description} </p>
                                    <Button color="dark">Rs. {m.price.toFixed(2)}/=</Button>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="backside">
                            <Card>
                                <CardBody className="text-center mt-4">
                                    <CardTitle><Badge color="info" >#{m.id}</Badge></CardTitle>
                                    <CardTitle>{m.name}</CardTitle>
                                    <p className="card-text">{m.description}</p>
                                    <InputGroup size="sm">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>Qty</InputGroupText>
                                        </InputGroupAddon>
                                        <Input type="number" placeholder="Quantity" />
                                        <InputGroupAddon addonType="append">
                                            <Button color="success">Add To Cart</Button>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            </Col>

        );
    });
    return (

        <Row>
            {medicines}
        </Row>

    );
};

export default render;
