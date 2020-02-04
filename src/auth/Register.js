import React from 'react'
import axios from 'axios'

export default class Register extends React.Component {
state = {
  fields: {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
}

  handleChange = e => {
    const fields = { ...this.state.fields, [e.target.name]: e.target.value } 
    this.setState({ fields })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios.post('/api/register', this.state.fields)
      this.props.history.push('/login')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    console.log(this.state.fields)
    return (
      <div className="fact">
        <form 
          onSubmit={this.handleSubmit}
        >
          <h2>Register to Comment</h2>
          <div className="form-div">
            <label>Username:</label>
            <input
              onChange={this.handleChange} 
              placeholder="username"
              name="username" />
          </div>
          <div className="form-div">
            <label>Email:</label>
            <input
              onChange={this.handleChange} 
              type="email" 
              placeholder="email"
              name="email" />
          </div>
          <div className="form-div">
            <label>Password:</label>
            <input
              onChange={this.handleChange} 
              type="password" 
              placeholder="password"
              name="password" />
          </div>
          <div className="form-div">
            <label>Confirm Password:</label>
            <input
              onChange={this.handleChange} 
              type="password" 
              placeholder="confirm password"
              name="confirmPassword" />
          </div>
          <div className="button-div">
            <button
              className="button" 
              type="submit">
              Register</button>
          </div>
        </form>
      </div>
    )
  }
}

{/* <h1>Register Page is a Work in progress</h1>
    <img src="https://media3.giphy.com/media/toXKzaJP3WIgM/giphy.gif?cid=790b76119cc2ab1094dd1729a56d5cbc9c88f60e387b5360&rid=giphy.gif" /> */}