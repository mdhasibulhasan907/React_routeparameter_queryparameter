// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useState } from 'react';
import { useSearchParams} from 'react-router-dom'
const User = () => {
  const [name,setName]=useState("");
  // eslint-disable-next-line no-unused-vars
  const [search,setSearch]=useSearchParams();




const handleSubmit=(e)=>{
 e.preventDefault();

 setSearch({name:name})
}

  return (
    <div>
      <h1>users</h1>
        <form onSubmit={handleSubmit}>

         <input 
         type='text' 
         placeholder='name'
         value={name}  
         onChange={(e)=> { 
          setName(e.target.value)
          }}/>

         <button type='submit' >Find</button>

        </form>

      {/* <h1>user</h1>
      <h2>{search.get("id")}</h2> */}
    </div>
  )
}

export default User;