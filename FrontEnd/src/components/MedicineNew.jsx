import React from 'react';
import { Table,Form, Button, FormGroup, Label, Input, ButtonGroup } from 'reactstrap';
const render = function () {

    return (
        <div>
            <Form className="was-validated" onSubmit={this.onFormSubmit.bind(this)}>
            <FormGroup>
                <Label for="medicineID">Medicine ID</Label>
                <Input type="number" className="form-control" id="medicineID" placeholder="Medicine ID" required value={this.state.medicine.id} onChange={this.onChangeIDHandle.bind(this)}/>
                <div className="invalid-feedback">Invalid Medicine ID</div>
            </FormGroup>
            <FormGroup>
                <Label for="medicineName">Medicine Name</Label>
                <Input type="text" className="form-control" id="medicineName" placeholder="Medicine Name" required value={this.state.medicine.name} onChange={this.onChangeNameHandle.bind(this)}/>
                <div className="invalid-feedback">Invalid Medicine Name</div>
            </FormGroup>

            <FormGroup>
                <Label for="medicineDescription">Example textarea</Label>
                <Input type="textarea" className="form-control" id="medicineDescription" rows="3" placeholder="Medicine Description" value={this.state.medicine.description} onChange={this.onChangeDescriptionHandle.bind(this)}></Input>
                <div className="invalid-feedback">Invalid Medicine Description</div>
            </FormGroup>

            <FormGroup>
                <Label for="medicinePrice">Medicine Price</Label>
                <Input type="number" step="0.01" className="form-control" id="medicinePrice" placeholder="Medicine Price"
                    required value={this.state.medicine.price} onChange={this.onChangePriceHandle.bind(this)}/>
                <div className="invalid-feedback">Invalid Medicine Price</div>
            </FormGroup>
            <ButtonGroup>
                <Button type="submit" color="primary" >Submit</Button>
                <Button type="reset" color="danger" >Reset</Button>
            </ButtonGroup>
        </Form>
        </div>
    );
};

export default render;
