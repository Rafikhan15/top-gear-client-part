import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const [Refresh, setRefresh] = React.useState(false);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                    setRefresh(!Refresh);
                })
        }
        console.log(services);
    }

    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center my-2'>Manage Inventory</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(pd => {
                            return (

                                <tr>
                                    <td>{pd._id}</td>
                                    <td>{pd.name}</td>
                                    <td>{pd.price}</td>
                                    <td>{pd.description}</td>
                                    <td>
                                        <div className='d-flex'>
                                            <Link to={`/update/${pd._id}`}><button className='bg-warning rounded'>Update</button></Link>
                                            <button className='mx-2 bg-danger rounded text-white' onClick={() => handleDelete(pd._id)}>delete</button>
                                        </div>

                                    </td>

                                </tr>

                            )
                        })
                    }

                </tbody>
            </Table>

        </div>
    );
};

export default ManageServices;