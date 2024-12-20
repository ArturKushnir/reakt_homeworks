import React from 'react';

const Car = ({car, setOnSave, setCarForUpdate}) => {
    const {id, brand, price, year} = car;

    const deleteCar = () => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${id}`, {method:'DELETE'})
            .then(()=> {setOnSave(prev => !prev)})
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>Update</button>
            <button onClick={deleteCar}>Delete</button>
        </div>
    );
};

export default Car;