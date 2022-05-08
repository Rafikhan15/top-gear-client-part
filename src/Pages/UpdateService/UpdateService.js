import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const UpdateService = () => {
    const { id } = useParams();
    const [service, setService] = useState({});
    const [Refresh, setRefresh] = React.useState(false);
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setRefresh(!Refresh);
            })
    };

    return (
        <div>
            <h2 className='text-center my-5'>Updating Product Name: {service.name}</h2>
            <form className='d-flex flex-column w-50 mx-auto mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='supplier' type="text" {...register("supplier")} />
                <input className='mb-2' placeholder='quantity' type="text" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img")} />
                <input className='bg-danger py-2 rounded' type="submit" value="Update Product" />
            </form>
        </div>
    );
};

export default UpdateService;