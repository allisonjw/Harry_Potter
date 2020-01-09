import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <section className="login_main">
          <h1>Harry Potter</h1>
          <h2 className='login_witchcraft'>Witchcraft and Wizardry</h2>
                <Link to='/houses' ><button className='submit-btn'>Submit</button>
                </Link> 
        </section>
    )
};

export default Login;