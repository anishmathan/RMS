import React, { useState } from 'react';
// import './style.css'

// const [firstName, setFirstName] = useState(null);
// const [lastName, setLastName] = useState(null);
// const [email, setEmail] = useState(null);
// const [password,setPassword] = useState(null);
// const [confirmPassword,setConfirmPassword] = useState(null);

// const handleInputChange = (e) => {
//     const {id , value} = e.target;
//     if(id === "firstName"){
//         setFirstName(value);
//     }
//     if(id === "lastName"){
//         setLastName(value);
//     }
//     if(id === "email"){
//         setEmail(value);
//     }
//     if(id === "password"){
//         setPassword(value);
//     }
//     if(id === "confirmPassword"){
//         setConfirmPassword(value);
//     }

// }

// const handleSubmit  = () => {
//     console.log(firstName,lastName,email,password,confirmPassword);
// }

function Registration() {
    const [user, setState] = useState({

        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        Qualification: "",
        Skills: "",
        YearOfPassing: "",
        Experience: "",
        Language: "",

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...user,
            [name]: value,
        });
    };

    const submit = (e) => {
        e.preventDefault()

        const userReg = fetch('http://localhost:4000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then((res) => {
                console.log("post data", user);
                console.log("user", res);
                localStorage.setItem("user", JSON.stringify(user))
            })
        return userReg
    }



    return (

        <div className="form">
            <form onSubmit={submit}>
                <h2 className="head">Registration Form</h2>
                <div className="form-body">
                    <div className="username">
                        <label className="form__label" for="firstName">First Name </label>
                        <input className="form__input" type="text" id="firstName" name='FirstName' placeholder="First Name" value={user.FirstName} onChange={handleChange} />
                    </div>
                    <div className="lastName">
                        <label className="form__label" for="lastName">Last Name </label>
                        <input type="text" id="lastName" name='LastName' placeholder="LastName" value={user.LastName} onChange={handleChange} />
                    </div>
                    <div className="email">
                        <label className="form__label" for="email">Email </label>
                        <input type="email" id="email" name="Email" className="form__input" placeholder="Email" value={user.Email} onChange={handleChange} />
                    </div>
                    <div className="password">
                        <label className="form__label" for="password">Password </label>
                        <input className="form__input" type="password" id="password" name="Password" placeholder="Password" value={user.Password} onChange={handleChange} />
                    </div>
                    <div className="confirm-password">
                        <label className="form__label" for="confirmPassword">Confirm Password </label>
                        <input className="form__input" type="password" id="confirmPassword" name="ConfirmPassword" placeholder="Confirm Password" value={user.ConfirmPassword} onChange={handleChange} />
                    </div>
                    <div className="Qualification">
                        <label className="form__label" for="Qualification">Qualification </label>
                        <input className="form__input" type="password" id="confirmPassword" name="Qualification" placeholder="Enter Your Highest Qualification" value={user.Qualification} onChange={handleChange} />
                    </div>
                    <div className="Skills">
                        <label className="form__label" for="Skills">Skills</label>
                        <input className="form__input" type="text" id="Skills" name="Skills" placeholder="Enter Your Skills" value={user.Skills} onChange={handleChange} />
                    </div>
                    <div className="Year of Passing">
                        <label className="form__label" for="Year">Year of Passing  </label>
                        <input className="form__input" type="date" placeholder="Year of Passing" name="YearOfPassing" value={user.YearOfPassing} onChange={handleChange} />
                    </div>
                    <div>
                        <label className="form__label" for="Skills">Experience</label>

                        <select class="form-select form-select-lg mb-3" name="Experience" aria-label=".form-select-lg example" value={user.Experience} onChange={handleChange} >
                            <option selected>Experience</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>

                    {/* <div className="Experience">
                    <label className="form__label" for="">Enter your Experience </label>
                    <input className="form__input" type=""   placeholder="Enter Your Experience"/>
                </div> */}
                    <div className="Language">
                        <label className="form__label" for="language">Language  </label>
                        <select class="form-select form-select-lg mb-3" name="Language" aria-label=".form-select-lg example" value={user.Language} onChange={handleChange}>
                            <option selected>Languages</option>
                            <option>Tamil</option>
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button type="submit" className="btn btn-primary" > Register</button>
                    <a className="btn btn-outline-secondary" href="/Login" role="button"> Already have an Account ?</a>
                </div>

            </form>
        </div>

    );
}

export default Registration;

