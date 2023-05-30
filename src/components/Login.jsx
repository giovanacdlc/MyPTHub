import React from 'react'

const Login = () => {
    // const [formData, setFormData] = useState({
    //     username:'', 
    //     password: ''
    // })

    // const {username, password} = formData

    // const onChange = (e) => {
    //     setFormData((prevState) => ({
    //         ...prevState, 
    //         [e.target.name]: e.target.value,
    //     }))
    // }
    // const onSubmit = (e) => {
    //     e.preventDefault()
    // }
    return (
        <div className='container' id= "usernamepass">
            <h1>Please Log in</h1>
            <label for = "username">Username: </label>
            <input type = "text"/>
            <label for = "password">Password: </label>
            <input type= "password"></input>
        </div>
    )
}

export default Login
