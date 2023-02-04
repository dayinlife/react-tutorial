import React from 'react'

function Columns() {
    const items = []
    return (
        <React.Fragment>
            {
                items.map( item => {
                    <React.Fragment key = {item.key}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>     
                })
            }
            <td>Name</td>
            <td>Santosh Gurung</td>
        </React.Fragment>
    )
}

export default Columns
