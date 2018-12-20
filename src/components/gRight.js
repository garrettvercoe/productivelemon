import React from 'react'
import { Grid } from 'semantic-ui-react'
import "./layout.css"


const gLeft = ({children}) => {
    return <Grid.Column mobile={16} tablet={12} computer={12}>
            {children}
            </Grid.Column>
    }



export default gLeft
