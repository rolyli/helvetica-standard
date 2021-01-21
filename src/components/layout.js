/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
      <div>
        {children}
      </div>
  )
}

export default Layout
