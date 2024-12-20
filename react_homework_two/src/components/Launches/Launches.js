import React, {useEffect, useState} from 'react';
import Launch from "./launch/Launch";

/*є API от SpaceX
https://api.spacexdata.com/v3/launches/
потрібно вивести всі запуски кораблів окрім 2020 року
репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
"mission_name" "launch_year" "mission_patch_small"*/

const Launches = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((res) => res.json())
            .then((posts) => setLaunches(posts))
            .catch((err) => console.log(err))
            .finally(()=> console.log('promise finished'))
    }, []);

    return (
        <div>
            {launches?.filter((launch) => !launch.launch_year.includes('2020')).map((launch) => {
                return (
                    <Launch
                        key={launch.flight_number}
                        launch={launch}
                    />)
            })}
        </div>
    );
};



export default Launches;