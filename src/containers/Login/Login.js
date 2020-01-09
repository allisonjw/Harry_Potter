import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export const Login = () => {
    return (
        <div>
          <h1>Harry Potter</h1>
          <h2 className='login_witchcraft'>Witchcraft and Wizardry</h2>
            <section> 
                <Link to='/houses' ><button className='submit-btn'>Submit</button>
                </Link> 
            </section>
        </div>
    )
};

export default Login;