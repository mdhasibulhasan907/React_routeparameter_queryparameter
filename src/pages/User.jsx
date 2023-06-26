// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSearchParams} from 'react-router-dom'
const User = () => {
  // eslint-disable-next-line no-unused-vars
  const [search,setSearch]=useSearchParams();
  return (
    <div>

      <h1>user</h1>
      <h2>{search.get("id")}</h2>
    </div>
  )
}

export default User;