import { useEffect, useState } from "react"
import { getUsers } from "./services/userServices"

const UserList = () => {

  const [user, setUser] = useState([])

 

  const getData = async() => {
    try {
      const response = await getUsers()
      setUser(response.data)
    } catch(err){
      console.log(err)
    }
  }

   

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', gap:2, flexDirection:'column'}}>
        <button style={{padding:'10px', border:'1px solid black', borderRadius:'10px'}} onClick={getData}>Get Data</button>
        {
          user.map((ele, id) => (
            <div key={id}>
              <h1>{ele.name}</h1>
              </div>
          ))
        }
    </div>
  )
}

export default UserList