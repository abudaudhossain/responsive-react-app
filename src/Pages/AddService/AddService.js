import React from 'react';
import { useForm } from "react-hook-form";
import './addService.css'

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="add-service">
            <h1>Add A service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} />
                <textarea {...register("description")} />
                <input type="number" {...register("price")} />
                <input {...register("imgUrl")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;