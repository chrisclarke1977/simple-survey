import React from 'react'
import Select from 'react-select'

/**
 * Title field 
 */
const options = [
    { value: "Mr.", label : "Mr." }, 
    { value: "Mrs.", label : "Mrs." }, 
    { value: "Miss", label : "Miss" }, 
    { value: "Dr.", label : "Dr." }, 
    { value: "Ms.", label : "Ms." }, 
    { value: "Prof.", label : "Prof." }, 
    { value: "Rev.", label : "Rev." }, 
    { value: "Lady", label : "Lady" }, 
    { value: "Sir", label : "Sir" }, 
    { value: "Capt.", label : "Capt." }, 
    { value: "Major", label : "Major" }, 
    { value: "Lt.-Col.", label : "Lt.-Col." }, 
    { value: "Col.", label : "Col." }, 
    { value: "Lady", label : "Lady" }, 
    { value: "Lt.-Cmdr.", label : "Lt.-Cmdr." }, 
    { value: "The Hon.", label : "The Hon." }, 
    { value: "Cmdr.", label : "Cmdr." }, 
    { value: "Flt. Lt.", label : "Flt. Lt." }, 
    { value: "Brgdr.", label : "Brgdr." }, 
    { value: "Judge", label : "Judge" }, 
    { value: "Lord", label : "Lord" }, 
    { value: "The Hon. Mrs", label : "The Hon. Mrs" }, 
    { value: "Wng. Cmdr.", label : "Wng. Cmdr." }, 
    { value: "Group Capt.", label : "Group Capt." }, 
    { value: "Rt. Hon. Lord", label : "Rt. Hon. Lord" }, 
    { value: "Revd. Father", label : "Revd. Father" }, 
    { value: "Revd Canon", label : "Revd Canon" }, 
    { value: "Maj.-Gen.", label : "Maj.-Gen." }, 
    { value: "Air Cdre.", label : "Air Cdre." }, 
    { value: "Viscount", label : "Viscount" }, 
    { value: "Dame", label : "Dame" }, 
    { value: "Rear Admrl.", label : "Rear Admrl." }
]

const Title  = ({title, label, value, onChange}) => (
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

export default Title