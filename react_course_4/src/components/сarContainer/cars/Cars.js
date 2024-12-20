import React, {useEffect, useState} from 'react';
import Car from "../car/Car";

const Cars = ({onSave, setOnSave, setCarForUpdate}) => {
    const [cars, setCars] = useState([])

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then(val => val.json())
            .then(val=>setCars(val))
    }, [onSave]);
    return (
        <div>
            {cars.map((car) => <Car key={car.id} car={car} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};