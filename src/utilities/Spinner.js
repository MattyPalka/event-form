import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

function Spinner(){
    return(
        <div className='d-flex justify-content-center align-items-center h-100'>
            <FontAwesomeIcon className='spinner' icon={faCircleNotch} spin size='4x'/>
        </div>
    )
}

export default Spinner