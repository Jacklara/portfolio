import React, { Component } from 'react';
import './Contact.css'

// eslint-disable-next-line
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};
const countErrors = (errors) => {
  let count = 0;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (count = count+1)
  );
  return count;
}

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          formValid: false,
          errorCount: null,
          errors: {
            name: '',
            email: '',
            questions: ''
          }
        };
    
      };
    
      handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        let errors = this.state.errors;
    
        switch (name) {
          case 'name':
            errors.name = value.length < 1 ? 'Please include a name' : '';
            break;
          case 'email': 
            errors.email = validEmailRegex.test(value) ? '' : 'Email is not valid!';  
            break;
          case 'questions':
              errors.questions = value.length < 8 ? 'Please submit questions or comments' : '';
            break;
          default:
            break;
        }
        this.setState({errors, [name]: value});
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
        this.setState({formValid: validateForm(this.state.errors)});
        this.setState({errorCount: countErrors(this.state.errors)});
      }

    render() {
        const {errors, formValid} = this.state;
        return (
            <div className="formpage">
                <form onSubmit={this.handleSubmit} noValidate>
                <label> Name </label>
                    <input required type="text" placeholder="Your name" name='name' onChange={this.handleChange} noValidate />
                    {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
                    <br />
                <label> Email </label>
                    <input required type="Email" placeholder="jane@gmail.com" name='email' onChange={this.handleChange} noValidate/>
                    {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                <br />
                <label> Questions </label>
                    <input type="textarea" placeholder="Thank you for your questions" name='questions' onChange={this.handleChange} noValidate/>
                    {errors.questions.length > 0 && <span className='error'>{errors.questions}</span>}
                <br />
                <input type="submit" value="Submit" />
                {this.state.errorCount !== null ? <p className="form-status"> {formValid ? 'Thank you' : 'Form invalid'}</p> : ''}
            </form>
        </div>
        )
    }
}

export default Contact