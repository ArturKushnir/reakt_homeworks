/*import React, {useState} from 'react';

const CarForm = ({setOnSave}) => {
    const initialState = {
        id: '',
        brand: '',
        price: '',
        year: ''
    }
    const [car, setCar] = useState(initialState)

    const inputHandle = (e) => {
        setCar(prev => ({...prev, [e.target.name]:e.target.value}))
    }

    const save = (e) => {
        e.preventDefault()
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(car),
            method:'POST'
        }).then(value => value.json()).then(() => {
            setOnSave(prev => !prev)
            setCar(initialState)
        })
    }


    return (
        <form onSubmit={save}>
            <div><label>Brand: <input type={"text"} value={car.brand} name={'brand'} onChange={inputHandle}/> </label></div>
            <div><label>Price: <input type={"text"} value={car.price} name={'price'} onChange={inputHandle}/> </label></div>
            <div><label>Year: <input type={"number"} value={car.year} name={'year'} onChange={inputHandle}/> </label></div>
            <button>Save</button>
        </form>
    );
};

export {CarForm};*/

import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import Joi from "joi";
import {joiResolver} from "@hookform/resolvers/joi";
import car from "../car/Car";
import {carValidators} from "../../../validators/carValidators";

const CarForm = ({setOnSave, carForUpdate, setCarForUpdate, Users, setUsers}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
        mode:"all",
        resolver:joiResolver(carValidators)
    })

    useEffect(() => {
if (carForUpdate) {
    setValue('brand', carForUpdate.brand, {shouldValidate:true})
    setValue('price', carForUpdate.price, {shouldValidate:true})
    setValue('year', carForUpdate.year, {shouldValidate:true})

}
    }, [carForUpdate]);

    const create = (data) => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify(data),
            method:'POST'
        }).then(value => {
            if (!value.ok) {
                throw Error('Error')
            }
            return value.json()
        }).then(() => {
            setOnSave(prev => !prev)
            reset()
        })
            .catch(e => console.log(e))
    }

    const update = (car) => {
    fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carForUpdate.id}`, {
        headers: {'content-type':`application/json`},
        method: 'PUT',
        body:JSON.stringify(car)})
        .then(value => value.json())
        .then(()=>{
            setOnSave(prev => !prev)
            setCarForUpdate(null)
            reset()
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate?create:update)}>
                <label><input type={"text"} placeholder={'brand'} {...register('brand')}/></label>
                {errors.brand && <span>{errors.brand.message}</span>}

                <label><input type={"text"}
                              placeholder={'price'} {...register('price', {valueAsNumber: true})}/></label>
                {errors.price && <span>{errors.price.message}</span>}

                <label><input type={"text"} placeholder={'year'} {...register('year', {valueAsNumber: true})}/></label>
                {errors.year && <span>{errors.year.message}</span>}
                <button>{!carForUpdate?'create':'Update'}</button>
            </form>
        </div>
    );
};

export {CarForm};




