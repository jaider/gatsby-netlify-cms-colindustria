import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import shoppingCart from '../img/shopping/shopping-cart-solid.svg'
import { withPrefix } from 'gatsby'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={`${withPrefix('/')}img/colindustria-logo.png`} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered" style={{fontFamily:'Raleway', fontSize: '16px', fontWeight: '500'}}>
              <Link className="navbar-item" to="/about">
                Home
              </Link>
              <Link className="navbar-item" to="/products">
                Productos
              </Link>
              <Link className="navbar-item" to="/blog">
                Cotizar
              </Link>
              <Link className="navbar-item" to="/blog">
                Universidad
              </Link>
              <Link className="navbar-item" to="/contact">
                Cont&aacute;ctenos
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Mi Cuenta
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                <span class="icon is-medium">
                  <img src={shoppingCart} alt="shopping cart" />
                </span>
                0 Items
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
