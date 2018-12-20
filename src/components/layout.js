import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid, Menu } from 'semantic-ui-react'
import './layout.css'
import Header from './header'
import "./header.css"

import 'semantic-ui-less/semantic.less'
import { Link } from 'gatsby'

const LinkedItem = ({ children, ...props }) => (
  <Menu.Item as={Link} activeClassName='active' {...props}>{children}</Menu.Item>
)
require("./codeBlock.css")
require("prismjs/plugins/line-numbers/prism-line-numbers.css");

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          script={[{ 
            type: "text/javascript",
            innerHTML: 
              `window.$crisp=[];
              window.CRISP_WEBSITE_ID="8278682b-3856-4f8c-b251-2c99cf4bf09a";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);})();`}
    ]}
        />
        
        <Header siteTitle={data.site.siteMetadata.title} />
		
            <Container>

              <Grid>
              <Grid.Column mobile={12} tablet={3} computer={3}>
            <div className ="verticalLine"></div>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={3} computer={3}>
            <div className ="verticalLine"></div>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={3} computer={3}>
            <div className ="verticalLine"></div>
            </Grid.Column>
            <Grid.Column mobile={12} tablet={3} computer={3}>
            <div className ="verticalLine"></div>
            </Grid.Column>
            
            </Grid>

            


            {children}
            </Container>

           
              
            

       
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
