import { useState } from "react"
function Login(){

    const [log, setState] = useState({
        Email:"",
        Password:"",

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...log,
            [name]: value,
        });
    };

const login = (e) => {
    e.preventDefault()

const userlog = fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(log)
    })
        .then((res) => {
            console.log("post data", log);
            console.log("log", res);
            localStorage.setItem("user", JSON.stringify(log))
        })
    return userlog
}

    return(
        <div className="form">
        <form onSubmit={login}>
        <h2 className="head">Registration Form</h2>
        <div className="form-body">
            <div className="Email">
                <label className="form__label" for="firstName">Email </label>
                <input className="form__input" type="text" id="Email" name='Email' placeholder="Enter Email" value={log.Email} onChange={handleChange}/>
            </div>
            <div className="Password">
                <label className="form__label" for="Password">Password </label>
                <input className="form__input" type="password" id="Password" name='Password' placeholder="Password" value={log.Password} onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Login </button>
            <a className="btn btn-outline-secondary" href="/" role="button"> Back to Register</a>


            </div>
        </form>
        </div>
        
            );
 }

export default Login;