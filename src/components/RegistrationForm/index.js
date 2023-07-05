// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    errorFirstname: '',
    errorLastname: '',
    submit: false,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({errorFirstname: 'Required', errorLastname: 'Required'})
    } else if (firstName === '') {
      this.setState({errorFirstname: 'Required'})
    } else if (lastName === '') {
      this.setState({errorLastname: 'Required'})
    } else {
      console.log('ok valid form')
      this.setState({submit: true})
    }
  }

  onFirstName = event => {
    const firstNameValue = event.target.value

    if (firstNameValue !== '') {
      this.setState({firstName: firstNameValue, errorFirstname: ''})
    } else {
      this.setState({errorFirstname: 'Required'})
    }
  }

  onLastName = event => {
    const firstNameValue = event.target.value

    if (firstNameValue !== '') {
      this.setState({lastName: firstNameValue, errorLastname: ''})
    } else {
      this.setState({errorLastname: 'Required'})
    }
  }

  anotherResponse = () => this.setState({submit: false})

  submitSuccess = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.anotherResponse}>
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {errorFirstname, errorLastname, submit} = this.state
    return (
      <div>
        <h1>Registration</h1>
        <div>
          {submit ? (
            this.submitSuccess()
          ) : (
            <form onSubmit={this.submitForm}>
              <label htmlFor="firstName">FIRST NAME</label>
              <br />
              <input
                id="firstName"
                type="text"
                placeholder="FIRST NAME"
                onBlur={this.onFirstName}
              />
              <p>{errorFirstname}</p>
              <br />
              <label htmlFor="lastName">LAST NAME</label>

              <br />
              <input
                id="lastName"
                type="text"
                placeholder="LAST NAME"
                onBlur={this.onLastName}
              />
              <p>{errorLastname}</p>
              <br />
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
