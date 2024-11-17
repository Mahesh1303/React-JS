import React, {useContext} from 'react'
import UserContext from '../context/Usercontext'

function Profile() {
    const {user} = useContext(UserContext)
    console.log(user)
    
    if (!user) return <div>please login</div>

    return <div>Hiii   {user.username}</div>
}

export default Profile