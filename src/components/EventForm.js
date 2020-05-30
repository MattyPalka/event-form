import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import updateForm from '../actions/updateForm'
import axios from 'axios'

class EventForm extends Component {
    state={
        validationOK: false
    }

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

    handleNameChange = (e) => {
        this.props.updateForm(e.target.value, 'name')
    }

    handleSurnameChange = (e) => {
        this.props.updateForm(e.target.value, 'surname')
    }

    handleEmailChange = (e) => {
        this.props.updateForm(e.target.value, 'email')
    }

    handleDateChange = (e) => {
        this.props.updateForm(e.target.value, 'date')
    }

    componentDidUpdate(){
        
        let name = document.querySelector('#validationName')
        console.log(name.value.match(/\d/g))
        if(name.value.match(/\d/g) !== null || name.value.length < 2) {
            name.classList.remove('is-valid')
            name.classList.add('is-invalid')
        } else {
            name.classList.remove('is-invalid')
            name.classList.add('is-valid')
        }
        
        let surname = document.querySelector('#validationSurname')
        if(surname.value.match(/\d/g) !== null || surname.value.length < 2) {
            surname.classList.remove('is-valid')
            surname.classList.add('is-invalid')
        } else {
            surname.classList.remove('is-invalid')
            surname.classList.add('is-valid')
        }

        let email = document.querySelector('#validationEmail')
        email.classList.add('is-invalid')

        let date = document.querySelector('#validationDate')
        date.classList.add('is-invalid')
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
                                    <input type="text" className="form-control" id="validationName" onChange={this.handleNameChange} defaultValue={this.props.formData.name} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="validationSurname">Last name</label>
                                    <input type="text" className="form-control" id="validationSurname" onChange={this.handleSurnameChange} defaultValue={this.props.formData.surname} required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="validationEmail">Email</label>
                                    <input type="email" className="form-control" id="validationEmail" onChange={this.handleEmailChange} defaultValue={this.props.formData.email} required />
                                    <div className="invalid-feedback">
                                        Please provide a valid email adress.
                                    </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-md-12 mb-3">
                                    <label htmlFor="validationDate">Date</label>
                                    <input type='date' className="form-control" id="validationDate" onChange={this.handleDateChange} value={this.props.formData.date} required />
                                    <div className="invalid-feedback">
                                        Please provide future date.
                                    </div>
                                </div>

                            </div>


                            <button className="btn btn-primary" type="submit" disabled={!this.state.validationOK}>Submit application</button>
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