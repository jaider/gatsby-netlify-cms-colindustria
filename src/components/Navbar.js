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
              <img src={`${withPrefix('/')}img/colindustria-logo.png`} alt="Colindustria" style={{ width: '188px', height: '62px', maxHeight: 'none' }} />
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
            <div className="navbar-end has-text-centered" style={{fontFamily:'Raleway', fontSize: '16px', fontWeight: '500'}}>
              <div class="navbar-item has-dropdown is-hoverable">
                <Link className="navbar-link is-arrowless" to="/about">
                  Home
                </Link>
                <div class="navbar-dropdown is-right">
                  <Link className="navbar-item" to="/about">
                    Quienes somos?
                  </Link>
                  <Link className="navbar-item" to="/about">
                    Misión y Visión
                  </Link>
                  <Link className="navbar-item" to="/about">
                    Terceros
                  </Link>
                  <Link className="navbar-item" to="/about">
                    POLITICAS
                  </Link>
                  <Link className="navbar-item" to="/about">
                    INFORMACION HSE
                  </Link>
                </div>
              </div>
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
              <span class="navbar-item">
                <a class="button is-primary is-inverted">
                  <span class="icon">
                    <img src={shoppingCart} alt="shopping cart" />
                  </span>
                  <span>0 items</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
