import React, { useState} from 'react'

import DateTime from 'react-datetime'

import DOB from './DOB'
import Title from './Title'
import Location from './Location'
import FieldInput from './FieldInput'

const Home = () => {
    // Set the page of the survey that is being viewed
    const [showPage, setPage] = useState(0);

    return (
        <form action="/submit" method="POST">
        {showPage === 0 ?
            <div>
                <Title
                    title="title"
                    label="Title?"
                    value=""
                />
                <FieldInput
                    title="name"
                    label="Name?"
                    value="Jane Smith"
                />
                <DOB onChange={() => setPage(1)} />
            </div>
            :
            <div>
                <button onClick={() => setPage(0)}>Back</button>
                <Location />
                <DateTime
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
            </div>
            }
            

        </form>
    )
    
}

export default Home