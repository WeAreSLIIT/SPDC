import React from 'react';
import { Row, Col, Button, InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardBody, CardTitle, Badge, Modal, ModalBody, ModalFooter, ModalHeader, Table, ButtonGroup } from 'reactstrap';
import StripeCheckout from 'react-stripe-checkout';
const render = function () {
    let cartItems;
    if (this.state.cart && this.state.cart.length > 0) {
        cartItems = this.state.cart.map(i => {
            return (
                <tr key={i.id}>
                    <th scope="row">{i.id}</th>
                    <td><img src={"images/" + ((i.id % 7) + 1) + ".png"} alt="Smiley face" height="36" width="36" /></td>
                    <td>{this.state.medicines.filter(m => m.id === i.id)[0].name}</td>
                    <td>{i.qty}</td>
                    <td>
                        <Button color='light' onClick={this.onDelete.bind(this, i.id)} ><i className="fas fa-trash-alt "></i></Button>
                    </td>
                </tr>
            );
        });
    }
    let medicines;
    medicines = this.state.medicines.map((m, i) => {
        return (
            <Col key={m.id} xs='12' sm='6' md='4'>
                <div className="image-flip" >
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
                                    <form onSubmit={this.addToCart.bind(this, m.id)}>
                                        <InputGroup size="sm">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>Qty</InputGroupText>
                                            </InputGroupAddon>
                                            <Input type="number" defaultValue="0" onChange={this.onHandleQty.bind(this, m.id)} placeholder="Quantity" />
                                            <InputGroupAddon addonType="append">
                                                <Button color="success">Add To Cart</Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </form>
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
            <a className="float" onClick={this.toggle}>
                <i className="fa fa-shopping-cart my-float"></i>
            </a>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Your Cart</ModalHeader>
                <ModalBody>
                    <Table hover>
                        <thead>
                            <tr className="bg-info">
                                <th>#</th>
                                <th></th>
                                <th>Medicine</th>
                                <th>Qty</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems}
                            <tr className="bg-dark">
                                <td></td>
                                <td></td>
                                <td><b>Total Amount:</b></td>
                                <td></td>
                                <td><b>{this.state.amount.toFixed(2)}/=</b></td>
                            </tr>
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    
                    <ButtonGroup>
                        <StripeCheckout 
                            token={this.onToken} 
                            stripeKey="pk_test_TYooMQauvdEDq54NiTphI7jx" 
                            description="PHARMACY SYSTEM"
                            image="https://icon-icons.com/icons2/807/PNG/512/hospital-2_icon-icons.com_66067.png" 
                            currency="LKR"
                            amount={this.state.amount*100} 
                            alipay
                            bitcoin
                        >
                            <Button color="success"><i className="fas fa-credit-card"></i> Checkout</Button>
                        </StripeCheckout>
                        <Button color="warning" onClick={this.saveOrder.bind(this)}><i className="fas fa-save "></i> Save</Button>
                        <Button color="danger" onClick={this.toggle} ><i className="fas fa-sign-out-alt"></i> Discard</Button>
                    </ButtonGroup>

                </ModalFooter>
            </Modal>
        </Row>

    );
};

export default render;
