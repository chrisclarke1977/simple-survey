import React, {Component} from 'react'
import FieldInput from './FieldInput'

class Home extends Component {
    render () {
        return (
            <form action="/submit" method="POST">
                <FieldInput 
                    title="title"
                    label="Title?"
                    value=""
                />
                <FieldInput
                    title="name"
                    label="Name?"
                    value="Jane Smith"
                />
                <FieldInput
                    title="dateofbirth"
                    label="Date of Birth?"
                    value="22/04/2019"
                />
                <FieldInput                    
                    title="currentlocation"
                    label="Current Location?"
                    value="Earth"
                />
                <FieldInput
                    title="currentdatetime"
                    label="Current Date/Time?"
                    value="22/04/2019"
                />
                <FieldInput
                    title="feedback"
                    label="User Feedback?"
                    value="What did you think..."
                />
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
}

export default Home