import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <h1 className="main-heading">
        <Link  to="/">
          {title}
        </Link>
      </h1>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      {/* <div className="blog-theme"></div> */}
      <div className="blog-content">
      <header className="global-header">{header}</header>
      <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
