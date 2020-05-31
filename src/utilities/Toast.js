import React from 'react'
import { Toast } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import toast from '../actions/toast'

function ToastMessage(props) {
    return (
        <Toast style={{
                position: 'absolute',
                top: 0,
                right: 0, 
                margin: 10}} show={props.toastData.isOpen} onClose={()=>{props.updateToast('', 'close')}}
                delay={5000} autohide>
            <Toast.Header closeButton={false}>
                <strong className="mr-auto">Notification</strong>   
            </Toast.Header>
            <Toast.Body>{props.toastData.message}</Toast.Body>
        </Toast>
    )
}

function mapStateToProps(state) {
    return {
        toastData: state.toast
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        updateToast: toast
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ToastMessage)