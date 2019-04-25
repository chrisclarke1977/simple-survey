import React from 'react'
import DateTime from 'react-datetime'

/**
 * The date of birth input
 */

export default (<DateTime
    title="dateofbirth"
    label="Date of Birth?"
    value="22/04/2019"
    input
    onChange={() => setPage(1)}
/>)