import React, {useState} from 'react';
import {Cars} from "./cars/Cars";
import {CarForm} from "./carForm/CarForm";

const CarContainer = () => {
    const [onSave, setOnSave] = useState()
    const [carForUpdate, setCarForUpdate] = useState(null)
    return (
        <div>
            <CarForm setOnSave={setOnSave} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars onSave={onSave} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarContainer};