import React from 'react'
import Select from 'react-select'

/**
 * Location 
 */
const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Location  = ({title, label, value, onChange}) => (
    <div>
        <label htmlFor={title}>{label}</label>
        <Select
            name={title}
            id={title}
            options={options}
            value={value}
            onChange={() => onChange(this.EventTarget.value)}
        />
    </div>
)

export default Location