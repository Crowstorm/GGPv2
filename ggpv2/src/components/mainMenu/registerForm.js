import React, { useState } from 'react';

import useForm from './useForm';

const RegisterForm = (props) => {
    const { values, handleChange, handleSubmit } = useForm(register);

    const [errors, setErrors] = useState([])

    function register() {
        const { username, password, password2 } = values;
        if (password === password2) {
            props.register(username, password)
        } else {
            setErrors([...errors, 'Passwords are not identical'])
        }
    }

    const renderErrors = () => {
        return errors.map(error => {
            return <div>{error}</div>
        })
    }

    return (
        <div style={{ color: 'white', margin: 16 }}>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label>Login</label>
                    <input type="text" className="form-control" name="username" placeholder="Login" onChange={handleChange} value={values.username} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} value={values.password} />
                </div>
                <div className="form-group">
                    <label>Repeat password</label>
                    <input type="password" className="form-control" name="password2" placeholder="Password" onChange={handleChange} value={values.password2} />
                </div>
                <div onClick={handleSubmit} className="eightbit-btn">Submit</div>
            </form>
            {renderErrors()}
        </div>
    )
}

export default RegisterForm;