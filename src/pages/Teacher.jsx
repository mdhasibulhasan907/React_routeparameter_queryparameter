// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useParams} from 'react-router-dom'

const Teacher=()=>{

    const {id}=useParams();
return (
    <div>
        <h1>Teacher</h1>
        <h3>{id}</h3>
    </div>
)

}

export default Teacher;