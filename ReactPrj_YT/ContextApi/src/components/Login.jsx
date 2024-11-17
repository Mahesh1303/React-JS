import React, {useState, useContext} from 'react'
import UserContext from '../context/Usercontext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // refering to the usecontext structure that setuser for setting the user which will be used in providercontext 
    // we need to use setUser to put some data into that 

    const {setUser} = useContext(UserContext)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div className="bg-gray-600 space-y-6 p-6 w-fit mx-auto rounded-lg shadow-lg stroke-transparent-green">
            <h1 className=" text-2">Login</h1>
            <div className="space-x-6">
            <input
            type="text"
            placeholder="UserName"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="border-s-violet-300 rounded-md"
            
            ></input>
            <input
            type='password'
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="border-s-violet-300 rounded-md"
            ></input>

            </div>

            <button
            className="bg-green-600 text-red-900 p-2 rounded-lg"
            onClick={handleSubmit}

            >
                Submit

            </button>
        </div>
    )
}

export default Login
