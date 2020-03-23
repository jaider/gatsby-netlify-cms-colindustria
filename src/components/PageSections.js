import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import LazyYoutube from "./LazyYoutube"; 
import { HTMLContent } from '../components/Content'

import remark from 'remark';
import recommended from 'remark-preset-lint-recommended';
import remarkHtml from 'remark-html';

const ImageView = ({ resize, imageSrc, title }) =>
  resize !== 'none' ? (
    <figure className={classNames("image", "lazyimage", resize)}>
      <img src={imageSrc} alt={title} />
    </figure>
  ) : (
    <center>
      <img src={imageSrc} alt={title} />
    </center>
  );

const PageSections = ({ items, contentComponent }) => (
  <>
    {items.map((item, i) => (
      <PageSection key={i} {...item} contentComponent={contentComponent} index={i} />
    ))}
  </>
)

PageSections.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      youtubeId: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
    })
  ),
  contentComponent: PropTypes.func
}

export const PageSection = (props) => 
{
  const { title, description, align, contentSize, imageResize, youtubeId, image, contentComponent, index } = props;
  const descriptionHtml = remark()
    .use(recommended)
    .use(remarkHtml)
    .processSync(description).toString();
  const PageContent = contentComponent || HTMLContent; // TODO: fix it later. should be Content but preview is not working
  const imageSrc = !!image && !!image.childImageSharp ? image.childImageSharp.fluid.src : image;
  const whiteOrGray = index % 2 !== 0  ? "has-background-white" : "has-background-light";
  const columnSize = contentSize !== 'is-full' ? contentSize : '';
  const columsClass = contentSize !== 'is-full' ? 'columns' : '';
  console.log(props);
  return (
    <section className={classNames("section", whiteOrGray)}>
      <div className="container">
        <h1 className="title has-text-centered">{title}</h1>
        <div className={columsClass}>
          {align === 'left' && <PageContent className={classNames("column", columnSize, "content")} content={descriptionHtml} />}
          <div className="column">
              {!!youtubeId 
                  ? <figure className={classNames("image", "lazyimage", "is-16by9")}><LazyYoutube url={youtubeId} /></figure>
                  : <ImageView resize={imageResize} imageSrc={imageSrc} title={title} />}
          </div>
          {align !== 'left' && <PageContent className={classNames("column", columnSize, "content")} content={descriptionHtml} />}
        </div>
      </div>
    </section>
  )
};

PageSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  align: PropTypes.string,
  contentSize: 'is-two-thirds' | 'is-half' | 'is-one-third' | 'is-full',
  imageResize: 'none' | 'is-square' | 'is-5by4' | 'is-4by3' | 'is-3by2' | 'is-16by9',
  youtubeId: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  contentComponent: PropTypes.func,
  index: PropTypes.number
}

export default PageSections
