import React from 'react';
import { Table, Button, ButtonGroup } from 'reactstrap';
const render = function () {
    let medicines;
    medicines = this.state.medicines.map(m => {
        return (
            <tr key={m.id}>
                <td>{m.id}</td>
                <td>{m.name}</td>
                <td>{m.description}</td>
                <td>{m.price}</td>
                <td>
                    <ButtonGroup>
                        <Button color="success" size="sm">View</Button>
                        <Button color="warning" size="sm" onClick={this.onUpdate.bind(this, m.id)}>Modify</Button>
                        <Button color="danger" size="sm" onClick={this.onDelete.bind(this, m.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    });
    return (

        <div>
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {medicines}
                </tbody>
            </Table>
        </div>
    );
};

export default render;
