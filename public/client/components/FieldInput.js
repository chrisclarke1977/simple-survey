import React from 'react'
/**
 * Field Input collection for the form
 */
const FieldInput = ({title, label, value, onChange}) => (
    <div>
        <label htmlFor={title}>{label}</label>
        <input name={title} id={title} value={value} onChange={() => onChange(this.EventTarget.value)} />
    </div>
)

export default FieldInput
