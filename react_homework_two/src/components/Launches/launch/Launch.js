import React from 'react';

/*є API от SpaceX
https://api.spacexdata.com/v3/launches/
потрібно вивести всі запуски кораблів окрім 2020 року
репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)
"mission_name" "launch_year" "mission_patch_small"*/

const Launch = ({launch}) => {
    const {mission_name, launch_year, links} = launch;

    return (
        <div>
            <ul>
                <li>{`Mission name: ${mission_name}`}</li>
                <li>{`Launch year: ${launch_year}`}</li>
                <li><img src={links.mission_patch_small} alt={`${mission_name} mission patch`}/></li>
            </ul>
        </div>
    );
};

export default Launch;