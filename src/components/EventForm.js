import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import updateForm from '../actions/updateForm'
import axios from 'axios'

class EventForm extends Component {

    formSubmitted = (e) => {
        e.preventDefault()
        axios.post('/api/storeEvent', {
            name: this.props.formData.name,
            surname: this.props.formData.surname,
            email: this.props.formData.email,
            date: this.props.formData.date
        }).then((res) => {
            console.log(res.data)
        })
    }

    validateForm() {
        let name = document.querySelector('#validationName')
        let nameValidated = false
        if (name.value.match(/\d/g) !== null || name.value.length < 2) {
            name.classList.remove('is-valid')
            name.classList.add('is-invalid')
            nameValidated = false
        } else {
            name.classList.remove('is-invalid')
            name.classList.add('is-valid')
            nameValidated = true
        }

        let surname = document.querySelector('#validationSurname')
        let surnameValidated = false
        if (surname.value.match(/\d/g) !== null || surname.value.length < 2) {
            surname.classList.remove('is-valid')
            surname.classList.add('is-invalid')
            surnameValidated = false
        } else {
            surname.classList.remove('is-invalid')
            surname.classList.add('is-valid')
            surnameValidated = true
        }

        let email = document.querySelector('#validationEmail')
        let emailValidated = false
        if (email.value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) === null) {
            email.classList.remove('is-valid')
            email.classList.add('is-invalid')
            emailValidated = false
        } else {
            email.classList.remove('is-invalid')
            email.classList.add('is-valid')
            emailValidated = true
        }

        let date = document.querySelector('#validationDate')
        let dateValidated = false
        if (!(Date.parse(date.value) > Date.now() - 86400000)) {
            date.classList.remove('is-valid')
            date.classList.add('is-invalid')
            dateValidated = false
        } else {
            date.classList.remove('is-invalid')
            date.classList.add('is-valid')
            dateValidated = true
        }

        if (nameValidated && surnameValidated && emailValidated && dateValidated) {
            return true
        } 
        return false
    }

    componentDidUpdate(prevProps) {
        const validated = this.validateForm()
        if (prevProps.formData.validated !== validated){
            this.props.updateForm(validated, 'validated')
        }
    }

    render() {

        return (
            <div className='event-form'>
                <div className='row'>
                    <div className='col-sm-12 justify-content-center'>
                        <h2>Submit Application for Event</h2>
                    </div>
                    <div className='col-sm-12 d-flex justify-content-center'>

                        <form className="validation" onSubmit={this.formSubmitted} noValidate={true}>
                            <div className="form-row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationName">First name</label>
                                    <input type="text" className="form-control" id="validationName" onChange={(e) => { this.props.updateForm(e.target.value, 'name') }} value={this.props.formData.name} required />
                                    <div className="invalid-feedback">
                                        Provide your first name.
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationSurname">Last name</label>
                                    <input type="text" className="form-control" id="validationSurname" onChange={(e) => { this.props.updateForm(e.target.value, 'surname') }} value={this.props.formData.surname} required />
                                    <div className="invalid-feedback">
                                        Provide your last name
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="validationEmail">Email</label>
                                    <input type="email" className="form-control" id="validationEmail" onChange={(e) => { this.props.updateForm(e.target.value, 'email') }} value={this.props.formData.email} required />
                                    <div className="invalid-feedback">
                                        Please provide a valid email adress.
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="validationDate">Date</label>
                                    <input type='date' className="form-control" id="validationDate" onChange={(e) => { this.props.updateForm(e.target.value, 'date') }} value={this.props.formData.date} required />
                                    <div className="invalid-feedback">
                                        Please provide future date.
                                    </div>
                                </div>

                            </div>
                            <button className="btn btn-primary" type="submit" disabled={!this.props.formData.validated}>Submit application</button>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

function mapStateToProps(state) {
    return {
        formData: state.eventForm
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateForm: updateForm
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventForm)