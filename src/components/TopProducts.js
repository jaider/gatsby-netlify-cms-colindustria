import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const TopProducts = ({ items }) => (
  <section className="section text-section">
    <div className="container content">
      <h2 className="title has-text-centered">Maquinas de termofusion y electrofusion para pegar tuberia de polietileno y polipropileno</h2>
      <div className="columns is-multiline">
        {items.map(item => (
          <div key={item.title} className="column is-3">
            <section className="section has-text-centered">
              <h4 class="has-text-info">{item.title}</h4>
              <div>
                <PreviewCompatibleImage imageInfo={item} />
              </div>
              <a href={item.url} target="_self" class="button is-success"><strong>Comprar</strong></a>
            </section>
          </div>
        ))}
      </div>
    </div>
  </section>
)

TopProducts.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      url: PropTypes.string,
    })
  ),
  contentComponent: PropTypes.func
}

export default TopProducts;