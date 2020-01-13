import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addUser } from '../../actions';
import { bindActionCreators } from 'redux';
// import { PropTypes } from 'prop-types';

export class Login extends Component{
    constructor() {
        super()
        this.state = {
            name: '',
            wizardType: '',
            house: ''
        }
    };

    handleName = (e) => {
        this.setState({name: e.target.value})
    };
    
    handleWizardType = (e) => {
      this.setState({[e.target.name]: e.target.value})
    };
    
    handleUser = () => {
        const { addUser } = this.props
        const user = {
            name: this.state.name,
            wizardType: this.state.wizardType,
            house: this.state.house
        };
        addUser(user)
        this.clearInputs();
    };

    clearInputs = () => {
        this.setState = ({
            name: '',
            wizardType: '',
            house: ''
        });
    };


    render() {
        const { user } = this.props;
        const house = user === undefined ? '' : user.house;
        let submitButton;

        if(this.state.name !== '' && this.wizardType !== '') {
          submitButton = (
             <button className='submit_button' 
                type='button' 
                onClick={this.handleUser}>Enter</button>
          )
        };
        
        return (
            <section className="login_main">
              <h1>Harry Potter</h1>
              <h2 className='login_witchcraft'>Witchcraft and Wizardry</h2>
            <form className='login_form'>
                <p className='login_msg'>Enter your name and select Witch or Wizard</p>
                    <input className='name_input' 
                        type='text' 
                        placeholder='Enter Name' 
                        onChange={this.handleName}/>
                <h2 className="wizardType_label">Witch or Wizard</h2>
                <div className='wizardType_buttons'>
                    <button className='wizardType_button'
                        type='button' 
                        name='wizardType' 
                        value='Witch'
                        onClick={this.handleWizardType}>Witch
                    </button>
                    <button className='wizardType_button'
                        type='button' 
                        name='wizardType' 
                        value='Wizard' 
                        onClick={this.handleWizardType}>Wizard
                    </button>
                </div>
                    <Link to='/houses' >
                        {submitButton}
                    </Link>
            </form>      
            </section>
        )
    }
};

export const mapStateToProps = ({ user }) => ({
    user
});

export const mapDispatchToProps = dispatch => {
    return bindActionCreators({ 
        addUser: user => dispatch( addUser(user) ) 
    }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);