import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios";
import './addService.css'

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data =>{ 
        console.log(data);
        axios.post("https://boiling-depths-72288.herokuapp.com/services", data)
        .then(res =>{
            if(res.data.acknowledged){
                alert("Successfully added Services");
                console.log(res);
                reset();
            }

            })
        .catch(error => console.log(error))
    };

    return (
        <div className="add-service">
            <h1>Add A service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name"/>
                <textarea {...register("description")} placeholder="Description"/>
                <input type="number" {...register("price")} placeholder="Price"/>
                <input {...register("imgUrl")} placeholder="Image url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;