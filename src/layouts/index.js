import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Container, Grid, Menu } from 'semantic-ui-react'
import './layout.css'
import Header from '../components/header'
import Footer from '../components/footer'
import 'semantic-ui-less/semantic.less'
import { Link } from 'gatsby'
import Transition from '../components/animation'

require('../components/codeBlock.css')
require('prismjs/plugins/line-numbers/prism-line-numbers.css')

const Layout = ({ children, data, location }) => (
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
            {
              name: 'description',
              content:
                'A curation of tools, tips, and tricks for maximizing your productivity in life.',
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
          script={[
            {
              type: 'text/javascript',
              innerHTML: `window.$crisp=[];
              window.CRISP_WEBSITE_ID="8278682b-3856-4f8c-b251-2c99cf4bf09a";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);})();`,
            },
          ]}
        />
        <div className="site">
          <Header siteTitle={data.site.siteMetadata.title} />

          <div className="site-content">
            <Container>
              <Transition location={location}>{children}</Transition>
            </Container>
          </div>

          <div class="footer-back">
            <Container>
              <Grid>
                <Grid.Column mobile={12} tablet={3} computer={3} />
                <Grid.Column mobile={12} tablet={9} computer={9}>
                  <Footer />
                </Grid.Column>
              </Grid>
            </Container>
          </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
