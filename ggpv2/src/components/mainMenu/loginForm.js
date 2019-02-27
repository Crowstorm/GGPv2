import React from 'react';

import useForm from './useForm';

const LoginForm = () => {
    const { values, handleChange, handleSubmit } = useForm(login);

    function login() {
        console.log(values)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Login</label>
                    <input type="text" className="form-control" name="login" placeholder="Login" onChange={handleChange} value={values.login} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={handleChange} value={values.password} />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Submit</button>

            </form>
        </div>
    )
}

export default LoginForm;