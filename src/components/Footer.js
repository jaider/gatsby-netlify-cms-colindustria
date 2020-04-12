import React from 'react'
import { Link } from 'gatsby'

import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-grey-dark">
        <div className="content has-background-grey-dark has-text-grey-light">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <section className="menu is-small">
                  <p class="menu-label">
                    ACERCA DE COLINDUSTRIA
                  </p>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/contacto/">
                        Donde Comprar?
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/inicio/">
                        Quienes Somos?
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/inicio/misionyvision/">
                        Mision y Vision
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/clientes-y-proveedores/">
                        Ser Distribuidor
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/clientes-y-proveedores/">
                        Trabaja con Nosotros
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/garantia-y-devoluciones/">
                        Politicas
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/wp-content/uploads/2018/04/Pol%C3%ADtica-de-Seguridad-Salud-y-Medio-Ambiente.pdf">
                        Informacion HSE
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section className="menu is-small">
                  <p class="menu-label">
                    PRODUCTOS
                  </p>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/todos-los-productos-colindustria/productos-de-termofusion/teoria-de-la-fusion-a-socket/">
                        Planchas de Termofusion
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/todos-los-productos-colindustria/productos-de-termofusion/">
                        Maquinas de Termofusion
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/todos-los-productos-colindustria/productos-de-termofusion/electrofusion/">
                        Equipos de Electrofusion
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="https://colindustria.com/todos-los-productos-colindustria/productos-de-termofusion/teoria-de-la-fusion-a-socket/herramientas-para-fusion-de-silleta/">
                        Equipos de Silleta
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="https://www.youtube.com/user/linpaol">
                        Videos e Instructivos
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section className="menu is-small">
                  <p class="menu-label">
                    CONTACTENOS
                  </p>
                  <ul>
                    <li>
                      <b>COLOMBIA Y SUR AMERICA</b><br />
                      comercial@colindustria.com<br />
                      Fijo +57 5 3161312<br />
                      Barranquilla, Colombia
                    </li>
                    <br />
                    <li>
                      <b>ESTADOS UNIDOS Y CANADA</b><br />
                      info@hayesindustrialsolutions.com<br />
                      Phone +1 9544198707<br />
                      South Carolina, 29803 Estados Unidos
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-3">
                <section className="menu is-small">
                  <p class="menu-label">
                    SUSCRIBETE
                  </p>
                  <p>Recibe descuentos y promociones</p>
                  <p>Join 920 other subscribers</p>
                  <p>
                    <input type="email" name="email" required="required" className="required input is-normal" value="" id="subscribe-field-blog_subscription-3" placeholder="Correo electronico" />
                  </p>
                  <p id="subscribe-submit">
                    <input type="hidden" name="action" value="subscribe"/>
                    <input type="hidden" name="source" value="https://colindustria.com/"/>
                    <input type="hidden" name="sub-type" value="widget"/>
                    <input type="hidden" name="redirect_fragment" value="blog_subscription-3"/>
                    <button type="submit" name="jetpack_subscriptions_widget" className="button is-primary">
                      Suscribete aqui                        
                    </button>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="content has-background-primary has-text-white-ter">
          <div className="container">
            <div className="columns">
              <div className="column is-3">
                <a href="https://www.sitefore.com" className="button is-small">Designed by&nbsp;<b>SITEFORE</b></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
