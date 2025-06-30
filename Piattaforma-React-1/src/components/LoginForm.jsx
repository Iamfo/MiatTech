import React from 'react';
import { useState } from 'react';

function LoginForm() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleInputUserName = (event) => {
        setUserName(event.target.value);
    };

    const handleInputPassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit= (event) => {
        event.preventDefault();
        alert(`Username: ${userName}, Password: ${password}`);
    };

    return (
        <>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="userName">Username:</label>
                <input onChange={handleInputUserName} id='userName' type="text" value={userName} required placeholder='Username' />
                <label htmlFor="passWord">Password:</label>
                <input onChange={handleInputPassword} id='password' type="password" value={password} required placeholder='Password' />
                <button type='submit'>Submit</button>
            </form>

        </>
    );
}
export default LoginForm