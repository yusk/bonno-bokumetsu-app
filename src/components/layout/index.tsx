/* eslint-disable react/destructuring-assignment */
import React from 'react'

const Layout: React.FC = (props) => (
  <div id="root" className="bouno-bokumetsu-app force-mobile">
    <main>{props.children}</main>
  </div>
)

export default Layout
