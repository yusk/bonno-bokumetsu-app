import React from 'react'
import Header from './Header'

const Layout: React.FC = (props) => (
  <div id="root" className="jk">
    <Header />
    <main>{props.children}</main>
  </div>
)

export default Layout
