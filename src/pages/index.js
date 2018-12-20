import React from 'react'
import { Button, input, Grid, Form} from 'semantic-ui-react'
import Layout from '../components/layout'
import Greeting from '../components/greeting'
import Projects from './projects'

const IndexPage = ()  => (

  <Layout>
  
   <Grid>
   
   <Grid.Column mobile={12} tablet={3} computer={3}>
   </Grid.Column>
   
   <div class="rec-slant"><h1> 
    Design with Intent.
    </h1></div>
    </Grid>
    <Grid>
            <Grid.Column mobile={12} tablet={3} computer={3}>

        <Greeting />
            <p class="left">Currently looking for a full-time summer internship.<br></br> <br></br>
              Not able to currently accept long-term freelance projects. 
</p>
            

            </Grid.Column>

            <Grid.Column mobile={12} tablet={3} computer={3}>
             
            
    <p>

      Welcome to this humble Gatsby Semantic UI starter. It is a very thin layer
      on top of the regular Gatsby 2 starter. All that has been added is
      Semantic UI as the component library of choice.
      <Button size="tiny">Read More -></Button>

      <a class = "bodyLink" href="https://google.com" >test link</a>
    </p>
    

    <p>
      Welcome to this humble Gatsby Semantic UI starter. It is a very thin layer
      on top of the regular Gatsby 2 starter. All that has been added is
      Semantic UI as the component library of choice.
    </p>


     <div class="icon chart">
              <i></i>
              <i></i>
              <i></i>
            </div>
   
    </Grid.Column>
    <Grid.Column mobile={12} tablet={3} computer={3}>
    <p>
      Everything is pre-setup and ready to go. You can either use the default
      Semantic UI theme as it currently runs, or you can override all variables
      and make custom CSS changes in the <code>src/semantic/site</code> folder.
    </p>

     <p>
      Everything is pre-setup and ready to go. You can either use the default
      Semantic UI theme as it currently runs, or you can override all variables
      and make custom CSS changes in the <code>src/semantic/site</code> folder.
    </p>
    </Grid.Column>
    <Grid.Column mobile={12} tablet={3} computer={3}>
    <p>
      The folder contains all the standard settings of the default theme so you
      don't have to remember which variables are available.
    </p>
    <p>
      The folder contains all the standard settings of the default theme so you
      don't have to remember which variables are available.
    </p>


  
 
    </Grid.Column>
          </Grid>
  
  </Layout>
)

export default IndexPage
