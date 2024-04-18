import { useState } from 'react'
import './TextField.css'

const TextField = (props) => {
   
    const wenTypeInternal = (event) => {
        props.whenType(event.target.value)
    }

    return (
        <div className='text-field'>
            <label>{props.label}</label>
            <input value={props.value} onChange={wenTypeInternal} required={props.isEmpty} placeholder={props.placeholder} type="text" />
        </div>
    )
}

export default TextField